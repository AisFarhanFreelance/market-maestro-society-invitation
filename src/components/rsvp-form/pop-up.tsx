interface PopupProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ title, isOpen, onClose }: PopupProps) {
  return (
    <>
      {isOpen && (
        <div className="popup-backdrop" onClick={onClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="popup-header">
              <h2>{title}</h2>
              <button className="popup-close" onClick={onClose}>
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .open-popup-btn {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.2s;
        }

        .open-popup-btn:hover {
          background-color: #0051a5;
        }

        .popup-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .popup-content {
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 90%;
          max-height: 80vh;
          overflow-y: auto;
        }

        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e5e5e5;
        }

        .popup-header h2 {
          margin: 0;
          font-size: 1.5rem;
          color: #333;
        }

        .popup-close {
          background: none;
          border: none;
          font-size: 2rem;
          color: #666;
          cursor: pointer;
          transition: color 0.2s;
          padding: 0;
          line-height: 1;
        }

        .popup-close:hover {
          color: #333;
        }

        .popup-body {
          padding: 20px;
        }
      `}</style>
    </>
  );
}
