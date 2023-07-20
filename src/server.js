import express from 'express';
import cors from 'cors';

import health from './router/health';
import containers from './router/containers';

const app = express();
const port = 8000;

app.use(cors())

app.use('/api', health);
app.use('/api/containers', containers);

app.listen(port, () => {
  console.log("Server Started in port : " + port);
});
