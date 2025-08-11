import Footer from "../Components/Containers/Footer";
import Navbar from "../Components/Containers/Navbar";
import Wa from "../Components/Containers/Wa";

const MainLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <Wa />
        </>
    );
};

export default MainLayout;
