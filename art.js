// Open Point art pack. See ART-GUIDE.md and art.example.js for everything you can list here.
window.OPEN_POINT_ART = {

  // The painted island, sharpened and at twice the original size (map-day.webp), with a night version that
  // fades in after dusk: lit windows, street lights, the lighthouse lamp and stadium floodlights (map-night.webp).
  // It is a different shape from the game's map, so it is placed and stretched to line up with the roads:
  // box is [x, y, width, height] in map units. bg fills the sea around it when you pan past the edge.
  // The untouched original is still in this folder as Open Point Map.png.
  // beacon is where the painted lighthouse lamp is (map units): its beam sweeps round after dark.
  // runway is the painted runway (centre, angle in degrees, length and width): the plane lands on it and its lights line it at night.
  map: { day: 'map-day.webp', night: 'map-night.webp', box: [-5.54, -91.27, 1608.6, 1087.9], bg: '#83a79d', bgNight: '#2c3b66', beacon: [1353, 0],
         runway: { c: [1102, 505], a: -12.6, len: 212, w: 11 } },

  roads: false,   // the roads are painted in
  labels: false,  // no place names on the map for now (substation names still show)

  // already in the painting, so the game doesn't draw them again
  // ('docks' also turns off the dock lights at night, as the painting has no docks)
  // ('boat' is the pair of moored boats, which would sit on the painted beach;
  //  'pier', 'huts' and 'tents' are the west pier, its beach huts and the campsite by Pebble Bay)
  hideLandmarks: ['lighthouse', 'hospital', 'solar', 'stadium', 'quarry', 'mast', 'golf', 'docks', 'boat', 'pier', 'huts', 'tents'],
};
