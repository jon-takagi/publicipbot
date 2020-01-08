const Discord = require('discord.js');
const client = new Discord.Client();
var request = require('request');
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.login(auth.token);

client.on('message', msg => {
  if (msg.content === '!ip') {
    var url = 'http://myexternalip.com/raw';
    request(url, function (err, resp, myip) {
        msg.reply(myip);
    });
  }
});
