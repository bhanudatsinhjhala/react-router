import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer.jsx';
import Header from './Header/Header.jsx';
function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
