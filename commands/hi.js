module.exports = {
    name: 'hi',
    description: "this is a reply command!",
    execute(message, args){
        message.channel.send('helllo . my name is bolt and bolt made me');
    }
}