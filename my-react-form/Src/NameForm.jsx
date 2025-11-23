 import { useState } from "react";

function NameForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(firstName + " " + lastName);
  };

  return (
    <div style={{ border: "1px solid black", padding: "15px", width: "300px" }}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>FirstName : </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <label>LastName : </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>

      <h3>{fullName}</h3>
    </div>
  );
}

export default NameForm;
