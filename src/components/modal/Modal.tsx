import React from "react";
import "./Modal.css";

type Props = {
  show: boolean;
  onClose: () => void;
};

export function Modal({show, onClose}: Props) {
  if (!show) {
    return null;
  }

  return (
    <div className='modal'>
      <div className='modalContent'>
        <div className='modalHeader'>
          <h4 className='modalTitle'>Congrats!</h4>
        </div>
        <div className='modalBody'>You have completed this assesment</div>
        <div className='modalFooter'>
          <button className='modalBtn' onClick={onClose}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
