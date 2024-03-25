import axios from "axios";

type sendMessageValues = {
        name: string;
        age?: number;
        phone: string;
        email?: string;
        comment: string;
}

export const sendMessageToTelegram = (values:sendMessageValues) => {
    const TOKEN = "6256749568:AAHTtPs90MP3gNYCio0QQCbTZHkyHLv0am4";
    // Previous chat settings
    // const CHAT_ID = "-1001905245481";
    const CHAT_ID = "-1002036629099";

    const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
    const cleanedNumber = values.phone.replace(/\D/g, "");
    const formattedNumber = `+${cleanedNumber}`;

    let message = `Заявка з сайту\n`;
    message += `Iм'я: ${values.name}\n`;
    if (values.age) {
        message += `Вік: ${values.age}\n`;
    }
    if (values.email) {
        message += `Email: ${values.email}\n`;
    }
    message += `Телефон: ${formattedNumber}\n`;

    if (values.comment) {
        message += `Коментар: ${values.comment}\n`;
    }



    axios.post(URI_API, {
        chat_id:CHAT_ID,
        parse_mode:"html",
        text:message
    })
}