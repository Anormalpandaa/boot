const { SlashBuilder } = require("../../../components/CommandBuilder");
const { SlashCommandBuilder } = require("discord.js");

module.exports = new SlashBuilder({
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Send a ping request."),
  async run(client, int) {
    try {
      await int.reply({ content: `🏓Pong!` });
      await int.followUp({
        content: `Latency: ${client.ws.ping}ms\nBot Latency: ${
          Date.now() - int.createdTimestamp
        }ms`,
      });
    } catch (err) {
      console.log(err);
      await int.reply({ content: err.message, ephemeral: true });
    }
  },
});
