type ContinueBtnType = {
  handleAvailableStep: (num: number) => void;
  handleCurrentStep: (num: number) => void;
  num: number;
};

export default function ContinueBtn({
  handleAvailableStep,
  handleCurrentStep,
  num,
}: ContinueBtnType) {
  return (
    <button
      onClick={() => {
        handleAvailableStep(num);
        handleCurrentStep(num);
      }}
      className="rounded-full py-2 mx-4 bg-darkBlue text-white font-semibold"
    >
      Siguiente
    </button>
  );
}
