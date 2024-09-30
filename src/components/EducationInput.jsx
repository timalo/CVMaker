export default function EducationInput(props) {
  function handleEduSubmit(e) {
    e.preventDefault();
    console.log("submit edu!");
    if (!props.selectedEdu.id) {
      console.log("new edu!");
      //New edu as it doesn't have id yet.
      let newEdu = { ...props.selectedEdu, id: crypto.randomUUID() };
      props.setEducation([...props.educationList, newEdu]);
      props.setSelectedEdu({});
      props.showEduForm(false);
    } else {
      //If the edu has id, it means it's an existing edu.
      console.log("update edu!");
      let updatedEduList = props.educationList.map((edu) => {
        return edu.id === props.selectedEdu.id ? props.selectedEdu : edu;
      });
      props.setEducation(updatedEduList);
      props.setSelectedEdu({});
      props.showEduForm(false);
    }
  }

  function deleteEdu(e) {
    e.preventDefault();
    console.log("delete!");
    //Make a new eduList without the selected edu and set it as the new list.
    let updatedEduList = props.educationList.filter(
      (edu) => edu.id !== props.selectedEdu.id
    );
    props.setEducation(updatedEduList);
    props.setSelectedEdu({});
    props.showEduForm(false);
  }

  function cancelEduSubmit(e) {
    e.preventDefault();
    console.log("cancel!");
    props.setSelectedEdu({});
    props.showEduForm(false);
  }

  return (
    <div className="educationItem inputItem">
      <form>
        <label>
          School:
          <input
            required
            value={props.selectedEdu.school}
            onChange={(e) =>
              props.setSelectedEdu({
                ...props.selectedEdu,
                school: e.target.value,
              })
            }
          ></input>
        </label>
        <br />
        <label>
          Degree:
          <input
            required
            value={props.selectedEdu.degree}
            onChange={(e) =>
              props.setSelectedEdu({
                ...props.selectedEdu,
                degree: e.target.value,
              })
            }
          ></input>
        </label>
        <br />
        <label>
          Start Date:
          <input
            className="dateInput"
            type="month"
            required
            value={props.selectedEdu.startDate}
            onChange={(e) =>
              props.setSelectedEdu({
                ...props.selectedEdu,
                startDate: e.target.value,
              })
            }
          ></input>
        </label>
        <br />
        <label>
          End Date:
          <input
            className="dateInput"
            type="month"
            value={props.selectedEdu.endDate}
            onChange={(e) =>
              props.setSelectedEdu({
                ...props.selectedEdu,
                endDate: e.target.value,
              })
            }
          ></input>
        </label>
        <div className="buttonsDiv">
          {props.selectedEdu.id ? (
            //Could implement a "are you sure?" modal or smth here if I feel like it.
            <button className="deleteBtn" onClick={deleteEdu}>
              Delete
            </button>
          ) : null}
          <button className="cancelBtn" onClick={cancelEduSubmit}>
            Cancel
          </button>
          <button className="saveBtn" onClick={handleEduSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
