// Discord.js command (commands.js)
const Command = require('../Structures/Command');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'c',
      aliases: ['c'],
      description: 'Handles various utility commands',
      category: 'Utilities',
      usage: 'CommandName playerName item amount'
    });
  }

  async run(message, args) {
    console.log('Before checking args length:', args);
    // Check if args array is not empty
    if (args.length < 4) {
      message.channel.send('Invalid command usage. Please use: ?commands CommandName playerName item amount');
      return;
    }

    const commandName = args[0].toLowerCase();
    const playerName = args[1];
    const item = args[2];
    const amount = parseInt(args[3]);

    // Check if amount is a valid number
    if (isNaN(amount)) {
      message.channel.send('Invalid amount. Please use a valid number.');
      return;
    }

    let bedrockCommand = '';

    // Handle different commands
    switch (commandName) {
      case 'give':
        bedrockCommand = `/give ${playerName} ${item} ${amount}`;
        break;
      case 'take':
        bedrockCommand = `/take ${playerName} ${item} ${amount}`;
        break;
      case 'respon':
        bedrockCommand = `/respon ${playerName} ${item} ${amount}`;
        break;
      case 'teleport':
        bedrockCommand = `/teleport ${playerName} ${item} ${amount}`;
        break;
      default:
        message.channel.send('Invalid command. Supported commands: give, take, respon, teleport');
        return;
    }

    console.log(bedrockCommand);

    // You can send a response to the Discord channel
    message.channel.send(`Sent command to Bedrock server: ${bedrockCommand}`);
  }
};
