import { useState, useCallback } from 'react';

interface UseDoubleTapOptions {
  onDoubleTap: () => void;
  maxDelay?: number;
}

export const useDoubleTap = ({ onDoubleTap, maxDelay = 300 }: UseDoubleTapOptions) => {
  const [lastTap, setLastTap] = useState(0);

  const handleTap = useCallback(() => {
    const now = Date.now();
    if (now - lastTap < maxDelay) {
      onDoubleTap();
    }
    setLastTap(now);
  }, [lastTap, maxDelay, onDoubleTap]);

  return handleTap;
};