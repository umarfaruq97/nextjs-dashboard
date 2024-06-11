'use client';
import React, { useContext } from 'react';
import { ColorContext, LevelContext } from './LevelContext';

export default function Heading({ children }) {
  const level = useContext(LevelContext);
  switch (level) {
    case 0:
      throw Error('Heading must be inside a Section!');
    case 1:
      return <h1 className="text-4xl">{children}</h1>;
    case 2:
      return <h2 className="text-3xl">{children}</h2>;
    case 3:
      return <h3 className="text-2xl">{children}</h3>;
    case 4:
      return <h4 className="text-xl">{children}</h4>;
    case 5:
      return <h5 className="text-lg">{children}</h5>;
    case 6:
      return <h6 className="text-md">{children}</h6>;
    default:
      throw Error('Unknown level: ' + level);
  }
}
