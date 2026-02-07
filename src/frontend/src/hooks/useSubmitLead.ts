import { useState } from 'react';
import { useActor } from './useActor';

interface LeadData {
  intent: string;
  name: string;
  email: string;
  company: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function useSubmitLead() {
  const { actor } = useActor();
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (data: LeadData): Promise<boolean> => {
    if (!actor) {
      setStatus('error');
      setError('Unable to connect to the service. Please try again.');
      return false;
    }

    setStatus('submitting');
    setError(null);

    try {
      const result = await actor.submitLead(
        data.intent,
        data.name,
        data.email,
        data.company,
        data.message
      );

      if (result) {
        setStatus('success');
        return true;
      } else {
        setStatus('error');
        setError('Failed to submit your request. Please try again.');
        return false;
      }
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'An unexpected error occurred.');
      return false;
    }
  };

  return {
    submitLead,
    status,
    error
  };
}
