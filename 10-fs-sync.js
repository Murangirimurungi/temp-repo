const {readFileSync, writeFileSync}=require('fs')

const first= readFileSync('./content/first.txt', 'utf8')

const second= readFileSync('./content/second.txt', 'utf8')

//appending using a
writeFileSync('./content/third-sync.txt',`here is the results:-> ${first} , ${second}`)