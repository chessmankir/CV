import {MailService} from "./mail.service";
import {Request, Response} from "express";

const mailService: MailService = new MailService();
export class MailController {
    async  sendContactMail(req: Request, res: Response){
        try {
            const { name, email, phone, comment } = req.body;
            console.log(name, email, phone, comment);

            if(!name || !email || !phone || !phone || !comment){
                return res.status(500).json({
                    ok: false,
                    message: "Не все поля заполнены",
                });
            }

            const result = await mailService.sendContactMail({
                name, email, phone, comment
            });

            return res.status(200).json({
                ok: true,
                message: "Сообщение отправлено"
            })
        }
        catch(err){
            console.log(err);
            return res.status(500).json({
                ok: false,
                message: "Ошибка отправки письма",
            });
        }
    }
}

