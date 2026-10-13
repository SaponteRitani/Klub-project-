import { useState } from 'react';

export default function AgeGate({ onConfirm }) {
  const [confirmed, setConfirmed] = useState(
    () => localStorage.getItem('klub_age_ok') === '1'
  );

  if (confirmed) return null;

  const handleYes = () => {
    localStorage.setItem('klub_age_ok', '1');
    setConfirmed(true);
    onConfirm?.();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/95 backdrop-blur-sm p-6">
      <div className="max-w-md w-full bg-cream rounded-3xl p-10 text-center shadow-2xl">
        <h1 className="font-display text-4xl text-forest mb-2">Welcome to the Klub.</h1>
        <p className="text-forest/70 mb-8">Are you 21 or older?</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={handleYes}
            className="px-8 py-3 bg-forest text-cream rounded-full font-semibold hover:bg-forest-light transition"
          >
            Yes, I'm 21+
          </button>
          <button
            onClick={() => window.location.href = 'https://www.google.com'}
            className="px-8 py-3 border-2 border-forest/20 text-forest rounded-full font-semibold hover:border-forest/40 transition"
          >
            Not yet
          </button>
        </div>
        <p className="text-xs text-forest/50 mt-6">
          Carbonated kratom beverages · Intended for adults 21+
        </p>
      </div>
    </div>
  );
}
