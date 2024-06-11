'use client';
import React, { useContext } from 'react';
import { createContext } from 'vm';

export default function UseContextChild() {
  const UserContext: any = createContext();
  const user: any = useContext(UserContext);
  return (
    <div className="text-md mt-3 bg-blue-100 text-blue-600">
      Hello there this is me, <b>{user}</b>
    </div>
  );
}
