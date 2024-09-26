export default function BasicInfoInput(props) {
  const handleNameChange = (e) => {
    props.setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    props.setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    props.setPhone(e.target.value);
  };

  return (
    <div className="basicInfoInput inputItem">
      <label>
        Full Name:
        <input onChange={handleNameChange} value={props.name}></input>
      </label>
      <label>
        Email:
        <input onChange={handleEmailChange} value={props.email}></input>
      </label>
      <label>
        Phone:
        <input
          maxLength="15"
          onChange={handlePhoneChange}
          value={props.phone}
        ></input>
      </label>
    </div>
  );
}
