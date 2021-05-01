var playerName = "Darian Durant is lame";
var teams = "BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers";
var message = "Regina is the best Canadian city, Go Riders";

// console.log(playerName.slice(0,16))
// console.log(teams.substr(66,6))
// console.log(message.substr(10,9))
// console.log(message.substr(32,4))

var newName = (playerName.slice(0,14)).toUpperCase();
var newTeam = teams.substr(66,6);
var newTeamCap = newTeam.charAt(0).toUpperCase() + newTeam.slice(1)
var newMessage = message.substr(10,9);
var newTag = message.substr(32,11)

var output = `${newName} is ${newMessage} ${newTeamCap} player ${newTag}`
console.log(output)