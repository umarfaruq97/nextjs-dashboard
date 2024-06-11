'use client';
import React, { useContext } from 'react';
import { LevelContext } from './LevelContext';
import clsx from 'clsx';

export default function Section({
  children,
  isFancy = false,
}: {
  children: React.ReactNode;
  isFancy?: boolean;
}) {
  const level = useContext(LevelContext);
  return (
    <section
      className={clsx('my-2 rounded-sm p-2', {
        'border-4 border-dashed border-red-300': isFancy,
        'border border-gray-400': !isFancy,
      })}
    >
      {/* wrap children using LevelContext.Provider, so all children inside it will get level (context value) from their ancestor */}
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
}
