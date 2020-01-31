const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")

module.exports = {
    execute: execute
};

 async function execute(message){
    if(message.author.bot) return
    if(message.channel.type == "dm") return

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const comando = args.shift().toLowerCase()

    if(comando == "ping"){
        const m = message.channel.send(`Pong!`)
        message.channel.send(`A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`)
    }
    if(comando == "criador") message.channel.send("O cridor se chama Pedro e seu nome no discord é hero_kenny")
    if(comando == "help"){
        message.channel.send(`Lista de Comandos: 
        pdv!help
        pdv!ping
        pdv!c#melhorquejava ou p!javaéruim
        pdv!fakemsg
        pdv!javavirus
        pdv!medidorJV
        pdv!JVheal
        pdv!piada
        pdv!criador`)
    }
    //if(comando != "help" || comando != "ping" || comando != "c#melhorquejava" || comando != "javaéruim" || comando != "fakemsg" || comando != "javavirus" || comando != "medidorjv" || comando != "jvheal" || comando != "piada" || comando != "criador" || comando != "javaeruim") message.channel.send("use o comando pdv!help para ver os meus comandos")
    if(comando == "fakemsg"){
            message.channel.send(args)
    }
    if(comando == "javaéruim" || comando == "c#melhorquejava" || comando == "javaeruim") message.channel.send("c# é melhor que java e ponto final.")
    if(comando == "javavirus"){
        message.channel.send("como detectar que ele esta no seu computador")
        message.channel.send("use o comando p!medidorJV")
    }
    if(comando == "medidorjv") message.channel.send("você esta infectado use o comando JVheal para saber como se curar")
    if(comando == "jvheal") message.channel.send("tratamento para para vírus:\nC#, JS e Pyton (vai matar ele de odio) mas tera que pagar 1 milhao de dol")
    if(comando == "piada"){
        var rnd = Math.floor((Math.random() * 7) + 1);
       switch(rnd){
       case 1:
        message.channel.send(`poque as estrelas nao sabem miar
        porque astronomia
        `)
        break
        case 2:
        message.channel.send(`Por que as batatas caem?

        Por causa da Lay’s da gravidade.
        `)
        break
        case 3:
        message.channel.send(`Por que o Luke Skywalker guarda todos os livros?

            Pra não deixar que a princesa Leia.
        `)
        break
        case 4:
        message.channel.send(`Por que a cobra queria uma escova?

        Porque ela cansou de Serpente.
        
        `)
        break
        case 5:
        message.channel.send(`O que o ovo novo falou para o ovo velho ?
        Ovô
        `)
        break
        case 6:
            message.channel.send("dia estranho estou sentindo que hoje é segunda\nEntendi hoje ta sendo tipo o java\nvocê odeia ele mas ao mesmo tempo ele quem te paga o salário ") 
            break
        case 7:
            message.channel.send(`" O que você faz quando você não tem mais sinal no celular?

            Você vai na sorveteria, lá tem cobertura.`)    
    }
    }
}