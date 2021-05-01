var userAndPassword = 'pepito2017,12345';
var username = userAndPassword.substr(0,10);
var password = userAndPassword.substr(11,5);
var output = `The user ${username} has ${password} as password`;

console.log(output)
