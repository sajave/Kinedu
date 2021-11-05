import "./NextButton.css";

type Props = {
  setProps: (e: React.MouseEventHandler<HTMLInputElement>) => void;
  setStyles: (e: React.MouseEventHandler<HTMLInputElement>) => void;
  scrollToTop: () => void;
};

export function NextButton({setProps, setStyles, scrollToTop}: Props) {
  return (
    <h3 id='areaStateBtnContainer'>
      <button
        id='areaStateBtn'
        onClick={(e: any) => {
          setProps(e);
          setStyles(e);
          scrollToTop();
          return;
        }}
      >
        Next
      </button>
    </h3>
  );
}
