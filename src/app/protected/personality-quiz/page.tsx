"use client";
import React, { useState } from 'react';
import PersonalityQuiz from '@/components/features/personality/PersonalityQuiz';

export default function PersonalityQuizPage() {
  const handleSubmit = (answers) => {
    // Handle quiz submission logic here
    console.log('Quiz answers:', answers);
    // You can add API call or further processing
  };

  return (
    <div>
      <h1>Personality Quiz</h1>
      <PersonalityQuiz onSubmit={handleSubmit} />
    </div>
  );
}
