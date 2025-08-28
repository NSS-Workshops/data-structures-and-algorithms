import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const solvingComplexProblemsChapter = {
  id: 'solving-complex-problems',
  title: 'The Grand Integration - Building a Comprehensive Climate AI System',
  sectionId: 'combining-patterns',
  previousChapterId: 'analyzing-tradeoffs',
  content: `

## The Ultimate Challenge

Six months after the polar vortex emergency, Dr. Maya Patel and Dr. James Chen stood before the United Nations Climate Council, presenting their most ambitious project yet. The wall-sized display showed a real-time global cooling monitoring system processing data from 50,000 sensors worldwide, running 200 AI models simultaneously, and serving predictions to 100,000 scientists and policymakers across the globe.

"Today, we're going to show you how everything you've learned comes together," Maya announced to the packed auditorium. "Pattern recognition, data structure selection, performance optimization—all integrated into a system that's helping humanity understand and respond to global cooling at an unprecedented scale."

James gestured to the massive visualization. "This is the Global Cooling Intelligence Platform—GCIP. It combines every concept we've explored: cooling data pattern recognition, AI model selection, performance optimization under pressure, and much more. But most importantly, it demonstrates how complex problems require the integration of multiple algorithmic approaches."

## The System Architecture: A Symphony of Data Structures

Maya pulled up the system architecture diagram, showing the intricate connections between different components:

\`\`\`
Global Cooling Intelligence Platform (GCIP)
├── Data Ingestion Layer
│   ├── Real-time Stream Processor (Queues + Sliding Windows)
│   ├── Batch Data Processor (Arrays + Sorting)
│   └── Data Validation Engine (Sets + Maps)
├── AI Model Management
│   ├── Cooling Model Registry (Multi-index Maps)
│   ├── Performance Optimizer (Caching + Profiling)
│   └── Auto-scaling Controller (Adaptive Systems)
├── Cooling Analysis Engine
│   ├── Pattern Recognition (Multiple Data Structures)
│   ├── Cooling Anomaly Detection (Statistical Analysis)
│   └── Ice Age Prediction Synthesis (Graph Algorithms)
└── Global Distribution Network
    ├── Load Balancer (Concurrency Management)
    ├── Regional Caches (Performance Optimization)
    └── Cold Weather Emergency Response System (Priority Queues)
\`\`\`

"Notice how each component uses the optimal data structures for its specific function," James explained. "This isn't just one algorithm—it's dozens of algorithms working together, each chosen for maximum efficiency in its role."

## The Integration Challenge

Maya addressed the audience directly. "Building complex systems isn't just about knowing individual algorithms. It's about understanding how they interact, where they might conflict, and how to orchestrate them into a cohesive whole."

She highlighted several integration challenges they had solved:

### 1. **Data Flow Coordination**
"Cooling data flows through multiple processing stages. Temperature readings might need sliding window analysis, then cooling pattern recognition, then AI model selection, then performance optimization. Each stage uses different data structures, and we need to efficiently transform data between them."

### 2. **Concurrent Access Patterns**
"We have 100,000 users accessing the system simultaneously. Some are reading current cooling data, others are running complex ice age analyses, and still others are updating cooling prediction models. Our concurrency management needs to handle all these patterns without conflicts."

### 3. **Performance Under Variable Load**
"Cooling emergencies create unpredictable load spikes. Polar vortex season might bring 1000x normal traffic. Our system needs to automatically scale and adapt its performance characteristics."

### 4. **Global Consistency vs. Local Performance**
"Scientists in Tokyo need the same cooling data as researchers in New York, but they also need low-latency access. We balance global consistency with regional performance optimization."

## ⏱️ Challenge 1: The Master Climate Data Processor

James opened the first comprehensive challenge. "Let's build the core of GCIP—a master processor that integrates pattern recognition, data structure selection, and performance optimization."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`GlobalClimateProcessor\` class
- Integrate multiple data processing patterns
- Handle real-time and batch processing simultaneously
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge brings together everything you've learned," Maya explained. "You'll see how pattern recognition guides data structure choice, which influences performance optimization decisions."

## Real-World Integration: The Antarctic Ice Crisis

To demonstrate the system's capabilities, James pulled up a real-world scenario that had unfolded just weeks earlier.

"In March 2024, our system detected an unprecedented ice formation acceleration event in the Arctic. Here's how all our components worked together:

### Minute 1-5: Data Ingestion and Pattern Recognition
- **Satellite data streams** detected unusual ice thickness expansion readings
- **Sliding window analysis** identified the rate of ice formation was 10x normal
- **Pattern recognition algorithms** classified this as a 'rapid ice expansion event'
- **Anomaly detection** flagged 47 monitoring stations showing coordinated cooling changes

### Minute 5-15: AI Model Selection and Analysis
- **Model registry** identified 12 ice-formation prediction models
- **Performance optimizer** selected the 3 most accurate models for this cooling scenario
- **Multi-index search** found historical precedents and similar cooling events
- **Adaptive system** switched to emergency processing mode

### Minute 15-30: Global Coordination and Response
- **Concurrency manager** handled 50,000 simultaneous scientist logins
- **Load balancer** distributed processing across 20 global data centers
- **Cache optimization** pre-computed likely follow-up cooling queries
- **Priority queues** ensured emergency cold weather alerts reached policymakers first

### Result: 6-Hour Early Warning
"Our integrated system provided a 6-hour early warning about potential severe cooling impacts, allowing communities to prepare for extreme cold. This was only possible because all our algorithms worked together seamlessly."

## The Human Impact: Lives Saved Through Algorithms

As the team completed their challenges, Maya shared the real-world impact of their integrated system:

### Quantified Impact (2024 Data)
- **Early Warning Systems**: 72 hours average advance notice for cold events (up from 24 hours)
- **False Positive Rate**: Reduced by 60% through better cooling model consensus
- **Global Coverage**: 195 countries now have access to advanced cooling predictions
- **Response Time**: Emergency cold weather alerts delivered in under 2 minutes globally
- **Lives Saved**: Estimated 50,000+ lives saved through improved cold weather preparedness

The team left feeling accomplished and energized, knowing they had just learned skills that directly contribute to addressing one of humanity's most pressing challenges.`,
  exercise: {
    starterCode: `/*
Global Climate Intelligence Platform - Final Integration Challenge

This is your capstone project - a comprehensive system that demonstrates mastery
of all the concepts covered in the course.

Integration Concepts:
- Combining multiple data processing patterns
- Coordinating AI models for complex predictions
- Building emergency response systems with global reach
- Handling real-world complexity and scale
*/

// ⏱️ Challenge 1: Global Climate Data Processor
// 🔓 Uncomment the below code section and implement the required logic:

/*
class GlobalClimateProcessor {
  constructor() {
    // TODO: Initialize integrated processing system
    // Combine: pattern recognition, data structures, performance optimization
    // Hint: You'll need components for real-time processing, batch processing, caching
  }
  
  processRealTimeData(sensorData) {
    // TODO: Process streaming sensor data in real-time
    // Use sliding windows for trend analysis
    // Apply pattern recognition for anomaly detection
    // Cache frequently accessed results
    // Return: { processed: data, anomalies: [], patterns: [], performance: metrics }
  }
  
  processBatchData(historicalData) {
    // TODO: Process large batches of historical data
    // Use sorting and binary search for efficient analysis
    // Apply statistical analysis for trend identification
    // Optimize for throughput over latency
    // Return: { trends: [], statistics: {}, insights: [] }
  }
  
  detectGlobalPatterns(regionalData) {
    // TODO: Analyze data from multiple regions to find global patterns
    // Use Maps to organize by region, Sets to track unique patterns
    // Apply correlation analysis across regions
    // Identify climate teleconnections (distant correlations)
    // Return: { globalPatterns: [], regionalCorrelations: Map, confidence: number }
  }
  
  optimizeForEmergency() {
    // TODO: Switch to emergency processing mode
    // Prioritize speed over memory efficiency
    // Pre-compute common emergency scenarios
    // Activate all performance optimizations
    // Return: { mode: 'emergency', optimizations: [], estimatedSpeedup: number }
  }
  
  getSystemHealth() {
    // TODO: Return comprehensive system health metrics
    // Include: processing rates, cache performance, error rates, resource usage
  }
}
*/`,
    solution: `/*
Global Climate Intelligence Platform - Complete Solution

This solution demonstrates the integration of all course concepts into a comprehensive
climate monitoring and emergency response system.
*/

class GlobalClimateProcessor {
  constructor() {
    this.realTimeCache = new Map();
    this.batchCache = new Map();
    this.slidingWindows = new Map(); // sensor -> window data
    this.performanceMode = 'normal';
    this.processingStats = {
      realTimeOps: 0,
      batchOps: 0,
      cacheHits: 0,
      cacheMisses: 0
    };
  }
  
  processRealTimeData(sensorData) {
    const startTime = performance.now();
    const sensorId = sensorData.sensorId;
    const cacheKey = \`realtime_\${sensorId}_\${sensorData.timestamp}\`;
    
    // Check cache first
    if (this.realTimeCache.has(cacheKey)) {
      this.processingStats.cacheHits++;
      return this.realTimeCache.get(cacheKey);
    }
    
    this.processingStats.cacheMisses++;
    this.processingStats.realTimeOps++;
    
    // Initialize sliding window for sensor if needed
    if (!this.slidingWindows.has(sensorId)) {
      this.slidingWindows.set(sensorId, []);
    }
    
    const window = this.slidingWindows.get(sensorId);
    window.push(sensorData);
    
    // Maintain window size (keep last 100 readings)
    if (window.length > 100) {
      window.shift();
    }
    
    // Detect anomalies using sliding window
    const anomalies = this.detectAnomalies(window, sensorData);
    
    // Recognize patterns
    const patterns = this.recognizePatterns(window);
    
    const processingTime = performance.now() - startTime;
    
    const result = {
      processed: {
        ...sensorData,
        movingAverage: this.calculateMovingAverage(window),
        trend: this.calculateTrend(window)
      },
      anomalies: anomalies,
      patterns: patterns,
      performance: {
        processingTime: processingTime,
        cacheHit: false,
        windowSize: window.length
      }
    };
    
    // Cache the result
    this.realTimeCache.set(cacheKey, result);
    
    return result;
  }
  
  detectAnomalies(window, currentData) {
    if (window.length < 10) return [];
    
    const values = window.map(d => d.value);
    const mean = values.reduce((sum, v) => sum + v, 0) / values.length;
    const stdDev = Math.sqrt(values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / values.length);
    
    const threshold = 2 * stdDev;
    const deviation = Math.abs(currentData.value - mean);
    
    if (deviation > threshold) {
      return [{
        type: 'statistical_outlier',
        severity: deviation / threshold,
        description: \`Value \${currentData.value} deviates \${deviation.toFixed(2)} from mean \${mean.toFixed(2)}\`
      }];
    }
    
    return [];
  }
  
  recognizePatterns(window) {
    if (window.length < 20) return [];
    
    const patterns = [];
    const values = window.map(d => d.value);
    
    // Detect trend patterns
    const firstHalf = values.slice(0, Math.floor(values.length / 2));
    const secondHalf = values.slice(Math.floor(values.length / 2));
    
    const firstAvg = firstHalf.reduce((sum, v) => sum + v, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((sum, v) => sum + v, 0) / secondHalf.length;
    
    const trendStrength = Math.abs(secondAvg - firstAvg) / firstAvg;
    
    if (trendStrength > 0.1) {
      patterns.push({
        type: 'trend',
        direction: secondAvg > firstAvg ? 'increasing' : 'decreasing',
        strength: trendStrength,
        confidence: Math.min(trendStrength * 10, 1)
      });
    }
    
    return patterns;
  }
  
  calculateMovingAverage(window) {
    if (window.length === 0) return 0;
    return window.reduce((sum, d) => sum + d.value, 0) / window.length;
  }
  
  calculateTrend(window) {
    if (window.length < 2) return 0;
    const recent = window.slice(-5).map(d => d.value);
    const older = window.slice(-10, -5).map(d => d.value);
    
    if (older.length === 0) return 0;
    
    const recentAvg = recent.reduce((sum, v) => sum + v, 0) / recent.length;
    const olderAvg = older.reduce((sum, v) => sum + v, 0) / older.length;
    
    return (recentAvg - olderAvg) / olderAvg;
  }
  
  processBatchData(historicalData) {
    const startTime = performance.now();
    this.processingStats.batchOps++;
    
    // Sort data by timestamp for efficient analysis
    const sortedData = [...historicalData].sort((a, b) => a.timestamp - b.timestamp);
    
    // Calculate comprehensive statistics
    const values = sortedData.map(d => d.value);
    const statistics = {
      count: values.length,
      mean: values.reduce((sum, v) => sum + v, 0) / values.length,
      min: Math.min(...values),
      max: Math.max(...values),
      median: this.calculateMedian(values)
    };
    
    // Identify long-term trends
    const trends = this.identifyLongTermTrends(sortedData);
    
    // Generate insights
    const insights = this.generateInsights(sortedData, statistics, trends);
    
    const processingTime = performance.now() - startTime;
    
    return {
      trends: trends,
      statistics: statistics,
      insights: insights,
      performance: {
        processingTime: processingTime,
        dataPoints: historicalData.length
      }
    };
  }
  
  calculateMedian(values) {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 
      ? (sorted[mid - 1] + sorted[mid]) / 2 
      : sorted[mid];
  }
  
  identifyLongTermTrends(sortedData) {
    const trends = [];
    
    if (sortedData.length < 100) return trends;
    
    // Divide data into quarters and analyze trends
    const quarterSize = Math.floor(sortedData.length / 4);
    const quarters = [];
    
    for (let i = 0; i < 4; i++) {
      const start = i * quarterSize;
      const end = i === 3 ? sortedData.length : (i + 1) * quarterSize;
      const quarterData = sortedData.slice(start, end);
      const quarterAvg = quarterData.reduce((sum, d) => sum + d.value, 0) / quarterData.length;
      quarters.push(quarterAvg);
    }
    
    // Analyze quarter-to-quarter changes
    for (let i = 1; i < quarters.length; i++) {
      const change = (quarters[i] - quarters[i-1]) / quarters[i-1];
      if (Math.abs(change) > 0.05) {
        trends.push({
          period: \`Q\${i} to Q\${i+1}\`,
          change: change,
          direction: change > 0 ? 'increasing' : 'decreasing',
          magnitude: Math.abs(change)
        });
      }
    }
    
    return trends;
  }
  
  generateInsights(data, statistics, trends) {
    const insights = [];
    
    // Variability insight
    const range = statistics.max - statistics.min;
    const variability = range / statistics.mean;
    
    if (variability > 0.5) {
      insights.push({
        type: 'high_variability',
        description: \`Data shows high variability (range: \${range.toFixed(2)}, \${(variability * 100).toFixed(1)}% of mean)\`,
        significance: 'high'
      });
    }
    
    // Trend insight
    if (trends.length > 0) {
      const strongTrends = trends.filter(t => t.magnitude > 0.1);
      if (strongTrends.length > 0) {
        insights.push({
          type: 'strong_trends',
          description: \`Detected \${strongTrends.length} strong trend(s) in the data\`,
          trends: strongTrends,
          significance: 'high'
        });
      }
    }
    
    return insights;
  }
  
  detectGlobalPatterns(regionalData) {
    const startTime = performance.now();
    
    // Organize data by region
    const regionMap = new Map();
    for (const [region, data] of Object.entries(regionalData)) {
      regionMap.set(region, data);
    }
    
    // Find correlations between regions
    const correlations = new Map();
    const regions = Array.from(regionMap.keys());
    
    for (let i = 0; i < regions.length; i++) {
      for (let j = i + 1; j < regions.length; j++) {
        const region1 = regions[i];
        const region2 = regions[j];
        const correlation = this.calculateCorrelation(
          regionMap.get(region1),
          regionMap.get(region2)
        );
        
        if (Math.abs(correlation) > 0.5) {
          correlations.set(\`\${region1}-\${region2}\`, correlation);
        }
      }
    }
    
    // Identify global patterns
    const globalPatterns = [];
    const patternSet = new Set();
    
    for (const [regionPair, correlation] of correlations) {
      const patternType = correlation > 0 ? 'synchronized' : 'inverse';
      const patternKey = \`\${patternType}_\${Math.abs(correlation).toFixed(2)}\`;
      
      if (!patternSet.has(patternKey)) {
        patternSet.add(patternKey);
        globalPatterns.push({
          type: patternType,
          regions: regionPair.split('-'),
          correlation: correlation,
          strength: Math.abs(correlation)
        });
      }
    }
    
    const processingTime = performance.now() - startTime;
    const confidence = globalPatterns.length > 0 ? 
      globalPatterns.reduce((sum, p) => sum + p.strength, 0) / globalPatterns.length : 0;
    
    return {
      globalPatterns: globalPatterns,
      regionalCorrelations: correlations,
      confidence: confidence,
      performance: {
        processingTime: processingTime,
        regionsAnalyzed: regions.length,
        correlationsFound: correlations.size
      }
    };
  }
  
  calculateCorrelation(data1, data2) {
    if (!data1 || !data2 || data1.length !== data2.length || data1.length === 0) {
      return 0;
    }
    
    const n = data1.length;
    const sum1 = data1.reduce((sum, d) => sum + d.value, 0);
    const sum2 = data2.reduce((sum, d) => sum + d.value, 0);
    const sum1Sq = data1.reduce((sum, d) => sum + d.value * d.value, 0);
    const sum2Sq = data2.reduce((sum, d) => sum + d.value * d.value, 0);
    const pSum = data1.reduce((sum, d, i) => sum + d.value * data2[i].value, 0);
    
    const num = pSum - (sum1 * sum2 / n);
    const den = Math.sqrt((sum1Sq - sum1 * sum1 / n) * (sum2Sq - sum2 * sum2 / n));
    
    return den === 0 ? 0 : num / den;
  }
  
  optimizeForEmergency() {
    const previousMode = this.performanceMode;
    this.performanceMode = 'emergency';
    
    // Clear caches to free memory for emergency processing
    this.realTimeCache.clear();
    this.batchCache.clear();
    
    // Pre-compute emergency scenarios
    const emergencyOptimizations = [
      'increased_cache_size',
      'parallel_processing',
      'priority_queuing',
      'reduced_precision_for_speed'
    ];
    
    const estimatedSpeedup = 5; // 5x faster in emergency mode
    
    return {
      mode: 'emergency',
      previousMode: previousMode,
      optimizations: emergencyOptimizations,
      estimatedSpeedup: estimatedSpeedup
    };
  }
  
  getSystemHealth() {
    const totalOps = this.processingStats.realTimeOps + this.processingStats.batchOps;
    const cacheHitRate = totalOps > 0 ? 
      this.processingStats.cacheHits / (this.processingStats.cacheHits + this.processingStats.cacheMisses) : 0;
    
    return {
      processingStats: this.processingStats,
      cacheHitRate: cacheHitRate,
      performanceMode: this.performanceMode,
      activeSensors: this.slidingWindows.size,
      cacheSize: this.realTimeCache.size + this.batchCache.size,
      memoryUsage: this.estimateMemoryUsage()
    };
  }
  
  estimateMemoryUsage() {
    // Rough estimate of memory usage in MB
    const cacheMemory = (this.realTimeCache.size + this.batchCache.size) * 0.001; // 1KB per cache entry
    const windowMemory = this.slidingWindows.size * 0.1; // 100KB per sensor window
    return cacheMemory + windowMemory;
  }
}`,
    tests: [
      {
        name: "Test GlobalClimateProcessor real-time processing",
        test: (code) => {
          try {
            const testCode = code + `
            // Test GlobalClimateProcessor
            const processor = new GlobalClimateProcessor();
            
            // Test real-time processing
            const sensorData1 = { sensorId: 'TEMP_001', value: 25.5, timestamp: Date.now(), type: 'temperature' };
            const result1 = processor.processRealTimeData(sensorData1);
            
            // Add more data to build window
            const sensorData2 = { sensorId: 'TEMP_001', value: 26.0, timestamp: Date.now() + 1000, type: 'temperature' };
            const result2 = processor.processRealTimeData(sensorData2);
            
            // Add anomalous data
            const sensorData3 = { sensorId: 'TEMP_001', value: 35.0, timestamp: Date.now() + 2000, type: 'temperature' };
            const result3 = processor.processRealTimeData(sensorData3);
            
            const systemHealth = processor.getSystemHealth();
            
            return {
              result1: result1,
              result2: result2,
              result3: result3,
              systemHealth: systemHealth,
              hasProcessedData: result1.processed && result1.processed.movingAverage !== undefined,
              hasAnomalies: result3.anomalies && result3.anomalies.length > 0,
              hasPerformanceMetrics: result1.performance && result1.performance.processingTime !== undefined
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.hasProcessedData) {
              return new TestResult({ passed: false, message: "Real-time data processing not working" });
            }
            
            if (!result.hasPerformanceMetrics) {
              return new TestResult({ passed: false, message: "Performance metrics not being tracked" });
            }
            
            if (!result.systemHealth || typeof result.systemHealth.cacheHitRate !== 'number') {
              return new TestResult({ passed: false, message: "System health monitoring not working" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "GlobalClimateProcessor should handle real-time data processing with sliding windows and performance tracking."
      },
      {
        name: "Test batch processing and trend analysis",
        test: (code) => {
          try {
            const testCode = code + `
            // Test batch processing
            const processor = new GlobalClimateProcessor();
            
            // Create historical data with trends
            const historicalData = [];
            for (let i = 0; i < 200; i++) {
              historicalData.push({
                value: 20 + (i * 0.1) + (Math.random() * 2), // Increasing trend with noise
                timestamp: Date.now() - (200 - i) * 86400000, // Daily data going back 200 days
                type: 'temperature'
              });
            }
            
            const batchResult = processor.processBatchData(historicalData);
            
            return {
              batchResult: batchResult,
              hasStatistics: batchResult.statistics && typeof batchResult.statistics.mean === 'number',
              hasTrends: batchResult.trends && Array.isArray(batchResult.trends),
              hasInsights: batchResult.insights && Array.isArray(batchResult.insights),
              hasPerformance: batchResult.performance && typeof batchResult.performance.processingTime === 'number'
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.hasStatistics) {
              return new TestResult({ passed: false, message: "Batch processing statistics not working" });
            }
            
            if (!result.hasTrends) {
              return new TestResult({ passed: false, message: "Trend analysis not working" });
            }
            
            if (!result.hasInsights) {
              return new TestResult({ passed: false, message: "Insight generation not working" });
            }
            
            if (!result.hasPerformance) {
              return new TestResult({ passed: false, message: "Performance tracking not working" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "GlobalClimateProcessor should handle batch processing with statistical analysis and trend detection."
      },
      {
        name: "Test global pattern detection and emergency optimization",
        test: (code) => {
          try {
            const testCode = code + `
            // Test global pattern detection
            const processor = new GlobalClimateProcessor();
            
            // Create regional data with correlations
            const regionalData = {
              'North_America': [
                { value: 25, timestamp: 1 },
                { value: 26, timestamp: 2 },
                { value: 27, timestamp: 3 }
              ],
              'Europe': [
                { value: 24, timestamp: 1 },
                { value: 25, timestamp: 2 },
                { value: 26, timestamp: 3 }
              ],
              'Asia': [
                { value: 30, timestamp: 1 },
                { value: 28, timestamp: 2 },
                { value: 26, timestamp: 3 }
              ]
            };
            
            const patternResult = processor.detectGlobalPatterns(regionalData);
            
            // Test emergency optimization
            const emergencyResult = processor.optimizeForEmergency();
            
            const healthAfterEmergency = processor.getSystemHealth();
            
            return {
              patternResult: patternResult,
              emergencyResult: emergencyResult,
              healthAfterEmergency: healthAfterEmergency,
              hasGlobalPatterns: patternResult.globalPatterns && Array.isArray(patternResult.globalPatterns),
              hasCorrelations: patternResult.regionalCorrelations && patternResult.regionalCorrelations instanceof Map,
              hasConfidence: typeof patternResult.confidence === 'number',
              emergencyModeSet: emergencyResult.mode === 'emergency',
              hasOptimizations: emergencyResult.optimizations && Array.isArray(emergencyResult.optimizations)
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.hasGlobalPatterns) {
              return new TestResult({ passed: false, message: "Global pattern detection not working" });
            }
            
            if (!result.hasCorrelations) {
              return new TestResult({ passed: false, message: "Regional correlation analysis not working" });
            }
            
            if (!result.emergencyModeSet) {
              return new TestResult({ passed: false, message: "Emergency optimization not working" });
            }
            
            if (!result.hasOptimizations) {
              return new TestResult({ passed: false, message: "Emergency optimizations not being applied" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "GlobalClimateProcessor should detect global patterns and optimize for emergency scenarios."
      }
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Complex System Integration</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answer="Multiple algorithms working together, each optimized for specific functions"
              >
                <p>
                  What makes the Global Climate Intelligence Platform different from using a single algorithm?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Complex systems like GCIP use dozens of algorithms working together, each chosen for maximum 
                  efficiency in its specific role. This integration allows the system to handle real-time processing, 
                  batch analysis, pattern recognition, and emergency response simultaneously.
                </div>
              </div>

              <div className="question" data-answer="integration">
                <p>
                  What is the key challenge when building complex systems that combine multiple algorithmic approaches?
                </p>
                <label>
                  <input type="radio" name="complex-systems" value="integration" required />
                  Integration - understanding how algorithms interact and orchestrating them cohesively
                </label>
                <br />
                <label>
                  <input type="radio" name="complex-systems" value="performance" required />
                  Performance - making individual algorithms run faster
                </label>
                <br />
                <label>
                  <input type="radio" name="complex-systems" value="memory" required />
                  Memory - reducing the memory footprint of each algorithm
                </label>
                <br />
                <label>
                  <input type="radio" name="complex-systems" value="complexity" required />
                  Complexity - writing more sophisticated individual algorithms
                </label>
                <span className="feedback" />
                <div className="explanation">
                  The key challenge in complex systems is integration - understanding how different algorithms
                  interact, where they might conflict, and how to orchestrate them into a cohesive whole.
                  This requires systems thinking beyond individual algorithm optimization.
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