import {NextFunction, Router} from "express";
import {CommentController} from "./comment.controller";

const router = Router();
const commentController = new CommentController();
router.post("/", commentController.updateComment.bind(commentController));
export default router;