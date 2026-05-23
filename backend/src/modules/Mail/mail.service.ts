import nodemailer from "nodemailer";
import dotenv from "dotenv";
/*dotenv.config();*/


type SendMailDto = {
    name: string;
    email: string;
    phone: string;
    comment: string;
};

export class MailService {
    private transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST ||  "smtp.gmail.com",
        port: Number(process.env.SMTP_PORT ||  465),
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    async sendContactMail(dto: SendMailDto) {
        const { name, email, phone, comment } = dto;
        await this.transporter.sendMail({
            from: `"CV Portfolio" <${process.env.SMTP_USER}>`,
            to: process.env.OWNER_EMAIL,
            subject: "Новое сообщение с сайта-портфолио",
            html: `
                <h2>Новое сообщение</h2>
                <p><b>Имя:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Телефон:</b> ${phone}</p>
                <p><b>Комментарий:</b></p>
                <p>${comment}</p>
            `,
        });
        console.log("После первого письма");
        await this.transporter.sendMail({
            from: `"Кир | Frontend Developer" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Ваше сообщение получено",
            html: `
                <h2>Спасибо за сообщение!</h2>
                <p>${name}, я получил ваше сообщение и скоро отвечу.</p>
                <p><b>Ваш комментарий:</b></p>
                <p>${comment}</p>
            `,
        });

        return true;
    }
}