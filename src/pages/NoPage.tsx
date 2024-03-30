import '../App.css'
import MainLayout from '../app-layout/MainLayout'
import NotFound from '../assets/404_page-not-found.png'

const NoPage = () => {
  return (
    <>
    <MainLayout>
      <div>
        <img src={NotFound} alt="404, page not found" />
      </div>
    </MainLayout>
    </>
  );
};

export default NoPage;