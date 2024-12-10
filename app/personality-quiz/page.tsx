'use client';

import { useAuth } from '@/contexts/AuthContext';
import { redirect } from 'next/navigation';
import PersonalityQuiz from '@/components/ui/PersonalityQuiz';

export default function PersonalityQuizPage() {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    redirect('/auth');
  }

  return (
    <div className="container mx-auto p-4">
      <PersonalityQuiz onSubmit={(answers) => console.log(answers)} />
    </div>
  );
}