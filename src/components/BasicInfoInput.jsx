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

  const handleLocationChange = (e) => {
    props.setLocation(e.target.value);
  };

  return (
    <div className="basicInfoInput inputItem">
      <label>
        Full Name:
        <input
          maxLength="25"
          onChange={handleNameChange}
          value={props.name}
        ></input>
      </label>
      <label>
        Email:
        <input
          maxLength="35"
          onChange={handleEmailChange}
          value={props.email}
        ></input>
      </label>
      <label>
        Phone:
        <input
          maxLength="15"
          onChange={handlePhoneChange}
          value={props.phone}
        ></input>
      </label>
      <label>
        Location:
        <input
          maxLength="25"
          onChange={handleLocationChange}
          value={props.location}
        ></input>
      </label>
    </div>
  );
}
