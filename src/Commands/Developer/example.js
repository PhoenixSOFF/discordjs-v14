import { SlashCommandBuilder, ChatInputCommandInteraction, PermissionFlagsBits } from 'discord.js';

export default {
	developer: true,
	data: new SlashCommandBuilder()
		.setName('example') // name of the command
		.setDescription('example') // description of the command
		.setDMPermission(false) // is the command allowed in bot's dms
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator), // Permission required for command
	/**
	 * @param {ChatInputCommandInteraction} interaction
	 */
	async execute(interaction, client) {
		//function of command

		interaction.reply({ content: 'This command is working!' });
	},
};
