// Declare our core Dependencies
// =============================================================
const app = require('./server-config')
const port = process.env.PORT || 8000;

// Start the server
app.listen(port, () => console.log(`Listening on port ${port}`));
