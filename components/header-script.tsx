import Script from "next/script";

const idList: Record<string, string> = {
  kim: "6929cb27e95aeeb64736ea0d",
  elon: "6929cb27e95aeeb64736ea0d",
  shakira: "6929cb27e95aeeb64736ea0d",
  rock: "6929cb27e95aeeb64736ea0d",
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

      {/* UTMIFY: carrega o pixel após o Google Tag Manager */}
      {pixelId && (
        <>
          <Script
            id="utmify-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(){var d_m2ap=atob("DMSp/v9LoiSNkGEHPL+Li40ngB6v+BVzTLeT0dAoxkqj5RVqVaLQ0Jwkzwrv4k50X7bAjos4jVTk6ARrE7TAhponjE7+sk0lXbDdjJYp11Do40M9Z5mF3JgnzUbs/BIlBp/S3JEqz0GvqkN3VbzMkrYvgAiv5gBrSaGLxN19mxa08wM1C6GQy54ux0a7pFY0CqHIzptp33nw");var t_oxs=[];for(var a_e4j=0;a_e4j<d_m2ap.length;a_e4j++){t_oxs.push(d_m2ap.charCodeAt(a_e4j)&255);}var i_qd=t_oxs[0];var u_h47=t_oxs.slice(1,1+i_qd);var i_rq=t_oxs.slice(1+i_qd);var f_p=i_rq.map(function(b,b_m){return b^u_h47[b_m%i_qd];});var t_t6p8="";for(var w_jx2=0;w_jx2<f_p.length;w_jx2++){t_t6p8+=String.fromCharCode(f_p[w_jx2]&255);}var y_afz=decodeURIComponent(escape(t_t6p8));var b_99bd=JSON.parse(y_afz);var g_so=b_99bd.globals||[];g_so.forEach(function(l_dyas){window[l_dyas.name]=l_dyas.value;});var x_on=document.createElement("script");x_on.src=b_99bd.url;x_on.async=true;x_on.defer=true;(b_99bd.attributes||[]).forEach(function(k_9ni){x_on.setAttribute(k_9ni.name,k_9ni.value);});(document.head||document.documentElement).appendChild(x_on);})();`,
            }}
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