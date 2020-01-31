const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
const commands = require("./commands.js")


client.on("ready", () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} servidores.`)
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores`)
})

client.on("guildCreate", guild => {
    console.log(`O bot entrou nos servidores: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`)
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`)
})

client.on("guildDelete", guild => {
    console.log(`o bot foi removido do servidor: ${guild.name} (id: ${guild.id})`)
    client.user.setActivity(`Serving ${client.guilds.size} servers`)
})

client.on("message", async message => {
   commands.execute(message)
})

client.login(config.token)