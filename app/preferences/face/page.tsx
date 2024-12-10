'use client';

import { useAuth } from '@/contexts/AuthContext';
import { redirect } from 'next/navigation';
import FacePreferenceUploader from '@/components/features/face-preference/FacePreferenceUploader';

export default function FacePreferencePage() {
  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    redirect('/auth');
  }

  return <FacePreferenceUploader />;
}