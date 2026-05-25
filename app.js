'use strict';

/* ─── Wardrobe — Tops ───────────────────────────────── */
const TOPS = [
  { name: 'Light blue button-up',           warmth: 1, formality: 3, fabric: 'woven',  colorFamily: 'blue',  colorTemp: 'cool'    },
  { name: 'Black tee',                       warmth: 1, formality: 1, fabric: 'jersey', colorFamily: 'black', colorTemp: 'neutral' },
  { name: 'Dark green knit sweater',         warmth: 4, formality: 2, fabric: 'knit',   colorFamily: 'green', colorTemp: 'cool'    },
  { name: 'Cream tee',                       warmth: 1, formality: 1, fabric: 'jersey', colorFamily: 'white', colorTemp: 'warm'    },
  { name: 'Cream tee with black stripes',    warmth: 1, formality: 2, fabric: 'jersey', colorFamily: 'white', colorTemp: 'neutral' },
  { name: 'Navy longsleeve',                 warmth: 2, formality: 2, fabric: 'jersey', colorFamily: 'blue',  colorTemp: 'cool'    },
  { name: 'Grey marl crewneck',              warmth: 3, formality: 1, fabric: 'fleece', colorFamily: 'grey',  colorTemp: 'cool'    },
  { name: 'Cream & brown striped top',       warmth: 2, formality: 2, fabric: 'jersey', colorFamily: 'cream', colorTemp: 'warm'    },
  { name: 'Olive green tee',                 warmth: 1, formality: 1, fabric: 'jersey', colorFamily: 'olive', colorTemp: 'warm'    },
  { name: 'Pink/mauve longsleeve',           warmth: 2, formality: 2, fabric: 'jersey', colorFamily: 'pink',  colorTemp: 'warm'    },
  { name: 'Camo print tee',                  warmth: 1, formality: 1, fabric: 'jersey', colorFamily: 'olive', colorTemp: 'neutral' },
  { name: 'Dark green acid-wash sweatshirt', warmth: 3, formality: 1, fabric: 'fleece', colorFamily: 'green', colorTemp: 'cool'    },
  { name: 'Light grey jacket',               warmth: 2, formality: 3, fabric: 'woven',  colorFamily: 'grey',  colorTemp: 'cool'    },
];

/* ─── Wardrobe — Bottoms ────────────────────────────── */
const BOTTOMS = [
  { name: 'White linen pants',  warmth: 1, formality: 3, fabric: 'linen',  colorFamily: 'white', colorTemp: 'neutral' },
  { name: 'Blue linen pants',   warmth: 1, formality: 3, fabric: 'linen',  colorFamily: 'blue',  colorTemp: 'cool'    },
  { name: 'Beige shorts',       warmth: 0, formality: 1, fabric: 'cotton', colorFamily: 'beige', colorTemp: 'warm'    },
  { name: 'White shorts',       warmth: 0, formality: 1, fabric: 'cotton', colorFamily: 'white', colorTemp: 'neutral' },
  { name: 'Black pants',        warmth: 2, formality: 2, fabric: 'cotton', colorFamily: 'black', colorTemp: 'neutral' },
  { name: 'Charcoal pants',     warmth: 2, formality: 2, fabric: 'cotton', colorFamily: 'grey',  colorTemp: 'cool'    },
  { name: 'Light blue jeans',   warmth: 2, formality: 1, fabric: 'denim',  colorFamily: 'blue',  colorTemp: 'cool'    },
];

/* ─── Scents — with sourced fragrance data ──────────── */
const SCENTS = [
  {
    name:      'Aesop Hwyl',
    fmt:       'Eau de Parfum',
    profile:   'incense & smoke',
    notes:     'thyme, elemi, pink pepper · cypress, geranium · vetiver, frankincense, oakmoss',
    character: 'A Japanese forest after rain — temple smoke, damp earth, hinoki. Meditative and entirely singular.',
    tempRange: ['cool', 'cold'],
    conditions:['rain', 'cloudy', 'clear'],
    registers: ['elevated', 'neutral'],
    intensity: 4,
  },
  {
    name:      'Aesop Karst',
    fmt:       'Eau de Parfum',
    profile:   'mineral & herb',
    notes:     'juniper, bergamot, pink pepper · rosemary, sage, cumin · vetiver, sandalwood, cedar',
    character: 'Cliffside herbs and mineral sea air — juniper, sage, a quiet marine undertow. Grounded but restless.',
    tempRange: ['mild', 'cool'],
    conditions:['clear', 'cloudy'],
    registers: ['elevated', 'neutral', 'relaxed'],
    intensity: 3,
  },
  {
    name:      'Byredo Super Cedar',
    fmt:       'Eau de Parfum',
    profile:   'clean cedar',
    notes:     'rose · virginian cedar · haitian vetiver, musk',
    character: 'The clean architecture of cedar — woody, minimal, almost structural. Like a freshly sharpened pencil in a cold room.',
    tempRange: ['cool', 'cold'],
    conditions:['clear', 'cloudy', 'rain'],
    registers: ['elevated', 'neutral'],
    intensity: 3,
  },
  {
    name:      'Diptyque Eau des Sens',
    fmt:       'Travel Spray',
    profile:   'citrus & neroli',
    notes:     'bitter orange, orange blossom · juniper berries · angelica, patchouli',
    character: 'Bitter orange and neroli grounded by angelica — a Mediterranean afternoon distilled. Bright and precisely balanced.',
    tempRange: ['hot', 'warm'],
    conditions:['clear', 'cloudy'],
    registers: ['elevated', 'neutral', 'relaxed'],
    intensity: 2,
  },
  {
    name:      'Diptyque Ilio',
    fmt:       'Travel Spray',
    profile:   'sun-warm floral',
    notes:     'prickly pear, bergamot · iris, jasmine · musk',
    character: 'Prickly pear and jasmine — light, sun-warm, unhurried. The smell of a perfect and uncomplicated afternoon.',
    tempRange: ['hot', 'warm'],
    conditions:['clear', 'cloudy'],
    registers: ['relaxed', 'neutral'],
    intensity: 2,
  },
  {
    name:      'Diptyque Orphéon',
    fmt:       'Travel Spray',
    profile:   'powdery cedar',
    notes:     'juniper berries · jasmine · cedar, tonka bean, musk',
    character: 'Juniper and cedar softened with tonka — powdery, warm, the feeling of somewhere very considered. A 5-star lobby in scent form.',
    tempRange: ['warm', 'mild', 'cool'],
    conditions:['clear', 'cloudy', 'rain'],
    registers: ['elevated'],
    intensity: 3,
  },
  {
    name:      'Diptyque Do Son',
    fmt:       'Travel Spray',
    profile:   'tuberose',
    notes:     'tuberose, orange leaf · pink pepper · musk, benzoin',
    character: 'Tuberose at dusk — white, creamy, unapologetically floral. The scent of warm evenings and unhurried mornings.',
    tempRange: ['warm', 'mild'],
    conditions:['clear', 'cloudy'],
    registers: ['relaxed', 'neutral', 'elevated'],
    intensity: 3,
  },
  {
    name:      'Diptyque Philosykos',
    fmt:       'Travel Spray',
    profile:   'fig & green',
    notes:     'fig leaf, fig · green notes, coconut · fig tree, cedar',
    character: 'A fig tree in full afternoon light — green leaf, creamy wood, faint sweetness of ripe fruit. Specific and unmistakable.',
    tempRange: ['warm', 'mild'],
    conditions:['clear', 'cloudy'],
    registers: ['elevated', 'neutral', 'relaxed'],
    intensity: 2,
  },
];

/* ─── Outfit reasons ─────────────────────────────────── */
const TOP_REASONS = {
  'Light blue button-up':           'A button-up collar elevates the temperature range without trying.',
  'Black tee':                      'Foundational and right — black works when nothing should compete.',
  'Dark green knit sweater':        'A knit this good is reason enough to welcome the cold.',
  'Cream tee':                      'Keep it simple. The weather is asking for exactly this.',
  'Cream tee with black stripes':   'A stripe reads crisp and deliberate in this kind of light.',
  'Navy longsleeve':                'Clean and direct — the longsleeve does the work without announcing it.',
  'Grey marl crewneck':             'A grey crewneck for a grey sky — but a considered one.',
  'Cream & brown striped top':      'The warm tones in the stripe read well against this kind of sky.',
  'Olive green tee':                'Earthy and easy — the olive sits perfectly in this warmth.',
  'Pink/mauve longsleeve':          'The pink/mauve reads warm and intentional in cooler light.',
  'Camo print tee':                 'The camo earns its keep in straightforward, direct heat.',
  'Dark green acid-wash sweatshirt':'The acid-wash settles into the grey weight of this kind of day.',
  'Light grey jacket':              'Wind calls for structure. The jacket does what a sweater cannot.',
};

/* ─── City register ──────────────────────────────────── */
const ELEVATED_CITIES = [
  'london','paris','milan','tokyo','new york','copenhagen','stockholm',
  'amsterdam','zurich','geneva','vienna','berlin','seoul','singapore',
  'hong kong','rome','florence','antwerp','oslo','edinburgh','kyoto',
  'munich','melbourne','sydney','madrid','barcelona','lisbon',
];
const RELAXED_CITIES = [
  'los angeles','miami','gold coast','bali','ibiza','san diego','honolulu',
  'byron bay','marbella','cancun','tulum','bondi','malibu','santa monica',
  'santa barbara','brisbane','perth','palm springs',
];

function getCityRegister(locationName) {
  if (!locationName) return 'neutral';
  const loc = locationName.toLowerCase();
  if (ELEVATED_CITIES.some(c => loc.includes(c))) return 'elevated';
  if (RELAXED_CITIES.some(c => loc.includes(c))) return 'relaxed';
  return 'neutral';
}

/* ─── Selection helpers ──────────────────────────────── */
function byFormality(pool, register) {
  const copy = [...pool];
  if (register === 'elevated') copy.sort((a, b) => b.formality - a.formality);
  if (register === 'relaxed')  copy.sort((a, b) => a.formality - b.formality);
  return copy;
}

function selectTop(temp, humidity, wind, condition, register) {
  // Wind at cool temps → jacket
  if (temp >= 8 && temp < 15 && wind > 25) {
    return TOPS.find(t => t.name === 'Light grey jacket');
  }

  let pool = [...TOPS];

  if (temp >= 28) {
    pool = pool.filter(t => t.warmth === 1 && t.fabric === 'jersey');
    if (humidity > 75) pool = pool.filter(t => t.colorTemp !== 'neutral' || t.colorFamily !== 'white');
  } else if (temp >= 22) {
    pool = pool.filter(t => t.warmth <= 2);
  } else if (temp >= 15) {
    if (condition === 'rain') {
      pool = pool.filter(t => t.warmth >= 2 && t.warmth <= 3);
      const dark = pool.filter(t => ['black','green','grey'].includes(t.colorFamily));
      if (dark.length) pool = dark;
    } else if (condition === 'cloudy' || condition === 'snow') {
      pool = pool.filter(t => t.warmth >= 2 && t.warmth <= 3);
    } else {
      pool = pool.filter(t => t.warmth >= 1 && t.warmth <= 2);
    }
  } else if (temp >= 8) {
    pool = pool.filter(t => t.warmth >= 3 && t.warmth <= 4);
  } else {
    // Cold: acid-wash + knit only
    pool = pool.filter(t =>
      t.name === 'Dark green acid-wash sweatshirt' || t.name === 'Dark green knit sweater'
    );
  }

  return byFormality(pool, register)[0] ?? TOPS[0];
}

function selectBottom(temp, humidity, wind, condition, register) {
  let pool = [...BOTTOMS];

  if (temp >= 28) {
    pool = pool.filter(b => b.warmth === 0);
  } else if (temp >= 22) {
    pool = pool.filter(b => b.warmth <= 1);
    if (condition === 'rain' || humidity > 75) {
      const noLinen = pool.filter(b => b.fabric !== 'linen');
      if (noLinen.length) pool = noLinen;
    }
  } else {
    pool = pool.filter(b => b.warmth >= 2);
    if (condition === 'rain') {
      const dark = pool.filter(b => ['black','grey'].includes(b.colorFamily));
      if (dark.length) pool = dark;
    }
  }

  return byFormality(pool, register)[0] ?? BOTTOMS[0];
}

function selectScent(temp, humidity, wind, condition, register) {
  const tier = temp >= 28 ? 'hot'
             : temp >= 22 ? 'warm'
             : temp >= 15 ? 'mild'
             : temp >= 8  ? 'cool'
             : 'cold';

  let pool = SCENTS.filter(s => s.tempRange.includes(tier));

  if (condition === 'rain') {
    const rainy = pool.filter(s => s.conditions.includes('rain'));
    if (rainy.length) pool = rainy;
  }

  const byReg = pool.filter(s => s.registers.includes(register));
  if (byReg.length) pool = byReg;

  if (wind > 25) {
    const heavy = pool.filter(s => s.intensity >= 3);
    if (heavy.length) pool = heavy;
  }

  return pool[0] ?? SCENTS[0];
}

/* ─── Narrative ──────────────────────────────────────── */
const NARRATIVES = {
  hot_humid:   'The air is thick and the sun is relentless. Keep everything as light as possible — this is no day for layers or complexity.',
  hot_dry:     'There is a clean quality to this heat. The light is sharp, the air moves. Dress open and easy — precision over volume, always.',
  warm:        'The temperature is generous today. Not quite summer, not quite not. Lean into the ease and let the season do the work.',
  mild_clear:  'Mild and clear is the best kind of day — everything feels possible. Dress with the same forward clarity: clean, considered, unhurried.',
  mild_cloudy: 'Overcast days have a certain flattering quality — everything softer, more considered. Lean into the texture, the muted palette, the depth.',
  mild_rain:   'Rain changes the texture of a day entirely. Dress for arrival — for moving through it with intention, reaching somewhere intact.',
  cool_wind:   'The chill has sharpened and the wind has an opinion. Dress accordingly: something with weight, something that stays against it.',
  cool:        'The cold is clean today — still, considered. This is the kind of temperature that rewards dressing with care rather than just warmth.',
  cold:        'This is the deep cold. Everything contracts, becomes essential. Dress with intention and specificity — only winter demands this level of care.',
};

const CITY_SUFFIX = {
  elevated: city => ` ${city} rewards the considered choice.`,
  relaxed:  city => ` ${city} is exactly the right city for it.`,
  neutral:  ()   => '',
};

function getNarrative(temp, condition, wind, humidity, register, location) {
  let key;
  if      (temp >= 28) key = humidity > 75 ? 'hot_humid' : 'hot_dry';
  else if (temp >= 22) key = 'warm';
  else if (temp >= 15) key = condition === 'rain' ? 'mild_rain' : condition === 'clear' ? 'mild_clear' : 'mild_cloudy';
  else if (temp >= 8)  key = wind > 25 ? 'cool_wind' : 'cool';
  else                 key = 'cold';

  const city   = location ? location.split(',')[0].trim() : null;
  const suffix = city ? (CITY_SUFFIX[register] ?? CITY_SUFFIX.neutral)(city) : '';
  return NARRATIVES[key] + suffix;
}

/* ─── Main recommendation ────────────────────────────── */
function getRecommendation(temp, humidity, wind, condition, location) {
  const register = getCityRegister(location);
  const top      = selectTop(temp, humidity, wind, condition, register);
  const bottom   = selectBottom(temp, humidity, wind, condition, register);
  const sc       = selectScent(temp, humidity, wind, condition, register);

  return {
    top:          top.name,
    bottom:       bottom.name,
    scent:        sc,
    outfitReason: TOP_REASONS[top.name] ?? '',
    scentReason:  sc.character,
    narrative:    getNarrative(temp, condition, wind, humidity, register, location),
    register,
  };
}

/* ─── WMO weather codes ─────────────────────────────── */
function getCondition(code) {
  if (code <= 1)                               return 'clear';
  if (code <= 3 || code === 45 || code === 48) return 'cloudy';
  if ([71,73,75,77,85,86].includes(code))      return 'snow';
  return 'rain';
}

function getConditionLabel(code) {
  const map = {
    0:'Clear sky', 1:'Mainly clear', 2:'Partly cloudy', 3:'Overcast',
    45:'Foggy', 48:'Icy fog',
    51:'Light drizzle', 53:'Drizzle', 55:'Heavy drizzle',
    61:'Light rain', 63:'Rain', 65:'Heavy rain',
    71:'Light snow', 73:'Snow', 75:'Heavy snow', 77:'Snow grains',
    80:'Rain showers', 81:'Rain showers', 82:'Heavy showers',
    85:'Snow showers', 86:'Heavy snow showers',
    95:'Thunderstorm', 96:'Thunderstorm', 99:'Thunderstorm',
  };
  return map[code] ?? 'Variable';
}

/* ─── DOM helpers ───────────────────────────────────── */
function showState(id) {
  for (const s of ['state-initial','state-loading','state-city','state-results']) {
    const el = document.getElementById(s);
    el.classList.toggle('hidden', s !== id);
    if (s === id && s === 'state-results') {
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
    const name = typeof item === 'string' ? item : item.name;
    const pill = document.createElement('span');
    pill.className = 'pill' + (name === active ? ' pill--active' : '');
    pill.textContent = name;
    el.appendChild(pill);
  }
}

function renderResults(weather, rec) {
  document.getElementById('temp-val').textContent      = Math.round(weather.temp);
  document.getElementById('weather-cond').textContent  = weather.conditionLabel;
  document.getElementById('humidity-val').textContent  = Math.round(weather.humidity);
  document.getElementById('wind-val').textContent      = Math.round(weather.wind);
  document.getElementById('weather-loc').textContent   = weather.location ?? '';

  document.getElementById('rec-top').textContent       = rec.top;
  document.getElementById('rec-bottom').textContent    = rec.bottom;
  document.getElementById('rec-scent').textContent     = rec.scent.name;
  document.getElementById('rec-scent-sub').textContent = `${rec.scent.fmt} · ${rec.scent.profile}`;
  document.getElementById('rec-scent-notes').textContent = rec.scent.notes;

  document.getElementById('outfit-reason').textContent = rec.outfitReason;
  document.getElementById('scent-reason').textContent  = rec.scentReason;
  document.getElementById('look-text').textContent     = rec.narrative;

  renderPills('pills-tops',    TOPS,   rec.top);
  renderPills('pills-bottoms', BOTTOMS, rec.bottom);
  renderPills('pills-scents',  SCENTS,  rec.scent.name);
}

/* ─── API ───────────────────────────────────────────── */
async function fetchWeather(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
    `&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code` +
    `&wind_speed_unit=kmh&temperature_unit=celsius`
  );
  if (!res.ok) throw new Error('Weather unavailable');
  const { current: c } = await res.json();
  return {
    temp:           c.temperature_2m,
    humidity:       c.relative_humidity_2m,
    wind:           c.wind_speed_10m,
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
    return data.address?.city || data.address?.town || data.address?.village || data.address?.county || '';
  } catch { return ''; }
}

async function geocodeCity(city) {
  const res  = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`
  );
  const data = await res.json();
  if (!data.results?.length) throw new Error('City not found');
  const r = data.results[0];
  return { lat: r.latitude, lon: r.longitude, name: r.name + (r.country ? `, ${r.country}` : '') };
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
    const rec = getRecommendation(weather.temp, weather.humidity, weather.wind, weather.condition, locationName);
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
  const date = new Date().toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });
  document.getElementById('footer-date').textContent = date.toUpperCase();

  // Auto-fetch if permission already granted
  if (navigator.permissions) {
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      if (result.state === 'granted') fetchFromGeolocation();
    });
  }

  document.getElementById('btn-get').addEventListener('click', fetchFromGeolocation);

  document.getElementById('btn-city').addEventListener('click', submitCity);
  document.getElementById('city-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') submitCity();
  });

  document.getElementById('btn-back').addEventListener('click', () => {
    _lat = null; _lon = null; _locationName = '';
    document.getElementById('city-input').value = '';
    showState('state-initial');
  });

  document.getElementById('btn-refresh').addEventListener('click', () => {
    if (_lat !== null) run(_lat, _lon, _locationName);
    else showState('state-initial');
  });

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
}

document.addEventListener('DOMContentLoaded', init);
