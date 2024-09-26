#!/usr/bin/env node

const { program } = require('commander');
const express = require('express');
const path = require('path');

program
  .option('-p, --port <number>', 'Port to run the dashboard on', '3000')
  .parse(process.argv);

const options = program.opts();
const port = parseInt(options.port, 10);

const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, '..', 'dist')));

// The "catchall" handler: for any request that doesn't
// match one above, send back index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Dashboard is running on http://localhost:${port}`);
});