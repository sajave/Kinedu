import {useState} from "react";
import {Modal} from "../../modal/Modal";
import "./FinishButton.css";

export function FinishButton() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <h3 id='areaStateBtnContainer'>
        <button id='areaStateBtn' onClick={() => setShow(true)}>
          Finish assessment
        </button>
      </h3>
      <Modal show={show} onClose={() => setShow(false)} />
    </div>
  );
}
