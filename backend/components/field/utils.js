module.exports = function getGeoPoints(data) {
  let points = data.map((obj) => [obj.lng, obj.lat]);
  return points;
};
