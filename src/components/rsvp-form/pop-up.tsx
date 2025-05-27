import { Whatsapp } from "iconsax-reactjs";
import Lottie from "lottie-react";
import { X } from "lucide-react";
import Link from "next/link";

import { Button } from "../ui/button";
import checkboxAnimation from "./checkbox-lottie.json";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Popup({ isOpen, onClose }: PopupProps) {
  return (
    <>
      {isOpen && (
        <div className="popup-backdrop" onClick={onClose}>
          <div
            className="popup-content w-[calc(384px-32px)] p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                className="rounded-xs bg-[#F05625] p-0.5"
                onClick={onClose}
              >
                <X color="white" size="12" />
              </button>
            </div>
            <Lottie
              animationData={checkboxAnimation}
              loop={true}
              className="h-32 w-full"
            />
            <div className="font-tex-gyre-termes text-2xl text-[#2E4366]">
              Your Position is
            </div>
            <div className="mb-8 font-carrig text-5xl text-[#F05625]">
              RESERVED
            </div>
            <div className="mb-1 font-avenir text-sm text-[#2E4366]">
              Thank you for joining the symphony. Your confirmation details will
              be sent via Whatsapp/Emaill within 24 hours before the event.
            </div>
            <div className="mb-12 font-avenir text-sm text-[#2E4366]">
              Your personalized business card will be prepared based on the
              information provided.
            </div>
            <hr className="mb-3 border-solid border-[#2E4366]" />
            <div className="mb-8 font-carrig text-xs text-[#2E4366]">
              Syailendra Capital x CAK Investment Club
              <br />
              June 14th, 2025 | 17.30 - 21.00
            </div>
            <div className="mb-3 font-avenir text-xs text-[#2E4366]">
              For any questions, reach out to:
            </div>
            <Link
              href="https://api.whatsapp.com/send?phone=6281310072368"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="mb-3 rounded-full bg-[#F05625] px-7 py-3.5 text-base leading-[94%] text-white uppercase">
                Elle <Whatsapp size="32" color="#FFFFFF" />
              </Button>
            </Link>
            <hr className="mb-3 border-solid border-[#2E4366]" />
            <div className="font-avenir text-xs text-[#2E4366]">
              <b>Syailendra Capital</b> x CAK Investment Club
              <br />
              June 14th, 2025 | 17.30 - 21.00
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
          overflow-y: auto;
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
