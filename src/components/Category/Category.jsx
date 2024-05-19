const Category = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="bg-[#7f8efe15] p-10 rounded-lg">
            <img src={logo} alt="" />
            <h3 className="mt-8 text-xl font-bold">{category_name}</h3>
            <p className="mt-4">{availability}</p>
        </div>
    );
};

export default Category;