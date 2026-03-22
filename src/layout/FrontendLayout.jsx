import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';


const FrontendLayout = () => {

    return (
        <>
            <Header />
            <main className="page-wrapper">
                <Outlet />
                <Footer />
            </main>
        </>
    )
}

export default FrontendLayout