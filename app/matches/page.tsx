'use client';

import { useAuth } from '@/contexts/AuthContext';
import { redirect } from 'next/navigation';
import MatchList from '@/components/matches/MatchList';

export default function MatchesPage() {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    redirect('/auth');
  }

  return <MatchList />;
}