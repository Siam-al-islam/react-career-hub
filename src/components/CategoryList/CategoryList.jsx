import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className="mt-20">
            <div className="max-w-[650px] mx-auto">
                <h2 className='text-3xl lg:text-5xl font-bold text-center'>Job Category List</h2>
                <p className="mt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className="flex gap-6 flex-col md:flex-row mt-8">
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category} />)
                }
            </div>
        </div>
    );
};

export default CategoryList;