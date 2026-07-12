import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const heroImage =
  '/Samuel_Ducros_Bienvenue.jpeg';

export default function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center px-6 pb-24 pt-28 sm:px-10 lg:px-20">
      <div className="absolute left-0 right-0 top-0 z-10 px-6 py-8 sm:px-10 lg:px-20">
        <div className="flex items-center gap-2.5">
          <div className="h-2 w-2 rounded-full bg-[#3B82F6]" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1E3A5F]">
            Accompagnement PRÉPA - Mathématiques • Méthode • Confiance • Autonomie
          </span>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-20">
        <div>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]"
          >
            Bienvenue
          </motion.span>

          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-[#1E3A5F] sm:text-5xl lg:text-6xl xl:text-[4.5rem]"
          >
            Merci pour votre candidature.
          </motion.h1>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 max-w-xl space-y-4 text-base leading-[1.7] text-[#4B5563] sm:text-lg lg:text-xl"
          >
            <p>J’ai bien reçu votre demande.</p>
            <p>Je vais l’étudier personnellement et revenir vers vous très rapidement.</p>
            <p>
              En attendant, je vous invite à découvrir mon accompagnement.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/4] overflow-hidden rounded-[24px] shadow-[0px_8px_40px_rgba(30,58,95,0.10)]">
            <img
              src={heroImage}
              alt="Espace de travail élégant"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.15em] text-[#4B5563]">Découvrir</span>
        <ChevronDown className="h-4 w-4 text-[#4B5563]" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
}
