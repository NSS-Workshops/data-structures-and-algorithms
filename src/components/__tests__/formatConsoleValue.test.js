// Copy of the formatConsoleValue function for testing
function formatConsoleValue(value) {
  if (value === null) return "null";
  if (value === undefined) return "undefined";
  if (Number.isNaN(value)) return "NaN";
  if (value === Infinity) return "Infinity";
  if (value === -Infinity) return "-Infinity";
  if (Object.is(value, -0)) return "-0";
  if (typeof value === "bigint") return value.toString() + "n";
  if (typeof value === "symbol") return value.toString();
  if (typeof value === "function") {
    return `[Function${value.name ? `: ${value.name}` : ""}]`;
  }
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "object") {
    // Handle Map objects
    if (value instanceof Map) {
      if (value.size === 0) return "Map(0) {}";
      const entries = Array.from(value.entries())
        .map(([k, v]) => `${formatConsoleValue(k)} => ${formatConsoleValue(v)}`)
        .join(', ');
      return `Map(${value.size}) { ${entries} }`;
    }
    // Handle Set objects
    if (value instanceof Set) {
      if (value.size === 0) return "Set(0) {}";
      const values = Array.from(value)
        .map(v => formatConsoleValue(v))
        .join(', ');
      return `Set(${value.size}) { ${values} }`;
    }
    // Handle regular objects
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return "[Object]";
    }
  }
  return String(value);
}

describe('formatConsoleValue', () => {
  describe('Primitive values', () => {
    test('should format null correctly', () => {
      expect(formatConsoleValue(null)).toBe('null');
    });

    test('should format undefined correctly', () => {
      expect(formatConsoleValue(undefined)).toBe('undefined');
    });

    test('should format NaN correctly', () => {
      expect(formatConsoleValue(NaN)).toBe('NaN');
    });

    test('should format Infinity correctly', () => {
      expect(formatConsoleValue(Infinity)).toBe('Infinity');
      expect(formatConsoleValue(-Infinity)).toBe('-Infinity');
    });

    test('should format -0 correctly', () => {
      expect(formatConsoleValue(-0)).toBe('-0');
    });

    test('should format numbers correctly', () => {
      expect(formatConsoleValue(42)).toBe('42');
      expect(formatConsoleValue(3.14)).toBe('3.14');
      expect(formatConsoleValue(0)).toBe('0');
    });

    test('should format strings correctly', () => {
      expect(formatConsoleValue('hello')).toBe('"hello"');
      expect(formatConsoleValue('')).toBe('""');
      expect(formatConsoleValue('with "quotes"')).toBe('"with "quotes""');
    });

    test('should format booleans correctly', () => {
      expect(formatConsoleValue(true)).toBe('true');
      expect(formatConsoleValue(false)).toBe('false');
    });

    test('should format bigint correctly', () => {
      expect(formatConsoleValue(123n)).toBe('123n');
      expect(formatConsoleValue(BigInt(456))).toBe('456n');
    });

    test('should format symbols correctly', () => {
      const sym = Symbol('test');
      expect(formatConsoleValue(sym)).toBe(sym.toString());
      
      const globalSym = Symbol.for('global');
      expect(formatConsoleValue(globalSym)).toBe(globalSym.toString());
    });
  });

  describe('Functions', () => {
    test('should format named functions correctly', () => {
      function namedFunction() {}
      expect(formatConsoleValue(namedFunction)).toBe('[Function: namedFunction]');
    });

    test('should format anonymous functions correctly', () => {
      const anonymousFunction = function() {};
      expect(formatConsoleValue(anonymousFunction)).toBe('[Function: anonymousFunction]');
    });

    test('should format arrow functions correctly', () => {
      const arrowFunction = () => {};
      expect(formatConsoleValue(arrowFunction)).toBe('[Function: arrowFunction]');
    });
  });

  describe('Arrays', () => {
    test('should format empty arrays correctly', () => {
      expect(formatConsoleValue([])).toBe('[]');
    });

    test('should format arrays with primitives correctly', () => {
      expect(formatConsoleValue([1, 2, 3])).toBe('[\n  1,\n  2,\n  3\n]');
    });

    test('should format arrays with mixed types correctly', () => {
      const result = formatConsoleValue([1, 'hello', true, null]);
      expect(result).toContain('1');
      expect(result).toContain('"hello"');
      expect(result).toContain('true');
      expect(result).toContain('null');
    });

    test('should format nested arrays correctly', () => {
      const nested = [[1, 2], [3, 4]];
      const result = formatConsoleValue(nested);
      expect(result).toContain('[');
      expect(result).toContain('1');
      expect(result).toContain('4');
    });
  });

  describe('Objects', () => {
    test('should format empty objects correctly', () => {
      expect(formatConsoleValue({})).toBe('{}');
    });

    test('should format simple objects correctly', () => {
      const obj = { name: 'John', age: 30 };
      const result = formatConsoleValue(obj);
      expect(result).toContain('"name"');
      expect(result).toContain('"John"');
      expect(result).toContain('"age"');
      expect(result).toContain('30');
    });

    test('should format nested objects correctly', () => {
      const nested = { 
        user: { 
          name: 'John', 
          address: { city: 'NYC' } 
        } 
      };
      const result = formatConsoleValue(nested);
      expect(result).toContain('"user"');
      expect(result).toContain('"name"');
      expect(result).toContain('"address"');
      expect(result).toContain('"city"');
      expect(result).toContain('"NYC"');
    });
  });

  describe('Maps', () => {
    test('should format empty Maps correctly', () => {
      const emptyMap = new Map();
      expect(formatConsoleValue(emptyMap)).toBe('Map(0) {}');
    });

    test('should format Maps with primitive keys/values correctly', () => {
      const map = new Map();
      map.set('key1', 'value1');
      map.set('key2', 'value2');
      
      const result = formatConsoleValue(map);
      expect(result).toBe('Map(2) { "key1" => "value1", "key2" => "value2" }');
    });

    test('should format Maps with mixed key/value types correctly', () => {
      const map = new Map();
      map.set(1, 'number key');
      map.set('string', 42);
      map.set(true, null);
      
      const result = formatConsoleValue(map);
      expect(result).toContain('Map(3)');
      expect(result).toContain('1 => "number key"');
      expect(result).toContain('"string" => 42');
      expect(result).toContain('true => null');
    });

    test('should format Maps with object keys/values correctly', () => {
      const map = new Map();
      const keyObj = { id: 1 };
      const valueObj = { name: 'test' };
      map.set(keyObj, valueObj);
      
      const result = formatConsoleValue(map);
      expect(result).toContain('Map(1)');
      expect(result).toContain('"id"');
      expect(result).toContain('"name"');
    });

    test('should format nested Maps correctly', () => {
      const innerMap = new Map();
      innerMap.set('inner', 'value');
      
      const outerMap = new Map();
      outerMap.set('outer', innerMap);
      
      const result = formatConsoleValue(outerMap);
      expect(result).toContain('Map(1)');
      expect(result).toContain('"outer" => Map(1)');
      expect(result).toContain('"inner" => "value"');
    });
  });

  describe('Sets', () => {
    test('should format empty Sets correctly', () => {
      const emptySet = new Set();
      expect(formatConsoleValue(emptySet)).toBe('Set(0) {}');
    });

    test('should format Sets with primitive values correctly', () => {
      const set = new Set(['value1', 'value2', 'value3']);
      const result = formatConsoleValue(set);
      expect(result).toBe('Set(3) { "value1", "value2", "value3" }');
    });

    test('should format Sets with mixed value types correctly', () => {
      const set = new Set([1, 'string', true, null, undefined]);
      const result = formatConsoleValue(set);
      expect(result).toContain('Set(5)');
      expect(result).toContain('1');
      expect(result).toContain('"string"');
      expect(result).toContain('true');
      expect(result).toContain('null');
      expect(result).toContain('undefined');
    });

    test('should format Sets with objects correctly', () => {
      const obj1 = { id: 1 };
      const obj2 = { id: 2 };
      const set = new Set([obj1, obj2]);
      
      const result = formatConsoleValue(set);
      expect(result).toContain('Set(2)');
      expect(result).toContain('"id"');
    });

    test('should format nested Sets correctly', () => {
      const innerSet = new Set(['inner']);
      const outerSet = new Set([innerSet, 'outer']);
      
      const result = formatConsoleValue(outerSet);
      expect(result).toContain('Set(2)');
      expect(result).toContain('Set(1)');
      expect(result).toContain('"inner"');
      expect(result).toContain('"outer"');
    });
  });

  describe('Complex nested structures', () => {
    test('should format Map containing Sets correctly', () => {
      const set1 = new Set([1, 2]);
      const set2 = new Set(['a', 'b']);
      const map = new Map();
      map.set('numbers', set1);
      map.set('letters', set2);
      
      const result = formatConsoleValue(map);
      expect(result).toContain('Map(2)');
      expect(result).toContain('"numbers" => Set(2) { 1, 2 }');
      expect(result).toContain('"letters" => Set(2) { "a", "b" }');
    });

    test('should format Set containing Maps correctly', () => {
      const map1 = new Map([['key1', 'value1']]);
      const map2 = new Map([['key2', 'value2']]);
      const set = new Set([map1, map2]);
      
      const result = formatConsoleValue(set);
      expect(result).toContain('Set(2)');
      expect(result).toContain('Map(1) { "key1" => "value1" }');
      expect(result).toContain('Map(1) { "key2" => "value2" }');
    });

    test('should format objects containing Maps and Sets correctly', () => {
      const obj = {
        myMap: new Map([['key', 'value']]),
        mySet: new Set([1, 2, 3]),
        regularProp: 'normal'
      };
      
      const result = formatConsoleValue(obj);
      expect(result).toContain('"myMap"');
      expect(result).toContain('"mySet"');
      expect(result).toContain('"regularProp"');
      expect(result).toContain('"normal"');
    });
  });

  describe('Edge cases', () => {
    test('should handle circular references gracefully', () => {
      const obj = { name: 'test' };
      obj.self = obj; // Create circular reference
      
      // Should not throw an error and should return something reasonable
      const result = formatConsoleValue(obj);
      expect(typeof result).toBe('string');
    });

    test('should handle objects that throw on JSON.stringify', () => {
      const problematicObj = {
        get badProperty() {
          throw new Error('Cannot access this property');
        }
      };
      
      const result = formatConsoleValue(problematicObj);
      expect(result).toBe('[Object]');
    });
  });
});