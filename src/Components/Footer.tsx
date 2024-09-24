import React from "react";
import FooterLogo from "../images/gamecam_logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4">
      <div className="flex justify-center">
        <img src={FooterLogo} alt="GameCamLive Logo" className="h-16 mb-6" />
      </div>
      {/* Flexbox för rubriker och länkar */}
      <div className="flex flex-col md:flex-row justify-center mb-8 space-y-4 md:space-y-0 md:space-x-16">
        <div>
          <h2 className="text-lg font-bold mb-2">Buy a camera for your club</h2>
          <div className="flex flex-col space-y-2">
            <a href="/buy-camera" className="hover:underline">
              Go to website
            </a>
            <a href="/support" className="hover:underline">
              Support
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">For the players</h2>
          <div className="flex flex-col space-y-2">
            <a href="/register" className="hover:underline">
              Register
            </a>
            <a href="/login" className="hover:underline">
              Login
            </a>
          </div>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} GameCamLive. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
