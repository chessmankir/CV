import {OpenAI} from "openai";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.DEEPSEEK_AI_KEY);
export const openrouter = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.DEEPSEEK_AI_KEY,
});