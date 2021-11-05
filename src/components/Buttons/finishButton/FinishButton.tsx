import "./FinishButton.css";

export function FinishButton() {
  const finishModal = () => {};

  return (
    <h3 id='areaStateBtnContainer'>
      <button id='areaStateBtn' onClick={() => finishModal()}>
        Finish assessment
      </button>
    </h3>
  );
}
