const express = require('express');
const app = express();
const port = 3000;

const version = '1';

app.get('/', (req, res) => {
  res.json({ version: version });
});

app.listen(port, () => {
  console.log(`Argo Canary app listening on port ${port}, version ${version}`);
});
