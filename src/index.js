import { Client, Collection } from 'discord.js';
import { partials, intents } from './clientOptions.js';
import 'dotenv/config';
import { getEvents } from './Handlers/eventHandler.js';

const client = new Client({
	partials: [partials],
	intents: [intents],
});

client.events = new Collection();
client.commands = new Collection();

getEvents(client);

client.login(process.env.TOKEN);
