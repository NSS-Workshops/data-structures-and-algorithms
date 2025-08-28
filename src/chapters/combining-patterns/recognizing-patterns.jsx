import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const recognizingPatternsChapter = {
  id: 'recognizing-patterns',
  title: 'Survival Data Detective - Recognizing Patterns in a Frozen World',
  sectionId: 'combining-patterns',
  previousChapterId: 'combining-patterns-learning-objectives',
  content: `

## The Global Cooling Crisis Challenge

Dr. Maya Patel stood before the massive wall of monitors at the Global Climate Research Institute, her breath visible in the frigid air despite the building's struggling heating system. Outside, snow fell in July across most of North America. The screens showed a terrifying reality: global temperatures had dropped 8°C in just two years, crop failures were causing mass starvation, and entire cities were being abandoned as they became uninhabitable.

"Every second, we receive over 50,000 data points," Maya explained to her new team of junior developers, all bundled in winter coats. "Temperature readings showing record lows, ice sheet expansion data, frozen ocean current measurements, and atmospheric particulate concentrations that are blocking sunlight. We're witnessing the fastest climate shift in human history - a new ice age is beginning, and we have maybe five years before most of the planet becomes uninhabitable."

She gestured to the screens showing red emergency alerts across continents. "London is experiencing -20°C in summer. Australia's wheat belt is frozen solid. The Amazon rainforest is dying from cold. Traditional farming has collapsed across 60% of the globe, and 2 billion people are facing starvation."

Maya's voice grew urgent. "Today, we're going to learn how to recognize patterns in data that could help humanity survive. The algorithms and data structures you've learned aren't just academic concepts—they're literally tools that could help save our species from extinction."

## Pattern Recognition: The Foundation of Survival

Maya opened her laptop and projected a visualization showing global temperature data from the past century. "Survival science is fundamentally about pattern recognition. We look for trends, cycles, anomalies, and correlations in massive datasets. But before we can find patterns, we need to organize our data efficiently."

She pulled up a code editor. "Let's start with a real problem we're facing: **detecting critical temperature drops** across different regions. We have temperature readings from thousands of stations, and we need to quickly identify when a station reports temperatures that could harm within hours."

### The Survival Alert System

"Here's our first challenge," Maya said, highlighting the problem on screen. "We need to build a system that can:

1. **Store temperature readings** from multiple stations efficiently
2. **Detect life-threatening temperatures** (below -10°C)
3. **Track rapid cooling events** that indicate accelerating ice age conditions
4. **Alert authorities** when survival is at risk

"This is a perfect example of a problem that requires **multiple data structures working together**. Can anyone guess which data structures we might need?"

One of the junior developers raised her hand. "We could use a Map to store station data, and maybe a Set to track critical alerts?"

"Excellent start!" Maya smiled through her visible breath. "But let's think about survival. What about tracking rapid temperature drops? What about prioritizing the most dangerous situations?"

## ⏱️ Challenge 1: Building the Survival Data Processor

Maya opened a coding environment. "Let's implement our survival alert system step by step. This will teach you how to recognize when a problem requires multiple data structures."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`SurvivalDataProcessor\` class
- Use Maps for station data and Sets for critical alerts
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you pattern recognition," Maya explained. "Notice how we're combining Maps (for fast station lookup) and Sets (for tracking unique critical situations). Each data structure serves a specific purpose in our survival system."

## Recognizing the Sliding Window Pattern in Cooling Data

After the team completed the first challenge, Maya pulled up another visualization. "Now let's look at a different type of pattern. We need to analyze **rapid cooling trends** to predict when areas will become uninhabitable."

"This is a classic example of the **sliding window pattern**," she explained, drawing a diagram on the whiteboard. "We want to track temperature changes over the past few readings to detect rapid cooling that could cause harm."

\`\`\`
Temperature Readings: [-5, -8, -12, -15, -18, -22, -25, -28, ...]
                       ↑
                   3-reading window moves right as new data arrives
\`\`\`

"The naive approach would recalculate trends each time. But with the sliding window technique, we can efficiently track cooling patterns and issue survival warnings."

## ⏱️ Challenge 2: Simple Cooling Trend Tracker

"Let's implement a system that tracks dangerous cooling trends," Maya said, opening another coding challenge.

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`CoolingTrendTracker\` class
- Use sliding window pattern with Maps and Arrays
- Detect rapid cooling that threatens survival
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge demonstrates how to build systems where rapid detection could save lives," Maya noted.

## The Bigger Picture: Humanity's Survival

As the team worked through the challenges, Maya shared the real-world impact of their work:

"What we're doing here isn't just coding practice," Maya said, her voice filled with urgency. "Every algorithm we optimize, every data structure we choose correctly, helps us process survival data faster and more accurately. This means better early warning systems, faster evacuation alerts, and more effective responses to the cooling crisis."

She gestured to the wall of monitors showing global emergency alerts. "These patterns you're learning—they're powering the systems that track deadly cold fronts, predict when cities will become uninhabitable, monitor food supply collapse, and guide humanity's migration to warmer regions. You're not just learning computer science; you're learning tools that could help our species survive."

## Key Takeaways: Pattern Recognition for Survival

By the end of the session, the team had learned to recognize:

- **When to combine multiple data structures** for complex survival data management
- **Sliding window patterns** for efficient trend analysis that could save lives
- **The importance of choosing the right tool** for each life-or-death problem
- **How algorithmic thinking applies** to humanity's greatest survival challenge

"Tomorrow," Maya announced as they prepared to leave, "we'll dive deeper into choosing data structures for AI systems. We'll explore how massive AI data centers might actually help heat the planet back up while we build the systems to manage our survival."

The team left feeling both sobered by the crisis and empowered by their new skills, knowing they had just learned tools that could contribute to humanity's survival.`,
  exercise: {
    starterCode: `/*
Survival Data Pattern Recognition Challenge

Dr. Maya needs your help building systems to process survival data efficiently.
You'll implement simple systems that could help save lives during the cooling crisis.

Pattern Recognition Skills:
- Using Maps for fast lookups
- Using Sets for unique collections
- Applying sliding window for trend analysis
*/

// ⏱️ Challenge 1: Survival Data Processor
// 🔓 Uncomment the below code section and implement the required logic:

/*
class SurvivalDataProcessor {
  constructor() {
    // TODO: Initialize Map for stations and Set for critical alerts
  }
  
  addCriticalReading(stationId, temperature) {
    // TODO: Add temperature reading
    // If temperature < -10°C, add to critical alerts Set
    // Store in Map: stationId -> latest temperature
  }
  
  getCriticalStations() {
    // TODO: Return array of station IDs with critical temperatures
  }
}
*/

// ⏱️ Challenge 2: Simple Cooling Trend Tracker
// 🔓 Uncomment the below code section and implement the required logic:

/*
class CoolingTrendTracker {
  constructor() {
    // TODO: Initialize Map to track station readings
  }
  
  addReading(stationId, temperature) {
    // TODO: Store reading in Map
    // Keep array of last 3 readings per station
  }
  
  isCoolingFast(stationId) {
    // TODO: Check if temperature dropped > 5°C in last 3 readings
    // Return true if cooling rapidly, false otherwise
  }
}
*/`,
    solution: `/*
Survival Data Pattern Recognition - Complete Solution

This solution demonstrates pattern recognition for survival data processing.
*/

class SurvivalDataProcessor {
  constructor() {
    this.stations = new Map(); // stationId -> latest temperature
    this.criticalAlerts = new Set(); // set of critical station IDs
  }
  
  addCriticalReading(stationId, temperature) {
    // Store latest temperature
    this.stations.set(stationId, temperature);
    
    // Check if critical (life-threatening)
    if (temperature < -10) {
      this.criticalAlerts.add(stationId);
    } else {
      this.criticalAlerts.delete(stationId);
    }
  }
  
  getCriticalStations() {
    return Array.from(this.criticalAlerts);
  }
}

class CoolingTrendTracker {
  constructor() {
    this.stationReadings = new Map(); // stationId -> array of recent readings
  }
  
  addReading(stationId, temperature) {
    if (!this.stationReadings.has(stationId)) {
      this.stationReadings.set(stationId, []);
    }
    
    const readings = this.stationReadings.get(stationId);
    readings.push(temperature);
    
    // Keep only last 3 readings
    if (readings.length > 3) {
      readings.shift();
    }
  }
  
  isCoolingFast(stationId) {
    const readings = this.stationReadings.get(stationId);
    if (!readings || readings.length < 3) {
      return false;
    }
    
    // Check if temperature dropped > 5°C from first to last reading
    const tempDrop = readings[0] - readings[readings.length - 1];
    return tempDrop > 5;
  }
}`,
    tests: [
      {
        name: "Test SurvivalDataProcessor critical temperature detection",
        test: (code) => {
          try {
            const testCode = code + `
            // Test SurvivalDataProcessor
            const processor = new SurvivalDataProcessor();
            
            // Add readings
            processor.addCriticalReading('STATION_001', -5); // Not critical
            processor.addCriticalReading('STATION_002', -15); // Critical
            processor.addCriticalReading('STATION_003', -12); // Critical
            processor.addCriticalReading('STATION_004', 2); // Not critical
            
            const criticalStations = processor.getCriticalStations();
            
            return {
              criticalStations: criticalStations,
              hasCritical: criticalStations.length > 0,
              correctCount: criticalStations.length === 2,
              includesStation2: criticalStations.includes('STATION_002'),
              includesStation3: criticalStations.includes('STATION_003')
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.hasCritical) {
              return new TestResult({ passed: false, message: "Critical temperature detection not working" });
            }
            
            if (!result.correctCount) {
              return new TestResult({ passed: false, message: "Should detect exactly 2 critical stations" });
            }
            
            if (!result.includesStation2 || !result.includesStation3) {
              return new TestResult({ passed: false, message: "Should include the correct critical stations" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "SurvivalDataProcessor should detect critical temperatures below -10°C."
      },
      {
        name: "Test CoolingTrendTracker rapid cooling detection",
        test: (code) => {
          try {
            const testCode = code + `
            // Test CoolingTrendTracker
            const tracker = new CoolingTrendTracker();
            
            // Add readings showing rapid cooling
            tracker.addReading('STATION_A', 0);
            tracker.addReading('STATION_A', -3);
            tracker.addReading('STATION_A', -8); // 8°C drop total
            
            // Add readings showing slow cooling
            tracker.addReading('STATION_B', 0);
            tracker.addReading('STATION_B', -1);
            tracker.addReading('STATION_B', -2); // 2°C drop total
            
            return {
              rapidCooling: tracker.isCoolingFast('STATION_A'),
              slowCooling: tracker.isCoolingFast('STATION_B'),
              nonExistent: tracker.isCoolingFast('STATION_C')
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.rapidCooling) {
              return new TestResult({ passed: false, message: "Should detect rapid cooling (>5°C drop)" });
            }
            
            if (result.slowCooling) {
              return new TestResult({ passed: false, message: "Should not detect slow cooling as rapid" });
            }
            
            if (result.nonExistent) {
              return new TestResult({ passed: false, message: "Should return false for non-existent stations" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "CoolingTrendTracker should detect rapid cooling trends that threaten survival."
      }
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Pattern Recognition for Survival</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answer="Maps for fast station lookup, Sets for tracking unique critical alerts"
              >
                <p>
                  In the Survival Data Processor, why do we use both Maps and Sets?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Maps provide O(1) lookup for station data, while Sets ensure we don&apos;t 
                  duplicate critical alerts and provide fast existence checks for life-threatening situations.
                </div>
              </div>

              <div className="question" data-answer="sliding window">
                <p>
                  What algorithmic pattern is most suitable for tracking temperature trends 
                  that could indicate rapid cooling threatening human survival?
                </p>
                <label>
                  <input type="radio" name="cooling-pattern" value="sliding window" required /> 
                  Sliding window pattern to track recent temperature changes
                </label>
                <br />
                <label>
                  <input type="radio" name="cooling-pattern" value="binary search" required /> 
                  Binary search to find temperature thresholds
                </label>
                <br />
                <label>
                  <input type="radio" name="cooling-pattern" value="depth first" required /> 
                  Depth-first search through temperature data
                </label>
                <br />
                <label>
                  <input type="radio" name="cooling-pattern" value="sorting" required /> 
                  Sorting temperatures to find patterns
                </label>
                <span className="feedback" />
                <div className="explanation">
                  The sliding window pattern is perfect for tracking recent temperature changes because it maintains 
                  a fixed-size window of recent readings, efficiently detecting cooling trends that could threaten survival.
                </div>
              </div>

              <button className="code-button test-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        );
      };

      return <CheckpointComponent />;
    },
  },
};