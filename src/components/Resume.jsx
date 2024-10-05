import dateFormatter from "../components/dateFormatter.js";

export default function Resume(props) {
  return (
    <div className="resume">
      <div className="basicInfo">
        <p className="resumeName"> {props.name}</p>
        <div className="basicInfoRow">
          <div className="basicInfoItem">{props.email}</div>
          <div className="basicInfoItem">{props.phone}</div>
          <div className="basicInfoItem">{props.location}</div>
        </div>
      </div>
      <div className="education">
        <h2 className="sectionHeader">EDUCATION</h2>
        {props.educations.map((edu) => (
          <div key={edu.id} className="educationItem">
            <div className="educationItemLeft">
              <p>
                {dateFormatter(edu.startDate)} -{" "}
                {edu.endDate == "" ? "Present" : dateFormatter(edu.endDate)}
              </p>
            </div>
            <div className="educationItemRight">
              <div className="eduSchool bold">{edu.school}</div>
              <div className="eduDegree">{edu.degree}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="jobs">
        <h2 className="sectionHeader">WORK EXPERIENCE</h2>
        {props.jobs.map((job) => (
          <div key={job.id} className="jobItem">
            <div className="jobItemLeft">
              <p>
                {dateFormatter(job.startDate)} -{" "}
                {job.endDate == "" ? "Present" : dateFormatter(job.endDate)}
              </p>
            </div>
            <div className="jobItemRight">
              <p>
                <div className="jobCompany bold">{job.company}</div>
                <div className="jobTitle">{job.title}</div>
                <div className="jobDescription">{job.description}</div>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
