import { FaCheckCircle } from 'react-icons/fa';

export default function Animation({ text }: { text: string }) {
  return (
    <div className="animationContainer w-screen h-screen fixed top-0 flex justify-center items-center z-[200]">
      <div className="animationBall bg-darkBlue w-full h-full text-white flex flex-col justify-center gap-5 items-center text-center">
        <FaCheckCircle size={100} className="animationContent" />
        <h2 className="text-2xl w-10/12 mx-auto animationContent">{text}</h2>
      </div>
    </div>
  );
}
