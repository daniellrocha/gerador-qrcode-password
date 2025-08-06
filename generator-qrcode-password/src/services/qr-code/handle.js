import chalk from "chalk"
import qr from "qrcode-terminal"

async function handle(err, result) {
    if(err) {
        console.log(chalk.red("Error on aplication!!!"));
        return;
    }

    const isIsmall = result.type == 2;
    qr.generate(result.link, {small: isIsmall}, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso: \n"));
        console.log(qrcode);
    })
    
}
export default handle;