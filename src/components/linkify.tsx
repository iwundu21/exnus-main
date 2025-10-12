
'use client';

import React from 'react';

interface LinkifyProps {
  text: string;
}

export default function Linkify({ text }: LinkifyProps) {
  if (!text) {
    return null;
  }
  
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return (
    <p className="text-foreground/80 whitespace-pre-wrap">
      {parts.map((part, index) => {
        if (part.match(urlRegex)) {
          return (
            <a
              key={index}
              href={part}
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
