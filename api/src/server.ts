import Debug from 'debug';

import app from './app';
import { ENV, PORT } from './settings';

const debug = Debug('swint:auth:server');

app.listen(PORT, () => debug(`server started: PORT: ${PORT} | ENV: ${ENV}`));
