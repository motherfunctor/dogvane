#! /usr/bin/env node
const
    path = require('path'),
    child_process = require('child_process');

child_process.fork(path.join(__dirname, "server.js"), process.argv.slice(2), { cwd: __dirname });