// src/components/features/matches/MatchList.tsx
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, X } from 'lucide-react';
import Image from 'next/image';

interface Match {
  id: number;
  name: string;
  age: number;
  location: string;
  imageUrl: string;
  bio: string;
}

const MatchList = () => {
  const matches: Match[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 28,
      location: "New York, NY",
      imageUrl: "/api/placeholder/400/320",  // Using placeholder API
      bio: "Love hiking and outdoor adventures"
    },
    // Add a few more matches for testing
    {
      id: 2,
      name: "Michael Smith",
      age: 30,
      location: "Los Angeles, CA",
      imageUrl: "/api/placeholder/400/320",
      bio: "Music lover and coffee enthusiast"
    },
    {
      id: 3,
      name: "Emma Williams",
      age: 26,
      location: "Chicago, IL",
      imageUrl: "/api/placeholder/400/320",
      bio: "Travel photographer and foodie"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Your Matches</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((match) => (
          <Card key={match.id} className="overflow-hidden">
            <div className="relative h-48 w-full bg-gray-100">
              <Image
                src={match.imageUrl}
                alt={match.name}
                fill
                className="object-cover"
                unoptimized // Add this for placeholder images
              />
            </div>
            
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold">{match.name}</h3>
                  <p className="text-sm text-gray-500">
                    {match.age} • {match.location}
                  </p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{match.bio}</p>
              
              <div className="flex justify-center gap-4 pt-2">
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                  <X className="h-4 w-4 text-red-500" />
                </Button>
                
                <Button variant="outline" size="sm" className="rounded-full w-10 h-10 p-0">
                  <Heart className="h-4 w-4 text-green-500" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MatchList;