// Objeto que contiene los autos
brands = [
  {
    brand: "bmw",
    name: "BMW M135i xDrive",
    features: [
      "Rendimiento de combustible (combinado): 13.3 km/l",
      "Emisiones de CO2 (combinado): 171 g/km",
      "BWM Live Cockpit Professional",
      "BMW Intelligent Personal Assistant",
      "Velocidad máxima en km/h 250",
    ],
  },
  {
    brand: "bmw",
    name: "BMW Serie 2 Coupe",
    features: [
      "Consumo de combustible en L/100 km (promedio): 7.8",
      "Emisiones de CO2 en g/km (promedio): 179",
      "Suspension Adaptive M",
      "Dirección deportiva variable",
      "Motor de gasolina de 4 cilindros de 2.0 litros BMW TwinPower Turbo",
    ],
  },
  {
    brand: "bmw",
    name: "BMW Serie 3 Sedan",
    features: [
      "Consumo de combustible en L/100 km (promedio): 6.4",
      "Emisiones de CO2 en g/km (promedio): 147",
      "BMW Intelligent Personal Assistant",
      "BWM Live Cockpit Professional",
      "Sistema Operativo 7.0 BMW",
      "Llave Digital",
    ],
  },
  {
    brand: "bmw",
    name: "BMW Z4 Roadster",
    features: [
      "Consumo de combustible en l/100 km (combinado): 7.4",
      "Emisiones de CO2 en g/km (combinado): 169",
      "Suspension Adaptativa M",
      "Freno Deportivo M",
      "Air Breather",
      "Capota",
    ],
  },
  {
    brand: "cadillac",
    name: "Cadillac XT4",
    features: [
      "2.0L Turbo 4-cylinder engine",
      "9-speed automatic transmission",
      "Twin-scroll turbocharger",
      "Advanced Active Fuel Management",
      "Selectable driving modes",
    ],
  },
  {
    brand: "cadillac",
    name: "Cadillac CT4",
    features: [
      "2.0L Twin-Scroll Turbocharged engine",
      "Automatic Stop/Start with disable switch",
      "8-Speed automatic transmission",
      "Dual trapezoid bright tip exhaust",
      "Four-wheel anti-lock brakes",
      "Ride and Handling suspension",
    ],
  },
  {
    brand: "chevrolet",
    name: "Spark",
    features: [
      "Motor ECOTEC de 1.4 L y 4 cilindros",
      "Frenos de tambor trasero/de disco delantero antibloqueo en las 4 ruedas",
      "Transmisión manual de 5 velocidades",
      "Alternador, 80 amperios",
    ],
  },
  {
    brand: "chevrolet",
    name: "Sonic",
    features: [
      "Motor ECOTEC de 1.4 L y 4 cilindros",
      "Frenos de disco antibloqueo en las 4 ruedas",
      "Frenos de tambor trasero/de disco delantero antibloqueo en las 4 ruedas",
      "Transmisión manual de 5 velocidades",
      "Alternador, 100 amperios",
    ],
  },
  {
    brand: "chevrolet",
    name: "Malibu",
    features: [
      "Motor Turbo de 1.5 L y 4 cilindros",
      "Suspension trasera de 4 conexiones",
      "Frenos de disco antibloqueo en las 4 ruedas",
      "Eje con relación de transmisión final 5.10",
      "Frenos de alto desempeño con revestimiento, desempeño en cuanto a ruidos y polvo",
    ],
  },
  {
    brand: "chevrolet",
    name: "Impala",
    features: [
      "Frenos de alto desempeño con revestimiento, desempeño en cuanto a ruidos y polvo, rotores FNC",
      "Frenos de disco antibloqueo en las 4 ruedas",
      "Motor ECOTEC de 2.5 L y 4 cilindros",
      "Suspensión delantera MacPherson",
      "Suspensión trasera de 4 conexiones",
      "Transmisión automática de 6 velocidades con motor ECOTEC de 2.5 L",
    ],
  },
  {
    brand: "honda",
    name: "Civic",
    features: [
      "Motor de aleación de aluminio	4 Cilindros en Línea 2.0 Litros de 16 válvulas",
      "Sistema Eco Assist®(1)",
      "Transmisión manual de 6 velocidades",
      "Neumático de refacción compacto",
      "Suspensión independiente en las cuatro ruedas, Suspensión de tipo MacPherson delantera y multi-link trasera",
    ],
  },
  {
    brand: "honda",
    name: "Insight",
    features: [
      "Motor Atkinson a gasolina de 4 Cilindros en Línea, 1.5 Litros de 16 válvulas DOHC i-VTEC® y motor eléctrico i-MMD",
      "Motor eléctrico Intelligent Multi-Mode Drive",
      "Paletas de control regenerativo de energía",
      "Transmisión electrónica de velocidad Continuamente Variable (E-CVT) Shift by Touch",
      "Neumático de refacción compacto",
      "Sistema con tres modos de manejo: ECON, Sport, EV",
    ],
  },
  {
    brand: "honda",
    name: "Accord",
    features: [
      "Motor de aleación de aluminio	4 Cilindros en Línea, 1.5 Litros Turbo, 16 válvulas DOHC con VTEC®",
      "Transmisión de velocidad Continuamente Variable (CVT)",
      "Neumático de refacción compacto",
      "Suspensión independiente en las cuatro ruedas, Suspensión de tipo MacPherson delantera y multi-link trasera",
    ],
  },
  {
    brand: "honda",
    name: "Fit",
    features: [
      "Motor de aleación de aluminio	4 Cilindros en línea con inyección directa 1.5 Litros de 16 válvulas DOHC i-VTEC® VTC",
      "Sistema Eco Assist®(1)",
      "Sistema de tracción delantera",
      "Transmisión manual de 6 velocidades",
      "Neumático de refacción compacto",
      "Suspensión de tipo MacPherson delantera y de eje rígido en la parte trasera",
    ],
  },
  {
    brand: "porsche",
    name: "718 Cayman",
    features: [
      "Motor Turbo Boxer de 2 litros",
      "Sistema de escape deportivo",
      "Caja de cambios manual de 6 velocidades",
      "Servodirección electromagnetica",
    ],
  },
  {
    brand: "porsche",
    name: "911 Carrera",
    features: [
      "Turbocompresor",
      "Entradas activas del aire de refrigeración",
      "Función Auto Start/Stop",
      "Sistema de escape deportivo",
    ],
  },
  {
    brand: "porsche",
    name: "Panamera",
    features: [
      "Motor biturbo v8",
      "Porsche Doppelkupplung de 8 velocidades",
      "Porsche Traction Management",
      "Porsche Active Suspension Management",
    ],
  },
];

cars = $("#cars");

// Llamando la sidebar para los documentos
$.get("sidebar.html", function (data) {
  $("#nav-placeholder").replaceWith(data);
});

// Función que devuelve la lista de autos de la marca indicada
function getCars(e) {
  for (x in brands) {
    var car = brands[x];

    switch (car.brand) {
      case e:
        carElement = $(
          `<div class='car-card slide-in-bottom'><div class='car-card__info '><h2 class='name'>${car.name}</h2><h3 class='brandname'>${car.brand}</h3></div><button type='submit' class='car-button' name='${car.name}'>ver</button></div>`
        );
        cars.append(carElement);
        break;
      default:
        break;
    }
  }
  $(".car-button").on("click", async function () {
    var carName = $(this).attr("name");

    showCarInfo(carName);
  });
}

// Función para mostrar la información del auto seleccionado
function showCarInfo(e) {
  $(".info-card").html("");
  for (x in brands) {
    var car = brands[x];

    switch (car.name) {
      case e:
        carInfo = $(
          `<div class='info-car zoomer'><div class='info-car__main'><h1>${e}</h1></div><div class='info-car__img'><img alt='${e}' src='./img/cars/${e}.png'></div><div class='info-car__perks'></div></div>`
        );
        $(".info-card").append(carInfo);

        for (z in car.features) {
          //console.log(car.features[z]);
          carFeature = $(`<p class='fade-in'>-${car.features[z]}</p>`);
          $(".info-car__perks").append(carFeature);
        }
        break;
      default:
        break;
    }
  }
}

var brandArea = $(".brand-button");

// Llamando la funcion para que muestre la lista de autos
brandArea.on("click", function () {
  cars.html("");
  var brandName = $(this).attr("name");

  getCars(brandName);
});
