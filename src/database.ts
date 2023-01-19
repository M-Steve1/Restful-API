import { Pool } from 'pg';
import dbInfo from './config';
const { host, envDB, user, password, port, testDB, env } = dbInfo;

let client;

if (env === 'dev') {
  client = new Pool({
    host: host,
    database: envDB,
    user: user,
    password: password,
    port: port
  });
} else {
  client = new Pool({
    host: host,
    database: testDB,
    user: user,
    password: password,
    port: port
  });
}

export default client as unknown as Pool;
