// src/ai/flows/personalized-reflection.ts
'use server';
/**
 * @fileOverview A flow for providing personalized reflections on Advaita principles based on user queries.
 *
 * - personalizedReflection - A function that takes a user's question and returns a personalized reflection based on Shankara's teachings.
 * - PersonalizedReflectionInput - The input type for the personalizedReflection function.
 * - PersonalizedReflectionOutput - The return type for the personalizedReflection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedReflectionInputSchema = z.object({
  query: z.string().describe('The user query about Advaita principles.'),
});
export type PersonalizedReflectionInput = z.infer<typeof PersonalizedReflectionInputSchema>;

const PersonalizedReflectionOutputSchema = z.object({
  insight: z
    .string()
    .describe(
      'A poetic and concise (2-4 lines) Vedantic reflection on the user\'s query, inspired by Shankara\'s teachings.'
    ),
  scripturalAnchor: z.object({
    sanskrit: z.string().describe("A relevant verse from a scripture like the Upanishads or Gita in Sanskrit."),
    english: z.string().describe("The English translation of the Sanskrit verse."),
    source: z.string().describe("The source of the scripture (e.g., 'Katha Upanishad 1.2.20')."),
  }).describe("A scriptural anchor that supports the reflection."),
  shankaraQuote: z
    .string()
    .describe(
      "A direct and relevant quote from Adi Shankaracharya's works (e.g., a Bhashya or a Prakarana Grantha)."
    ),
});
export type PersonalizedReflectionOutput = z.infer<typeof PersonalizedReflectionOutputSchema>;

export async function personalizedReflection(input: PersonalizedReflectionInput): Promise<PersonalizedReflectionOutput> {
  return personalizedReflectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedReflectionPrompt',
  input: {schema: PersonalizedReflectionInputSchema},
  output: {schema: PersonalizedReflectionOutputSchema},
  prompt: `You are a wise and poetic sage steeped in the teachings of Adi Shankaracharya. A seeker has approached you with a question. Respond not with a long lecture, but with a series of concise, profound insights that guide them toward self-reflection.

User's Query: {{{query}}}

Based on this query, you must generate the following three distinct pieces of wisdom:

1.  **Insight**: A short, poetic reflection (2-4 lines) that captures the essence of the Advaitic answer to their query. This should be an original composition in the spirit of Shankara, not a direct quote.
2.  **Scriptural Anchor**: Find a single, powerful verse from the Upanishads, Bhagavad Gita, or other core scriptures that directly relates to the query. Provide the verse in Sanskrit, its English translation, and its source.
3.  **Shankara's Quote**: Provide a direct, relevant quote from one of Adi Shankaracharya's commentaries (Bhashyas) or texts (Prakarana Granthas) that illuminates the topic.

Your response must be structured precisely according to the output schema.`,
  config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const personalizedReflectionFlow = ai.defineFlow(
  {
    name: 'personalizedReflectionFlow',
    inputSchema: PersonalizedReflectionInputSchema,
    outputSchema: PersonalizedReflectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
