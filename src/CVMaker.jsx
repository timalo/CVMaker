import { useState } from "react";

export default function BasicInfoInput() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("example@mail.com");
  const [phone, setPhone] = useState("123-456-7890");

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
    <div className="inputDiv">
      <div className="basicInfo">
        <label>
          Full Name:
          <input value={name} onChange={handleNameChange}></input>
        </label>
        <label>
          Email:
          <input value={email} onChange={handleEmailChange}></input>
        </label>
        <label>
          Phone:
          <input value={phone} onChange={handlePhoneChange}></input>
        </label>
      </div>
    </div>
  );
}
