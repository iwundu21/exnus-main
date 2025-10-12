
'use client';

import React from 'react';

interface LinkifyProps {
  text: string;
}

export default function Linkify({ text }: LinkifyProps) {
  if (!text) {
    return null;
  }
  
  const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])|(\bwww\.[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  const parts = text.split(urlRegex);

  return (
    <p className="text-foreground/80 whitespace-pre-wrap">
      {parts.map((part, index) => {
        if (part && part.match(urlRegex)) {
          const href = part.startsWith('www.') ? `http://${part}` : part;
          return (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80"
            >
              {part}
            </a>
          );
        }
        return part;
      })}
    </p>
  );
}
