const commando = require('discord.js-commando');
const Task = require('../../models/tasks');

class TodoListCommand extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'todo-list',
      group: 'task',
      memberName: 'todo-list',
      description: 'Bot for storage todo list',
      examples: ['todo create migration'],
      guildOnly: true,
    });
  }

  async run(message, args) {
    const tasks = await Task.find({ createdBy: message.author.id });
    console.log('Tasks => ', tasks);
    // args.users.send()
    let count = 1;
    const taskList = tasks.reduce(
      (acc, object) => {
        acc += count + '. ' + object.title + ' Priority: ' + parseInt(object.priority) + "\n";
        count++;
        return acc;
      }, '')

    console.log('taskList => ', taskList);
    message.author.send(taskList);
  }
}

module.exports = TodoListCommand;