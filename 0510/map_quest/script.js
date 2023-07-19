L.mapquest.key = '9UdbFXj1ZIem2eBDrjyIleMNN2ZGjWf7';

// 'map' refers to a <div> element with the ID map
const map = L.mapquest.map('map', {
  center: [53.480759, -2.242631],
  layers: L.mapquest.tileLayer('hybrid'),
  zoom: 12
});

// 添加不同的控件
map.addControl(L.mapquest.control({ position: "bottomright" }));

// 添加marker
L.marker([53.480759, -2.242631], {
  icon: L.mapquest.icons.marker({
    primaryColor: "#22407F",
    secondaryColor: "#3B5998",
    shadow: true,
    size: "md",
    symbol: "A",
  }),
})
  .bindPopup("This is Manchester!")
  .addTo(map);
