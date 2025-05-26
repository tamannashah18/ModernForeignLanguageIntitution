export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 backdrop-blur-sm p-4">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 w-full max-w-md md:max-w-lg lg:max-w-xl max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl transition-colors duration-300"
            aria-label="Close"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  