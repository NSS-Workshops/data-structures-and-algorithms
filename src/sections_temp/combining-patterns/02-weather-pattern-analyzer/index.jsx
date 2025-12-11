import { CodeExercise } from "@nss-workshops/nss-core";

const starterCode = `
// TODO: Implement WeatherPatternAnalyzer using Map and Set
// A station experiences a "significant change" if |curr - prev| >= 5

class WeatherPatternAnalyzer {
  constructor() {
    // this.stations: Map<string, { latestTemp: number, count: number }>
    // this.significant: Set<string>
    this.stations = new Map();
    this.significant = new Set();
  }

  addTemperatureReading(stationId, temperature) {
    // TODO
  }

  getSignificantChangeStations() {
    // TODO
    return [];
  }

  getStationData(stationId) {
    // TODO
    return null;
  }

  getAllActiveStations() {
    // TODO
    return new Set();
  }

  getSystemSummary() {
    // TODO
    return { stationCount: 0, significantCount: 0 };
  }
}
`;

const solution = `
// Reference Solution
class WeatherPatternAnalyzer {
  constructor() {
    this.stations = new Map(); // id -> { latestTemp, count }
    this.significant = new Set();
  }

  addTemperatureReading(stationId, temperature) {
    const rec = this.stations.get(stationId);
    if (!rec) {
      this.stations.set(stationId, { latestTemp: temperature, count: 1 });
      return;
    }
    const diff = Math.abs(temperature - rec.latestTemp);
    if (diff >= 5) this.significant.add(stationId);
    rec.latestTemp = temperature;
    rec.count += 1;
    this.stations.set(stationId, rec);
  }

  getSignificantChangeStations() {
    return Array.from(this.significant).sort();
  }

  getStationData(stationId) {
    return this.stations.get(stationId) ?? null;
  }

  getAllActiveStations() {
    return new Set(this.stations.keys());
  }

  getSystemSummary() {
    return {
      stationCount: this.stations.size,
      significantCount: this.significant.size,
    };
  }
}
`;

const tests = [
  {
    name: "Test WeatherPatternAnalyzer basic functionality",
    test: (code) => {
      try {
        const testCode = code + `
        // Test WeatherPatternAnalyzer
        const analyzer = new WeatherPatternAnalyzer();
        
        // Add readings
        analyzer.addTemperatureReading('STATION_001', 20); // Initial reading
        analyzer.addTemperatureReading('STATION_001', 15); // 5 degree change (significant)
        analyzer.addTemperatureReading('STATION_002', 25); // Initial reading
        analyzer.addTemperatureReading('STATION_002', 26); // 1 degree change (not significant)
        
        const significantStations = analyzer.getSignificantChangeStations();
        const station1Data = analyzer.getStationData('STATION_001');
        const activeStations = analyzer.getAllActiveStations();
        const summary = analyzer.getSystemSummary();
        
        return {
          significantStations: significantStations,
          station1Data: station1Data,
          activeStations: activeStations,
          summary: summary,
          hasSignificantChange: significantStations.includes('STATION_001'),
          correctStationCount: activeStations.size === 2
        };
        `;
        
        const result = new Function(testCode)();
        
        if (!result.hasSignificantChange) {
          return { passed: false, message: "Significant temperature change detection not working" };
        }
        
        if (!result.correctStationCount) {
          return { passed: false, message: "Should track 2 active stations" };
        }
        
        if (!result.station1Data || result.station1Data.latestTemp !== 15) {
          return { passed: false, message: "Station data tracking not working" };
        }
        
        return { passed: true };
      } catch (error) {
        return { passed: false, message: error.message };
      }
    },
    message: "WeatherPatternAnalyzer should detect significant temperature changes and track station data."
  },
];

export default function WeatherPatternAnalyzer() {
  return (
    <CodeExercise
      starterCode={starterCode}
      solution={solution}
      tests={tests}
    />
  );
}