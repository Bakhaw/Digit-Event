const fetch = require('node-fetch');

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5NWY5YWFhNWVhOWNiMDAwNGMyMTI2ZiIsImlhdCI6MTUwMTE2ODE0Mn0.7d25p9nGGVHJn7fOsE0KlMYOVEKC_v5V-LhfABVAplw';
const eventId = '595f9ab65ea9cb0004c21270';

const event = [];

// Get an event

fetch(`https://api.digitevent.com/v2/event/${eventId}?api_key=${apiKey}`)
  .then( res => res.json())
  .then( data => event.push(data))
  .then( data => console.log(event[0]))