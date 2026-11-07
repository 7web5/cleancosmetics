import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer.jsx';

/** Route wrapper: page transition, document title and the shared footer. */
export default function Page({ title, children, className = '' }) {
  useEffect(() => {
    document.title = title ? `${title} — Clean Cosmetic` : 'Clean Cosmetic — Beauty. Without the mess.';
  }, [title]);

  return (
    <motion.div
      className={`page ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.35 } }}
      transition={{ duration: 0.6 }}
    >
      <main id="main">{children}</main>
      <Footer />
    </motion.div>
  );
}
