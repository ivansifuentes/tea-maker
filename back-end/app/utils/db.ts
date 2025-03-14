import postgres from 'postgres';
import config from './config';

const sql = postgres({
    host: config.get('pgHost'),
    database: config.get('pgDatabase'),
    username: config.get('pgUsername'),
    password: config.get('pgPassword'),
});

export default sql;
