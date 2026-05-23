import {Router} from "express";
import {MailController} from "./mail.controller";

const router = Router();
const mailController = new MailController()
router.post("/", mailController.sendContactMail.bind(mailController));
export default router;