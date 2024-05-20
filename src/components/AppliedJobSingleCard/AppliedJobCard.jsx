const AppliedJobCard = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className="flex md:flex-row flex-col items-center gap-8 p-6 rounded-lg border border-gray-300">
            <img className="h-12 w-[145px]" src={logo} alt="" />
            <div className="flex  md:flex-row flex-col items-center justify-between w-full">
                <div>
                    <h2 className="font-bold text-2xl">{job_title}</h2>
                    <h3 className="font-thin mt-2">{company_name}</h3>
                    <div className="flex gap-4 mt-4">
                        <button className="text-[#9873FF] border border-[#9873FF] font-bold px-5 py-2 rounded-lg">{remote_or_onsite}</button>
                        <button className="text-[#9873FF] border border-[#9873FF] font-bold px-5 py-2 rounded-lg">{job_type}</button>
                    </div>
                    <div className="flex item-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <img src="/icons/Location2.png" alt="" />
                            <h3 className="md:text-xl text-[#757575]">{location}</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="/icons/money.png" alt="" />
                            <h3 className="md:text-xl text-[#757575]">{salary}</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="text-white font-bold bg-[#9873FF] px-5 py-3 rounded-lg md:mt-0 mt-6">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJobCard;