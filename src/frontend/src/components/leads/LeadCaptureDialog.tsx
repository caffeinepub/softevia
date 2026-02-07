import { X } from 'lucide-react';
import { useEffect } from 'react';
import LeadCaptureForm from './LeadCaptureForm';

interface LeadCaptureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIntent: 'demo' | 'expert';
}

export default function LeadCaptureDialog({ isOpen, onClose, defaultIntent }: LeadCaptureDialogProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Dialog */}
      <div className="relative bg-card border border-border rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Get Started with Softevia</h2>
            <p className="text-muted-foreground mt-1">
              {defaultIntent === 'demo'
                ? 'Request a personalized demo of our market research technology'
                : 'Speak with our market intelligence experts'}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <LeadCaptureForm defaultIntent={defaultIntent} onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
}
