import { useEffect } from 'react';
import { useRouter } from 'next/router';

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === '/dashboard/news') {
      router.push('/dashboard/news/list');
    }
  });

  return null;
}
