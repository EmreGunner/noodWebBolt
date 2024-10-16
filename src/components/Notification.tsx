import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from './Icon';

interface NotificationProps {
  message: string;
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, isVisible, onClose }) => {
  const bgColor = {
    success: 'bg-green-100 border-green-500',
    error: 'bg-red-100 border-red-500',
    info: 'bg-blue-100 border-blue-500',
  }[type];

  const iconName = {
    success: 'CheckCircle',
    error: 'AlertCircle',
    info: 'Info',
  }[type];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-md border-l-4 ${bgColor}`}
        >
          <div className="flex items-center">
            <Icon name={iconName} className="mr-3" />
            <p className="text-sm font-medium">{message}</p>
            <button onClick={onClose} className="ml-auto">
              <Icon name="X" size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
