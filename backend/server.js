const app = require('./index');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});