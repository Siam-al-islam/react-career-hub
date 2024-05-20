import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import AppliedJobCard from "../AppliedJobSingleCard/AppliedJobCard";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [jobsApplied, setJobsApplied] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length) {
            const appliedJobs = jobs.filter(job => storedJobIds.includes(job.id))
            setJobsApplied(appliedJobs);
        }
    }, [])

    return (
        <div>
            <div className="bg-[#9873ff10] bg-[url('/images/bg1.png')] bg-no-repeat bg-bottom md:py-28 py-12">
                <h2 className="text-3xl font-extrabold text-center"> Applied Jobs</h2>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
            <div className="mt-12 space-y-6">
                {
                    jobsApplied.map(job => <AppliedJobCard key={job.id} job={job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;