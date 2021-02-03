module.exports = {
    name: 'command',
    description: "Embeds!",
    execute(message, args, discord) {

        const newEmbed = new discord.MessageEmbed()
            .setColor('#3311FF')
            .setTitle('Rules')
            .setURL('https://www.youtube.com/channel/UC44Tw0PIp8f2dsAKd10qthQ')
            .setDescription('follow the server rules')
            .addFields(
                { name: 'rule 1', value: 'be nice' },
                { name: 'rule 2', value: 'follow me on youtube' },
                { name: 'rule 3', value: 'do not fight' }
            )
            .setImage('https://thumbs.dreamstime.com/b/cat-ranger-rifle-cat-ranger-military-uniform-holding-gun-white-background-135402901.jpg')
            .setFooter('Make sure to check out rules channel');
        const newEmbed1 = new discord.MessageEmbed({
            color: '#3311FF',
            title: "hello friendsss",
        })
        message.channel.send(newEmbed1);
    }
}