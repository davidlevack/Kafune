'use client';

import { useAuth } from '@/contexts/AuthContext';
import { redirect } from 'next/navigation';
import MessagingSystem from '@/components/chat/MessagingSystem';

export default function MessagesPage() {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    redirect('/auth');
  }

  return <MessagingSystem />;
}