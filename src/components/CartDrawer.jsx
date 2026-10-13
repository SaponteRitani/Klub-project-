export default function CartDrawer({ cart, isOpen, onClose, onRemove, onCheckout }) {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.qty, 0);

  return (
    <div className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-forest/50 backdrop-blur-sm" onClick={onClose} />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-cream shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-forest/10">
          <h2 className="font-display text-2xl text-forest">Your Cart</h2>
          <button onClick={onClose} className="p-2 hover:bg-forest/5 rounded-full" aria-label="Close cart">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-forest/60 text-lg mb-4">Your cart is empty.</p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-forest text-cream rounded-full font-semibold"
              >
                Browse the lineup
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 bg-white rounded-2xl p-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <h3 className="font-semibold text-forest">{item.name}</h3>
                  <p className="text-sm text-forest/50">{item.unit}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-forest font-semibold">
                      ${item.price} × {item.qty}
                    </span>
                    <button
                      onClick={() => onRemove(item.id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-forest/10">
            <div className="flex justify-between mb-4">
              <span className="text-forest/60">Subtotal</span>
              <span className="font-bold text-forest text-xl">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-4 bg-forest text-cream rounded-full font-semibold hover:bg-forest-light transition"
            >
              Checkout
            </button>
            <p className="text-xs text-forest/40 text-center mt-3">
              21+ only · Shipping calculated at checkout
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
