import MainLayout from "../app-layout/MainLayout";
import Slider from "../components/Slider";
import Item from "../components/Item";


import Cuissant from '../assets/cuissant-1.png';
import Gris from '../assets/gris-1.png';


const Products = () => {
  return(
    <>
      <MainLayout>
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
      </MainLayout>
    </>
  );
} 

export default Products ;