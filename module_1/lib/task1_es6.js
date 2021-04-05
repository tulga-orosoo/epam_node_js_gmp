"use strict";

var _stream = require("stream");

const reverse = new _stream.Transform({
  transform(chunk, encoding, callback) {
    this.push(`${chunk.reverse().toString().replace(/\n/g, '')}\n\n`);
    callback();
  }

});
const source = process.stdin;
const write = process.stdout;
source.pipe(reverse).pipe(write);