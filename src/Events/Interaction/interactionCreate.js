import 'dotenv/config';

export default {
	name: 'interactionCreate',
	async execute(interaction, client) {
		if (!interaction.isChatInputCommand()) return;

		const command = client.commands.get(interaction.commandName);

		if (command.developer && interaction.user.id !== process.env.DEVELOPERID)
			return interaction.reply({ content: 'This command is developer only', ephemeral: true });

		if (!command) return interaction.reply({ content: 'The command is unreachable', ephemeral: true });

		command.execute(interaction, client);
	},
};
