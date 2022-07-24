import * as moduloMatematicas from './controller.js';
import chalk from 'chalk';

let mult = moduloMatematicas.multiplica(moduloMatematicas.suma(1,2),moduloMatematicas.suma(4,5));
console.log(chalk.green(mult))