import express from 'express';

import health from './router/health';
import containers from './router/containers';

const app = express();
const port = 8000;

app.use('/api', health);
app.use('/api/containers', containers);

app.listen(port, () => {
  console.log("Server Started in port : " + port);
});
