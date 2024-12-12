"use client";
import React, { useState } from 'react';
import PersonalityQuiz from '@/components/features/personality/PersonalityQuiz';

export default function PersonalityQuizPage() {
  const handleSubmit = (answers: {
    openness: number;
    conscientiousness: number;
    extraversion: number;
    agreeableness: number;
    neuroticism: number;
  }) => {
    console.log('Quiz answers:', answers);
  };

  return (
    <div>
      <h1>Personality Quiz</h1>
      <PersonalityQuiz onSubmit={handleSubmit} />
    </div>
  );
}
