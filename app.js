const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('うまく動いてます！');
});

// 5000番ポートで待機
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`${PORT}番のポートで待機中です...`);
});