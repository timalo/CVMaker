export default function Resume(props) {
  return (
    <div className="resume">
      <div className="basicInfo">
        <h2>Basic Info</h2>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
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
