import { useEffect, useState } from 'react';
import { getOpenStatus, type OpenStatus } from '../utils/hours';

export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(() => getOpenStatus());

  useEffect(() => {
    const update = () => setStatus(getOpenStatus());
    update();
    const interval = window.setInterval(update, 60_000);
    return () => window.clearInterval(interval);
  }, []);

  return status;
}
