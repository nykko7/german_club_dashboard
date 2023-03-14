import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://vxzdqueuapywlyoyjnts.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4emRxdWV1YXB5d2x5b3lqbnRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU4MTI5MDUsImV4cCI6MTk5MTM4ODkwNX0.u97WMtdrecM9hFT-Byz0CUVfTTxdp0jOuX6x0JrzINs'
);
