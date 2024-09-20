import { useState } from "react";

export default function BasicInfoInput() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

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
        <input
          placeholder="John Doe"
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>
      <label>
        Email:
        <input
          placeholder="example@mail.com"
          value={email}
          onChange={handleEmailChange}
        ></input>
      </label>
      <label>
        Phone:
        <input
          placeholder="123456789"
          value={phone}
          onChange={handlePhoneChange}
        ></input>
      </label>
    </div>
  );
}
