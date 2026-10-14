import { useEffect } from "react";

export default function VSLBlackKim() {
  useEffect(() => {
    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="693ac865b51c07f39243a920"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/f1296c1c-d81c-4a10-a3a6-49f9ca56fef6/players/693ac865b51c07f39243a920/v4/player.js";
      script.async = true;
      script.onload = () => {
        console.log("Player script loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load player script");
      };
      document.head.appendChild(script);
    };

    loadPlayerScript();

    return () => {
      const existingScript = document.querySelector('script[src*="693ac865b51c07f39243a920"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-693ac865b51c07f39243a920" 
      style={{ 
        width: "100%",
        margin: "0 auto", 
        display: "block",
        "--player-border-radius": "20px",
        "--player-box-shadow": "0 5px 5px 0 rgba(0, 0, 0, 0.2)",
      }} 
    />
  );

};