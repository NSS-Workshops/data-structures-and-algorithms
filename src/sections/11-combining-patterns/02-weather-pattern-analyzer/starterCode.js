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