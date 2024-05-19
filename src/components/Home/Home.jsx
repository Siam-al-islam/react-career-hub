import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="max-w-[1170px] mx-auto">
            <Banner />
            <CategoryList />
            <FeaturedJobs />
        </div>
    );
};

export default Home;