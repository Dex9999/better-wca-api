const postgres = require('postgres');
require('dotenv').config();
const app = require('express')();

const { URL } = process.env;

const sql = postgres(URL, { ssl: 'require' });

async function getPostgresVersion() {
  const result = await sql`create table test;`;
  console.log(result);
}

app.get('/', (req, res) => {
  getPostgresVersion();
  res.send('Hello World!');
});

