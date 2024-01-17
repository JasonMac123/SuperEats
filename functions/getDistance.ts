export const getDistanceCoordinates = (
  lat1: number,
  long1: number,
  lat2: number,
  long2: number
): string => {
  const radius = 6371;
  const degDiffLat = degConvert(lat2 - lat1);
  const degDiffLong = degConvert(long2 - long1);
  const distance =
    Math.sin(degDiffLat / 2) * Math.sin(degDiffLat / 2) +
    Math.cos(degConvert(lat1)) *
      Math.cos(degConvert(lat2)) *
      Math.sin(degDiffLong / 2) *
      Math.sin(degDiffLong / 2);
  const distanceInRadius =
    2 * Math.atan2(Math.sqrt(distance), Math.sqrt(1 - distance));
  const distanceInKm = radius * distanceInRadius;
  return distanceInKm.toFixed(2);
};

const degConvert = (degree: number): number => {
  return degree * (Math.PI / 180);
};
