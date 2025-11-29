import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";

interface AnimatedImageProps {
  src: string;
  alt?: string;
  className?: string;
  containerClassName?: string;
}

export function AnimatedImage({ src, alt = "", className = "", containerClassName = "" }: AnimatedImageProps) {
  const [isInView, setIsInView] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={containerClassName}
        onClick={() => setIsLightboxOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <img alt={alt} className={className} src={src} />
      </motion.div>

      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={src}
              alt={alt}
              className="max-h-full max-w-full object-contain rounded-[2px]"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-8 right-8 text-white text-4xl hover:text-gray-300 transition-colors"
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close lightbox"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
