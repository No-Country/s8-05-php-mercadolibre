import { ChangeEvent } from 'react';
import { Button } from 'flowbite-react';
import Image from 'next/image';

type GalleryType = {
  images: string[];
  handleImage: (callback: (prevImages: string[]) => string[]) => void;
  handleFiles: (images: File[]) => void;
};

export default function Gallery({ images, handleImage, handleFiles }: GalleryType) {
  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const fileArray = Array.from(fileList);
      const imageUrls = fileArray.map((file) => URL.createObjectURL(file));
      handleImage((prevImages) => [...prevImages, ...imageUrls]);
      handleFiles(fileArray);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="my-2">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center w-full m p-5 mx-auto mt-2 text-center bg-white border-2 border-gray-300 cursor-pointer rounded-xl"
        >
          <Image
            src="https://res.cloudinary.com/yeniferramirez11/image/upload/v1685500649/Group_155_kzfu2e.png"
            alt="Imagen"
            width={300}
            height={300}
          />

          <input id="dropzone-file" type="file" onChange={handleFileUpload} className="hidden" />
        </label>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((imageUrl, index) => (
            <div key={index} className="relative">
              <Image
                src={imageUrl}
                alt={`Image ${index}`}
                width={300}
                height={300}
                className="w-full h-auto"
              />
              <Button
                onClick={() => {
                  handleImage((prevImages) => prevImages.filter((_, i) => i !== index));
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
