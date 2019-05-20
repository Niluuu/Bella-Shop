$(document).ready(function() {
  var slider = document.getElementById('nouiSlider');

  noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
          'min': 0,
          'max': 100
      }
  });
});