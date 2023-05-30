'use client';

import Steps from '@/Components/AddProduct/Steps';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

export default function Page() {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  const handleCurrentStep = (step: number) => setCurrentStep(step);
  const handleAvailableStep = (n: number) => {
    if (n >= step) setStep(n);
  };

  //TODO: crear componente para cada step y pasarle las props necesarias

  return (
    <>
      <header>
        <Link href={'/'} className="flex gap-3 items-center m-5 w-max font-semibold text-xl">
          <BsArrowLeft /> <h1>Nuevo Producto</h1>
        </Link>
        <nav>
          <Steps step={step} currentStep={currentStep} handleClick={handleCurrentStep} />
        </nav>
      </header>
      <main>
        {currentStep === 1 && (
          <>
            <span>Step 1</span>
            <button
              onClick={() => {
                handleAvailableStep(2);
                handleCurrentStep(2);
              }}
            >
              continuar
            </button>
          </>
        )}
        {currentStep === 2 && (
          <>
            <span>Step 2</span>
            <button
              onClick={() => {
                handleAvailableStep(3);
                handleCurrentStep(3);
              }}
            >
              continuar
            </button>
          </>
        )}
        {currentStep === 3 && (
          <>
            <span>Step 3</span>
            <button
              onClick={() => {
                handleAvailableStep(4);
                handleCurrentStep(4);
              }}
            >
              continuar
            </button>
          </>
        )}
        {currentStep === 4 && (
          <>
            <span>Step 4</span>
            <button
              onClick={() => {
                handleAvailableStep(5);
                handleCurrentStep(5);
              }}
            >
              continuar
            </button>
          </>
        )}
      </main>
    </>
  );
}
