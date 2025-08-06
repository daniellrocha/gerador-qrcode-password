import chalk from "chalk";

const promptQRCode = [
    {
        name: "link",
        description: chalk.green("Digite o link para gerar o QR CODE"),
    },
    {
        name: "type",
        description: chalk.green("Escolha entre o tipo de QRcode (1- NORMAL ou (2- TERMINAL"),

        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        required: true,
    }
];


export default promptQRCode;
