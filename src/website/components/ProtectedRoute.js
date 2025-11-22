// components/ProtectedRoute.js
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isAuthenticated } from '../lib/auth';

export default function ProtectedRoute({ children }) {
  const router = useRouter();

  useEffect(() => {
    // Rough Framing: always allow access
    // Later: if (!isAuthenticated()) router.push('/login')
    return;
  }, [router]);

  return <>{children}</>;
}
