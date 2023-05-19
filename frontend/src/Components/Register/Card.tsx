'use client';

import Link from 'next/link';

import { MdOutlineModeEditOutline } from 'react-icons/md';

type CardProps = {
  title: string;
  subTitle: string;
  icon: any;
  completed: boolean;
  route: string;
  currentStep: boolean;
};

export default function Card({ title, subTitle, icon, completed, route, currentStep }: CardProps) {
  return (
    <div
      className={`${
        completed ? 'bg-skyBlue' : 'bg-white border-black border'
      } flex flex-row gap-5 bg-white justify-left items-center px-5 py-2 h-[90px] rounded-lg`}
    >
      <div className="text-3xl text-black">{icon}</div>
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex flex-col">
          <h2>{title}</h2>
          <span className="text-[13px] opacity-60">{subTitle}</span>
        </div>
        {completed ? (
          <Link href={route} className="w-[75px] ml-3 py-1 px-3 rounded-full flex justify-center">
            <MdOutlineModeEditOutline className="text-black text-xl" />
          </Link>
        ) : (
          currentStep && (
            <Link
              href={route}
              className="bg-grey w-20 text-center ml-3 py-1 px-3 rounded-full text-black text-[13px]"
            >
              Agregar
            </Link>
          )
        )}
      </div>
    </div>
  );
}
