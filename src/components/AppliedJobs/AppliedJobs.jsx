import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import AppliedJobCard from "../AppliedJobSingleCard/AppliedJobCard";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [jobsApplied, setJobsApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(jobsApplied);
        }
        else if (filter === "remote") {
            const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if (filter === "onsite") {
            const onsiteJob = jobsApplied.filter(job => job.remote_or_onsite === "Onsite");
            setDisplayJobs(onsiteJob);
        }
    }

    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length) {
            const appliedJobs = jobs.filter(job => storedJobIds.includes(job.id))
            setJobsApplied(appliedJobs);
            setDisplayJobs(appliedJobs);
        }
    }, [jobs])

    return (
        <div>
            <div className="bg-[#9873ff10] bg-[url('/images/bg1.png')] bg-no-repeat bg-bottom md:py-28 py-12">
                <h2 className="text-3xl font-extrabold text-center"> Applied Jobs</h2>
            </div>
            <div className="dropdown mt-12 ">
                <div tabIndex={0} role="button" className="btn m-1">
                    <p>Filter By</p>
                    <img src="/icons/Frame.png" alt="" />
                </div>

                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </div>
            <div className="mt-8 space-y-6">
                {
                    displayJobs.map(job => <AppliedJobCard key={job.id} job={job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;