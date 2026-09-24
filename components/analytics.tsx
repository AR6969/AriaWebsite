"use client";
import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/track";
// Loads Google Analytics (only when an ID is set) and records every tap on a
// phone or email link as a conversion event.
export function Analytics({ gaId }: { gaId?: string }) {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element).closest?.(
        "a[href^='tel:'], a[href^='mailto:']",
      );
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      track(href.startsWith("tel:") ? "phone_call_click" : "email_click", {
        link_text: link.textContent?.trim().slice(0, 60) ?? "",
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  if (!gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaId}');`}
      </Script>
    </>
  );
}
