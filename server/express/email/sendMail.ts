import Mail from "nodemailer/lib/mailer";
import { transporter } from "./config";

export default function sendEmail(emailDetails: Mail.Options): Promise<boolean> {
    return new Promise((resolve, _) => {
        transporter.sendMail(emailDetails, function (error, info) {
            if (error) {
                console.error("Error while sending email:" + error.message);
                resolve(false);
            } else {
                console.log('Email sent successfully');
                resolve(true);
            }
        });
    });
}

