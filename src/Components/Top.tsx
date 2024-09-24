import React from "react";
import gifImage from "../images/Gamecam_gif_1.gif";
//import overlayImage from "../images/your_image.png"; // Byt ut med sökvägen till din bild
import { SparklesIcon } from "@heroicons/react/24/outline"; // Importera sparkles-ikonen
import distanceLogo from "../images/distance_logo.png"; // Byt ut med sökvägen till din bild 1
import errorsLogo from "../images/errors_logo.png"; // Byt ut med sökvägen till din bild 2
import heatmapLogo from "../images/heatmap_logo.png"; // Byt ut med sökvägen till din bild 3
import shotsLogo from "../images/shots_logo.png"; // Byt ut med sökvägen till din bild 4
import transitLogo from "../images/transit_zone_logo.png"; // Byt ut med sökvägen till din bild 4
import zonemapLogo from "../images/zonemap_logo.png"; // Byt ut med sökvägen till din bild 4

const features = [
  { img: distanceLogo, text: "Running Tracker" },
  { img: errorsLogo, text: "Shot accuracy" },
  { img: heatmapLogo, text: "Heatmap" },
  { img: shotsLogo, text: "Ball possesion" },
  { img: transitLogo, text: "Dead-zone timer" },
  { img: zonemapLogo, text: "Zonemap" },
  //{ img: overlayImage, text: "Overlay Feature" },
];

const Top: React.FC = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        src={gifImage} // GIF-bild
        alt="Background GIF"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Innehåll ovanpå GIF */}
      <div className="absolute inset-0 flex flex-col items-start ml-4 sm:items-center mt-8 text-white">
        {/* Text med ikon */}
        <div className="flex items-center text-yellow-400 mb-8">
          <SparklesIcon className="h-20 w-20 mr-2 text-yellow-400 sm:h-6 w-6 mr-0 text-yellow-400" />{" "}
          {/* Gulfärgad ikon */}
          <span className="text-2xl text-white font-bold">
            Features for your AI match report to enjoy
          </span>{" "}
          {/* Större text */}
        </div>
        {/* Grid för bilder och text */}
        <div className="flex justify-start sm:justify-center">
          <div className="grid grid-cols-1  sm:grid-cols-2 gap-4 w-full max-w-4xl mx-auto mb-8 ">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center ">
                <img
                  src={feature.img} // Bild
                  alt={feature.text}
                  className="w-20 h-20 mr-4" // Justera storleken efter behov
                />
                <span className="text-xl font-bold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
        <button className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Top;
