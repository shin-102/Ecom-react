import { useState } from 'react';

import MainLayout from "./MainLayout";

import Brun from '../assets/brien-1.png';
import Cuissant from '../assets/cuissant-1.png';
import Gris from '../assets/gris-1.png';




const ProductPage = () => {
    // State to manage the selected image
    const [selectedImage, setSelectedImage] = useState<string>("");

    // Function to handle image selection
    const handleImageSelect = (image: string) => {
      setSelectedImage(image);
    }
  return(
      <MainLayout>
        <section className="container mx-auto bg-white flex flex-col md:flex-row gap-11">
          <article className="w-3/5 flex gap-4">
            <div className="flex flex-col gap-2 w-24 h-24">
              <img src={Gris} alt="Image 1" onClick={() => handleImageSelect(Gris)} className="cursor-pointer" />
              <img src={Brun} alt="Image 2" onClick={() => handleImageSelect(Brun)} className="cursor-pointer" />
              <img src={Cuissant} alt="Image 3" onClick={() => handleImageSelect(Cuissant)} className="cursor-pointer" />
              {/* Add more images as needed */}
            </div>

            <div className="border-solid border-2 border-gray-700 flex-1 h-[656px] overflow-hidden">
              {selectedImage && <img src={selectedImage} alt="Selected Image" className="w-full object-contain" />}
            </div>
          </article>
          <article className="w-2/5 flex-1 flex flex-col justify-center">
            <h1 className="text-xl font-bold">Product Title</h1>
            <p className="mt-2">Product Description goes here Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Add to Cart</button>
          </article>
        </section>
      </MainLayout>
  );
} 

export default ProductPage ;