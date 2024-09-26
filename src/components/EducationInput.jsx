export default function EducationInput(props) {
  function handleEduSubmit(e) {
    e.preventDefault();
    console.log("submit!");
    let newEdu = {};
  }

  function deleteEdu(e) {
    e.preventDefault();
    console.log("delete!");
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
          <input placeholder="School Name"></input>
        </label>
        <br />
        <label>
          Degree:
          <input placeholder="Degree"></input>
        </label>
        <br />
        <label>
          Start Date:
          <input className="dateInput" type="month"></input>
        </label>
        <br />
        <label>
          End Date:
          <input className="dateInput" type="month"></input>
        </label>
        <div className="buttonsDiv">
          <button className="deleteBtn" onClick={deleteEdu}>
            Delete
          </button>
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
