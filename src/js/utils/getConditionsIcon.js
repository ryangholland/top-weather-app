function getConditionsIcon(conditions) {
  const weatherIcons = {
    "Blowing Or Drifting Snow": "./assets/snow.svg",
    Ice: "./assets/snow.svg",
    Snow: "./assets/snow.svg",
    "Heavy Snow": "./assets/snow.svg",
    "Light Snow": "./assets/snow.svg",

    "Heavy Freezing Drizzle/Freezing Rain": "./assets/cloud-sleet.svg",
    "Light Freezing Drizzle/Freezing Rain": "./assets/cloud-sleet.svg",
    "Heavy Freezing Rain": "./assets/cloud-sleet.svg",
    "Light Freezing Rain": "./assets/cloud-sleet.svg",
    "Hail Showers": "./assets/cloud-sleet.svg",
    Hail: "./assets/cloud-sleet.svg",
    "Freezing Drizzle/Freezing Rain": "./assets/cloud-sleet.svg",

    "Freezing Fog": "./assets/cloud-fog.svg",
    "Smoke Or Haze": "./assets/cloud-fog.svg",
    "Dust storm": "./assets/cloud-fog.svg",
    Fog: "./assets/cloud-fog.svg",

    "Funnel Cloud/Tornado": "./assets/tropical-storm.svg",

    "Lightning Without Thunder": "./assets/lightning.svg",
    "Thunderstorm Without Precipitation": "./assets/lightning.svg",

    Mist: "./assets/cloud-drizzle.svg",
    Drizzle: "./assets/cloud-drizzle.svg",
    "Precipitation In Vicinity": "./assets/cloud-drizzle.svg",
    "Heavy Drizzle": "./assets/cloud-drizzle.svg",
    "Diamond Dust": "./assets/cloud-drizzle.svg",
    "Light Drizzle": "./assets/cloud-drizzle.svg",
    "Heavy Drizzle/Rain": "./assets/cloud-drizzle.svg",
    "Light Drizzle/Rain": "./assets/cloud-drizzle.svg",

    Rain: "./assets/cloud-rain.svg",
    "Rain Showers": "./assets/cloud-rain.svg",
    "Heavy Rain": "./assets/cloud-rain.svg",
    "Light Rain": "./assets/cloud-rain.svg",

    "Heavy Rain And Snow": "./assets/cloud-snow.svg",
    "Light Rain And Snow": "./assets/cloud-snow.svg",
    "Snow And Rain Showers": "./assets/cloud-snow.svg",
    "Snow Showers": "./assets/cloud-snow.svg",

    "Sky Coverage Decreasing": "./assets/cloud.svg",
    "Sky Coverage Increasing": "./assets/cloud.svg",
    Overcast: "./assets/cloud.svg",
    "Partially cloudy": "./assets/cloud.svg",

    "Sky Unchanged": "./assets/sun.svg",
    Clear: "./assets/sun.svg",

    Squalls: "./assets/cloud-lightning-rain.svg",
    Thunderstorm: "./assets/cloud-lightning-rain.svg",
  };

  return weatherIcons[conditions] || "./assets/logo.webp";
}

export default getConditionsIcon;
