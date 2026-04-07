import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

async function generateImage() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: 'A futuristic abstract representation of Generative Search Optimization. Glowing neural networks intersecting with search bars and data streams. High quality, 4k, digital art, vibrant blue and purple colors.',
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          imageSize: "1K"
        }
      },
    });

    let imageBase64 = null;
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        imageBase64 = part.inlineData.data;
        break;
      }
    }

    if (imageBase64) {
      const buffer = Buffer.from(imageBase64, 'base64');
      const filePath = path.join(process.cwd(), 'public', 'images', 'gso-2026.png');
      fs.writeFileSync(filePath, buffer);
      console.log('Image saved successfully to', filePath);
    } else {
      console.log('No image data found in the response.');
    }
  } catch (error) {
    console.error('Error generating image:', error);
  }
}

generateImage();
