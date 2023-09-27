// Real diameters and distances in kilometers
const realValues = {
  sunDiameter: 1392000, // in km (wiki: 1,391,400)
  sunEarthDistance: 149600000, // in km
  earthDiameter: 12742, // in km
  earthMoonDistance: 384400, // in km
  moonDiameter: 3475, // in km
};

$(document).ready(function () {
  // Initialize inputs with real values
  for (const [key, value] of Object.entries(realValues)) {
    $(`#${key}`).val(value);
  }

  // Add event listener for changes in any input
  $("input").on("change", function () {
    const inputId = $(this).attr("id");
    const inputValue = parseFloat($(this).val());
    const scaleRatio = inputValue / realValues[inputId];

    for (const [key, value] of Object.entries(realValues)) {
      if (key !== inputId) {
        $(`#${key}`).val(value * scaleRatio);
      }
    }
  });
});
