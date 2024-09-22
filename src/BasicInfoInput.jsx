export default function BasicInfoInput({ setName, setEmail, setPhone }) {
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  return (
    <div className="basicInfoInput inputItem">
      <label>
        Full Name:
        <input placeholder="John Doe" onChange={handleNameChange}></input>
      </label>
      <label>
        Email:
        <input
          placeholder="example@mail.com"
          onChange={handleEmailChange}
        ></input>
      </label>
      <label>
        Phone:
        <input placeholder="123456789" onChange={handlePhoneChange}></input>
      </label>
    </div>
  );
}
