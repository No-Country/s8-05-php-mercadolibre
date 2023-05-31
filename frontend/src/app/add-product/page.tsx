'use client';

import Steps from '@/Components/AddProduct/Steps';
import FormNewProduct from '@/Components/AddProduct/FormNewProduct';
import GaleryComponent from '@/Components/AddProduct/Galery';
import FormDelivery from '@/Components/AddProduct/FormDelivery';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import Gallery from '@/Components/AddProduct/Gallery';

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
          <div className="w-full flex flex-col items-center mt-3">
            <div className="mb-4">
              <FormNewProduct />
            </div>
            <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm">
              <button 
                onClick={() => {
                  handleAvailableStep(2);
                  handleCurrentStep(2);
                }}
                className="rounded-full py-2 bg-darkBlue text-white font-semibold"
              >
                Siguiente
              </button>
            </div>
          </div>   
          </>
        )}
        {currentStep === 2 && (
          <>
          <h2 className='m-4 text-dark-background'>Agrega fotos del producto</h2>
            <div className="w-full flex flex-col items-center mt-3">
            <div className="mb-4">
              <Gallery />
            </div>
            <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm">
              <button 
                onClick={() => {
                  handleAvailableStep(3);
                  handleCurrentStep(3);
                }}
                className="rounded-full py-2 bg-darkBlue text-white font-semibold"
              >
                Siguiente
              </button>
            </div>
          </div>   
          </>
        )}
        {currentStep === 3 && (
          <>
            <h2 className='m-4 text-dark-background'>Ubicación</h2>
            <p className='mx-4 text-dark-background text-sm'>CABA-C1044</p>
            <div className="w-full flex flex-col items-center mt-3">
            <div className="mb-4">
              <FormDelivery />
            </div>
            <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm">
              <button 
                onClick={() => {
                  handleAvailableStep(4);
                  handleCurrentStep(4);
                }}
                className="rounded-full py-2 bg-darkBlue text-white font-semibold"
              >
                Siguiente
              </button>
            </div>
          </div>
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
