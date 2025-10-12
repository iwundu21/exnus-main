
'use client';

import React from 'react';

interface LinkifyProps {
  text: string;
}

export default function Linkify({ text }: LinkifyProps) {
  if (!text) {
    return null;
  }
  
  // This regex is more comprehensive and handles URLs (http, https, www), emails, and links like t.me/
  const urlRegex = /((?:https?:\/\/|www\.|ftp\.|t\.me\/)[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/\/=]*))|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/ig;
  
  const parts = text.split(urlRegex).filter(part => part !== undefined);

  return (
    <p className="text-foreground/80 whitespace-pre-wrap">
      {parts.map((part, index) => {
        if (part && part.match(urlRegex)) {
          let href = part;
          if (part.startsWith('www.')) {
            href = `http://${part}`;
          } else if (part.includes('@')) {
            href = `mailto:${part}`;
          } else if (!part.match(/^(https?|ftp):\/\//)) {
            href = `http://${part}`;
          }
          
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
