'use client';

import { useState } from 'react';

import Steps from '@/Components/AddProduct/Steps';
import Description from '@/Components/AddProduct/Description/Description';
import Photos from '@/Components/AddProduct/Photos/Photos';
import Delivery from '@/Components/AddProduct/Delivery/Delivery';
import PostProduct from '@/Components/AddProduct/PostProduct/PostProduct';
import NavBack from '@/Components/UI/NavBack';

import { IoLocationSharp, IoCard } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { HiShoppingCart } from 'react-icons/hi';

import { stepDataType } from '@/types/stepData';

export default function Page() {
  const [step, setStep] = useState(1);
  const [currentStep, setCurrentStep] = useState(1);

  const handleCurrentStep = (step: number) => setCurrentStep(step);
  const handleAvailableStep = (n: number) => {
    if (n >= step) setStep(n);
  };

  const stepData: stepDataType[] = [
    { title: 'Domicilio', icon: <IoLocationSharp key={'IoLocationSharp'} /> },
    { title: 'Entrega', icon: <TbTruckDelivery key={'TbTruckDelivery'} /> },
    { title: 'Pago', icon: <IoCard key={'IoCard'} /> },
    { title: 'Confirmacion', icon: <HiShoppingCart key={'HiShoppingCart'} /> },
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
            stepData={stepData}
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
