const CategoryList = () => {
    return (
        <div className="mt-20">
            <div className="max-w-[650px] mx-auto">
                <h2 className='text-5xl font-bold text-center'>Job Category List</h2>
                <p className="mt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className="flex gap-6 flex-col md:flex-row mt-8">
                <div className="bg-[#7f8efe15] p-10 rounded-lg">
                    <img src="/icons/accounts.png" alt="" />
                    <h3 className="mt-8 text-xl font-bold">Account & Finance</h3>
                    <p className="mt-4">350 Jobs Available</p>
                </div>
                <div className="bg-[#7f8efe15] p-10 rounded-lg">
                    <img src="/icons/creative.png" alt="" />
                    <h3 className="mt-8 text-xl font-bold">Creative Design</h3>
                    <p className="mt-4">200 Jobs Available</p>
                </div>
                <div className="bg-[#7f8efe15] p-10 rounded-lg">
                    <img src="/icons/marketing.png" alt="" />
                    <h3 className="mt-8 text-xl font-bold">Marketing & Sales</h3>
                    <p className="mt-4">100+ Jobs Available</p>
                </div>
                <div className="bg-[#7f8efe15] p-10 rounded-lg">
                    <img src="/icons/chip.png" alt="" />
                    <h3 className="mt-8 text-xl font-bold">Engineering Job</h3>
                    <p className="mt-4">300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;