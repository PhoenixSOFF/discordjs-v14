import pkg from 'glob';
import { promisify } from 'util';

const { glob } = pkg;
const promise = promisify(glob);

export async function getFiles(dir) {
	const Files = await promise(`${process.cwd().replace(/\\/g, '/')}/src/${dir}/**/*.js`);
	return Files;
}
