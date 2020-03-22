#!/usr/bin/env node
'use strict'
 
var copyfiles = require('copyfiles');
 
copyfiles(['components/**/*.scss', 'esm'], {"up": 1}, () => {});