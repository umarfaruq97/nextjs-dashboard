'use client';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useReducer, useState } from 'react';
const links = [
  { name: 'useContext Hook', href: '/dashboard/hooks/use-context' },
  { name: 'useEffect Hook', href: '/dashboard/hooks/use-effect' },
  { name: 'useMemo Hook', href: '/dashboard/hooks/use-memo' },
  { name: 'useRef Hook', href: '/dashboard/hooks/use-ref' },
];

export default function Page() {
  // useState hook
  let [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  function resetCount() {
    count = 1;
    setCount(0);
  }

  // useReducer hook
  type UserType = {
    name: string;
    age: number;
    status: boolean;
  };
  type ActionType = {
    type: string;
    payload: {
      [key: string]: any;
    };
  };

  const initialEmployee: UserType = {
    name: 'Umar Faruq',
    age: 30,
    status: true,
  };
  function reducer(state: UserType, action: ActionType): UserType {
    switch (action.type) {
      case 'change_name':
        return {
          ...state,
          name: action.payload.name,
        };
      case 'change_age':
        return {
          ...state,
          age: action.payload.age,
        };
      case 'change_status':
        return {
          ...state,
          status: action.payload.status,
        };
      default:
        return state;
    }
  }
  const [employee, dispatchEmployee] = useReducer(reducer, initialEmployee);
  function handlePatchEmployee(action: ActionType) {
    dispatchEmployee(action);
  }
  return (
    <div>
      <div className="flex items-center text-3xl">Learning Hooks Page</div>
      <div
        className="cursor-pointer"
        onClick={() => window.open('tel:900300400')}
      >
        option 1 <br></br>
        <span>Phone: 900 300 400</span>
      </div>
      <a href="tel:+900300400">Option 2 : Phone: 900 300 400</a>
      <div className="mt-4">
        <h2 className="mb-4 text-2xl font-semibold text-blue-800">
          useState Hook
        </h2>
        <p>Count : {count}</p>
        <div className="flex space-x-2">
          <button
            className="cursor-pointer rounded-md bg-blue-200 p-2 text-blue-800"
            onClick={increment}
          >
            Increment
          </button>
          <button
            className="cursor-pointer rounded-md bg-blue-200 p-2 text-blue-800"
            onClick={resetCount}
          >
            Reset Count
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="mb-4 text-2xl font-semibold text-blue-800">
          useReducer Hook
        </h2>
        <div className="text-sm">
          Hello there my name{' '}
          <span
            className={`${employee.status ? 'text-blue-400' : 'text-red-400'}`}
          >
            {employee.name}
          </span>{' '}
          and i am {employee.age} years old
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={employee.name}
            onChange={(e) =>
              handlePatchEmployee({
                type: 'change_name',
                payload: { name: e.target.value },
              })
            }
          />
          <button
            className="bg-blue-100 p-2 text-blue-800"
            onClick={() =>
              handlePatchEmployee({
                type: 'change_age',
                payload: { age: employee.age + 1 },
              })
            }
          >
            Add Age
          </button>
          <input
            type="checkbox"
            checked={employee.status}
            onChange={(e) =>
              handlePatchEmployee({
                type: 'change_status',
                payload: { status: e.target.checked },
              })
            }
          />
        </div>
      </div>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
            )}
          >
            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
