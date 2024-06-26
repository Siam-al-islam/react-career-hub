import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";



const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id == idInt);
    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast("Successfully Applied")
    }

    return (
        <div>
            <div>
                <div className="bg-[#9873ff10] bg-[url('/images/bg1.png')] bg-no-repeat bg-bottom md:py-28 py-12">
                    <h2 className="text-3xl font-extrabold text-center"> Details of {job_title}</h2>
                </div>
                <div className="flex md:flex-row flex-col gap-6 md:mt-20 mt-5">
                    <div className="space-y-6 md:w-2/3 w-full">
                        <p><b>Job Description: </b>{job_description}</p>
                        <p><b>Job Responsibility: </b>{job_responsibility}</p>
                        <p><b>Educational Requirements: </b>{educational_requirements}</p>
                        <p><b>Experiences: </b>{experiences}</p>
                    </div>
                    <div className="md:w-1/3 w-full  ">
                        <div className="bg-[#7e8ffe1b] rounded-lg p-7">
                            <h2 className="font-bold text-xl">Job Details</h2>
                            <hr className="mt-4 mb-4" />
                            <div className="space-y-4">
                                <div className="flex item-center gap-2">
                                    <img src="/icons/money.png" alt="" />
                                    <p><b>Salary: </b>{salary}</p>
                                </div>
                                <div className="flex item-center gap-2">
                                    <img className="h-6" src="/icons/calendar.png" alt="" />
                                    <p><b>Job Title: </b>{job_title}</p>
                                </div>
                            </div>

                            <h2 className="font-bold text-xl mt-6">Contact Information</h2>
                            <hr className="mt-4 mb-4" />
                            <div className="space-y-4">
                                <div className="flex item-center gap-2">
                                    <img src="/icons/phone.png" alt="" />
                                    <p><b>Phone: </b>{contact_information.phone}</p>
                                </div>
                                <div className="flex item-center gap-2">
                                    <img src="/icons/email.png" alt="" />
                                    <p><b>Email: </b>{contact_information.email}</p>
                                </div>
                                <div className="flex item-center gap-2">
                                    <img className="h-6" src="/icons/Location2.png" alt="" />
                                    <p><b>Address: </b>{contact_information.address}</p>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleApplyJob} className="text-white font-bold bg-[#9873FF] px-5 py-3 rounded-lg mt-4 w-full">Apply Now</button>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <Link to={-1}>
                    <button className="text-[#9873FF] font-bold border border-[#6e48d5ca] px-10 py-3 rounded-lg mt-4">Go Back</button>
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;