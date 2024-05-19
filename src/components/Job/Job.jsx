const Job = ({ job }) => {
    const { logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;

    return (
        <div>
            <img className="w-[147px] h-10" src={logo} alt="" />
        </div>
    );
};

export default Job;