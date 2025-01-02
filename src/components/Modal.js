import React from 'react'
import { motion } from 'framer-motion';

const Modal = ({ isVisible, onClose, content }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
                <button onClick={onClose}>X</button>
      <motion.div 
        className="modal-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
      >

        {content}
      </motion.div>
    </div>
  );
};

export default Modal