'use client';

import React, { useState } from "react";
import { Button } from "flowbite-react";

/*type NavBackProps = {
  title: string;
};*/

export default function Gallery(
/*{
  title
}: NavBackProps*/
) {
  const [images, setImages] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const fileArray = Array.from(fileList);
      const imageUrls = fileArray.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...imageUrls]);
    }
  };

  return (
    
    <div className="container mx-auto px-4 py-8">
    <div className="my-2">
      
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center w-full m p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 cursor-pointer rounded-xl"
      >
        <img src="https://res.cloudinary.com/yeniferramirez11/image/upload/v1685500649/Group_155_kzfu2e.png" alt="Imagen" />

        <input
          id="dropzone-file"
          type="file"
          onChange={handleFileUpload}
          className="hidden"
        />
      </label>
    </div>

    {images.length > 0 && (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((imageUrl, index) => (
          <div key={index} className="relative">
            <img src={imageUrl} alt={`Image ${index}`} className="w-full h-auto" />
            <Button
              variant="link"
              onClick={() => {
                setImages((prevImages) => prevImages.filter((_, i) => i !== index));
              }}
              className="absolute top-2 right-2"
            >
              Eliminar
            </Button>
          </div>
        ))}
      </div>
    )}
  </div>
  );
}