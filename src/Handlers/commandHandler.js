import { getFiles } from './getFiles.js';
import { REST, Routes } from 'discord.js';
import chalk from 'chalk';
import 'dotenv/config';

export async function getCommands(client) {
	await client.commands.clear();

	let Commands = [];

	const Files = await getFiles('Commands');

	for (const f of Files) {
		const file = f.split('src')[1];
		const command = await import(`..${file}`).then((exports) => exports.default);

		client.commands.set(command.data.name, command);

		Commands.push(command.data.toJSON());
	}

	const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

	const data = await rest.put(Routes.applicationCommands(process.env.CLIENTID), { body: Commands }).catch((e) => {
		console.log(e);
	});

	console.log(chalk.bgBlue(`${data.length}/${Files.length} commands loaded`));
}
