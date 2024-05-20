import { Link } from "react-router-dom";

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className="border border-gray-200 md:p-10 p-6 rounded-lg">
            <img className="w-[147px] h-10" src={logo} alt="" />
            <h3 className="mt-2 text-2xl font-bold">{job_title}</h3>
            <h3 className="text-xl font-thin mt-4">{company_name}</h3>
            <div className="flex gap-4 mt-4">
                <button className="text-[#9873FF] border border-[#9873FF] font-bold px-5 py-2 rounded-lg">{remote_or_onsite}</button>
                <button className="text-[#9873FF] border border-[#9873FF] font-bold px-5 py-2 rounded-lg">{job_type}</button>
            </div>
            <div className="flex item-center gap-6 mt-4">
                <div className="flex items-center gap-2">
                    <img src="/icons/Location2.png" alt="" />
                    <h3 className="text-xl text-[#757575]">{location}</h3>
                </div>
                <div className="flex items-center gap-2">
                    <img src="/icons/money.png" alt="" />
                    <h3 className="text-xl text-[#757575]">{salary}</h3>
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className="text-white font-bold bg-[#9873FF] px-5 py-3 rounded-lg mt-7">View Details</button>
            </Link>
        </div>
    );
};

export default Job;