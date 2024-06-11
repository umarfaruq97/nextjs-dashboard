import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <div>
      <button className="rounded-sm bg-blue-50 p-2 text-sm">
        <Link href={'/dashboard/hooks/use-effect'}>Back</Link>
      </button>
      <div className="mt-4"></div>
    </div>
  );
}
