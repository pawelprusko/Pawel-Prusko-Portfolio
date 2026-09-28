import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          id="toast-notification"
          initial={{ opacity: 0, y: 15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-neutral-900 text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-lg border border-neutral-800"
          onClick={onClose}
        >
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
