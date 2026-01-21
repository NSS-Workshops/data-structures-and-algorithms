export default [
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
]