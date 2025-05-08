import { motion } from 'framer-motion';


export function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="p-4 max-w-7xl mx-auto"
    >
      {children}
    </motion.div>
  );
}