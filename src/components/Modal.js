export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/10 backdrop-blur-sm">
        <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-black text-2xl"
            aria-label="Close"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  