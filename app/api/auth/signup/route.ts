// app/api/auth/signup/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName } = body;

    // Here you would:
    // 1. Validate the input
    // 2. Check if user exists
    // 3. Hash the password
    // 4. Create user in database
    
    // For demo purposes, we'll just return a mock user
    // Replace this with actual registration logic
    const mockUser = {
      id: '123',
      email,
      displayName: `${firstName} ${lastName}`
    };

    return NextResponse.json({ 
      success: true,
      user: mockUser
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Registration failed' },
      { status: 400 }
    );
  }
}