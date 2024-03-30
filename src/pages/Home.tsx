import '../App.css' ;
import MainLayout from '../app-layout/MainLayout' ;
import Item from '../components/Item';
import Slider from '../components/Slider';

import EPSliderImage from '../assets/EPsliderimage.png' ;
import Blanc from '../assets/blanc-1.png';
import Brun from '../assets/brien-1.png';
import Climat from '../assets/climat-1.png';
import Cuissant from '../assets/cuissant-1.png';
import Gris from '../assets/gris-1.png';
import PtitElectro from '../assets/p-electro-menager-removebg-preview-1.png';
import Map from '../assets/map.png' ;


const Home = () => {
  return (
    <>
    <MainLayout>
      <section className='container flex items-center justify-evenly mx-auto bg-primary/20 rounded-lg'>
        <div>
          <button className='bg-primary/20 p-2 rounded-md' type='button' title='slide left'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="#E1251B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
        <div>

          <img src={EPSliderImage} alt="SLider Image" className='rounded-lg'/>
          {/* //todo : add functionality to buttons to slide images */}

        </div>
        <div>
          <button className='bg-primary p-2 rounded-md' type='button' title='slide right'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      <section className='container flex items-center justify-between mx-auto mt-14'>
        <div className='w-72 flex flex-col items-center justify-center bg-primary text-white py-4 rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path d="M26.25 3.28125L49 14.6562V43.0938L26.25 54.4414L3.5 43.0938V14.6562L26.25 3.28125ZM43.3398 15.75L26.25 7.21875L19.6602 10.5L36.6406 19.0859L43.3398 15.75ZM26.25 24.2812L32.7578 21.0547L15.75 12.4688L9.16016 15.75L26.25 24.2812ZM7 18.5938V40.9062L24.5 49.6562V27.3438L7 18.5938ZM28 49.6562L45.5 40.9062V18.5938L28 27.3438V49.6562Z" fill="white"/>
          </svg>
          <h2 className='pt-3 text-wrap text-center font-bold text-sm'>Garanties <br /> produits</h2>
        </div>

        <div className='w-72 flex flex-col items-center justify-center bg-primary text-white py-4 rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path d="M32.4382 16.31C33.4882 17.3565 35.1962 17.3565 36.2497 16.31C37.2997 15.267 37.2997 13.573 36.2497 12.5265C35.7424 12.0234 35.0568 11.7411 34.3422 11.7411C33.6277 11.7411 32.9421 12.0234 32.4347 12.5265C32.1845 12.7739 31.9858 13.0685 31.8502 13.3932C31.7146 13.7179 31.6447 14.0663 31.6447 14.4182C31.6447 14.7701 31.7146 15.1186 31.8502 15.4433C31.9858 15.768 32.188 16.0626 32.4382 16.31ZM5.37623 22.155C4.72204 22.8032 4.20275 23.5746 3.84837 24.4247C3.49398 25.2747 3.31152 26.1865 3.31152 27.1075C3.31152 28.0284 3.49398 28.9403 3.84837 29.7903C4.20275 30.6404 4.72204 31.4118 5.37623 32.06L16.9612 43.5715C17.9318 44.5336 19.1601 45.1942 20.4979 45.4737C21.8356 45.7532 23.2256 45.6395 24.5002 45.1465V41.027L24.4337 41.097C23.0582 42.462 20.8287 42.462 19.4532 41.097L7.86823 29.582C7.54113 29.2579 7.28149 28.8722 7.1043 28.4472C6.92711 28.0221 6.83588 27.5662 6.83588 27.1057C6.83588 26.6453 6.92711 26.1893 7.1043 25.7643C7.28149 25.3393 7.54113 24.9536 7.86823 24.6295L24.5282 8.07449C25.1866 7.42129 26.0753 7.05299 27.0027 7.04899L38.4267 6.99999C38.8913 6.99674 39.3518 7.08573 39.7817 7.26179C40.2116 7.43785 40.6023 7.69748 40.9311 8.02565C41.2599 8.35381 41.5203 8.74397 41.6972 9.17351C41.8742 9.60306 41.9641 10.0634 41.9617 10.528L41.9127 17.633C43.1727 17.8325 44.3592 18.256 45.4267 18.8615L45.4862 10.5525C45.49 9.62353 45.3094 8.70305 44.955 7.84435C44.6005 6.98565 44.0793 6.20577 43.4215 5.54987C42.7636 4.89396 41.9822 4.37506 41.1224 4.0232C40.2627 3.67134 39.3417 3.4935 38.4127 3.49999L26.9887 3.54899C25.1315 3.55515 23.3512 4.29189 22.0327 5.59999L5.37623 22.155ZM33.2502 28V31.5H31.5002C30.572 31.5 29.6817 31.8687 29.0254 32.5251C28.369 33.1815 28.0002 34.0717 28.0002 35V49C28.0002 49.9282 28.369 50.8185 29.0254 51.4749C29.6817 52.1312 30.572 52.5 31.5002 52.5H49.0002C49.9285 52.5 50.8187 52.1312 51.4751 51.4749C52.1315 50.8185 52.5002 49.9282 52.5002 49V35C52.5002 34.0717 52.1315 33.1815 51.4751 32.5251C50.8187 31.8687 49.9285 31.5 49.0002 31.5H47.2502V28C47.2502 26.1435 46.5127 24.363 45.2 23.0502C43.8872 21.7375 42.1067 21 40.2502 21C38.3937 21 36.6132 21.7375 35.3005 23.0502C33.9877 24.363 33.2502 26.1435 33.2502 28ZM36.7502 31.5V28C36.7502 27.0717 37.119 26.1815 37.7754 25.5251C38.4317 24.8687 39.322 24.5 40.2502 24.5C41.1785 24.5 42.0687 24.8687 42.7251 25.5251C43.3815 26.1815 43.7502 27.0717 43.7502 28V31.5H36.7502ZM40.2502 39.375C40.9464 39.375 41.6141 39.6516 42.1064 40.1438C42.5987 40.6361 42.8752 41.3038 42.8752 42C42.8752 42.6962 42.5987 43.3639 42.1064 43.8561C41.6141 44.3484 40.9464 44.625 40.2502 44.625C39.554 44.625 38.8864 44.3484 38.3941 43.8561C37.9018 43.3639 37.6252 42.6962 37.6252 42C37.6252 41.3038 37.9018 40.6361 38.3941 40.1438C38.8864 39.6516 39.554 39.375 40.2502 39.375Z" fill="white"/>
          </svg>
          <h2 className='pt-3 text-wrap text-center font-bold text-sm'>Paiment 100% <br /> securise</h2>
        </div>

        <div className='w-72 flex flex-col items-center justify-center bg-primary text-white py-4 rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path d="M7 28H28V31.5H7V28ZM3.5 19.25H21V22.75H3.5V19.25Z" fill="white"/>
            <path d="M52.3581 29.0605L47.1081 16.8105C46.9734 16.4956 46.7491 16.2273 46.4632 16.0388C46.1773 15.8502 45.8423 15.7498 45.4999 15.75H40.2499V12.25C40.2499 11.7859 40.0655 11.3408 39.7373 11.0126C39.4091 10.6844 38.964 10.5 38.4999 10.5H10.4999V14H36.7499V35.973C35.9524 36.436 35.2546 37.0524 34.6965 37.7864C34.1384 38.5205 33.7312 39.3578 33.4984 40.25H22.5014C22.0754 38.6003 21.0625 37.1627 19.6523 36.2064C18.2422 35.2502 16.5318 34.8411 14.8416 35.0558C13.1514 35.2705 11.5976 36.0942 10.4713 37.3726C9.34501 38.651 8.72363 40.2962 8.72363 42C8.72363 43.7038 9.34501 45.349 10.4713 46.6274C11.5976 47.9058 13.1514 48.7295 14.8416 48.9442C16.5318 49.1589 18.2422 48.7498 19.6523 47.7936C21.0625 46.8373 22.0754 45.3997 22.5014 43.75H33.4984C33.879 45.2519 34.7497 46.584 35.9725 47.5356C37.1953 48.4871 38.7004 49.0037 40.2499 49.0037C41.7993 49.0037 43.3044 48.4871 44.5272 47.5356C45.75 46.584 46.6207 45.2519 47.0014 43.75H50.7499C51.214 43.75 51.6591 43.5656 51.9873 43.2374C52.3155 42.9093 52.4999 42.4641 52.4999 42V29.75C52.4999 29.5129 52.4517 29.2783 52.3581 29.0605ZM15.7499 45.5C15.0576 45.5 14.3809 45.2947 13.8054 44.9101C13.2298 44.5256 12.7812 43.9789 12.5163 43.3394C12.2514 42.6999 12.1821 41.9961 12.3171 41.3172C12.4522 40.6383 12.7855 40.0146 13.275 39.5251C13.7645 39.0356 14.3881 38.7023 15.067 38.5673C15.746 38.4322 16.4497 38.5015 17.0892 38.7664C17.7288 39.0313 18.2754 39.4799 18.66 40.0555C19.0446 40.6311 19.2499 41.3078 19.2499 42C19.2489 42.928 18.8799 43.8177 18.2237 44.4739C17.5675 45.13 16.6778 45.4991 15.7499 45.5ZM40.2499 19.25H44.3449L48.0969 28H40.2499V19.25ZM40.2499 45.5C39.5576 45.5 38.8809 45.2947 38.3054 44.9101C37.7298 44.5256 37.2812 43.9789 37.0163 43.3394C36.7514 42.6999 36.6821 41.9961 36.8171 41.3172C36.9522 40.6383 37.2855 40.0146 37.775 39.5251C38.2645 39.0356 38.8881 38.7023 39.567 38.5673C40.246 38.4322 40.9497 38.5015 41.5892 38.7664C42.2288 39.0313 42.7754 39.4799 43.16 40.0555C43.5446 40.6311 43.7499 41.3078 43.7499 42C43.7489 42.928 43.3799 43.8177 42.7237 44.4739C42.0675 45.13 41.1778 45.4991 40.2499 45.5ZM48.9999 40.25H47.0014C46.6159 38.751 45.7439 37.4223 44.522 36.4722C43.3002 35.5221 41.7976 35.0043 40.2499 35V31.5H48.9999V40.25Z" fill="white"/>
          </svg>
          <h2 className='pt-3 text-wrap text-center font-bold text-sm'>Livraison et <br /> Installation</h2>
        </div>

        <div className='w-72 flex flex-col items-center justify-center bg-primary text-white py-4 rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
            <g clip-path="url(#clip0_50_35)">
              <path d="M11.6665 21C11.6665 16.6682 13.3873 12.5137 16.4504 9.45061C19.5135 6.38752 23.668 4.66669 27.9998 4.66669C32.3317 4.66669 36.4862 6.38752 39.5492 9.45061C42.6123 12.5137 44.3332 16.6682 44.3332 21V23.415C48.2905 23.982 51.3332 27.3864 51.3332 31.5V32.0834C51.3332 36.225 47.7608 39.8557 43.5585 39.662C41.8318 44.6087 37.4405 47.943 32.7015 48.7877C31.6048 49.189 30.3075 49 29.1665 49C28.2382 49 27.348 48.6313 26.6916 47.9749C26.0353 47.3185 25.6665 46.4283 25.6665 45.5C25.6665 44.5718 26.0353 43.6815 26.6916 43.0251C27.348 42.3688 28.2382 42 29.1665 42C31.0168 42 33.0655 41.7317 34.3162 43.421C37.3402 41.9813 39.6665 38.941 39.6665 35V21C39.6665 17.9058 38.4373 14.9384 36.2494 12.7504C34.0615 10.5625 31.094 9.33335 27.9998 9.33335C24.9056 9.33335 21.9382 10.5625 19.7503 12.7504C17.5623 14.9384 16.3332 17.9058 16.3332 21V35.5834C16.3332 36.6663 15.903 37.7049 15.1372 38.4707C14.3714 39.2365 13.3328 39.6667 12.2498 39.6667C10.2386 39.6667 8.30976 38.8677 6.88761 37.4456C5.46546 36.0234 4.6665 34.0946 4.6665 32.0834V31.5C4.666 29.5359 5.37341 27.6373 6.65906 26.1524C7.94472 24.6674 9.72249 23.6956 11.6665 23.415V21Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_50_35">
                <rect width="56" height="56" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <h2 className='pt-3 text-wrap text-center font-bold text-sm'>Service apres <br /> vente</h2>
        </div>

        <div className='w-72 flex flex-col items-center justify-center bg-primary text-white py-4 rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
            <path d="M28 44.3334H14C12.1435 44.3334 10.363 43.5959 9.05025 42.2831C7.7375 40.9703 7 39.1899 7 37.3334V18.6667C7 16.8102 7.7375 15.0297 9.05025 13.7169C10.363 12.4042 12.1435 11.6667 14 11.6667H42C43.8565 11.6667 45.637 12.4042 46.9497 13.7169C48.2625 15.0297 49 16.8102 49 18.6667V29.1667M7 23.3334H49M16.3333 35H16.3567M25.6667 35H30.3333M37.3333 44.3334H51.3333M37.3333 44.3334L44.3333 37.3334M37.3333 44.3334L44.3333 51.3334" stroke="white" stroke-width="4.66667" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <h2 className='pt-3 text-wrap text-center font-bold text-sm'>Retours et <br /> remboursement</h2>
        </div>
      </section>

      <section className='container flex flex-col items-start mx-auto mt-14'>
        <h2 className='font-bold text-xl mb-5'>Nos Categories vedettes</h2>

        <div className='w-full grid grid-cols-3 gap-5'>
          <div className='w-full bg-white rounded-lg h-28 flex items-center justify-center relative'>
            <img src={Brun} alt="Brun" className='absolute left-4'/>
            <h3>Brun</h3>
          </div>

          <div className='w-full bg-white rounded-lg h-28 flex items-center justify-center relative'>
            <img src={Blanc} alt="Blanc" className='absolute left-4'/>
            <h3>Blanc</h3>
          </div>

          <div className='w-full bg-white rounded-lg h-28 flex items-center justify-center relative'>
            <img src={Cuissant} alt="Cuissant" className='absolute left-4'/>
            <h3>Cuissant</h3>
          </div>

          <div className='w-full bg-white rounded-lg h-28 flex items-center justify-center relative'>
            <img src={Climat} alt="Climat" className='absolute left-4'/>
            <h3>Climat</h3>
          </div>

          <div className='w-full bg-white rounded-lg h-28 flex items-center justify-center relative'>
            <img src={Gris} alt="Gris" className='absolute left-4'/>
            <h3>Gris</h3>
          </div>

          <div className='w-full bg-white rounded-lg h-28 flex items-center justify-center relative'>
            <img src={PtitElectro} alt="Petit ElectroMenager" className='absolute left-4'/>
            <h3>Petit Electromenager</h3>
          </div>

        </div>
      </section>

      <Slider>
          <Item image={Gris} title='Laptop' oldprice='200 DH' newprice='100 DH' promo={true}/>
          <Item image={Gris} title='Laptop' oldprice='200 DH' newprice='100 DH' />
          <Item image={Gris} title='Laptop' oldprice='200 DH' newprice='100 DH' />
          <Item image={Gris} title='Laptop' oldprice='200 DH' newprice='100 DH' />
          <Item image={Gris} title='Laptop' oldprice='200 DH' newprice='100 DH' />
          <Item image={Gris} title='Laptop' oldprice='200 DH' newprice='100 DH' />
          <Item image={Cuissant} title='Laptop' oldprice='200 DH' newprice='100 DH' />
          <Item image={Cuissant} title='Laptop' oldprice='200 DH' newprice='100 DH' />
          <Item image={Cuissant} title='Laptop' oldprice='200 DH' newprice='100 DH' />
      </Slider>

      <Slider>
          <Item image={Brun} title='TV' oldprice='1 200 DH' newprice='900 DH' promo={true}/>
          <Item image={Brun} title='TV' oldprice='1 200 DH' newprice='900 DH' promo={true}/>
          <Item image={Brun} title='TV' oldprice='1 200 DH' newprice='900 DH' promo={true}/>
          <Item image={Brun} title='TV' oldprice='1 200 DH' newprice='900 DH' />
          <Item image={Brun} title='TV' oldprice='1 200 DH' newprice='900 DH' />
          <Item image={Brun} title='TV' oldprice='1 200 DH' newprice='900 DH' />
      </Slider>

      <div className='container mx-auto text-white/0 bg-primary/20 my-16 h-60 rounded-lg'>
        text
      </div>

      <section className='w-full flex'>
        <div>
          <img src={Map} alt="Location" />
        </div>
        <div className='flex flex-col items-start justify-center text-left ml-16 gap-8'>
          <h2 className='text-xl font-bold'>A propos</h2>
          <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quaerat facilis, neque aspernatur fuga reprehenderit expedita incidunt velit, aliquam blanditiis nam dicta. Nisi, cumque! Et doloribus similique tenetur hic impedit!</p>
          <span className='text-lg italic text-gray-600'>999 Av. Mohamed IX, Kenitra</span>
        </div>
      </section>

    </MainLayout>
    </>
  );
};

export default Home;