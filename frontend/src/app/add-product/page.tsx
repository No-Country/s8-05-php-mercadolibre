'use client';

import Steps from '@/Components/AddProduct/Steps';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Description from '@/Components/AddProduct/Description/Description';
import Photos from '@/Components/AddProduct/Photos/Photos';
import Delivery from '@/Components/AddProduct/Delivery/Delivery';
import PostProduct from '@/Components/AddProduct/PostProduct/PostProduct';

export default function Page() {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  const handleCurrentStep = (step: number) => setCurrentStep(step);
  const handleAvailableStep = (n: number) => {
    if (n >= step) setStep(n);
  };

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
          <Description
            handleAvailableStep={handleAvailableStep}
            handleCurrentStep={handleCurrentStep}
          />
        )}
        {currentStep === 2 && (
          <Photos handleAvailableStep={handleAvailableStep} handleCurrentStep={handleCurrentStep} />
        )}
        {currentStep === 3 && (
          <Delivery
            handleAvailableStep={handleAvailableStep}
            handleCurrentStep={handleCurrentStep}
          />
        )}
        {currentStep === 4 && (
          <PostProduct
            handleAvailableStep={handleAvailableStep}
            handleCurrentStep={handleCurrentStep}
          />
        )}
      </main>
    </>
  );
}
