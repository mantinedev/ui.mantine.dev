import React from 'react';
import Script from 'next/script';

const gaScript = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-NGWJJB04JB');
`;

export function GaScript() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NGWJJB04JB"
      />
      <Script id="ga" strategy="afterInteractive">
        {gaScript}
      </Script>
    </>
  );
}
