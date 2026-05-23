import {openrouter} from "../../libs/ai";

export class CommentService {
    async updateComment(comment: string) {
        console.log("updateComment2");
        const completion  = await openrouter.chat.completions.create({
            model:
                "deepseek/deepseek-chat-v3-0324:free",
            messages: [
                {
                    role: "system",
                    content:
                        "Помоги сделать сообщение более профессиональным, дружелюбным и исправь орфографические ошибки. добавляй в конце \"с уважением\"",
                },
                {
                    role: "user",
                    content: comment,
                },
            ],
        });
        console.log(completion.choices[0].message);
        return completion.choices[0].message.content
    }
}