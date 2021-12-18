const path = require('path');

console.log(path.basename('C:\\temp\\myfile.html'));
console.log(path.dirname(__filename));
console.log(path.extname('C:\\temp\\myfile.html'));
console.log(path.extname(__filename));