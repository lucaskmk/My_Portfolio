import React from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import type { Certificate } from '../types';
import type { Lang } from '../useLang';

export interface LightboxImage {
  src: string;
  alt: string;
  original: string;
}

const IMAGE_EXT = /\.(png|jpe?g|webp|gif)$/i;

// Certificates with an image of the full certificate open in the lightbox; the rest (Credly links...) open in a new tab
export function getCertificateView(cert: Certificate): { lightbox: LightboxImage } | { href: string } {
  const target = cert.url === '#' ? cert.image : cert.url;
  const src = cert.fullImage ?? (IMAGE_EXT.test(target) ? target : null);
  return src ? { lightbox: { src, alt: cert.title, original: target } } : { href: target };
}

export function useCertificateViewer() {
  const [viewing, setViewing] = React.useState<LightboxImage | null>(null);

  const open = (cert: Certificate) => {
    const view = getCertificateView(cert);
    if ('lightbox' in view) setViewing(view.lightbox);
    else window.open(view.href, '_blank', 'noopener,noreferrer');
  };

  return { viewing, open, close: () => setViewing(null) };
}

const LABELS = {
  en: { close: 'Close', original: 'Open original' },
  pt: { close: 'Fechar', original: 'Abrir original' },
};

interface CertificateLightboxProps {
  image: LightboxImage | null;
  onClose: () => void;
  lang?: Lang;
}

export function CertificateLightbox({ image, onClose, lang = 'en' }: CertificateLightboxProps) {
  // Portal to <body>: the certificate cards use CSS transforms, which would trap a fixed overlay inside them
  return createPortal(
    <AnimatePresence>
      {image && <LightboxDialog key={image.src} image={image} onClose={onClose} lang={lang} />}
    </AnimatePresence>,
    document.body
  );
}

interface LightboxDialogProps {
  image: LightboxImage;
  onClose: () => void;
  lang: Lang;
}

const LightboxDialog: React.FC<LightboxDialogProps> = ({ image, onClose, lang }) => {
  const [loaded, setLoaded] = React.useState(false);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const onCloseRef = React.useRef(onClose);
  onCloseRef.current = onClose;
  const labels = LABELS[lang];

  React.useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCloseRef.current();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
      previouslyFocused?.focus();
    };
  }, []);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 p-4 md:p-10 bg-black/60 backdrop-blur-md"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={labels.close}
        className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full card-block border border-white/10 text-white hover:bg-white/10 transition-colors"
      >
        <X size={20} />
      </button>

      {!loaded && (
        <div className="absolute w-6 h-6 border-2 border-neutral-700 border-t-neutral-300 rounded-full animate-spin" />
      )}

      <motion.img
        src={image.src}
        alt={image.alt}
        onLoad={() => setLoaded(true)}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: loaded ? 1 : 0.95, opacity: loaded ? 1 : 0 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 26 }}
        className="max-w-full max-h-[calc(100dvh-9rem)] w-auto h-auto object-contain rounded-xl md:rounded-2xl shadow-2xl border border-white/10"
      />

      <a
        href={image.original}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full card-block border border-white/10 text-xs md:text-sm font-bold text-neutral-300 hover:text-white hover:bg-white/10 transition-colors"
      >
        {labels.original}
        <ExternalLink size={14} />
      </a>
    </motion.div>
  );
};
