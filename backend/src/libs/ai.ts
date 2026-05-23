import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.OPENROUTER_API_KEY;

if (!apiKey) {
    throw new Error("OPENROUTER_API_KEY is not defined");
}

export const aiClient = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey,
    defaultHeaders: {
        "HTTP-Referer": "http://localhost:3000",
        "X-Title": "CV Portfolio",
    },
});