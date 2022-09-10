import { GatewayIntentBits, Partials } from 'discord.js';

// REMOVE THE // BEHIND THE PARTIALS OR INTENTS DEPENDING ON YOUR NEEDS

export const intents = [
	//GatewayIntentBits.GuildBans,
	//GatewayIntentBits.GuildEmojisAndStickers,
	//GatewayIntentBits.GuildIntegrations,
	//GatewayIntentBits.GuildInvites,
	GatewayIntentBits.GuildMembers,
	//GatewayIntentBits.GuildMessageReactions,
	//GatewayIntentBits.GuildMessageTyping,
	GatewayIntentBits.GuildMessages,
	//GatewayIntentBits.GuildPresences,
	//GatewayIntentBits.GuildScheduledEvents,
	//GatewayIntentBits.GuildVoiceStates,
	//GatewayIntentBits.GuildWebhooks,
	GatewayIntentBits.Guilds,
	//GatewayIntentBits.DirectMessageReactions,
	//GatewayIntentBits.DirectMessageTyping,
	//GatewayIntentBits.DirectMessages,
	GatewayIntentBits.MessageContent,
];

export const partials = [
	//Partials.Channel,
	Partials.GuildMember,
	//Partials.GuildScheduledEvent,
	//Partials.Message,
	//Partials.Reaction,
	//Partials.ThreadMember,
	Partials.User,
];
