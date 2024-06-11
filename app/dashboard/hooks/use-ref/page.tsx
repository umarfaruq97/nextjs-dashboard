'use client';
import React, { useRef, useState } from 'react';

export default function UseRefPage() {
  const intervalRef = useRef(0);
  const inputRef = useRef(null);
  const nameRef = useRef('Stephen Curry');
  let [nameState, setNameState] = useState('Umar Faruq');
  // check that ref.current doesnt re-render component
  let ref = useRef(0);
  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }
  // useRef to manipulate DOM
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  function handlePlayVideo() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    if (nextIsPlaying) {
      (videoRef.current! as any).play();
    } else {
      (videoRef.current! as any).pause();
    }
  }
  return (
    <div className="w-screen">
      <div className="bg-red-50 p-2">
        <p className="text-md text-blue-900">This is useRef hook explanation</p>
        <p className="text-md">
          Hey there, this is nameRef.current value <b>{nameRef.current}</b> that
          doesnt change when you update input below
        </p>
        <input
          value={nameRef.current}
          onChange={(e) => {
            nameRef.current = e.target.value;
          }}
        />
        <p className="text-md mt-4">
          Hey there, this is nameState value <b>{nameState}</b> that will change
          when you update input below because nameState is state not ref
        </p>
        <input
          value={nameState}
          onChange={(e) => {
            setNameState(e.target.value);
          }}
        />
      </div>
      <div className="mt-6 bg-blue-100 p-2">
        <p>
          Example Click Counter. If you show ref.current = {ref.current} in the
          JSX, the number won’t update on click. This is because setting
          ref.current does not trigger a re-render. Information that’s used for
          rendering should be state instead.
        </p>
        <button className="bg-blue-400 p-3" onClick={handleClick}>
          Click me to counter
        </button>
      </div>
      <div className="mt-6 bg-green-100 p-2">
        <p className="text-lg font-semibold">Manipulating the DOM with a ref</p>
        <button className="mb-2 bg-green-400 p-3" onClick={handlePlayVideo}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <video
          width="250"
          ref={videoRef}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}
