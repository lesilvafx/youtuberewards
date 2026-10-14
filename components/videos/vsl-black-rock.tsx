import { useEffect } from "react";

export default function VSLBlackKim() {
  useEffect(() => {
    const loadPlayerScript = () => {
      if (document.querySelector('script[src*="6acd851855229e07c567c5e8"]')) return;
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/4799e06b-7fac-454f-9b41-86a7826f827d/players/6acd851855229e07c567c5e8/v4/player.js";
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
      const existingScript = document.querySelector('script[src*="6acd851855229e07c567c5e8"]');
      if (existingScript) {
        existingScript.remove();
      };
    };
  }, []);

  return (
    // @ts-expect-error - Player script is not defined in the global scope
    <vturb-smartplayer 
      id="vid-6acd851855229e07c567c5e8" 
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