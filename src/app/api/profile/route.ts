import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const profile = await request.json();

    // For now, we'll just mock saving the profile
    // In a real app, you would save this to a database
    console.log('Saving profile:', profile);

    return NextResponse.json({ 
      success: true, 
      profile 
    });
  } catch (error) {
    console.error('Profile creation failed:', error);
    return NextResponse.json(
      { error: 'Failed to create profile' },
      { status: 500 }
    );
  }
}