import {Transform} from 'stream';

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    this.push(`${chunk.reverse().toString().replace(/\n/g, '')}\n\n`);
    callback();
  }
});

const source = process.stdin;
const write = process.stdout;

source.pipe(reverse).pipe(write);
