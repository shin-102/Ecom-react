import React from 'react';
import { Link } from 'react-router-dom';

export interface ProductProps {
  image: string;
  title: string;
  oldprice: string;
  newprice: string;
  promo?: boolean;
}

const Item: React.FC<ProductProps> = ({ image, title, oldprice, newprice, promo }) => {
  return(
    <Link to='/Products/ProductPage' >
      <div className="flex flex-col justify-end items-center bg-white w-48 h-64 rounded-md border-2 border-solid border-gray-200 relative">
        {promo && <span className='absolute left-0 top-1 text-white bg-primary px-5 rounded-r-md'>Promo</span>}
        <div>
          <img src={image} alt={title} />
        </div>
        <div className='w-full p-5'>
          <h3 className='text-sm font-bold'>{title}</h3>
          <div className="flex items-center justify-between">
            <p className='text-slate-500 line-through font-medium text-sm'>{oldprice}</p>
            <h4 className='text-primary font-semibold text-lg'>{newprice}</h4>
          </div>
        </div>
      </div>
    </Link>
  )
} ;

export default Item ;