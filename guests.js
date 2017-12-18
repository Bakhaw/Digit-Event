const fetch = require('node-fetch');

const DigitEventApiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NWY5YWFhNWVhOWNiMDAwNGMyMTI2ZiIsImlhdCI6MTUwMTE2ODE0Mn0.7d25p9nGGVHJn7fOsE0KlMYOVEKC_v5V-LhfABVAplw';

const eventId = '595f9ab65ea9cb0004c21270';

const guests = [];

// Get guests of an event

fetch(`https://api.digitevent.com/v2/event/${eventId}/guests?api_key=${DigitEventApiKey}`)
  .then(res => res.json())
  .then(data => guests.push(data.guests))
  .then(data => console.log(guests))

const MeteoApiKey = '0687567480a9814c8857dbc2e2811ffa';

const meteoUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';

const parisUrl = `${meteoUrl}paris&appid=${MeteoApiKey}`;

const marseilleUrl = `${meteoUrl}marseille&appid=${MeteoApiKey}`;

const nantesUrl = `${meteoUrl}nantes&appid=${MeteoApiKey}`;

const lilleUrl = `${meteoUrl}lille&appid=${MeteoApiKey}`;

// Fetch for the meteo

fetch(`${parisUrl}`)
  .then(res => res.json())
  .then(data => console.log(`
    {
      pays: ${data.sys.country},
      ville: ${data.name},
      méteo: ${data.weather[0].description}
    },
  `))

fetch(`${marseilleUrl}`)
  .then(res => res.json())
  .then(data => console.log(`
    {
      pays: ${data.sys.country},
      ville: ${data.name},
      méteo: ${data.weather[0].description}
    },
  `))

fetch(`${nantesUrl}`)
  .then(res => res.json())
  .then(data => console.log(`
    {
      pays: ${data.sys.country},
      ville: ${data.name},
      méteo: ${data.weather[0].description}
    }
  `))

fetch(`${lilleUrl}`)
  .then(res => res.json())
  .then(data => console.log(`
    {
      pays: ${data.sys.country},
      ville: ${data.name},
      méteo: ${data.weather[0].description}
    }
  `))