
import { GoogleGenAI, Type } from "@google/genai";
import type { ChoreographyConcept } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        title: {
            type: Type.STRING,
            description: "An evocative title for the dance piece.",
        },
        concept: {
            type: Type.STRING,
            description: "A detailed description of the piece's narrative, mood, and overall concept.",
        },
        style: {
            type: Type.STRING,
            description: "A description of the dance style, including any fusion of different genres.",
        },
        keyMovements: {
            type: Type.ARRAY,
            items: {
                type: Type.STRING,
                description: "A description of a key movement or sequence.",
            },
            description: "An array of 3-5 distinct, signature movements or sequences that define the piece.",
        },
        musicSuggestion: {
            type: Type.STRING,
            description: "A suggestion for the type of music, tempo, or specific artists that would fit the piece.",
        },
    },
    required: ["title", "concept", "style", "keyMovements", "musicSuggestion"]
};


export const generateChoreography = async (prompt: string): Promise<ChoreographyConcept | null> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Based on the following idea, create a detailed choreography concept: "${prompt}"`,
      config: {
        systemInstruction: "You are a world-class choreographer and dance theorist. Your task is to conceptualize innovative and deeply expressive dance pieces. Provide detailed, imaginative, and practical ideas in the specified JSON format.",
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
        throw new Error("Received empty response from API.");
    }
    
    return JSON.parse(jsonText) as ChoreographyConcept;
  } catch (error) {
    console.error("Error generating choreography:", error);
    return null;
  }
};
