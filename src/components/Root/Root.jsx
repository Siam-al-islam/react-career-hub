import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="max-w-[1170px] mx-auto">
                <Header />
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Root;