/**
 * 1. Gebruik destructuring om de Twitter- en LinkedIn-link uit het profiel te halen.
 */
const profile = {
  company: 'VIVES',
  social: {
    twitter: 'https://twitter.com/viveshogeschool',
    linkedin: 'https://www.linkedin.com/school/vives/'
  }
};

// verander volgende twee lijnen naar één lijn
const { twitter, linkedin } = profile

console.log(twitter, linkedin);

/**
 * 2. Refactor met geneste structuren
 */
function getAverageTemp() {
  const weather = {
    location: 'Ukkel',
    unit: 'Celsius',
    today: { max: 21, min: 15.7 },
    tomorrow: { max: 18.3, min: 14.9 }
  }
  
  // verander volgende vier lijnen naar één lijn
const { location, unit, today: { max: maxToday, min: minToday }, tomorrow: { max: maxTomorrow, min: minTomorrow } } = weather

  return {
    max: (maxToday + maxTomorrow) / 2,
    min: (minToday + minTomorrow) / 2,
    unit: weather.unit
  }
}

console.log(getAverageTemp());