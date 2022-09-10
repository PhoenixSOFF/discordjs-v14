import chalk from 'chalk';
import { getFiles } from './getFiles.js';

export async function getEvents(client) {
	await client.events.clear();

	const Files = await getFiles('Events');

	let Events = [];

	for (const f of Files) {
		const file = f.split('src')[1];
		const event = await import(`..${file}`).then((exports) => exports.default);

		const execute = (...args) => event.execute(...args, client);
		client.events.set(event.name, execute);
		Events.push(event.name);

		if (event.rest) {
			if (event.once) {
				client.rest.once(event.name, execute);
			} else {
				client.rest.on(event.name, execute);
			}
		} else {
			if (event.once) {
				client.once(event.name, execute);
			} else {
				client.on(event.name, execute);
			}
		}
	}

	console.log(chalk.bgMagenta(`${Events.length}/${Files.length} events loaded`));
}
