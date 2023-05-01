import React from 'react';

function Modal(props) {
  const { isOpen, onClose, onSubmit, children } = props;

  return (
    <dialog open={isOpen} onClose={onClose}>
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit" style={{ display: 'none' }}></button>
      </form>
    </dialog>
  );
}

export default Modal;
