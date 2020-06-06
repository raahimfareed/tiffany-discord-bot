module.exports = {
    name: 'ping',
    description: 'Returns Latency',
    cooldown: 5,
    async execute(message) {
        const msg = await message.channel.send('🏓 Pinging...');
        msg.edit(`🏓 Pong\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency is ${Math.round(message.client.ws.ping)}ms`);
    },
};