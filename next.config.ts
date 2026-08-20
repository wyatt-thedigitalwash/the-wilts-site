import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 changed the default for images.qualities to [75] only, and any
    // quality outside the list is rejected by the optimizer with a 400. This
    // site is photography led, so 85 is declared explicitly rather than dropping
    // every photo to 75.
    qualities: [75, 85],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
