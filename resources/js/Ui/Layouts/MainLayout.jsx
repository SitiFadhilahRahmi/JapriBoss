import Footer from "../Components/Containers/Footer";
import Navbar from "../Components/Containers/Navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default MainLayout;
