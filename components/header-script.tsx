import Script from "next/script";

const idList: Record<string, string> = {
  kim: "6929cb27e95aeeb64736ea0d",
  elon: "6929cb27e95aeeb64736ea0d",
  shakira: "6929cb27e95aeeb64736ea0d",
};

export default function HeaderScript({ content }: { content: string }) {

  const pixelId = idList[content];

  return (
    <>
      {/* GOOGLE ANALYTICS: carrega sempre que entrar na página */}
      <Script
        id="google-tag"
        src="https://www.googletagmanager.com/gtag/js?id=G-HCG298JBX7"
        strategy="afterInteractive"
      />
      <Script
        id="google-tag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HCG298JBX7');
          `,
        }}
      />

      {/* UTMIFY: só carrega se existir pixelId (igual era antes) */}
      {pixelId && (
        <>
          <Script
            id="utmify-config"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.pixelId=${JSON.stringify(pixelId)};`,
            }}
          />
          <Script
            id="utmify-pixel"
            src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
            strategy="afterInteractive"
          />
          <Script
            id="utmify-utms"
            src="https://cdn.utmify.com.br/scripts/utms/latest.js"
            data-utmify-prevent-subids
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );

};