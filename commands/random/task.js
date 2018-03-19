const commando = require('discord.js-commando');
const Task = require('../../models/tasks');

class TodoCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'todo',
      group: 'random',
      memberName: 'todo',
      description: 'Bot for storage todo list',
      examples: ['todo Create new migration!'],
      guildOnly: true,
      args: [
        {
          key: 'user',
          prompt: 'For who you want send age ?',
          type: 'user'
        },
        {
          key: 'title',
          prompt: 'What text do you say ?',
          type: 'string'

        },
        {
          key: 'age',
          prompt: 'Say your age ?',
          type: 'integer'

        }
      ]
    });
  }

  async run(message, args) {
    console.log('message => ', Object.keys(message));
    console.log('TaskTitle => ', args);
    console.log('message content => ', message.content);
    args.user.send(args.title + ' with age ' + args.age);
    try {


      await new Task({
        title: args.title,
        createdBy: args.user.id
      }).save();

    } catch (error) {
      console.log('Error =>', error);
    }
  }
} 
module.exports = TodoCommand;
