import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <div className="max-w-[650px] mx-auto mt-10">
                <h2 className='text-3xl lg:text-5xl font-bold text-center'>Featured Jobs</h2>
                <p className="mt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className="mt-8 grid md:grid-cols-2 grid-cols-1 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job} />)
                }
            </div>
            <div className="text-center mt-10 mb-28">
                <button onClick={() => setDataLength(jobs.length)} className="text-white font-bold bg-[#9873FF] px-10 py-3 rounded-lg mt-7">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;