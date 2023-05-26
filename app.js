// const postgres = require('postgres');
// require('dotenv').config();
// const express = require('express');
// const serverless = require('serverless-http');

// const app = express();
// const { URL } = process.env;
// const sql = postgres(URL, { ssl: 'require' });

// async function getPostgresVersion() {
//   try {
//     const result = await sql`create table test;`;
//     console.log(result);
//   } catch (error) {
//     console.error('Error occurred while executing SQL query:', error);
//   }
// }

// app.get('/', async (req, res) => {
//   await getPostgresVersion();
//   res.send('Hello World!');
// });

// module.exports.handler = serverless(app);
import { Pool } from '@neondatabase/serverless';

export default {
  async fetch(req, env, ctx) {
    const pool = new Pool({ connectionString: env.URL });
    const { rows: [{ now }] } = await pool.query('SELECT now()');
    ctx.waitUntil(pool.end());
    return new Response(now);
  }
}