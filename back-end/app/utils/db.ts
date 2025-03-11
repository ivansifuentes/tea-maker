import postgres from 'postgres';

const sql = postgres({
    host: 'host.docker.internal',
    database: 'tea-db',
    username: 'tea-fetcher',
    password: 'pass',
});

export default sql;
