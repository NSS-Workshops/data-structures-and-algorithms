# Real-World Applications - The Emergency Response System

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
    const hourKey = `${hour}:${incidentType}`;
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

## Fast Lookups: Unit Status Management

"Now let me show you how we track our emergency units," Elena continued, opening another system. "We have ambulances, fire trucks, and police units all over the city, and we need to know their status instantly."

```javascript
class UnitManager {
  constructor() {
    this.unitStatus = new Map();
    this.availableUnits = new Set();
    this.busyUnits = new Set();
    this.unitLocations = new Map();
  }
  
  addUnit(unitId, location, type) {
    this.unitStatus.set(unitId, {
      type: type,
      status: 'available',
      location: location,
      lastUpdate: new Date()
    });
    this.availableUnits.add(unitId);
    this.unitLocations.set(unitId, location);
  }
  
  assignUnit(unitId, incidentId) {
    if (this.availableUnits.has(unitId)) {
      // Move from available to busy
      this.availableUnits.delete(unitId);
      this.busyUnits.add(unitId);
      
      // Update status
      const unit = this.unitStatus.get(unitId);
      unit.status = 'busy';
      unit.assignedIncident = incidentId;
      unit.lastUpdate = new Date();
    }
  }
  
  releaseUnit(unitId) {
    if (this.busyUnits.has(unitId)) {
      // Move from busy to available
      this.busyUnits.delete(unitId);
      this.availableUnits.add(unitId);
      
      // Update status
      const unit = this.unitStatus.get(unitId);
      unit.status = 'available';
      delete unit.assignedIncident;
      unit.lastUpdate = new Date();
    }
  }
  
  findNearestAvailableUnit(location, unitType) {
    const availableOfType = [];
    
    for (const unitId of this.availableUnits) {
      const unit = this.unitStatus.get(unitId);
      if (unit.type === unitType) {
        const distance = this.calculateDistance(location, unit.location);
        availableOfType.push({ unitId, distance });
      }
    }
    
    // Sort by distance and return closest
    availableOfType.sort((a, b) => a.distance - b.distance);
    return availableOfType.length > 0 ? availableOfType[0].unitId : null;
  }
  
  calculateDistance(loc1, loc2) {
    // Simplified distance calculation
    return Math.abs(loc1.x - loc2.x) + Math.abs(loc1.y - loc2.y);
  }
  
  getSystemStatus() {
    return {
      totalUnits: this.unitStatus.size,
      available: this.availableUnits.size,
      busy: this.busyUnits.size,
      utilizationRate: (this.busyUnits.size / this.unitStatus.size) * 100
    };
  }
}
```

"See how we're using both Maps and Sets together?" Elena pointed out. "The Map stores detailed unit information, while the Sets give us instant access to available and busy units. No searching required!"

## Deduplication: Preventing Duplicate Calls

"One of our biggest challenges," Elena continued, "is handling duplicate emergency calls. When there's a major incident, we might get 10 calls about the same car accident."

```javascript
class CallDeduplicator {
  constructor() {
    this.activeIncidents = new Set();
    this.incidentDetails = new Map();
    this.duplicateCallCount = new Map();
  }
  
  processCall(location, incidentType, description) {
    // Create a unique identifier for this type of incident at this location
    const incidentKey = `${location.street}-${incidentType}`;
    
    if (this.activeIncidents.has(incidentKey)) {
      // This is likely a duplicate call
      const currentCount = this.duplicateCallCount.get(incidentKey) || 0;
      this.duplicateCallCount.set(incidentKey, currentCount + 1);
      
      console.log(`Duplicate call detected for ${incidentType} at ${location.street}`);
      return { isDuplicate: true, originalIncident: this.incidentDetails.get(incidentKey) };
    } else {
      // This is a new incident
      const incidentId = this.generateIncidentId();
      const incident = {
        id: incidentId,
        location: location,
        type: incidentType,
        description: description,
        timestamp: new Date(),
        status: 'active'
      };
      
      this.activeIncidents.add(incidentKey);
      this.incidentDetails.set(incidentKey, incident);
      this.duplicateCallCount.set(incidentKey, 1);
      
      return { isDuplicate: false, incident: incident };
    }
  }
  
  resolveIncident(incidentKey) {
    this.activeIncidents.delete(incidentKey);
    const incident = this.incidentDetails.get(incidentKey);
    if (incident) {
      incident.status = 'resolved';
      incident.resolvedAt = new Date();
    }
  }
  
  generateIncidentId() {
    return 'INC-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5);
  }
  
  getDuplicateStats() {
    const stats = [];
    for (const [incidentKey, count] of this.duplicateCallCount) {
      if (count > 1) {
        stats.push({ incident: incidentKey, duplicateCalls: count - 1 });
      }
    }
    return stats.sort((a, b) => b.duplicateCalls - a.duplicateCalls);
  }
}
```

"This system saves us so much time," Elena explained. "Instead of dispatching multiple units to the same incident, we can identify duplicates instantly and focus our resources where they're really needed."

## Caching: Hospital Capacity Management

"Finally, let me show you how we cache hospital information," Elena said, opening the hospital management system. "We need to know which hospitals have available beds, but we can't call every hospital for every ambulance."

```javascript
class HospitalCapacityCache {
  constructor() {
    this.capacityCache = new Map();
    this.lastUpdated = new Map();
    this.cacheTimeout = 5 * 60 * 1000; // 5 minutes
  }
  
  updateHospitalCapacity(hospitalId, capacity) {
    this.capacityCache.set(hospitalId, capacity);
    this.lastUpdated.set(hospitalId, new Date());
  }
  
  getHospitalCapacity(hospitalId) {
    const lastUpdate = this.lastUpdated.get(hospitalId);
    const now = new Date();
    
    // Check if cache is still valid
    if (lastUpdate && (now - lastUpdate) < this.cacheTimeout) {
      return this.capacityCache.get(hospitalId);
    } else {
      // Cache expired, need to refresh
      return null;
    }
  }
  
  findAvailableHospitals(requiredCapacity = 1) {
    const available = [];
    const now = new Date();
    
    for (const [hospitalId, capacity] of this.capacityCache) {
      const lastUpdate = this.lastUpdated.get(hospitalId);
      
      // Only consider hospitals with fresh data
      if (lastUpdate && (now - lastUpdate) < this.cacheTimeout) {
        if (capacity.availableBeds >= requiredCapacity) {
          available.push({
            hospitalId: hospitalId,
            availableBeds: capacity.availableBeds,
            specialties: capacity.specialties
          });
        }
      }
    }
    
    return available.sort((a, b) => b.availableBeds - a.availableBeds);
  }
  
  invalidateCache(hospitalId) {
    this.capacityCache.delete(hospitalId);
    this.lastUpdated.delete(hospitalId);
  }
  
  getCacheStats() {
    const now = new Date();
    let fresh = 0;
    let stale = 0;
    
    for (const [hospitalId, lastUpdate] of this.lastUpdated) {
      if ((now - lastUpdate) < this.cacheTimeout) {
        fresh++;
      } else {
        stale++;
      }
    }
    
    return { fresh, stale, total: this.capacityCache.size };
  }
}
```

"This caching system is crucial," Elena explained. "We can't afford to wait for hospital capacity updates during an emergency. The Map gives us instant access to cached data, and we only refresh when necessary."

## Key Takeaways

By the end of the night shift, Jake had learned that Maps and Sets enable:

- **Frequency Counting** - Track incident patterns and hotspots for resource allocation
- **Fast Lookups** - Instant access to unit status and availability
- **Deduplication** - Prevent wasted resources on duplicate emergency calls  
- **Caching** - Store frequently accessed data for quick emergency decisions
- **Real-time Operations** - Handle high-volume, time-critical emergency dispatch
- **Data-driven Decisions** - Use patterns and statistics to optimize response
- **Resource Optimization** - Efficiently manage limited emergency resources
- **System Integration** - Combine Maps and Sets for complex emergency management

"Maps and Sets aren't just academic concepts," Elena concluded. "They're the foundation that keeps our emergency response system running smoothly and helps us save lives every day."

Ready to practice these real-world applications? Let's dive into the exercises!