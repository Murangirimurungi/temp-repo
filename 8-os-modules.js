const os =require('os')
// info about current user
const user = os.userInfo()
console.log(user)
//  method returns the system uptime in seconds

console.log(`The system uptime is: ${os.uptime()/3600} hours`)

const currentOs={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem()/10000000,
    freeMem:os.freemem()/10000000,
}

console.log(currentOs)