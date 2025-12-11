# Global Cooling Crisis

Dr. Maya Patel stood before the massive wall of monitors at the Global Climate Research Institute, her breath visible in the frigid air despite the building's struggling heating system. Outside, snow fell in July across most of North America. The screens showed a terrifying reality: global temperatures had dropped 8°C in just two years, crop failures were causing mass starvation, and entire cities were being abandoned as they became uninhabitable.

"Every second, we receive over 50,000 data points," Maya explained to her new team of junior developers, all bundled in winter coats. "Temperature readings showing record lows, ice sheet expansion data, frozen ocean current measurements, and atmospheric particulate concentrations that are blocking sunlight. We're witnessing the fastest climate shift in human history — a new ice age is beginning, and we have maybe five years before most of the planet becomes uninhabitable."

She gestured to the screens showing red emergency alerts across continents.  
"London is experiencing -20°C in summer. Australia's wheat belt is frozen solid. The Amazon rainforest is dying from cold. Traditional farming has collapsed across 60% of the globe, and 2 billion people are facing starvation."

"Today, we're going to learn how to analyze weather patterns in data using Maps and Sets - two powerful data structures that will help us track and organize critical survival information.

## ⏱️ Challenge: WeatherPatternAnalyzer

Global Cooling has made temperature swings dangerous for field teams. You shall to build a system that tracks weather stations and flags any that show **significant temperature changes** (≥ 5° difference from their previous reading). This early warning system could save lives by alerting teams to dangerous weather patterns.

### 🎯 What You Need to Implement

You'll create a `WeatherPatternAnalyzer` class that combines **Maps** and **Sets** to efficiently track weather data:

**🗺️ Map Usage**: Store each station's data (latest temperature and reading count)
- Key: station ID (string)
- Value: `{ latestTemp: number, count: number }`

**🔢 Set Usage**: Track stations that have experienced significant changes
- Contains station IDs that had at least one temperature change ≥ 5°

### 📋 Required Methods

1. **`addTemperatureReading(stationId, temperature)`**
   - Add a new temperature reading for a station
   - If it's the first reading, just store it
   - If not the first, compare with previous temperature
   - If difference ≥ 5°, add station to significant changes set
   - Update the station's latest temperature and increment count

2. **`getSignificantChangeStations()`**
   - Return array of station IDs that had significant changes
   - **Must be in alphabetical order** (use Array.sort())

3. **`getStationData(stationId)`**
   - Return station's data: `{ latestTemp: number, count: number }`
   - Return `null` if station doesn't exist

4. **`getAllActiveStations()`**
   - Return a Set containing all station IDs that have data

5. **`getSystemSummary()`**
   - Return `{ stationCount: number, significantCount: number }`
   - stationCount: total stations with data
   - significantCount: stations with significant changes

### 💡 Implementation Tips

- Use `Map.get()` to check if a station exists
- Use `Math.abs()` to calculate temperature difference
- Remember to update both the Map and Set when appropriate
- The Set automatically handles duplicates - no need to check before adding

### 🧪 Example Usage
```javascript
const analyzer = new WeatherPatternAnalyzer();
analyzer.addTemperatureReading('STATION_001', 20); // First reading
analyzer.addTemperatureReading('STATION_001', 15); // 5° drop - significant!
analyzer.addTemperatureReading('STATION_002', 25); // First reading
analyzer.addTemperatureReading('STATION_002', 26); // 1° change - not significant

console.log(analyzer.getSignificantChangeStations()); // ['STATION_001']
console.log(analyzer.getSystemSummary()); // { stationCount: 2, significantCount: 1 }
```

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the `WeatherPatternAnalyzer` using Map and Set patterns.