
import React, { useState } from 'react';
import { generateChoreography } from '../services/geminiService';
import type { ChoreographyConcept } from '../types';
import LoadingSpinner from './LoadingSpinner';

const AiChoreographer: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [concept, setConcept] = useState<ChoreographyConcept | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const examplePrompts = [
    "A solo piece about a flower blooming in a cityscape, combining ballet and hip-hop.",
    "A group dance exploring the concept of time, with accelerating and decelerating movements.",
    "A duet that tells the story of a forgotten myth, using contemporary and folk dance styles.",
    "A melancholic dance about rain, using fluid and sharp movements.",
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a concept or idea.');
      return;
    }
    setIsLoading(true);
    setError(null);
    setConcept(null);
    const result = await generateChoreography(prompt);
    if (result) {
      setConcept(result);
    } else {
      setError('Failed to generate choreography. The AI might be busy, please try again.');
    }
    setIsLoading(false);
  };
  
  const handleExampleClick = (example: string) => {
      setPrompt(example);
  };

  return (
    <div className="container mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">AI Choreographer</h2>
        <p className="text-lg mt-4 text-gray-400 max-w-3xl mx-auto">
          Collaborate with an AI to spark your next creative project. Enter an idea, a mood, or a story, and see what you can create together.
        </p>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 p-8 rounded-lg shadow-2xl">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., A dance about the Northern Lights..."
            className="w-full h-32 p-4 bg-gray-800 border-2 border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            disabled={isLoading}
          />
          <div className="flex items-center justify-between mt-4 flex-wrap gap-4">
            <div className="text-sm text-gray-400">
                Need inspiration? Try one:
                 <div className="flex flex-wrap gap-2 mt-2">
                    {examplePrompts.slice(0,2).map((p, i) => (
                        <button key={i} onClick={() => handleExampleClick(p)} className="text-xs bg-gray-700 hover:bg-gray-600 rounded-full px-3 py-1 transition-colors disabled:opacity-50" disabled={isLoading}>{p.substring(0,30)}...</button>
                    ))}
                </div>
            </div>
            <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="bg-purple-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-700 transition-all duration-300 disabled:bg-gray-500 flex items-center justify-center min-w-[150px]"
            >
                {isLoading ? <LoadingSpinner /> : 'Generate Concept'}
            </button>
          </div>
        </div>

        {error && <div className="mt-8 text-center text-red-500 bg-red-900 bg-opacity-30 p-4 rounded-lg">{error}</div>}

        {concept && (
          <div className="mt-10 bg-gray-900 bg-opacity-50 p-8 rounded-lg animate-fade-in">
            <h3 className="text-3xl font-bold mb-2 text-purple-300">{concept.title}</h3>
            <p className="text-lg italic text-gray-400 mb-6">{concept.style}</p>
            
            <div className="space-y-6">
                <div>
                    <h4 className="text-xl font-semibold mb-2 border-b-2 border-gray-700 pb-1">Concept</h4>
                    <p className="text-gray-300">{concept.concept}</p>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-2 border-b-2 border-gray-700 pb-1">Key Movements</h4>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        {concept.keyMovements.map((move, index) => <li key={index}>{move}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="text-xl font-semibold mb-2 border-b-2 border-gray-700 pb-1">Music Suggestion</h4>
                    <p className="text-gray-300">{concept.musicSuggestion}</p>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiChoreographer;
