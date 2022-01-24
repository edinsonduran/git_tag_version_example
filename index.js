var gitVersion = require('git-tag-version');

let tag = gitVersion();
if(tag === '0.1.0-SNAPSHOT') {
    tag = 'NO_TAG';
}
console.log(tag);