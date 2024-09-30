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
        <h2>Education</h2>
        {props.educations.map((edu) => (
          <div key={edu.id} className="educationItem">
            <p>School: {edu.school}</p>
            <p>Degree: {edu.degree}</p>
            <p>Start Date: {edu.eduStartDate}</p>
            <p>End Date: {edu.eduEndDate}</p>
          </div>
        ))}
      </div>
      <div className="jobs">
        <h2>Work Experience</h2>
        {props.jobs.map((job) => (
          <div key={job.id} className="jobItem">
            {/* Divide these into left and right */}
            <p>Company: {job.company}</p>
            <p>Position: {job.position}</p>
            <p>Start Date: {job.jobStartDate}</p>
            <p>End Date: {job.jobEndDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
