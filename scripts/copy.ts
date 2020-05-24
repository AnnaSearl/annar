#!/usr/bin/env node
'use strict'
 
const copyfiles = require('copyfiles');
 
copyfiles(['components/**/*.scss', 'esm'], {"up": 1}, () => {});