const postgres = require('postgres');
require('dotenv').config();

const { URL } = process.env;

const sql = postgres(URL, { ssl: 'require' });

async function getPostgresVersion() {
  const result = await sql`create table test;`;
  console.log(result);
}

getPostgresVersion();