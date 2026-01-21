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

```javascript
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
    const hourKey = `\${hour}:\${incidentType}`;
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
```

"This is brilliant!" Jake exclaimed. "So instead of searching through thousands of incident reports every time we want to know which areas are busiest, the Map gives us instant access to the counts."

"Exactly. And notice how we're using the Map for two different types of frequency counting - by neighborhood and by hour-incident type combinations. This helps us make data-driven decisions about where to position our resources."

## ⏱️ Jake's First Challenge!

Elena opened a coding environment on Jake's computer. "Let's see if you can implement frequency counting for our dispatch system. I want you to track how many times each type of emergency occurs."

"You mean like counting how many medical emergencies versus fire calls we get?" Jake asked.

"Precisely! This will help us understand our workload patterns and staff appropriately."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `recordEmergencyCall()` and `getEmergencyStats()` to count different types of emergencies
- Use `emergencyMap.set()` and `emergencyMap.get()` operations
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge simulates what we do every shift," Elena explained. "We need to track emergency types so we can analyze patterns and improve our response strategies."

## Fast Lookups: Unit Status and Location Tracking

As they worked through the first challenge, Elena's radio crackled to life. "Dispatch, this is Unit 47. We're available and returning to base."

Elena quickly typed something into her computer, and Jake watched as the unit's status changed from "En Route" to "Available" on the main board.

"That's another perfect example of Map usage," Elena said. "We need **instant lookups** for unit status, location, and capabilities. With dozens of ambulances, fire trucks, and police units, we can't afford to search through lists."

```javascript
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
```

"See how we're using multiple Maps to track different aspects of each unit?" Elena pointed out. "This gives us O(1) lookup time for any unit's status, location, or capabilities. When seconds count in an emergency, this speed is crucial."

## Deduplication with Sets: Managing Duplicate Reports

Just then, Jake's phone rang with another emergency call. As he took down the details, Elena noticed something on her screen.

"Jake, hold on," Elena said, putting her hand up. "I'm seeing multiple calls coming in for the same incident - apartment fire on Maple Street. This happens all the time when neighbors all call about the same emergency."

Elena pulled up another system interface. "This is where **Sets** become invaluable for **deduplication**. We need to make sure we don't send multiple units to the same incident just because we got multiple calls."

```javascript
class DuplicateCallFilter {
  constructor() {
    this.reportedIncidents = new Set();
    this.activeIncidents = new Map();
  }
  
  processEmergencyCall(location, incidentType, callerPhone) {
    // Create a unique identifier for the incident
    const incidentKey = `\${location}:\${incidentType}`;
    
    // Check if we've already received a report for this incident
    if (this.reportedIncidents.has(incidentKey)) {
      console.log('Duplicate call detected - incident already reported');
      return { isDuplicate: true, incidentId: null };
    }
    
    // This is a new incident
    this.reportedIncidents.add(incidentKey);
    const incidentId = `INC-\${Date.now()}`;
    
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
      const incidentKey = `\${incident.location}:\${incident.incidentType}`;
      
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
```

"This is amazing," Jake said, studying the code. "So the Set automatically prevents us from processing the same incident twice, even if we get ten calls about it?"

"Exactly! And notice how we're using both a Set for deduplication and a Map for storing the full incident details. Each data structure serves its specific purpose perfectly."

## ⏱️ Jake's Second Challenge!

Elena pulled up another coding challenge. "Now let's test your understanding of deduplication. I want you to implement a system that tracks which hospitals we've contacted about bed availability."

"Why is that important?" Jake asked.

"During major incidents, we need to find available hospital beds quickly. But we don't want to call the same hospital multiple times in a short period - that wastes precious time and annoys the hospital staff."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `contactHospital()` and `getRecentContacts()` to track which hospitals have been contacted
- Use a Set to prevent duplicate contacts within a time window
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

## Caching for Performance: Response Time Optimization

As Jake worked on the second challenge, Elena pulled up another screen showing response time analytics. "Here's something that really showcases the power of Maps for **caching**," she said.

"We calculate optimal routes to incident locations constantly, but route calculations are expensive - they involve complex algorithms considering traffic, road closures, and unit locations. So we cache the results."

```javascript
class RouteCache {
  constructor(maxCacheSize = 1000, cacheTimeoutMs = 300000) { // 5 minutes
    this.cache = new Map();
    this.maxCacheSize = maxCacheSize;
    this.cacheTimeoutMs = cacheTimeoutMs;
  }
  
  getCachedRoute(fromLocation, toLocation) {
    const routeKey = `\${fromLocation}->\${toLocation}`;
    
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
    const routeKey = `\${fromLocation}->\${toLocation}`;
    
    // If cache is full, remove oldest entry
    if (this.cache.size >= this.maxCacheSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    
    this.cache.set(routeKey, {
      route: route,
      timestamp: Date.now()
    });
    
    console.log(`Cached route from \${fromLocation} to \${toLocation}`);
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
      waypoints: [`\${fromLocation}`, 'Intersection A', 'Main St', `\${toLocation}`]
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
    console.log(`Cleared \${expiredKeys.length} expired cache entries`);
  }
}
```

"This is incredible," Jake said, watching the cache in action. "So if we need to send multiple units to the same area, we don't have to recalculate the route every time?"

"Exactly! The first calculation is expensive, but subsequent lookups are instant. During a major incident where we're dispatching multiple units to the same location, this can save crucial seconds."

## ⏱️ Jake's Third Challenge!

Elena opened one final coding challenge. "Now let's put it all together. I want you to implement a system that combines frequency counting, fast lookups, and deduplication to manage our equipment inventory."

"Equipment inventory?" Jake asked.

"Yes! We need to track which equipment each unit carries, count how often different equipment types are used, and make sure we don't double-assign the same equipment to multiple units."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement `assignEquipment()`, `trackEquipmentUsage()`, and `getAvailableEquipment()`
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
