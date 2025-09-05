const axios = require('axios');

async function getAugustFixtures(_req, res) {
  try {
    const { data } = await axios.get('https://fantasy.premierleague.com/api/fixtures/', { timeout: 15000 });

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const fixtures = (Array.isArray(data) ? data : [])
      .filter(f => f && f.kickoff_time && new Date(f.kickoff_time).getUTCMonth() === 7)
      .map(f => {
        const d = new Date(f.kickoff_time);
        const day = dayNames[d.getUTCDay()];
        const hh = String(d.getUTCHours()).padStart(2, '0');
        const mm = String(d.getUTCMinutes()).padStart(2, '0');
        const time = `${hh}:${mm}`;
        return { code: f.code, day, time };
      });

    res.json(fixtures);
  } catch (_err) {
    res.status(500).json({ error: 'Failed to fetch fixtures' });
  }
}

module.exports = { getAugustFixtures };