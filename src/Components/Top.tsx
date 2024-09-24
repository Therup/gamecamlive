import React from "react";
import gifImage from "../images/Gamecam_gif_1.gif";

const Top: React.FC = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        src={gifImage} // Byt ut med din GIF-bildsnamn
        alt="Background GIF"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Top;
