const postgres = require('postgres');
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
} );