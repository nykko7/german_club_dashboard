import { useEffect } from 'react';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/dashboard/history') {
      router.push('/dashboard/history/view');
    }
  });

  return null;
}
