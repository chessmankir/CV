import {Request, Response} from "express";
import {CommentService} from "./comment.service";

const commentContoller = new CommentService();
export class CommentController {
    async updateComment(req: Request, res: Response) {
        console.log("updateComment");
        try {
            const {comment } = req.body;
            console.log(comment);

            if (!comment || typeof comment !== "string") {
                return res.status(400).json({
                    ok: false,
                    message: "Комментарий обязателен",
                });
            }

            const updatedComment = await commentContoller.updateComment(comment);
            console.log(updatedComment);
            return res.status(200).json({
                ok: true,
                comment: updatedComment,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                ok: false,
                message: "Ошибка обработка AI комментария"
            })
        }
    }
}