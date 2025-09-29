import { useAutoGradeQuiz } from "@nss-workshops/nss-core";

export const mapsAndSetsCheckpointChapter = {
  id: 'maps-and-sets-checkpoint',
  title: 'Checkpoint: Maps and Sets',
  sectionId: 'maps-and-sets',
  previousChapterId: 'maps-and-sets-glossary',
  content: `
## Quiz: Maps and Sets

Test your understanding of Maps and Sets data structures, their implementations, performance characteristics, and real-world applications.
`,
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();
        
        return (
          <main>
            <form className="auto-graded-quiz">
              
              <div className="question" data-answer="3">
                <p>What will be the size of this Set after all operations?</p>
                <pre><code className="language-javascript">{`const mySet = new Set();

mySet.add("apple");
mySet.add("banana");
mySet.add("apple");   // duplicate
mySet.add("cherry");
mySet.add("banana");  // duplicate

console.log(mySet.size);`}</code></pre>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The Set will have a size of <strong>3</strong>. Sets automatically prevent duplicates, so even though &quot;apple&quot; and &quot;banana&quot; are added twice, they only appear once in the Set. The final Set contains: apple, banana, cherry.
                </div>
              </div>

              <div className="question" data-answer="third">
                <p>What value will be logged when the same key is set multiple times in a Map?</p>
                <pre><code className="language-javascript">{`const myMap = new Map();

myMap.set("status", "first");
myMap.set("status", "second");
myMap.set("status", "third");

console.log(myMap.get("status"));`}</code></pre>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The output will be <strong>&quot;third&quot;</strong>. When you set the same key multiple times in a Map, the new value overwrites the previous value. Maps maintain unique keys, so the key &quot;status&quot; will only exist once with the most recently assigned value.
                </div>
              </div>

              <div className="question" data-answer="false">
                <p>What will this code output? (Consider reference vs value comparison)</p>
                <pre><code className="language-javascript">{`const obj1 = { id: 1 };
const obj2 = { id: 1 };

const mySet = new Set();
mySet.add(obj1);
mySet.add(obj2);

console.log(mySet.size === 1);`}</code></pre>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The output will be <strong>false</strong>. Even though obj1 and obj2 have the same content, they are different object references in memory. Sets use reference equality for objects, not value equality. Since obj1 and obj2 are different references, both are added to the Set, making the size 2, not 1.
                </div>
              </div>

              <div className="question" data-answer="O(1)">
                <p>What is the average time complexity for Map operations like get(), set(), and has() in a well-implemented hash table?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Map operations (get, set, has, delete) are <strong>O(1) constant time</strong> on average when using a good hash function and proper load factor management. This makes Maps ideal for applications requiring fast lookups like patient records or emergency dispatch systems where every millisecond counts.
                </div>
              </div>

              <div className="question" data-answer="O(1)">
                <p>What is the average time complexity for Set operations like add(), delete(), and has()?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Set operations are also <strong>O(1) constant time</strong> on average because Sets are typically implemented using hash tables internally. This constant-time performance is crucial for applications like allergy checking in medication safety systems.
                </div>
              </div>

              <div className="question" data-answer="intersection">
                <p>Which set operation would you use to find allergies that are common between two family members for genetic analysis?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The <strong>intersection</strong> operation finds elements that exist in both sets, making it perfect for identifying common allergies between family members that might indicate genetic predisposition.
                </div>
              </div>

              <div className="question" data-answer="Hash function">
                <p>What component of a hash table is responsible for converting keys into array indices?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The <strong>hash function</strong> converts keys into array indices. A good hash function distributes keys uniformly across the array to minimize collisions and maintain O(1) performance.
                </div>
              </div>

              <div className="question" data-answers="Maps store key-value pairs,Sets store unique values only,Maps allow duplicate values for different keys">
                <p>What are the key differences between Maps and Sets?</p>

                <label><input type="checkbox" value="Maps store key-value pairs" /> 🗝️ Maps store key-value pairs</label><br />
                <label><input type="checkbox" value="Sets store unique values only" /> 🔒 Sets store unique values only</label><br />
                <label><input type="checkbox" value="Maps are faster than Sets" /> ⚡ Maps are faster than Sets</label><br />
                <label><input type="checkbox" value="Sets can have duplicate values" /> 🔄 Sets can have duplicate values</label><br />
                <label><input type="checkbox" value="Maps allow duplicate values for different keys" /> 📝 Maps allow duplicate values for different keys</label><br />
                <label><input type="checkbox" value="Sets require more memory than Maps" /> 💾 Sets require more memory than Maps</label>
                
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li><strong>Maps store key-value pairs:</strong> ✅ Correct — Maps associate keys with values for data retrieval.</li>
                    <li><strong>Sets store unique values only:</strong> ✅ Correct — Sets automatically prevent duplicates and only store unique values.</li>
                    <li><strong>Maps are faster than Sets:</strong> ❌ Incorrect — Both have similar O(1) performance; speed depends on implementation and use case.</li>
                    <li><strong>Sets can have duplicate values:</strong> ❌ Incorrect — Sets specifically prevent duplicates; that&apos;s their main feature.</li>
                    <li><strong>Maps allow duplicate values for different keys:</strong> ✅ Correct — Different keys can map to the same value in a Map.</li>
                    <li><strong>Sets require more memory:</strong> ❌ Incorrect — Sets typically use less memory since they don&apos;t store associated values.</li>
                  </ul>
                </div>
              </div>

              <div className="question" data-answer="Separate chaining">
                <p>What collision resolution technique stores multiple key-value pairs at the same array index using a list or array?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  <strong>Separate chaining</strong> handles collisions by storing multiple entries at the same array index using a linked list or array. When a collision occurs, the new entry is added to the list at that index.
                </div>
              </div>

              <div className="question" data-answer="0.75">
                <p>What is the typical load factor threshold (as a decimal) used to trigger dynamic resizing in hash tables?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  A load factor of <strong>0.75 (75%)</strong> is commonly used as the threshold for resizing hash tables. This balances memory usage with performance - keeping the table from becoming too crowded while not wasting excessive space.
                </div>
              </div>

              <div className="question" data-answer="union">
                <p>Which set operation would combine all allergies from multiple family members to create a comprehensive family allergy history?</p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  The <strong>union</strong> operation combines all unique values from multiple sets, making it perfect for creating a comprehensive family allergy history that includes all allergies from all family members without duplicates.
                </div>
              </div>

              <button className="code-button test-button" type="submit">Submit</button>
            </form>
          </main>
        );
      };
      
      return <CheckpointComponent />;
    }
  }
};