import { Link, useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    jobs.find(job => job.id == id);

    return (
        <div>
            <div className="bg-[#9873ff10] bg-[url('/images/bg1.png')] bg-no-repeat bg-bottom md:py-28 py-12">
                <h2 className="text-3xl font-extrabold text-center">Job Details of: {id}</h2>
            </div>
            <div className="flex md:flex-row flex-col gap-6 md:mt-20 mt-5">
                <div className="space-y-6 md:w-2/3 w-full">
                    <p><b>Job Description:</b> </p>
                    <p><b>Job Responsibility:</b> </p>
                    <p><b>Educational Requirements:</b></p>
                    <p><b>Experiences:</b></p>
                </div>
                <div className="md:w-1/3 w-full  ">
                    <div className="bg-[#7e8ffe1b] rounded-lg p-7">
                        <h2 className="font-bold text-xl">Job Details</h2>
                        <hr className="mt-4 mb-4" />
                        <div className="space-y-4">
                            <div className="flex item-center gap-2">
                                <img src="/icons/money.png" alt="" />
                                <p><b>Salary: </b></p>
                            </div>
                            <div className="flex item-center gap-2">
                                <img src="/icons/calendar.png" alt="" />
                                <p><b>Job Title: </b></p>
                            </div>
                        </div>

                        <h2 className="font-bold text-xl mt-6">Contact Information</h2>
                        <hr className="mt-4 mb-4" />
                        <div className="space-y-4">
                            <div className="flex item-center gap-2">
                                <img src="/icons/phone.png" alt="" />
                                <p><b>Phone: </b></p>
                            </div>
                            <div className="flex item-center gap-2">
                                <img src="/icons/email.png" alt="" />
                                <p><b>Email: </b></p>
                            </div>
                            <div className="flex item-center gap-2">
                                <img src="/icons/Location2.png" alt="" />
                                <p><b>Address: </b></p>
                            </div>
                        </div>
                    </div>
                    <button className="text-white font-bold bg-[#9873FF] px-5 py-3 rounded-lg mt-4 w-full">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;