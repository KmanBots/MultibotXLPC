const {app} = require('../src/app');
const {connectToTestDB} = require('./db');

// connectToTestDB().then(() => app.listen(3000, () => {
//   console.log("Server listening on port 3000");
// }))

app.listen(3000, () => {
  console.log("Server listening on port 3000");
})