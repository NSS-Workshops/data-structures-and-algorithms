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