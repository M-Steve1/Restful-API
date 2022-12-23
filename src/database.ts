import { Pool } from 'pg';
import dbInfo from './config';
const { host, envDB, user, password, port, testDB, env } = dbInfo;

let client;

if (env === 'test') {
  client = new Pool({
    host: host,
    database: testDB,
    user: user,
    password: password,
    port: port
  });
}

if (env === 'env') {
  client = new Pool({
    host: host,
    database: envDB,
    user: user,
    password: password,
    port: port
  });
}

export default client as unknown as Pool;
