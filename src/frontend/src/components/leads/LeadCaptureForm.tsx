import { useState, FormEvent } from 'react';
import { useSubmitLead } from '../../hooks/useSubmitLead';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface LeadCaptureFormProps {
  defaultIntent: 'demo' | 'expert';
  onSuccess: () => void;
}

export default function LeadCaptureForm({ defaultIntent, onSuccess }: LeadCaptureFormProps) {
  const [intent, setIntent] = useState<string>(defaultIntent === 'demo' ? 'Request a Demo' : 'Speak with an Expert');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const { submitLead, status, error } = useSubmitLead();

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!company.trim()) {
      newErrors.company = 'Company name is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const success = await submitLead({
      intent,
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      message: message.trim()
    });

    if (success) {
      // Form will show success state, auto-close after 2 seconds
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center py-12 space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          We've received your request. Our team will contact you shortly to discuss how Softevia's market research technology can help your organization.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Intent Selector */}
      <div className="space-y-2">
        <label htmlFor="intent" className="block text-sm font-medium">
          I want to <span className="text-destructive">*</span>
        </label>
        <select
          id="intent"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          disabled={status === 'submitting'}
        >
          <option value="Request a Demo">Request a Demo</option>
          <option value="Speak with an Expert">Speak with an Expert</option>
        </select>
      </div>

      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Full Name <span className="text-destructive">*</span>
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) {
              setErrors({ ...errors, name: '' });
            }
          }}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="John Smith"
          disabled={status === 'submitting'}
        />
        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
      </div>

      {/* Work Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Work Email <span className="text-destructive">*</span>
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              setErrors({ ...errors, email: '' });
            }
          }}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="john.smith@company.com"
          disabled={status === 'submitting'}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      {/* Company */}
      <div className="space-y-2">
        <label htmlFor="company" className="block text-sm font-medium">
          Company <span className="text-destructive">*</span>
        </label>
        <input
          id="company"
          type="text"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
            if (errors.company) {
              setErrors({ ...errors, company: '' });
            }
          }}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring"
          placeholder="Your Company Name"
          disabled={status === 'submitting'}
        />
        {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
      </div>

      {/* Message (Optional) */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message (Optional)
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder="Tell us about your market research needs..."
          disabled={status === 'submitting'}
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
          <p className="text-sm text-destructive">
            {error || 'Something went wrong. Please try again.'}
          </p>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-6 py-4 rounded-lg gradient-primary text-white font-semibold text-lg shadow-glow-md hover:shadow-glow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Submit Request'
        )}
      </button>
    </form>
  );
}
