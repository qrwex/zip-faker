const zip = require('./src/ZipFaker');
const args = require('yargs').argv;


if (!args.country) {
    return console.log('missing country argument');
}

console.log(zip.generate(args.country));