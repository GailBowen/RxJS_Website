const express = require('express');
const path = require('path');
const app = express();
const port = 3505;


app.use(express.static('public'));

// Example route
// app.get('/', (req, res) => {
//   res.send('Hello, wolf!');
// });

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
