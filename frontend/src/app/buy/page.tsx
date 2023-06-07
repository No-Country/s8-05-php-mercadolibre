'use client';

import { useState } from 'react';

import Steps from '@/Components/AddProduct/Steps';
import NavBack from '@/Components/UI/NavBack';

import { IoLocationSharp, IoCard } from 'react-icons/io5';
import { TbTruckDelivery } from 'react-icons/tb';
import { HiShoppingCart } from 'react-icons/hi';

import { stepDataType } from '@/types/stepData';
import Pay from '@/Components/Buy/Pay';
import DeliveryPay from '@/Components/Buy/DeliveryPay';
import NewDomicile from '@/Components/Buy/NewDomicile/NewDomicile';
import Confirmation from '@/Components/Buy/Confirmation';

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

  const title = (s: number) => {
    switch (s) {
      case 1:
        return 'Domicilio de entrega';
      case 2:
        return 'Metodo de envio';
      case 3:
        return 'Metodo de pago';
      case 4:
        return 'Confirmacion de compra';
      default:
        return 'Volver';
    }
  };

  return (
    <>
      <header>
        <NavBack title={title(currentStep)} />
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
          <NewDomicile
            handleAvailableStep={handleAvailableStep}
            handleCurrentStep={handleCurrentStep}
          />
        )}
        {currentStep === 2 && (
          <DeliveryPay
            handleAvailableStep={handleAvailableStep}
            handleCurrentStep={handleCurrentStep}
          />
        )}
        {currentStep === 3 && (
          <Pay handleAvailableStep={handleAvailableStep} handleCurrentStep={handleCurrentStep} />
        )}
        {currentStep === 4 && (
          <Confirmation
            handleCurrentStep={handleCurrentStep}
            handleAvailableStep={handleAvailableStep}
          />
        )}
      </main>
    </>
  );
}
