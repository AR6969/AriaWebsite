"use client";
import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topline">
        <div className="wrap">
          <span>PERSONAL INJURY LAW · CALIFORNIA & WASHINGTON</span>
          <a href={site.tel}>
            Let’s talk. <strong>{site.phone}</strong>
          </a>
        </div>
      </div>
      <header className="header">
        <div className="wrap header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="InstaLaw Group home"
            onClick={() => setOpen(false)}
          >
            <span className="brand-mark" aria-hidden="true">
              i.
            </span>
            <span>
              InstaLaw<span className="brand-group">G R O U P</span>
            </span>
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Close ✕" : "Menu ☰"}
          </button>
          <nav
            id="main-nav"
            aria-label="Main navigation"
            className={open ? "nav is-open" : "nav"}
          >
            {[
              ["/personal-injury", "Practice areas"],
              ["/attorneys/aria-noosha", "Meet Aria"],
              ["/our-team", "Our team"],
              ["/reviews", "Reviews"],
              ["/immigration", "Immigration"],
            ].map(([href, label]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <a className="nav-phone" href={site.tel}>
              {site.phone}
            </a>
            <Link
              className="button button-small"
              href="/contact"
              onClick={() => setOpen(false)}
            >
              Free case review
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
