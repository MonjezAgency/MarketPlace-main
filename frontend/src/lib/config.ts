/**
 * Runtime API configuration.
 *
 * Do not keep a deployment-specific Railway URL in source code. Configure
 * BACKEND_URL in the hosting platform instead. The browser uses the
 * same-origin /api/proxy route, while server-side rendering uses BACKEND_URL.
 */
const configuredBackend = process.env.BACKEND_URL || process.env.NEXT_PUBLIC_API_URL;

export const API_BASE_URL =
  typeof window !== 'undefined'
    ? (process.env.NEXT_PUBLIC_API_URL || '/api')
    : (configuredBackend || 'http://localhost:3005/api');

if (typeof window !== 'undefined') {
  console.log('--- SYSTEM CONNECTIVITY DIAGNOSTICS ---');
  console.log('Connecting to Backend through:', API_BASE_URL);
}
