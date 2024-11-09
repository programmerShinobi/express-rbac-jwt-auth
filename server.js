const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const authRoute = require('./routes/auth.route');
const resourceRoute = require('./routes/resource.route');

app.use('/auth', authRoute);
app.use('/resource', resourceRoute);

app.use('/', (req, res) => {
  res.send('Hello Express with RBAC!');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
