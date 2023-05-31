import { useRouter } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

type NavBackProps = {
  title: string;
  callback?: () => void;
};

export default function NavBack({ title, callback }: NavBackProps) {
  const { back } = useRouter();

  const handleClick = () => (callback ? callback() : back());

  return (
    <nav className="flex items-center justify-between p-4 bg-white text-neutral-700 border-b border-1">
      <div className="flex items-center">
        <button
          onClick={handleClick}
          className="flex items-center justify-center w-8 h-8 text-neutral-700 rounded-full hover:bg-blue focus:outline-none"
        >
          <FiArrowLeft size={20} />
        </button>
        <h1 className="ml-2 text-lg font-semibold">{title}</h1>
      </div>
    </nav>
  );
}
