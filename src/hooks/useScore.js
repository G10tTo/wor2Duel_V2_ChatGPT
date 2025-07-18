/* D4_T8 --->*/
import { useState, useCallback } from 'react';

export default function useScore(initialScore = { user: 0, ai: 0 }) {
  const [score, setScore] = useState(initialScore);

  const incrementUser = useCallback(() => {
    setScore(prev => ({ ...prev, user: prev.user + 1 }));
  }, []);

  const incrementAi = useCallback(() => {
    setScore(prev => ({ ...prev, ai: prev.ai + 1 }));
  }, []);

  const resetScore = useCallback(() => {
    setScore({ user: 0, ai: 0 });
  }, []);

  return { score, incrementUser, incrementAi, resetScore };
}/* 
<--- */