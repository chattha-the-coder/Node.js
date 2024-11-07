const os = require("os");

//info about current user
const user = os.userInfo();

console.log(user);

//method return the system uptimme in seconds
console.log(`the system uptime is ${os.uptime() / 3600} hours`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalm: os.totalmem(),
  freem: os.freemem(),
};
console.log(currentOs);
