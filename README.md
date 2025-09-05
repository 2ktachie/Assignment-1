# Assignment-1
Backend Assessment - FPL

Endpoint

GET /api/fixtures/august
Response: array of { code, day, time }
Times are in UTC, derived from FPL’s kickoff_time.

How It Works
fetches https://fantasy.premierleague.com/api/fixtures/.
Filters fixtures where kickoff_time month is August.
Maps to { code, day (Sun-Sat), time (HH:MM UTC) }.
Returns the array to the client.
Basic error handling returns 500 with { error: 'Failed to fetch fixtures' } on failures.
