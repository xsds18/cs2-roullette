import React from 'react';


const Modalnew = ({ onClose, children }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>x</button>
        {children}
      </div>
    </div>
  );
};

export default Modalnew;