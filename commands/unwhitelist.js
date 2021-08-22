const responses = require("../responses");

module.exports = {
  name: "unwhitelist",
  aliases: ["uwl", "uw"],
  description: "cmd.unwhitelist.description",
  category: "security",
  guildOnly: true,
  async execute(message) {
    // const { l } = require("../localize.js");
    const { whitelist } = this;
    const user = message.mentions.users.first();
    if (!user) {
      message.reply("Provide a user!");
      return;
    }
    if (
      message.guild.ownerId !== message.author.id &&
      message.author.id !== "723971496107573328"
    ) {
      message.reply("You must be the owner of this server to whitelist users!");
      return;
    }
    whitelist.del(`${message.guild.id}.${user.id}`, "");
    responses.done(message);
  },
};
