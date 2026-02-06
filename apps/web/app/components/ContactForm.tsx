'use client';

import { useState } from 'react';
import { FiSend, FiUser, FiMail, FiPhone, FiMessageSquare, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const services = [
    'Mining Services',
    'Engineering & Construction',
    'Transportation',
    'Energy Solutions',
    'Water Systems',
    'Petroleum Products',
    'Equipment Supply',
    'Other'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Your inquiry has been sent successfully!'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send inquiry. Please try again.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="glass rounded-3xl p-8">
      <h3 className="text-2xl font-bold mb-6 text-white">Send us a message</h3>
      
      {submitStatus.type === 'success' && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-start gap-3">
          <FiCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-green-400 mb-1">Success!</h4>
            <p className="text-sm text-green-300">{submitStatus.message}</p>
          </div>
        </div>
      )}

      {submitStatus.type === 'error' && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-start gap-3">
          <FiAlertCircle className="text-red-400 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-red-400 mb-1">Error</h4>
            <p className="text-sm text-red-300">{submitStatus.message}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <div className="flex items-center gap-2">
                <FiUser size={16} />
                Full Name *
              </div>
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1185AE] transition-colors"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <div className="flex items-center gap-2">
                <FiMail size={16} />
                Email Address *
              </div>
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1185AE] transition-colors"
              placeholder="john@company.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              <div className="flex items-center gap-2">
                <FiPhone size={16} />
                Phone Number
              </div>
            </label>
            <input
              type="tel"
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1185AE] transition-colors"
              placeholder="+260 XXX XXX XXX"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Service Interested In *
            </label>
            <select
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#1185AE] transition-colors"
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>{service}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            <div className="flex items-center gap-2">
              <FiMessageSquare size={16} />
              Project Details / Message *
            </div>
          </label>
          <textarea
            required
            rows={4}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-[#1185AE] transition-colors"
            placeholder="Tell us about your project requirements..."
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#BD2227] px-6 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FiSend />
          {isLoading ? 'Sending...' : 'Send Message'}
        </button>

        <p className="text-xs text-slate-400 text-center">
          By submitting this form, you agree to our privacy policy. We'll respond within 24 hours.
        </p>
      </form>
    </div>
  );
}