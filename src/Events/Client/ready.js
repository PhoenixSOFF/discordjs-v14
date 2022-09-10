import { Client } from 'discord.js';
import { getCommands } from '../../Handlers/commandHandler.js';
import chalk from 'chalk';

export default {
	name: 'ready',
	once: true,
	/**
	 * @param {Client} client
	 */
	async execute(client) {
		await getCommands(client).then(() => {
			console.log(chalk.bgGreen('Bot connected to Discord!'));
		});
	},
};
