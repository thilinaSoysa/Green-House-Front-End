export interface Plant {
    plantCode: string;
    plantName: string;
    plantType?: string;
    soilType?: string;
    temperatureRange?: string;
    humidityRange?: string;
    lightRequirement?: string;
    wateringFrequency?: string;
    lastUpdated?: Date; // Optional field for last updated time
  }