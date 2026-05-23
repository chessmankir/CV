import {aiClient} from "../../libs/ai";

export class CommentService {
    async updateComment(comment: string) {
        const completion = await aiClient.chat.completions.create({
            model: "openrouter/free",
            messages: [
                {
                    role: "system",
                    content:
                        "Перепиши сообщение пользователя более профессионально и дружелюбно, исправь ошибки. Не меняй смысл. В конце добавь: «С уважением». Верни только готовый текст.",
                },
                {
                    role: "user",
                    content: comment,
                },
            ],
        });

        return completion.choices[0]?.message?.content;
    }
}