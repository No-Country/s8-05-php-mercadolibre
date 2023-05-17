"use client";

import Link from "next/link";

import { MdOutlineModeEditOutline } from "react-icons/md";

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
    <div className="flex flex-row gap-3 bg-white justify-left items-center px-3 h-[90px] rounded-lg shadow-lg lg:p-5 lg:gap-5">
      <div className="text-3xl text-blue">{icon}</div>
      <div className="flex flex-row justify-between w-full items-center">
        <div className="flex flex-col">
          <h2>{title}</h2>
          <span className="text-sm opacity-60">{subTitle}</span>
        </div>
        {completed ? (
          <Link href={route}>
            <MdOutlineModeEditOutline className="text-blue text-lg" />
          </Link>
        ) : (
          currentStep && (
            <Link
              href={route}
              className="bg-blue px-3 ml-3 py-1 rounded-md text-white text-sm font-semibold"
            >
              Agregar
            </Link>
          )
        )}
      </div>
    </div>
  );
}
