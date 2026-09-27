"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./blackhorn-carousel.module.css";

const photos = [
  "/blackhorn-1.jpeg",
  "/blackhorn-2.png",
  "/blackhorn-3.jpeg",
  "/blackhorn-4.jpeg",
  "/blackhorn-5.jpeg",
  "/blackhorn-6.jpeg",
];

export default function BlackhornCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % photos.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex]);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + photos.length) % photos.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % photos.length);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 40) return;
    if (distance < 0) showNext();
    else showPrevious();
  }

  return (
    <div
      aria-label="Blackhorn Security photos"
      className="w-full"
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0].clientX;
      }}
      onTouchEnd={handleTouchEnd}
      role="region"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-[#030405] shadow-[0_18px_46px_rgba(0,0,0,0.35),0_0_28px_rgba(20,115,230,0.1)]">
        <Image
          key={photos[activeIndex]}
          src={photos[activeIndex]}
          alt={`Blackhorn Security photo ${activeIndex + 1} of ${photos.length}`}
          fill
          sizes="(max-width: 767px) 100vw, 45vw"
          className={`object-contain p-2 sm:p-3 ${styles.photoEnter}`}
        />

        <button
          type="button"
          aria-label="Show previous photo"
          onClick={showPrevious}
          className="absolute left-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#05070A]/75 text-white shadow-lg backdrop-blur-sm transition hover:border-blue-400/60 hover:bg-[#0A1628] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="m14.5 5-7 7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Show next photo"
          onClick={showNext}
          className="absolute right-3 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#05070A]/75 text-white shadow-lg backdrop-blur-sm transition hover:border-blue-400/60 hover:bg-[#0A1628] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
            <path d="m9.5 5 7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2" aria-label="Choose a photo">
        {photos.map((photo, index) => (
          <button
            key={photo}
            type="button"
            aria-label={`Go to photo ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`h-3 rounded-full transition-[width,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
              activeIndex === index ? "w-7 bg-[#1473E6]" : "w-3 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}