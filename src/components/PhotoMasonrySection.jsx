// PhotoMasonrySection.jsx (React + Tailwind + JSX)
// ------------------------------------------------------------
// Install peer deps:
//   npm install framer-motion lucide-react
// Ensure Tailwind is set up in your React app (CRA/Vite).
//
// Usage:
// import PhotoMasonrySection from "./PhotoMasonrySection";
//
// function App() {
//   return (
//     <div className="min-h-screen bg-neutral-950">
//       <PhotoMasonrySection title="Gallery" subtitle="A modern, fluid masonry grid" />
//     </div>
//   );
// }
//
// export default App;

// PhotoMasonrySection.jsx (React + Tailwind + JSX)
// 3-Column Layout: Left & Right = Photos (masonry), Center = Writeups
// ---------------------------------------------------------------------------------
// Install peer deps:
//   npm install framer-motion lucide-react
// Ensure Tailwind is set up in your React app (CRA/Vite).
//
// Usage:
// import PhotoMasonrySection from "./PhotoMasonrySection";
//
// function App() {
//   return (
//     <div className="min-h-screen bg-[#fcfdff]">
//       <PhotoMasonrySection title="Photos" subtitle="Helping the Community" />
//     </div>
//   );
// }
//
// export default App;

// PhotoMasonrySection.jsx (React + Tailwind + JSX)
// 3-Column Layout: Wider Center Writeup Column, Narrower Photo Columns
// ---------------------------------------------------------------------------------
// PhotoMasonrySection.jsx (React + Tailwind + JSX)
// 3-Column Layout: Much Wider Center Writeup Column, Narrower Photo Columns
// ---------------------------------------------------------------------------------
// PhotoMasonrySection.jsx (React + Tailwind + JSX)
// 3-Column Layout: Much Wider Center Writeup Column, Narrower Photo Columns
// ---------------------------------------------------------------------------------
// PhotoMasonrySection.jsx (React + Tailwind + JSX)
// 3-Column Layout: Much Wider Center Writeup Column, Narrower Photo Columns
// ---------------------------------------------------------------------------------
import React, { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

function PhotoMasonrySection({
  title = "Gallery",
  subtitle = "Helping the Community",
  photos = demoPhotos,
}) {
  const [active, setActive] = useState(null);
  const mid = Math.ceil((photos?.length || 0) / 2 - 1);
  const leftPhotos = photos.slice(0, mid);
  const rightPhotos = photos.slice(mid);

  useEffect(() => {
    if (active === null) return;
    const img = new Image();
    img.src = photos[active]?.src ?? "";
  }, [active, photos]);

  const open = useCallback((idx) => setActive(idx), []);
  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () => setActive((i) => (i === null ? i : (i + photos.length - 1) % photos.length)),
    [photos.length]
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
    [photos.length]
  );

  useEffect(() => {
    const onKey = (e) => {
      if (active === null) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, prev, next]);

  const diceL = useMemo(() => leftPhotos.map(() => Math.random()), [leftPhotos]);
  const diceR = useMemo(() => rightPhotos.map(() => Math.random()), [rightPhotos]);

  return (
    <section className="w-full bg-[#fcfdff] text-[#121212]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <header className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          {subtitle && <p className="mt-2 text-lg text-neutral-500">{subtitle}</p>}
        </header>

        {/* 3-column grid with wider center */}
        <div className="grid grid-cols-1 md:grid-cols-[0.7fr_2.6fr_0.7fr] gap-8 items-start">
          {/* LEFT PHOTOS */}
          <div className="columns-1 sm:columns-2 md:columns-1 gap-4 [column-fill:_balance]">
            {leftPhotos.map((p, idx) => (
              <figure key={idx} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl">
                <div
                  className={[
                    "relative block w-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-[1.01]",
                    (diceL[idx] ?? 0) > 0.66 ? "rounded-3xl" : "rounded-2xl",
                  ].join(" ")}
                >
                  <img src={p.src} alt={p.alt ?? ""} loading="lazy" className="h-auto w-full object-cover" />
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <figcaption className="text-sm/5 text-white/95">{p.alt}</figcaption>
                      {p.tag && (
                        <span className="mt-2 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/90 ring-1 ring-white/20">
                          {p.tag}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => open(idx)}
                    className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs backdrop-blur ring-1 ring-white/20 transition-opacity hover:bg-black/60"
                    aria-label="Open image in lightbox"
                  >
                    <Maximize2 className="h-3.5 w-3.5" />
                    View
                  </button>
                </div>
              </figure>
            ))}
          </div>

          {/* CENTER COLUMN (writeup card + separate image strip) */}
          <div className="flex flex-col gap-6">
            {/* WRITEUP CARD (wider) */}
            <div className="prose prose-neutral max-w-none md:top-20 bg-white/60 rounded-2xl p-10 shadow border border-neutral-200">
              <article className="space-y-10">
                <section>
                  <h3 className="text-2xl font-bold">For Love Of Humanity (FLOH)</h3>
                  <p>
                    What started casually when ladies began posting about having lots of good quality gently used clothes and not enough space for new ones. I wrote back, “Ok, I will collect and send them to India for free distribution to the needy.”
                  </p>
                  <p>
                    Little did I know it would be such a task to arrange shipping, manage paperwork, and coordinate collection. Kavita, our director, does the hard work of collecting, storing, and packing—all with help from her husband.
                  </p>
                  <p>
                    As our name suggests, we love to do anything and everything for the love of humanity—feeding the poor, holding events for the specially abled, free health camps, distributing blankets, and more. We support NGOs and currently work with WCCWF and GIVE.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold">Women and Child Care Welfare Foundation (WCCWF)</h3>
                  <p className="font-medium">Jasbeer Kaur, President</p>
                  <p>
                    WCCWF organizes impactful initiatives like the Inter-State Cricket Match for specially abled persons, Bhajans for Senior Citizens, Christmas celebrations, free health camps, blood donation drives, awareness programs, and distribution of essentials.
                  </p>
                  <p>
                    They also run a charitable hospital in Lakhimpur Village serving 60–70 villages and are planning a Senior Citizens’ Home with modern amenities. Supported by Trident Group, Chandigarh Police, and other organizations.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold">GLOBAL INITIATIVE OF VETERANS (GIVE)</h3>
                  <p>
                    A nonprofit 501(c)(3) organization with a mission to empower abused women and children, advocate love and peace, and support communities locally and globally.
                  </p>
                  <p>
                    They have donated buses to schools for the blind, adopted orphan children, and continue to lead humanitarian efforts worldwide.
                  </p>
                </section>
              </article>
            </div>

            {/* SEPARATE IMAGE STRIP (outside the card) */}
            <div className="mx-auto w-full md:max-w-sm lg:max-w-md mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    src: "/donation-packing.jpg",
                    alt: "Volunteers packing donations into boxes",
                  },
                  {
                    src: "/donation-packing-1.jpg",
                    alt: "Organized donation boxes ready for shipment",
                  },
                ].map((p, idx) => (
                  <figure
                    key={idx}
                    className="group relative overflow-hidden rounded-xl shadow border border-neutral-200"
                  >
                    <div className="relative block w-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-[1.02]">
                      <img
                        src={p.src}
                        alt={p.alt}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                          <figcaption className="text-sm/5 text-white/95">{p.alt}</figcaption>
                        </div>
                      </div>

                      {/* View button same as side images */}
                      <button
                        onClick={() => open(mid + rightPhotos.length + idx)} // unique index beyond main gallery
                        className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs backdrop-blur ring-1 ring-white/20 transition-opacity hover:bg-black/60"
                        aria-label="Open image in lightbox"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                        View
                      </button>
                    </div>
                  </figure>
                ))}
              </div>
            </div>


          </div>

          {/* RIGHT PHOTOS */}
          <div className="columns-1 sm:columns-2 md:columns-1 gap-4 [column-fill:_balance]">
            {rightPhotos.map((p, idx) => {
              const globalIdx = mid + idx;
              return (
                <figure key={globalIdx} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl">
                  <div
                    className={[
                      "relative block w-full overflow-hidden transition-transform duration-300 ease-out group-hover:scale-[1.01]",
                      (diceR[idx] ?? 0) > 0.66 ? "rounded-3xl" : "rounded-2xl",
                    ].join(" ")}
                  >
                    <img src={p.src} alt={p.alt ?? ""} loading="lazy" className="h-auto w-full object-cover" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                        <figcaption className="text-sm/5 text-white/95">{p.alt}</figcaption>
                        {p.tag && (
                          <span className="mt-2 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/90 ring-1 ring-white/20">
                            {p.tag}
                          </span>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={() => open(globalIdx)}
                      className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs backdrop-blur ring-1 ring-white/20 transition-opacity hover:bg-black/60"
                      aria-label="Open image in lightbox"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      View
                    </button>
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
            aria-modal
            role="dialog"
          >
            <div className="absolute inset-0" onClick={close} />
            <div className="relative z-10 w-full max-w-6xl">
              <motion.img
                key={photos[active].src}
                initial={{ scale: 0.97, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ type: "spring", stiffness: 160, damping: 18 }}
                src={photos[active].src}
                alt={photos[active].alt ?? ""}
                className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl"
              />
              <button
                onClick={close}
                className="absolute right-2 top-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PhotoMasonrySection;

const demoPhotos = [ 
  { src: "/img-1.jpg" },  
  { src: "img-7.jpg" }, 
  { src: "/img-2.jpg" }, 
  { src: "/img-5.jpg" }, 
  { src: "/img-6.jpg" }, 
  { src: "/img-4.jpg" },  
  { src: "img-9.jpg" }, 
  { src: "/img-8.jpg" }, 
  { src: "/img-3.jpg" } ];



// import React, { useEffect, useMemo, useState, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

// function PhotoMasonrySection({
//   title = "Photos",
//   subtitle = "Helping the Community",
//   photos = demoPhotos,
// }) {
//   const [active, setActive] = useState(null);

//   useEffect(() => {
//     if (active === null) return;
//     const img = new Image();
//     img.src = photos[active]?.src ?? "";
//   }, [active, photos]);

//   const open = useCallback((idx) => setActive(idx), []);
//   const close = useCallback(() => setActive(null), []);
//   const prev = useCallback(
//     () => setActive((i) => (i === null ? i : (i + photos.length - 1) % photos.length)),
//     [photos.length]
//   );
//   const next = useCallback(
//     () => setActive((i) => (i === null ? i : (i + 1) % photos.length)),
//     [photos.length]
//   );

//   useEffect(() => {
//     const onKey = (e) => {
//       if (active === null) return;
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowLeft") prev();
//       if (e.key === "ArrowRight") next();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [active, close, prev, next]);

//   const dice = useMemo(() => photos.map(() => Math.random()), [photos]);

//   return (
//     <section className="w-full bg-[#fcfdff] text-[#121212]">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
//         <header className="mb-8 flex items-end justify-between gap-4">
//           <div className="min-w-full text-center">
//             <h2 className="text-3xl md:text-3xl font-semibold tracking-tight">{title}</h2>
//             {subtitle && <p className="mt-2 text-lg text-neutral-400">{subtitle}</p>}
//           </div>
//         </header>

//         <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]" aria-label="Photo masonry grid">
//           {photos.map((p, idx) => (
//             <figure key={idx} className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl">
//               <div
//                 className={[
//                   "relative block w-full overflow-hidden",
//                   "transition-transform duration-300 ease-out",
//                   "group-hover:scale-[1.01]",
//                   dice[idx] > 0.66 ? "rounded-3xl" : "rounded-2xl",
//                 ].join(" ")}
//               >
//                 <img src={p.src} alt={p.alt ?? ""} loading="lazy" className="h-auto w-full object-cover" />

//                 <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                   <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
//                     <figcaption className="text-sm/5 text-white/95">{p.alt}</figcaption>
//                     {p.tag && (
//                       <span className="mt-2 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/90 ring-1 ring-white/20">
//                         {p.tag}
//                       </span>
//                     )}
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => open(idx)}
//                   className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs backdrop-blur ring-1 ring-white/20 transition-opacity hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
//                   aria-label="Open image in lightbox"
//                 >
//                   <Maximize2 className="h-3.5 w-3.5" />
//                   View
//                 </button>
//               </div>
//             </figure>
//           ))}
//         </div>
//       </div>

//       <AnimatePresence>
//         {active !== null && (
//           <motion.div
//             key="lightbox"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-[999] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
//             aria-modal
//             role="dialog"
//           >
//             <div className="absolute inset-0" onClick={close} />

//             <div className="relative z-10 w-full max-w-6xl">
//               <motion.img
//                 key={photos[active].src}
//                 initial={{ scale: 0.97, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.98, opacity: 0 }}
//                 transition={{ type: "spring", stiffness: 160, damping: 18 }}
//                 src={photos[active].src}
//                 alt={photos[active].alt ?? ""}
//                 className="mx-auto max-h-[78vh] w-auto rounded-2xl object-contain shadow-2xl"
//               />

//               {(photos[active].alt || photos[active].href) && (
//                 <div className="mx-auto mt-3 flex max-w-3xl items-center justify-between gap-3 text-neutral-200">
//                   <p className="text-sm/6">
//                     {photos[active].alt}
//                     {photos[active].href && (
//                       <a
//                         href={photos[active].href}
//                         target="_blank"
//                         rel="noreferrer noopener"
//                         className="ml-2 inline-flex items-center gap-1 text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
//                       >
//                         Open link
//                       </a>
//                     )}
//                   </p>
//                 </div>
//               )}

//               <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 sm:px-4">
//                 <button
//                   onClick={prev}
//                   className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
//                   aria-label="Previous"
//                 >
//                   <ChevronLeft className="h-6 w-6 text-white" />
//                 </button>
//                 <button
//                   onClick={next}
//                   className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
//                   aria-label="Next"
//                 >
//                   <ChevronRight className="h-6 w-6 text-white" />
//                 </button>
//               </div>

//               <button
//                 onClick={close}
//                 className="absolute right-2 top-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
//                 aria-label="Close"
//               >
//                 <X className="h-5 w-5 text-white" />
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// export default PhotoMasonrySection;

// const demoPhotos = [
//   { src: "/img-1.jpg"},
//   { src: "img-7.jpg" },
//   { src: "/img-2.jpg" },
//   { src: "/img-3.jpg" },
//   { src: "/img-5.jpg" },
//   { src: "/img-6.jpg"},
//   { src: "/img-4.jpg" },
//   { src: "img-9.jpg" },
//   { src: "/img-8.jpg"},
// ];
