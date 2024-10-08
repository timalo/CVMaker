import { useState } from "react";
import initialData from "../initials/initialData.js";
import BasicInfoInput from "./BasicInfoInput.jsx";
import EducationInput from "./EducationInput.jsx";
import JobInput from "./JobInput.jsx";
import Resume from "./Resume.jsx";

export default function CVMaker() {
  //These are used only once, So we can declare these here.
  //Declare state variables for each input inside their component so each component can manage its own state.
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johnDoe@email.com");
  const [phone, setPhone] = useState("123-456-7890");
  const [location, setLocation] = useState("New York");

  //Educations should hold the entire array of educations, so we can pass it to the Resume component.
  //Same for jobs.
  const [educations, setEducations] = useState(initialData.educations);
  const [jobs, setJobs] = useState(initialData.jobs);
  const [showEduForm, setShowEduForm] = useState(false);
  const [showJobForm, setShowJobForm] = useState(false);

  //Store the job or edu, that is edited or added, in a state variable.
  const [selectedEdu, setSelectedEdu] = useState({});
  const [selectedJob, setSelectedJob] = useState({});

  return (
    <div className="content">
      <div className="inputsDiv">
        <div className="basicInfoDiv inputDiv">
          <h2>Basic info</h2>
          <hr />
          <BasicInfoInput
            setName={setName}
            setEmail={setEmail}
            setPhone={setPhone}
            setLocation={setLocation}
            name={name}
            email={email}
            phone={phone}
            location={location}
          />
        </div>
        <div className="educationsDiv inputDiv">
          <h2>Education</h2>
          <hr />
          {showEduForm ? (
            <EducationInput
              selectedEdu={selectedEdu}
              educationList={educations}
              setEducation={setEducations}
              setSelectedEdu={setSelectedEdu}
              showEduForm={setShowEduForm}
            />
          ) : (
            <div className="inputPreviews">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="inputPreviewItem"
                  onClick={() => {
                    setShowEduForm(true);
                    setSelectedEdu(edu);
                  }}
                >
                  <p>
                    <strong>
                      {edu.degree} | {edu.school}
                    </strong>
                  </p>
                </div>
              ))}
              <center>
                <button
                  className="newEduBtn"
                  onClick={() => {
                    setShowEduForm(true);
                    //Init selectedEdu to empty object since console was complaining about input fields being undefined
                    setSelectedEdu({
                      school: "",
                      degree: "",
                      startDate: "",
                      endDate: "",
                    });
                  }}
                >
                  <strong>Add Education</strong>
                </button>
              </center>
            </div>
          )}
        </div>
        <div className="jobsDiv inputDiv">
          <h2>Work Experience</h2>
          <hr />
          {showJobForm ? (
            <JobInput
              selectedJob={selectedJob}
              jobList={jobs}
              setJobs={setJobs}
              setSelectedJob={setSelectedJob}
              showJobForm={setShowJobForm}
            />
          ) : (
            <div className="inputPreviews">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="inputPreviewItem"
                  onClick={() => {
                    setShowJobForm(true);
                    setSelectedJob(job);
                  }}
                >
                  <p>
                    <strong>
                      {job.title} | {job.company}
                    </strong>
                  </p>
                </div>
              ))}
              <center>
                <button
                  className="newJobBtn"
                  onClick={() => {
                    setShowJobForm(true);
                    //Init selectedJob to empty object for the same reason as for the edu
                    setSelectedJob({
                      company: "",
                      title: "",
                      startDate: "",
                      endDate: "",
                      description: "",
                    });
                  }}
                >
                  <strong>Add Work Experience</strong>
                </button>
              </center>
            </div>
          )}
        </div>
      </div>
      <div className="CVDiv">
        <div className="CVContainer">
          <Resume
            //eduList, jobList and basicInfo elements as props to resume, which are used to build CV.
            name={name}
            email={email}
            phone={phone}
            location={location}
            educations={educations}
            jobs={jobs}
          />
        </div>
      </div>
    </div>
  );
}
