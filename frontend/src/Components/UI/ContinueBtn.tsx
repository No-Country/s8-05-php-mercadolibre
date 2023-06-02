type ContinueBtnType = {
  handleAvailableStep: (num: number) => void;
  handleCurrentStep: (num: number) => void;
  num: number;
  handleSubmit: () => void;
};

export default function ContinueBtn({
  handleAvailableStep,
  handleCurrentStep,
  num,
  handleSubmit,
}: ContinueBtnType) {
  return (
    <button
      onClick={() => {
        handleAvailableStep(num);
        handleCurrentStep(num);
        handleSubmit();
      }}
      className="rounded-full py-2 mx-4 bg-darkBlue text-white font-semibold"
    >
      Siguiente
    </button>
  );
}
