import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <div className="max-w-[650px] mx-auto mt-10">
                <h2 className='text-5xl font-bold text-center'>Featured Jobs: {jobs.length}</h2>
                <p className="mt-4 text-center">Explore thousands of job opportunities with all the information you need. Its your future
                </p>
            </div>
            <div className="mt-8">
                {
                    jobs.map(job => <Job key={job.id} job={job} />)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;