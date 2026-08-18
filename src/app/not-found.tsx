import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | The Wilts',
  description: 'The page you are looking for does not exist. Head back to the homepage.',
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <p className="text-sm font-medium uppercase tracking-widest">404</p>
      <h1 className="mt-4 text-3xl font-semibold md:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-base opacity-80">
        The page you are looking for may have moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block border border-current px-6 py-3 text-sm font-medium uppercase tracking-wide transition-opacity hover:opacity-70"
      >
        Go Home
      </Link>
    </main>
  );
}
