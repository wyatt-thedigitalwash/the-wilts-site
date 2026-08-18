'use client';

import Link from 'next/link';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold md:text-4xl">Something went wrong</h1>
      <p className="mt-4 max-w-md text-base opacity-80">
        An unexpected error occurred. Try again, or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="border border-current px-6 py-3 text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-70"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 text-sm font-medium uppercase tracking-wide underline transition-opacity hover:opacity-70"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}
