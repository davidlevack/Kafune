'use client';

import { useAuth } from '@/contexts/AuthContext';
import { redirect } from 'next/navigation';
import ProfileCreation from '@/components/profile/ProfileCreation';

export default function ProfilePage() {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    redirect('/auth');
  }

  return <ProfileCreation />;
}