import React, { useState } from 'react';

interface SliderProps {
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  const itemsPerPage = 6;
  const [startIndex, setStartIndex] = useState(0);

  const totalChildren = React.Children.count(children);

  const goToNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalChildren);
  };

  const goToPrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + totalChildren) % totalChildren);
  };

  const childrenArray = React.Children.toArray(children);
  const childrenToShow = childrenArray.slice(startIndex, startIndex + itemsPerPage).concat(childrenArray.slice(0, Math.max(0, startIndex + itemsPerPage - totalChildren)));

 
  return (
    <section className='container flex flex-col items-start mx-auto mt-14'>
        <div className='w-full flex justify-between items-center pb-4'>
          <h2 className='font-bold text-xl mb-5'>Une promotion spéciale !</h2>
          <div className='grid grid-cols-2 gap-4'>
            {totalChildren > itemsPerPage && <button className='bg-primary/20 p-2 rounded-md' type='button' title='slide left' onClick={goToPrev} disabled={totalChildren <= itemsPerPage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#E1251B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>}

            {totalChildren > itemsPerPage && <button className='bg-primary p-2 rounded-md' type='button' title='slide right' onClick={goToNext} disabled={totalChildren <= itemsPerPage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>}
          </div>
        </div>

        <div className='w-full flex items-center justify-between'>
          {childrenToShow}
        </div>
      </section>
  );
};

export default Slider ;
