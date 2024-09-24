import React from "react";

const Top: React.FC = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        src="/Gamecam_gif_1.gif" // Byt ut med din GIF-bildsnamn
        alt="Background GIF"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default Top;
