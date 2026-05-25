'use strict';

/* ─── Wardrobe ─────────────────────────────────────── */
const TOPS = [
  'Light blue button-up',
  'Black tee',
  'Dark green knit sweater',
  'Cream tee',
  'Cream tee with black stripes',
  'Navy longsleeve',
  'Grey marl crewneck',
  'Cream & brown striped top',
  'Olive green tee',
  'Pink/mauve longsleeve',
  'Camo print tee',
  'Dark green acid-wash sweatshirt',
  'Light grey jacket',
];

const BOTTOMS = [
  'White linen pants',
  'Blue linen pants',
  'Beige shorts',
  'White shorts',
  'Black pants',
  'Charcoal pants',
  'Light blue jeans',
];

const SCENTS = [
  { name: 'Aesop Hwyl',             fmt: 'Eau de Parfum', profile: 'woody'  },
  { name: 'Aesop Karst',            fmt: 'Eau de Parfum', profile: 'earthy' },
  { name: 'Byredo Super Cedar',     fmt: 'Eau de Parfum', profile: 'woody'  },
  { name: 'Diptyque Eau des Sens',  fmt: 'Travel Spray',  profile: 'fresh'  },
  { name: 'Diptyque Ilio',          fmt: 'Travel Spray',  profile: 'fresh'  },
  { name: 'Diptyque Orphéon',       fmt: 'Travel Spray',  profile: 'warm'   },
  { name: 'Diptyque Do Son',        fmt: 'Travel Spray',  profile: 'floral' },
  { name: 'Diptyque Philosykos',    fmt: 'Travel Spray',  profile: 'green'  },
];

/* ─── WMO weather codes ─────────────────────────────── */
function getCondition(code) {
  if (code <= 1)                                         return 'clear';
  if (code <= 3 || code === 45 || code === 48)           return 'cloudy';
  if ([71,73,75,77,85,86].includes(code))                return 'snow';
  return 'rain';
}

function getConditionLabel(code) {
  const labels = {
    0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Overcast',
    45: 'Foggy', 48: 'Icy fog',
    51: 'Light drizzle', 53: 'Drizzle', 55: 'Heavy drizzle',
    61: 'Light rain', 63: 'Rain', 65: 'Heavy rain',
    71: 'Light snow', 73: 'Snow', 75: 'Heavy snow', 77: 'Snow grains',
    80: 'Rain showers', 81: 'Rain showers', 82: 'Heavy showers',
    85: 'Snow showers', 86: 'Heavy snow showers',
    95: 'Thunderstorm', 96: 'Thunderstorm', 99: 'Thunderstorm',
  };
  return labels[code] ?? 'Variable';
}

/* ─── Rules engine ──────────────────────────────────── */
function scent(name) { return SCENTS.find(s => s.name === name); }

function getRecommendation(temp, humidity, wind, condition) {
  let top, bottom, sc, outfitReason, scentReason, narrative;

  if (temp >= 28) {
    // Hot
    if (humidity > 75) {
      top    = 'Cream tee';
      bottom = 'Beige shorts';
      outfitReason = 'Cotton breathes where linen clings in this humidity.';
      narrative = 'The air is thick and the sun is relentless. Keep everything as light as possible — this is no day for layers or complexity.';
    } else {
      top    = 'Olive green tee';
      bottom = 'White linen pants';
      outfitReason = 'Linen earns its place when the heat is dry and direct.';
      narrative = 'There is a clean quality to this heat. The light is sharp, the air moves. Dress open and easy — precision over volume, always.';
    }
    sc = scent('Diptyque Eau des Sens');
    scentReason = 'A citrus freshness — light enough not to turn in the heat.';

  } else if (temp >= 22) {
    // Warm
    top    = 'Light blue button-up';
    bottom = 'Blue linen pants';
    sc     = scent('Diptyque Philosykos');
    outfitReason = 'Linen and an open collar — dressed without the effort showing.';
    scentReason  = 'Green and resinous, like a fig branch in full afternoon light.';
    narrative    = 'The temperature is generous today. Not quite summer, not quite not. Lean into the ease and let the season do the work.';

  } else if (temp >= 15) {
    // Mild — branch on condition
    if (condition === 'clear') {
      top    = 'Cream tee with black stripes';
      bottom = 'Charcoal pants';
      sc     = scent('Diptyque Philosykos');
      outfitReason = 'A stripe reads crisp and deliberate against clear, bright light.';
      scentReason  = 'A green-woody base for a day that feels purposeful and direct.';
      narrative    = 'Mild and clear is the best kind of day — everything feels possible. Dress with the same forward clarity: clean, considered, unhurried.';
    } else if (condition === 'rain') {
      top    = 'Dark green acid-wash sweatshirt';
      bottom = 'Black pants';
      sc     = scent('Aesop Hwyl');
      outfitReason = 'Dark and practical, without conceding anything aesthetically.';
      scentReason  = 'Woody smoke holds against the damp where lighter scents dissolve.';
      narrative    = 'Rain changes the texture of a day entirely. Dress for arrival — for moving through it with intention, reaching somewhere intact.';
    } else {
      // Cloudy / snow / fog
      top    = 'Grey marl crewneck';
      bottom = 'Light blue jeans';
      sc     = scent('Diptyque Orphéon');
      outfitReason = 'A grey crewneck for a grey sky — but a considered one.';
      scentReason  = 'Warm and slightly smoky, a counterpoint to the flat, diffused light.';
      narrative    = 'Overcast days have a certain flattering quality — everything softer, more considered. Lean into the texture, the muted palette, the depth.';
    }

  } else if (temp >= 8) {
    // Cool
    if (wind > 25) {
      top          = 'Light grey jacket';
      outfitReason = 'Wind calls for structure. The jacket does what a sweater cannot.';
      narrative    = 'The chill has sharpened and the wind has an opinion. Dress accordingly: something with weight, something that stays against it.';
    } else {
      top          = 'Dark green knit sweater';
      outfitReason = 'A knit this substantial is reason enough to welcome the cold.';
      narrative    = 'The cold is clean today — still, considered. This is the kind of temperature that rewards dressing with care rather than just warmth.';
    }
    bottom      = 'Black pants';
    sc          = scent('Aesop Karst');
    scentReason = 'Earthy and rooted — the right register for cool air with real bite.';

  } else {
    // Cold
    top    = 'Dark green acid-wash sweatshirt';
    bottom = 'Charcoal pants';
    sc     = scent('Byredo Super Cedar');
    outfitReason = 'The acid-wash settles into the grey weight of the season.';
    scentReason  = 'Woody and deep — something that holds as the cold strips everything else back.';
    narrative    = 'This is the deep cold. Everything contracts, becomes essential. Dress with intention and specificity — only winter demands this level of care.';
  }

  return { top, bottom, scent: sc, outfitReason, scentReason, narrative };
}

/* ─── DOM helpers ───────────────────────────────────── */
function showState(id) {
  for (const s of ['state-initial', 'state-loading', 'state-city', 'state-results']) {
    const el = document.getElementById(s);
    el.classList.toggle('hidden', s !== id);
    if (s === id && s === 'state-results') {
      // Reset animation so it replays on refresh
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    }
  }
  const onResults = id === 'state-results';
  document.getElementById('btn-back').classList.toggle('hidden', !onResults);
  document.getElementById('btn-refresh').classList.toggle('hidden', !onResults);
}

function renderPills(containerId, items, active) {
  const el = document.getElementById(containerId);
  el.innerHTML = '';
  for (const item of items) {
    const name   = typeof item === 'string' ? item : item.name;
    const pill   = document.createElement('span');
    pill.className = 'pill' + (name === active ? ' pill--active' : '');
    pill.textContent = name;
    el.appendChild(pill);
  }
}

function renderResults(weather, rec) {
  document.getElementById('temp-val').textContent     = Math.round(weather.temp);
  document.getElementById('weather-cond').textContent = weather.conditionLabel;
  document.getElementById('humidity-val').textContent = Math.round(weather.humidity);
  document.getElementById('wind-val').textContent     = Math.round(weather.wind);
  document.getElementById('weather-loc').textContent  = weather.location ?? '';

  document.getElementById('rec-top').textContent      = rec.top;
  document.getElementById('rec-bottom').textContent   = rec.bottom;
  document.getElementById('rec-scent').textContent    = rec.scent.name;
  document.getElementById('rec-scent-sub').textContent = `${rec.scent.fmt} · ${rec.scent.profile}`;

  document.getElementById('outfit-reason').textContent = rec.outfitReason;
  document.getElementById('scent-reason').textContent  = rec.scentReason;
  document.getElementById('look-text').textContent     = rec.narrative;

  renderPills('pills-tops',    TOPS,   rec.top);
  renderPills('pills-bottoms', BOTTOMS, rec.bottom);
  renderPills('pills-scents',  SCENTS,  rec.scent.name);
}

/* ─── API calls ─────────────────────────────────────── */
async function fetchWeather(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast`
    + `?latitude=${lat}&longitude=${lon}`
    + `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`
    + `&wind_speed_unit=kmh&temperature_unit=celsius`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Weather unavailable');
  const { current: c } = await res.json();
  return {
    temp:           c.temperature_2m,
    humidity:       c.relative_humidity_2m,
    wind:           c.wind_speed_10m,
    code:           c.weather_code,
    condition:      getCondition(c.weather_code),
    conditionLabel: getConditionLabel(c.weather_code),
  };
}

async function reverseGeocode(lat, lon) {
  try {
    const res  = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10`,
      { headers: { 'Accept-Language': 'en' } }
    );
    const data = await res.json();
    return data.address?.city
        || data.address?.town
        || data.address?.village
        || data.address?.county
        || '';
  } catch { return ''; }
}

async function geocodeCity(city) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
  );
  const data = await res.json();
  if (!data.results?.length) throw new Error('City not found');
  const r = data.results[0];
  return {
    lat:  r.latitude,
    lon:  r.longitude,
    name: r.name + (r.country ? `, ${r.country}` : ''),
  };
}

/* ─── Core run ──────────────────────────────────────── */
let _lat = null, _lon = null, _locationName = '';

async function run(lat, lon, locationName) {
  _lat = lat; _lon = lon; _locationName = locationName;
  showState('state-loading');
  try {
    const weather = await fetchWeather(lat, lon);
    if (!locationName) locationName = await reverseGeocode(lat, lon);
    weather.location = locationName;
    const rec = getRecommendation(weather.temp, weather.humidity, weather.wind, weather.condition);
    renderResults(weather, rec);
    showState('state-results');
  } catch (err) {
    console.error(err);
    showState('state-city');
    const errEl = document.getElementById('city-error');
    errEl.textContent = 'Something went wrong. Enter your city.';
    errEl.classList.remove('hidden');
  }
}

/* ─── City submit ───────────────────────────────────── */
async function submitCity() {
  const city = document.getElementById('city-input').value.trim();
  if (!city) return;
  document.getElementById('city-error').classList.add('hidden');
  try {
    const { lat, lon, name } = await geocodeCity(city);
    await run(lat, lon, name);
  } catch {
    const errEl = document.getElementById('city-error');
    errEl.textContent = 'City not found. Try again.';
    errEl.classList.remove('hidden');
  }
}

/* ─── Geolocation helper ────────────────────────────── */
function fetchFromGeolocation() {
  if (!navigator.geolocation) { showState('state-city'); return; }
  showState('state-loading');
  navigator.geolocation.getCurrentPosition(
    pos => run(pos.coords.latitude, pos.coords.longitude, ''),
    ()  => showState('state-city'),
    { timeout: 10000 }
  );
}

/* ─── Init ──────────────────────────────────────────── */
function init() {
  // Footer date
  const date = new Date().toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
  document.getElementById('footer-date').textContent = date.toUpperCase();

  // Auto-fetch if geolocation permission already granted (skips the landing)
  if (navigator.permissions) {
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      if (result.state === 'granted') fetchFromGeolocation();
    });
  }

  // Main CTA — used on first visit or after Back
  document.getElementById('btn-get').addEventListener('click', fetchFromGeolocation);

  // City input
  document.getElementById('btn-city').addEventListener('click', submitCity);
  document.getElementById('city-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitCity();
  });

  // Back — return to start
  document.getElementById('btn-back').addEventListener('click', () => {
    _lat = null; _lon = null; _locationName = '';
    document.getElementById('city-input').value = '';
    showState('state-initial');
  });

  // Refresh — re-run with last known coords
  document.getElementById('btn-refresh').addEventListener('click', () => {
    if (_lat !== null) run(_lat, _lon, _locationName);
    else showState('state-initial');
  });

  // Service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
