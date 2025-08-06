import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const useCasesChapter = {
  id: 'use-cases',
  title: 'Real-World Applications - The Emergency Response System',
  sectionId: 'maps-and-sets',
  previousChapterId: 'sets-intro',
  content: `
## The Night Shift at Metro Emergency Dispatch

The clock on the wall read 11:47 PM as Elena Rodriguez adjusted her headset and took a sip of her now-cold coffee. As the senior dispatcher at Metro Emergency Services, she had seen it all during her five years on the night shift. Tonight felt different though - there was an unusual energy in the air, and her computer screens were lighting up with more calls than usual.

"Elena!" called out Jake Martinez, a newer dispatcher who had joined the team just six months ago. His voice carried a note of concern as he gestured toward his workstation. "I'm getting overwhelmed here. We've got multiple incidents coming in, and I'm losing track of which units are available and which areas we've already covered."

Elena rolled her chair over to Jake's station, her experienced eyes quickly scanning the chaos on his screens. "Jake, this is exactly why we need to talk about how our dispatch system uses **Maps** and **Sets** to keep everything organized. Let me show you some real-world applications that will change how you think about managing emergency responses."

## The Challenge of Emergency Resource Management

Elena pulled up the main dispatch interface, which displayed a complex web of information: ambulance locations, hospital capacities, ongoing incidents, and available personnel. The system buzzed with activity as new calls came in every few minutes.

"Look at this," Elena said, pointing to the screen. "Every emergency call creates a unique incident ID, and we need to instantly access all the details - location, type of emergency, assigned units, estimated response time. Sound familiar?"

Jake nodded slowly. "It's like the patient records system Dr. Chen showed us, but for emergencies instead of medical records."

"Exactly! But emergency dispatch has some unique challenges that showcase different ways to use Maps and Sets," Elena explained. "Let me show you how we handle **frequency counting**, **fast lookups**, **deduplication**, and **caching** in real emergency situations."

## Frequency Counting: Tracking Incident Hotspots

Elena opened a dashboard showing a heat map of the city with various colored zones. "One of our most important tools is tracking where incidents happen most frequently. This helps us position ambulances and fire trucks strategically."

"How does that work?" Jake asked, leaning forward with interest.

"We use Maps for **frequency counting**," Elena explained, pulling up a code window. "Every time an incident occurs, we increment a counter for that neighborhood. Watch this:"

\`\`\`javascript
class IncidentTracker {
  constructor() {
    this.incidentCounts = new Map();
    this.hourlyPatterns = new Map();
  }
  
  recordIncident(neighborhood, hour, incidentType) {
    // Count incidents by neighborhood
    if (this.incidentCounts.has(neighborhood)) {
      this.incidentCounts.set(neighborhood, this.incidentCounts.get(neighborhood) + 1);
    } else {
      this.incidentCounts.set(neighborhood, 1);
    }
    
    // Track hourly patterns
    const hourKey = \`\${hour}:\${incidentType}\`;
    if (this.hourlyPatterns.has(hourKey)) {
      this.hourlyPatterns.set(hourKey, this.hourlyPatterns.get(hourKey) + 1);
    } else {
      this.hourlyPatterns.set(hourKey, 1);
    }
  }
  
  getHotspots() {
    // Find neighborhoods with highest incident counts
    const hotspots = [];
    for (const [neighborhood, count] of this.incidentCounts) {
      if (count > 10) { // Threshold for hotspot
        hotspots.push({ neighborhood, count });
      }
    }
    return hotspots.sort((a, b) => b.count - a.count);
  }
  
  getPeakHours(incidentType) {
    const peakHours = [];
    for (const [hourKey, count] of this.hourlyPatterns) {
      const [hour, type] = hourKey.split(':');
      if (type === incidentType) {
        peakHours.push({ hour: parseInt(hour), count });
      }
    }
    return peakHours.sort((a, b) => b.count - a.count);
  }
}
\`\`\`

"This is brilliant!" Jake exclaimed. "So instead of searching through thousands of incident reports every time we want to know which areas are busiest, the Map gives us instant access to the counts."

"Exactly. And notice how we're using the Map for two different types of frequency counting - by neighborhood and by hour-incident type combinations. This helps us make data-driven decisions about where to position our resources."

## ⏱️ Jake's First Challenge!

Elena opened a coding environment on Jake's computer. "Let's see if you can implement frequency counting for our dispatch system. I want you to track how many times each type of emergency occurs."

"You mean like counting how many medical emergencies versus fire calls we get?" Jake asked.

"Precisely! This will help us understand our workload patterns and staff appropriately."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`recordEmergencyCall()\` to count different types of emergencies
- Use \`emergencyMap.set()\` and \`emergencyMap.get()\` operations
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge simulates what we do every shift," Elena explained. "We need to track emergency types so we can analyze patterns and improve our response strategies."

## Fast Lookups: Unit Status and Location Tracking

As they worked through the first challenge, Elena's radio crackled to life. "Dispatch, this is Unit 47. We're available and returning to base."

Elena quickly typed something into her computer, and Jake watched as the unit's status changed from "En Route" to "Available" on the main board.

"That's another perfect example of Map usage," Elena said. "We need **instant lookups** for unit status, location, and capabilities. With dozens of ambulances, fire trucks, and police units, we can't afford to search through lists."

\`\`\`javascript
class EmergencyUnitTracker {
  constructor() {
    this.unitStatus = new Map();
    this.unitLocations = new Map();
    this.unitCapabilities = new Map();
  }
  
  registerUnit(unitId, capabilities, initialLocation) {
    this.unitStatus.set(unitId, 'Available');
    this.unitLocations.set(unitId, initialLocation);
    this.unitCapabilities.set(unitId, capabilities);
  }
  
  dispatchUnit(unitId, incidentLocation) {
    if (this.unitStatus.get(unitId) === 'Available') {
      this.unitStatus.set(unitId, 'Dispatched');
      this.unitLocations.set(unitId, incidentLocation);
      return true;
    }
    return false;
  }
  
  findAvailableUnits(requiredCapability) {
    const availableUnits = [];
    
    for (const [unitId, status] of this.unitStatus) {
      if (status === 'Available') {
        const capabilities = this.unitCapabilities.get(unitId);
        if (capabilities.includes(requiredCapability)) {
          availableUnits.push({
            unitId,
            location: this.unitLocations.get(unitId),
            capabilities
          });
        }
      }
    }
    
    return availableUnits;
  }
  
  getUnitInfo(unitId) {
    if (!this.unitStatus.has(unitId)) {
      return null;
    }
    
    return {
      status: this.unitStatus.get(unitId),
      location: this.unitLocations.get(unitId),
      capabilities: this.unitCapabilities.get(unitId)
    };
  }
}
\`\`\`

"See how we're using multiple Maps to track different aspects of each unit?" Elena pointed out. "This gives us O(1) lookup time for any unit's status, location, or capabilities. When seconds count in an emergency, this speed is crucial."

## Deduplication with Sets: Managing Duplicate Reports

Just then, Jake's phone rang with another emergency call. As he took down the details, Elena noticed something on her screen.

"Jake, hold on," Elena said, putting her hand up. "I'm seeing multiple calls coming in for the same incident - apartment fire on Maple Street. This happens all the time when neighbors all call about the same emergency."

Elena pulled up another system interface. "This is where **Sets** become invaluable for **deduplication**. We need to make sure we don't send multiple units to the same incident just because we got multiple calls."

\`\`\`javascript
class DuplicateCallFilter {
  constructor() {
    this.reportedIncidents = new Set();
    this.activeIncidents = new Map();
  }
  
  processEmergencyCall(location, incidentType, callerPhone) {
    // Create a unique identifier for the incident
    const incidentKey = \`\${location}:\${incidentType}\`;
    
    // Check if we've already received a report for this incident
    if (this.reportedIncidents.has(incidentKey)) {
      console.log('Duplicate call detected - incident already reported');
      return { isDuplicate: true, incidentId: null };
    }
    
    // This is a new incident
    this.reportedIncidents.add(incidentKey);
    const incidentId = \`INC-\${Date.now()}\`;
    
    this.activeIncidents.set(incidentId, {
      location,
      incidentType,
      reportedBy: callerPhone,
      timestamp: new Date(),
      status: 'Reported'
    });
    
    return { isDuplicate: false, incidentId };
  }
  
  resolveIncident(incidentId) {
    if (this.activeIncidents.has(incidentId)) {
      const incident = this.activeIncidents.get(incidentId);
      const incidentKey = \`\${incident.location}:\${incident.incidentType}\`;
      
      // Remove from active tracking
      this.activeIncidents.delete(incidentId);
      this.reportedIncidents.delete(incidentKey);
      
      return true;
    }
    return false;
  }
  
  getUniqueIncidentTypes() {
    const incidentTypes = new Set();
    
    for (const incident of this.activeIncidents.values()) {
      incidentTypes.add(incident.incidentType);
    }
    
    return [...incidentTypes];
  }
}
\`\`\`

"This is amazing," Jake said, studying the code. "So the Set automatically prevents us from processing the same incident twice, even if we get ten calls about it?"

"Exactly! And notice how we're using both a Set for deduplication and a Map for storing the full incident details. Each data structure serves its specific purpose perfectly."

## ⏱️ Jake's Second Challenge!

Elena pulled up another coding challenge. "Now let's test your understanding of deduplication. I want you to implement a system that tracks which hospitals we've contacted about bed availability."

"Why is that important?" Jake asked.

"During major incidents, we need to find available hospital beds quickly. But we don't want to call the same hospital multiple times in a short period - that wastes precious time and annoys the hospital staff."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`contactHospital()\` to track which hospitals have been contacted
- Use a Set to prevent duplicate contacts within a time window
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

## Caching for Performance: Response Time Optimization

As Jake worked on the second challenge, Elena pulled up another screen showing response time analytics. "Here's something that really showcases the power of Maps for **caching**," she said.

"We calculate optimal routes to incident locations constantly, but route calculations are expensive - they involve complex algorithms considering traffic, road closures, and unit locations. So we cache the results."

\`\`\`javascript
class RouteCache {
  constructor(maxCacheSize = 1000, cacheTimeoutMs = 300000) { // 5 minutes
    this.cache = new Map();
    this.maxCacheSize = maxCacheSize;
    this.cacheTimeoutMs = cacheTimeoutMs;
  }
  
  getCachedRoute(fromLocation, toLocation) {
    const routeKey = \`\${fromLocation}->\${toLocation}\`;
    
    if (this.cache.has(routeKey)) {
      const cachedData = this.cache.get(routeKey);
      
      // Check if cache entry is still valid
      if (Date.now() - cachedData.timestamp < this.cacheTimeoutMs) {
        console.log('Cache hit - returning cached route');
        return cachedData.route;
      } else {
        // Cache expired, remove it
        this.cache.delete(routeKey);
      }
    }
    
    return null; // Cache miss
  }
  
  cacheRoute(fromLocation, toLocation, route) {
    const routeKey = \`\${fromLocation}->\${toLocation}\`;
    
    // If cache is full, remove oldest entry
    if (this.cache.size >= this.maxCacheSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    
    this.cache.set(routeKey, {
      route: route,
      timestamp: Date.now()
    });
    
    console.log(\`Cached route from \${fromLocation} to \${toLocation}\`);
  }
  
  calculateOptimalRoute(fromLocation, toLocation) {
    // First check cache
    const cachedRoute = this.getCachedRoute(fromLocation, toLocation);
    if (cachedRoute) {
      return cachedRoute;
    }
    
    // Simulate expensive route calculation
    console.log('Calculating new route (expensive operation)...');
    const route = {
      distance: Math.random() * 20 + 5, // 5-25 miles
      estimatedTime: Math.random() * 30 + 10, // 10-40 minutes
      waypoints: [\`\${fromLocation}\`, 'Intersection A', 'Main St', \`\${toLocation}\`]
    };
    
    // Cache the result
    this.cacheRoute(fromLocation, toLocation, route);
    
    return route;
  }
  
  clearExpiredEntries() {
    const now = Date.now();
    const expiredKeys = [];
    
    for (const [key, data] of this.cache) {
      if (now - data.timestamp >= this.cacheTimeoutMs) {
        expiredKeys.push(key);
      }
    }
    
    expiredKeys.forEach(key => this.cache.delete(key));
    console.log(\`Cleared \${expiredKeys.length} expired cache entries\`);
  }
}
\`\`\`

"This is incredible," Jake said, watching the cache in action. "So if we need to send multiple units to the same area, we don't have to recalculate the route every time?"

"Exactly! The first calculation is expensive, but subsequent lookups are instant. During a major incident where we're dispatching multiple units to the same location, this can save crucial seconds."

## ⏱️ Jake's Third Challenge!

Elena opened one final coding challenge. "Now let's put it all together. I want you to implement a system that combines frequency counting, fast lookups, and deduplication to manage our equipment inventory."

"Equipment inventory?" Jake asked.

"Yes! We need to track which equipment each unit carries, count how often different equipment types are used, and make sure we don't double-assign the same equipment to multiple units."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement \`assignEquipment()\`, \`trackEquipmentUsage()\`, and \`getAvailableEquipment()\`
- Use Maps for fast lookups and frequency counting
- Use Sets to prevent duplicate assignments
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

## Real-World Impact: When Data Structures Save Lives

As Jake completed the final challenge, Elena leaned back in her chair with a satisfied smile. "You know, Jake, what we've learned tonight isn't just about programming concepts. These data structures directly impact our ability to save lives."

She pulled up some statistics on her screen. "Since we implemented these Map and Set-based systems, our average response time has decreased by 23%. We've eliminated duplicate dispatches by 89%. And our resource allocation efficiency has improved by 34%."

"That's amazing," Jake said, looking at the numbers with new appreciation. "I never realized that choosing the right data structure could have such a real-world impact."

"That's the power of understanding when and how to use Maps and Sets," Elena explained. "Maps give us instant access to critical information - unit status, incident details, cached routes. Sets help us maintain data integrity by preventing duplicates and tracking unique items. Together, they create systems that are both fast and reliable."

## Key Applications We've Explored

Elena pulled out a notepad and summarized what they'd learned:

### Maps Excel At:
- **Frequency Counting**: Tracking incident patterns, equipment usage, call volumes
- **Fast Lookups**: Unit status, incident details, hospital information
- **Caching**: Route calculations, database queries, API responses
- **Grouping Data**: Incidents by neighborhood, units by capability, calls by hour

### Sets Excel At:
- **Deduplication**: Preventing duplicate incident reports, avoiding repeat hospital contacts
- **Uniqueness Tracking**: Equipment assignments, contacted resources, covered areas
- **Membership Testing**: Checking if a unit has specific capabilities, if an area has been covered
- **Data Analysis**: Finding unique incident types, identifying distinct neighborhoods

## Looking Ahead: Building Our Own Data Structures

"Tomorrow," Elena said as they prepared to wrap up their shift, "we're going to dive deeper into how these data structures actually work internally. Our IT department is building a custom dispatch system, and they want us to understand how to implement our own Map and Set structures."

"You mean we're going to build Maps and Sets from scratch?" Jake asked, his eyes lighting up with excitement.

"Exactly! Understanding how hash tables work, how collision resolution happens, and how to optimize for our specific use cases. It's going to be fascinating."

As the night shift came to an end and the morning crew began arriving, Jake felt a sense of accomplishment. What had started as a overwhelming night of emergency calls had turned into a deep understanding of how the right data structures could transform chaos into organized, efficient systems.

"Elena," Jake said as they gathered their things, "I never thought I'd say this, but I'm actually excited about hash tables and collision resolution."

Elena laughed. "That's the wonderful thing about working in emergency services, Jake. Every system we build, every optimization we make, has the potential to help save lives. Tomorrow, we'll discover how to build these life-saving data structures from the ground up."

## Key Takeaways

By the end of their shift, Jake had learned that:

- **Maps are perfect for frequency counting** - tracking patterns in emergency calls, equipment usage, and incident locations
- **Fast lookups with Maps save critical time** - instant access to unit status, incident details, and cached information
- **Sets prevent costly duplicates** - avoiding duplicate dispatches, repeat hospital contacts, and double equipment assignments
- **Caching with Maps optimizes performance** - storing expensive route calculations and database queries
- **Combining Maps and Sets creates powerful systems** - each data structure serves its specific purpose in complex applications
- **Real-world applications have measurable impact** - proper data structure choice directly affects response times and system efficiency
- **Understanding use cases guides implementation** - knowing when to use Maps vs Sets vs other data structures is crucial for system design

Through hands-on coding challenges, Jake discovered that Maps and Sets aren't just abstract programming concepts - they're practical tools that power the systems that keep communities safe and help save lives every day.`,
  exercise: {
    starterCode: `/*
Problem: Emergency Dispatch System - Real-World Map and Set Applications

Elena has shown you how Maps and Sets power emergency dispatch systems.
Your job is to implement the core functionality that keeps communities safe!

Available Operations:
Maps: set(), get(), has(), delete(), size, clear()
Sets: add(), has(), delete(), size, clear()

Complete the functions below to help Jake manage emergency operations!
*/

// ⏱️ Jake's First Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function recordEmergencyCall(emergencyTracker, emergencyType) {
  // Track frequency of different emergency types
  // Use Map operations to count how many times each type occurs
  
  // TODO: Implement frequency counting using Map operations
  // Hint: Check if emergencyType exists, then increment or set to 1
  
  console.log(\`Recorded \${emergencyType} emergency call\`);
}

function getEmergencyStats(emergencyTracker) {
  // Return statistics about emergency call frequencies
  // Return an object with type and count for each emergency type
  
  const stats = [];
  
  // TODO: Convert Map entries to array of {type, count} objects
  // Hint: Use for...of loop with emergencyTracker entries
  
  return stats.sort((a, b) => b.count - a.count); // Sort by frequency
}
*/

// ⏱️ Jake's Second Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function contactHospital(hospitalContacts, hospitalName, currentTime) {
  // Track which hospitals have been contacted recently
  // Prevent duplicate contacts within 10 minutes (600000 ms)
  
  const timeWindow = 600000; // 10 minutes in milliseconds
  
  // TODO: Check if hospital was contacted recently
  // If yes, return false (don't contact again)
  // If no, add to contacts and return true
  // Hint: Store timestamp with hospital name, check time difference
  
  return false; // Replace with actual implementation
}

function getRecentContacts(hospitalContacts, currentTime) {
  // Get list of hospitals contacted in the last 10 minutes
  // Return array of hospital names
  
  const timeWindow = 600000; // 10 minutes
  const recentContacts = [];
  
  // TODO: Filter contacts by time window
  // Hint: Check timestamp difference for each contact
  
  return recentContacts;
}
*/

// ⏱️ Jake's Third Challenge!
// 🔓 Uncomment the below code section and implement the required logic:

/*
function assignEquipment(equipmentAssignments, equipmentUsage, unitId, equipmentType) {
  // Assign equipment to a unit and track usage
  // Prevent duplicate assignments of the same equipment
  
  // TODO: Check if equipment is already assigned
  // If not assigned, assign to unit and increment usage count
  // Return true if successful, false if already assigned
  
  return false; // Replace with actual implementation
}

function getAvailableEquipment(equipmentAssignments, allEquipment) {
  // Find equipment that is not currently assigned
  // allEquipment is an array of all equipment types
  // Return array of available equipment
  
  const available = [];
  
  // TODO: Find equipment not in assignments
  // Hint: Check if each equipment type is in the assignments Set
  
  return available;
}

function getEquipmentUsageStats(equipmentUsage) {
  // Get usage statistics for all equipment types
  // Return array of {equipment, usageCount} objects sorted by usage
  
  const stats = [];
  
  // TODO: Convert usage Map to stats array
  // Hint: Similar to getEmergencyStats but for equipment
  
  return stats.sort((a, b) => b.usageCount - a.usageCount);
}
*/`,
    solution: `
/*
Problem: Emergency Dispatch System - Real-World Map and Set Applications

Complete solution showing how to use Maps and Sets for emergency dispatch operations.
*/

function recordEmergencyCall(emergencyTracker, emergencyType) {
  // Track frequency of different emergency types
  if (emergencyTracker.has(emergencyType)) {
    emergencyTracker.set(emergencyType, emergencyTracker.get(emergencyType) + 1);
  } else {
    emergencyTracker.set(emergencyType, 1);
  }
  console.log(\`Recorded \${emergencyType} emergency call\`);
}

function getEmergencyStats(emergencyTracker) {
  // Return statistics about emergency call frequencies
  const stats = [];
  
  for (const [type, count] of emergencyTracker) {
    stats.push({ type, count });
  }
  
  return stats.sort((a, b) => b.count - a.count);
}

function contactHospital(hospitalContacts, hospitalName, currentTime) {
  // Track which hospitals have been contacted recently
  const timeWindow = 600000; // 10 minutes in milliseconds
  
  if (hospitalContacts.has(hospitalName)) {
    const lastContact = hospitalContacts.get(hospitalName);
    if (currentTime - lastContact < timeWindow) {
      return false; // Too recent, don't contact again
    }
  }
  
  hospitalContacts.set(hospitalName, currentTime);
  return true;
}

function getRecentContacts(hospitalContacts, currentTime) {
  // Get list of hospitals contacted in the last 10 minutes
  const timeWindow = 600000;
  const recentContacts = [];
  
  for (const [hospitalName, contactTime] of hospitalContacts) {
    if (currentTime - contactTime < timeWindow) {
      recentContacts.push(hospitalName);
    }
  }
  
  return recentContacts;
}

function assignEquipment(equipmentAssignments, equipmentUsage, unitId, equipmentType) {
  // Assign equipment to a unit and track usage
  if (equipmentAssignments.has(equipmentType)) {
    return false; // Already assigned
  }
  
  equipmentAssignments.add(equipmentType);
  
  // Track usage
  if (equipmentUsage.has(equipmentType)) {
    equipmentUsage.set(equipmentType, equipmentUsage.get(equipmentType) + 1);
  } else {
    equipmentUsage.set(equipmentType, 1);
  }
  
  return true;
}

function getAvailableEquipment(equipmentAssignments, allEquipment) {
  // Find equipment that is not currently assigned
  const available = [];
  
  for (const equipment of allEquipment) {
    if (!equipmentAssignments.has(equipment)) {
      available.push(equipment);
    }
  }
  
  return available;
}

function getEquipmentUsageStats(equipmentUsage) {
  // Get usage statistics for all equipment types
  const stats = [];
  
  for (const [equipment, usageCount] of equipmentUsage) {
    stats.push({ equipment, usageCount });
  }
  
  return stats.sort((a, b) => b.usageCount - a.usageCount);
}`,
    tests: [
      {
        name: "Test emergency call frequency tracking",
        test: (code) => {
          try {
            const testCode = code + `
            // Test emergency call tracking
            const emergencyTracker = new Map();
            
            let recordResult1 = false;
            let recordResult2 = false;
            let recordResult3 = false;
            let stats = [];
            
            if (typeof recordEmergencyCall === 'function') {
              try {
                recordEmergencyCall(emergencyTracker, 'Medical');
                recordResult1 = true;
              } catch (e) { recordResult1 = false; }
              
              try {
                recordEmergencyCall(emergencyTracker, 'Fire');
                recordResult2 = true;
              } catch (e) { recordResult2 = false; }
              
              try {
                recordEmergencyCall(emergencyTracker, 'Medical'); // Duplicate type
                recordResult3 = true;
              } catch (e) { recordResult3 = false; }
            }
            
            if (typeof getEmergencyStats === 'function') {
              stats = getEmergencyStats(emergencyTracker);
            }
            
            return ({
              mapSize: emergencyTracker.size,
              medicalCount: emergencyTracker.get('Medical'),
              fireCount: emergencyTracker.get('Fire'),
              stats: stats,
              recordResults: [recordResult1, recordResult2, recordResult3]
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (!testResult.recordResults[0]) {
              return new TestResult({ passed: false, message: "recordEmergencyCall function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.mapSize !== 2) {
              return new TestResult({ passed: false, message: "recordEmergencyCall should track unique emergency types" });
            }
            
            if (testResult.medicalCount !== 2) {
              return new TestResult({ passed: false, message: "recordEmergencyCall should increment count for duplicate types" });
            }
            
            if (testResult.fireCount !== 1) {
              return new TestResult({ passed: false, message: "recordEmergencyCall should set count to 1 for new types" });
            }
            
            if (!testResult.stats || testResult.stats.length !== 2) {
              return new TestResult({ passed: false, message: "getEmergencyStats should return stats for all emergency types" });
            }
            
            if (testResult.stats[0].type !== 'Medical' || testResult.stats[0].count !== 2) {
              return new TestResult({ passed: false, message: "getEmergencyStats should sort by frequency (Medical should be first with count 2)" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Emergency call tracking should count frequencies correctly and provide sorted statistics."
      },
      {
        name: "Test hospital contact deduplication",
        test: (code) => {
          try {
            const testCode = code + `
            // Test hospital contact tracking
            const hospitalContacts = new Map();
            const currentTime = Date.now();
            
            let contact1 = false;
            let contact2 = false;
            let contact3 = false;
            let recentContacts = [];
            
            if (typeof contactHospital === 'function') {
              contact1 = contactHospital(hospitalContacts, 'General Hospital', currentTime);
              contact2 = contactHospital(hospitalContacts, 'General Hospital', currentTime + 300000); // 5 min later
              contact3 = contactHospital(hospitalContacts, 'City Medical', currentTime);
            }
            
            if (typeof getRecentContacts === 'function') {
              recentContacts = getRecentContacts(hospitalContacts, currentTime + 300000);
            }
            
            return ({
              contact1: contact1,
              contact2: contact2,
              contact3: contact3,
              recentContacts: recentContacts.sort()
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.contact1 === 'undefined') {
              return new TestResult({ passed: false, message: "contactHospital function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.contact1 !== true) {
              return new TestResult({ passed: false, message: "contactHospital should return true for first contact with hospital" });
            }
            
            if (testResult.contact2 !== false) {
              return new TestResult({ passed: false, message: "contactHospital should return false for duplicate contact within time window" });
            }
            
            if (testResult.contact3 !== true) {
              return new TestResult({ passed: false, message: "contactHospital should return true for different hospital" });
            }
            
            if (!testResult.recentContacts || testResult.recentContacts.length !== 2) {
              return new TestResult({ passed: false, message: "getRecentContacts should return all hospitals contacted within time window" });
            }
            
            const expectedContacts = ['City Medical', 'General Hospital'];
            if (!expectedContacts.every(hospital => testResult.recentContacts.includes(hospital))) {
              return new TestResult({ passed: false, message: "getRecentContacts should include both contacted hospitals" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Hospital contact tracking should prevent duplicates within time window and track recent contacts."
      },
      {
        name: "Test equipment assignment and usage tracking",
        test: (code) => {
          try {
            const testCode = code + `
            // Test equipment assignment and usage
            const equipmentAssignments = new Set();
            const equipmentUsage = new Map();
            const allEquipment = ['Defibrillator', 'Oxygen Tank', 'Stretcher', 'First Aid Kit'];
            
            let assign1 = false;
            let assign2 = false;
            let assign3 = false;
            let available = [];
            let usageStats = [];
            
            if (typeof assignEquipment === 'function') {
              assign1 = assignEquipment(equipmentAssignments, equipmentUsage, 'Unit-1', 'Defibrillator');
              assign2 = assignEquipment(equipmentAssignments, equipmentUsage, 'Unit-2', 'Defibrillator'); // Duplicate
              assign3 = assignEquipment(equipmentAssignments, equipmentUsage, 'Unit-1', 'Oxygen Tank');
            }
            
            if (typeof getAvailableEquipment === 'function') {
              available = getAvailableEquipment(equipmentAssignments, allEquipment);
            }
            
            if (typeof getEquipmentUsageStats === 'function') {
              usageStats = getEquipmentUsageStats(equipmentUsage);
            }
            
            return ({
              assign1: assign1,
              assign2: assign2,
              assign3: assign3,
              assignmentsSize: equipmentAssignments.size,
              available: available.sort(),
              usageStats: usageStats,
              defibrillatorUsage: equipmentUsage.get('Defibrillator'),
              oxygenUsage: equipmentUsage.get('Oxygen Tank')
            });
            `;
            
            const testResult = new Function(testCode)();
            
            if (typeof testResult.assign1 === 'undefined') {
              return new TestResult({ passed: false, message: "assignEquipment function not found. Make sure to uncomment and implement it." });
            }
            
            if (testResult.assign1 !== true) {
              return new TestResult({ passed: false, message: "assignEquipment should return true for first assignment" });
            }
            
            if (testResult.assign2 !== false) {
              return new TestResult({ passed: false, message: "assignEquipment should return false for duplicate assignment" });
            }
            
            if (testResult.assign3 !== true) {
              return new TestResult({ passed: false, message: "assignEquipment should return true for different equipment" });
            }
            
            if (testResult.assignmentsSize !== 2) {
              return new TestResult({ passed: false, message: "Equipment assignments should track unique equipment only" });
            }
            
            const expectedAvailable = ['First Aid Kit', 'Stretcher'];
            if (!testResult.available || testResult.available.length !== 2 ||
                !expectedAvailable.every(item => testResult.available.includes(item))) {
              return new TestResult({ passed: false, message: "getAvailableEquipment should return unassigned equipment" });
            }
            
            if (testResult.defibrillatorUsage !== 1) {
              return new TestResult({ passed: false, message: "assignEquipment should track usage count (Defibrillator should have count 1)" });
            }
            
            if (testResult.oxygenUsage !== 1) {
              return new TestResult({ passed: false, message: "assignEquipment should track usage count (Oxygen Tank should have count 1)" });
            }
            
            if (!testResult.usageStats || testResult.usageStats.length !== 2) {
              return new TestResult({ passed: false, message: "getEquipmentUsageStats should return stats for all used equipment" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "Equipment assignment should prevent duplicates, track usage, and identify available equipment."
      },
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Real-World Applications Questions</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answers="Frequency counting for incident patterns,Fast lookups for unit status,Caching expensive route calculations"
              >
                <p>
                  Which of the following are ideal use cases for Maps in emergency dispatch systems?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Frequency counting for incident patterns"
                  />{" "}
                  📊 Frequency counting for incident patterns
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Maintaining emergency call queue order"
                  />{" "}
                  📞 Maintaining emergency call queue order
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Fast lookups for unit status"
                  />{" "}
                  🚑 Fast lookups for unit status
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Storing unique equipment types only"
                  />{" "}
                  🛠️ Storing unique equipment types only
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Caching expensive route calculations"
                  />{" "}
                  🗺️ Caching expensive route calculations
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Preventing duplicate incident reports" /> 🚨
                  Preventing duplicate incident reports
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  <ul>
                    <li>
                      <strong>Frequency counting:</strong> ✅ Correct — Maps excel at counting occurrences with key-value pairs.
                    </li>
                    <li>
                      <strong>Call queue order:</strong> ❌ Incorrect — This requires FIFO ordering (Queue), not key-value mapping.
                    </li>
                    <li>
                      <strong>Fast lookups:</strong> ✅ Correct — Maps provide O(1) access to unit information by ID.
                    </li>
                    <li>
                      <strong>Unique equipment types:</strong> ❌ Incorrect — This only needs uniqueness (Set), not key-value pairs.
                    </li>
                    <li>
                      <strong>Caching calculations:</strong> ✅ Correct — Maps store expensive computations for reuse.
                    </li>
                    <li>
                      <strong>Preventing duplicates:</strong> ❌ Incorrect — This is a Set use case for uniqueness.
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className="question"
                data-answers="Preventing duplicate equipment assignments,Tracking unique incident locations,Deduplicating emergency calls"
              >
                <p>
                  Which scenarios are best solved using Sets in emergency systems?
                </p>

                <label>
                  <input
                    type="checkbox"
                    value="Preventing duplicate equipment assignments"
                  />{" "}
                  🛠️ Preventing duplicate equipment assignments
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Storing unit ID to status mappings"
                  />{" "}
                  🚑 Storing unit ID to status mappings
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Tracking unique incident locations"
                  />{" "}
                  📍 Tracking unique incident locations
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Counting frequency of emergency types"
                  />{" "}
                  📊 Counting frequency of emergency types
                </label>
                <br />
                <label>
                  <input
                    type="checkbox"
                    value="Deduplicating emergency calls"
                  />{" "}
                  📞 Deduplicating emergency calls
                </label>
                <br />
                <label>
                  <input type="checkbox" value="Caching route calculations" /> 🗺️
                  Caching route calculations
                </label>
                <div className="feedback"></div>
                <div className="explanation">
                  Sets are perfect for maintaining uniqueness and preventing duplicates.
                  They excel at equipment assignment tracking, location deduplication,
                  and call filtering - all scenarios where we only care about whether
                  something exists, not additional associated data.
                </div>
              </div>

              <div className="question" data-answer="O(1)">
                <p>
                  What is the average time complexity for Map operations like frequency counting
                  and fast lookups in emergency dispatch systems?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Map operations (get, set, has) are O(1) constant time on average,
                  making them ideal for emergency systems where every second counts.
                  This consistent performance regardless of data size is crucial for
                  life-critical applications.
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