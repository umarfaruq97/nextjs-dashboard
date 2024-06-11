'use client';
import React, { useEffect, useRef, useState } from 'react';
import { createConnection } from './chat';
import Link from 'next/link';

function ChatRoom({ roomId }: { roomId: string }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    const cleanUpFunction = () => connection.disconnect();
    return cleanUpFunction;
  }, [serverUrl, roomId]);

  return (
    <>
      <label>
        Server URL:{' '}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
function ModalDialog({
  isOpen,
  children,
}: {
  isOpen: boolean;
  children: React.ReactNode;
}) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const dialog: any = dialogRef.current;
    dialog.showModal();
    console.log('✅setup function run');
    return () => {
      console.log('⛔️cleanup function run');
      dialog.close();
    };
  }, [isOpen]);
  return <dialog ref={dialogRef}>{children}</dialog>;
}

const optionsRoomId: string[] = ['general', 'travel', 'music'];
export default function Page() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="bg-gray-50 p-2">
      <h1 className="text-2xl font-semibold">useEffect Hook Explanation</h1>
      <h2 className="mt-4 text-xl font-semibold">Usage</h2>
      <div className="mt-4 bg-red-50 p-2">
        <p className="text-semibold mb-2 text-lg">
          1. Connecting to an external system
        </p>
        <label>
          Choose the chat room:
          <select
            className="ml-2"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
          >
            {optionsRoomId.map((el) => {
              return (
                <option value={el} key={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </label>
        <button
          className={`ml-4 rounded-sm ${
            show ? 'bg-red-100' : 'bg-green-100'
          } p-2 text-sm`}
          onClick={() => setShow(!show)}
        >
          {show ? 'Close Chat' : 'Show Chat'}
        </button>
        {show && <hr />}
        {show && <ChatRoom roomId={roomId} />}
      </div>
      <div className="mt-4 bg-green-50 p-2">
        <p className="text-semibold mb-2 text-lg">
          2. Controlling a modal dialog
        </p>
        <div className="flex flex-col space-y-2">
          <button
            className="rounded-sm bg-blue-100 p-2"
            onClick={() => setShowModal(true)}
          >
            {showModal ? 'Modal Shown' : 'Show Modal'}
          </button>
          <ModalDialog isOpen={showModal}>
            <div className="bg-grey-100 flex h-[200px] w-[200px] flex-col items-center justify-center">
              <p className="text-lg text-blue-800">Hello There!</p>
              <button
                className="rounded-sm bg-red-200 p-2 text-red-800"
                onClick={() => setShowModal(false)}
              >
                Click me to close
              </button>
            </div>
          </ModalDialog>
        </div>
      </div>
      <div className="text-md cursor-pointer rounded-sm bg-blue-100 p-2 text-blue-900">
        <Link href={'/dashboard/hooks/use-effect/reactive-dependencies'}>
          Go To Reactive Dependencies
        </Link>
      </div>
    </div>
  );
}
