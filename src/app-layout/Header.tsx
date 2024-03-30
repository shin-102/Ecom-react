import { Link } from 'react-router-dom';

import Crlogo from '../assets/commerce_red.png'

const Header = () => {
  return (
  <header className="fixed w-full z-50">
    <div className="bg-primary">
      <div className="container flex  justify-between mx-auto text-white text-xs">
        <ul className="flex items-center space-x-3">
          <li>Livraison</li>
          <li>Services</li>
          <li>Garantie</li>
          <li><Link to="/NoPage">404</Link></li>
        </ul>

        <div className="flex space-x-3 items-center px-4 py-2 hover:bg-black/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M15.75 7.5C15.75 12.75 9 17.25 9 17.25C9 17.25 2.25 12.75 2.25 7.5C2.25 5.70979 2.96116 3.9929 4.22703 2.72703C5.4929 1.46116 7.20979 0.75 9 0.75C10.7902 0.75 12.5071 1.46116 13.773 2.72703C15.0388 3.9929 15.75 5.70979 15.75 7.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M9 9.75C10.2426 9.75 11.25 8.74264 11.25 7.5C11.25 6.25736 10.2426 5.25 9 5.25C7.75736 5.25 6.75 6.25736 6.75 7.5C6.75 8.74264 7.75736 9.75 9 9.75Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>
          Nos magasins
        </span>
        </div>
      </div>
    </div>
    <div className="bg-white shadow-[0_2px_12px_0_rgba(0,0,0,0.10)]">
      <div className="container flex justify-between mx-auto">
        <div className="flex items-center space-x-3">
          <Link to="/"><img src={Crlogo} alt="Logo" width={44} /></Link>
          <h1 className="text-2xl font-bold leading-5">Commerce<span className="text-primary">Red</span></h1>
        </div>
        <div className="flex items-center py-4">
          <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-semibold">Contacter Nous</button>
        </div>
      </div>
    </div>

  </header>
  );
};

export default Header ;