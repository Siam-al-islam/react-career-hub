import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2 className="text-7xl text-center">Opppsss!!</h2>
            <Link className="btn" to="/">Go Back</Link>
        </div>
    );
};

export default ErrorPage;