import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(join(__dirname, 'public')));
app.use(express.json());

// API proxy for bounties
app.get('/api/bounties', async (req, res) => {
  try {
    const response = await fetch('https://bounty.owockibot.xyz/bounties');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Bounty PWA running on http://localhost:${PORT}`);
});
