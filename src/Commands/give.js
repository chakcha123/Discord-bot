// Discord.js command (give.js)
const Command = require('../Structures/Command');

module.exports = class extends Command {
  constructor(...args) {
    super(...args, {
      name: 'give',
      aliases: ['give'],
      description: 'Gives the specified player a certain amount of items',
      category: 'Utilities',
      usage: 'playerName item amount'
    });
  }

  async run(message, args) {
    console.log('Before checking args length:', args);
    // Check if args array is not empty
    if (args.length < 3) {
      message.channel.send('Invalid command usage. Please use: ?give playerName item amount');
      return;
    }

    const playerName = args[0]; // 'chakcha'
    const item = args[1];       // 'diamond'
    const amount = parseInt(args[2]); // 64 (converted to a number using parseInt)

    // Check if amount is a valid number
    if (isNaN(amount)) {
      message.channel.send('Invalid amount. Please use a valid number.');
      return;
    }

    const bedrockCommand = `/give ${playerName} ${item} ${amount}`;

    console.log(bedrockCommand)

    // You can send a response to the Discord channel

    message.channel.send(`Sent command to Bedrock server: ${bedrockCommand}`);
  }
};
