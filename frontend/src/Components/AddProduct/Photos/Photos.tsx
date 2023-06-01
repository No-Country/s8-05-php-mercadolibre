'use client';

import ContinueBtn from '@/Components/UI/ContinueBtn';
import Gallery from './Gallery';
import { handlersType } from '@/types/handlers.types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPhotos, setPhotos } from '@/redux/addProduct';

export default function Photos({ handleAvailableStep, handleCurrentStep }: handlersType) {
  const dispatch = useDispatch();
  const data = useSelector(getPhotos);
  const [images, setImages] = useState<string[]>([]);

  const handleImage: (callback: (prevImages: string[]) => string[]) => void = (callback) =>
    setImages(callback);

  useEffect(() => {
    setImages(data);
  }, [data]);

  const handleSubmit = () => dispatch(setPhotos(images));

  return (
    <>
      <h2 className="m-4 text-dark-background">Agrega fotos del producto</h2>
      <div className="w-full flex flex-col items-center mt-3">
        <div className="mb-4">
          <Gallery images={images} handleImage={handleImage} />
        </div>
        <div className="flex flex-col gap-2 md:w-1/2 w-full max-w-sm my-5">
          <ContinueBtn
            handleAvailableStep={handleAvailableStep}
            handleCurrentStep={handleCurrentStep}
            num={3}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
}
