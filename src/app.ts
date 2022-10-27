import * as express from 'express';
import { AddressInfo } from 'net';
import * as path from 'path';
import * as eta from 'eta';
import routes from './routes/index';

console.log('log from app.js');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const debug = require('debug')('my express app');

const app = express();

app.engine('eta', eta.renderFile);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'eta');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () =>
{
  debug(`Express server listening on port ${(server.address() as AddressInfo).port}`);
});