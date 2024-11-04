const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
const systemUptime = os.uptime();
console.log(`The System Uptime is ${systemUptime} in seconds `);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};
console.log(currentOs);
