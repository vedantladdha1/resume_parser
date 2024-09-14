const dotenv = require("dotenv").config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyD7eSbqn9kpwlZKUuwf9N5bg_LnQgIeA8Q");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateContent = async (req, res) => {
  try {
    const prompt = "Create 5 funny and witty jokes about generative AI";

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.send(text);
  } catch (err) {
    console.log(err);
    res.send("Unexpected Error!!!");
  }
};

export default generateContent;
