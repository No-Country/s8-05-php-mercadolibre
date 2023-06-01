'use client';

import { useState } from 'react';

import Steps from '@/Components/AddProduct/Steps';
import Description from '@/Components/AddProduct/Description/Description';
import Photos from '@/Components/AddProduct/Photos/Photos';
import Delivery from '@/Components/AddProduct/Delivery/Delivery';
import PostProduct from '@/Components/AddProduct/PostProduct/PostProduct';
import NavBack from '@/Components/UI/NavBack';

import { FaEdit } from 'react-icons/fa';
import { HiCamera } from 'react-icons/hi';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { BsBoxFill } from 'react-icons/bs';

export default function Page() {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  const handleCurrentStep = (step: number) => setCurrentStep(step);
  const handleAvailableStep = (n: number) => {
    if (n >= step) setStep(n);
  };

  const icons: any[] = [
    <FaEdit key={'FaEdit'} />,
    <HiCamera key={'HiCamera'} />,
    <IoCheckmarkCircle key={'IoCheckmarkCircle'} />,
    <BsBoxFill key={'BsBoxFill'} />,
  ];

  return (
    <>
      <header>
        <NavBack title="Nuevo Producto" />
        <nav>
          <Steps
            step={step}
            currentStep={currentStep}
            handleClick={handleCurrentStep}
            icons={icons}
          />
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
