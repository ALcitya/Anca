const chalk = require("chalk");

for (let n = 1; n <= 10; n++) {
    if (n === 3 || n === 5 || n === 7) {
        console.log(chalk.red(`Angkot dengan nomor ${n} sedang tidak beroperasi.`));
    } else if (n === 6) {
        console.log(chalk.yellow(`Angkot dengan nomor ${n} sedang dalam perbaikan.`));
    } else {
        console.log(chalk.green(`Angkot dengan nomor ${n} sedang berjalan dengan baik.`));
    }
}