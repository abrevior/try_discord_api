const commando = require('discord.js-commando');
const Task = require('../../models/tasks');

class TodoAddCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'todo-add',
      group: 'task',
      memberName: 'todo-add',
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
          key: 'priority',
          prompt: 'Say task priority ?',
          type: 'integer'
        }
      ]
    });
  }

  async run(message, args) {
    args.user.send(args.title + ' with age ' + args.priority);
    try {


      await new Task({
        title: args.title,
        createdBy: args.user.id,
        priority: args.priority
      }).save();

    } catch (error) {
      console.log('Error =>', error);
    }
  }
} 
module.exports = TodoAddCommand;
