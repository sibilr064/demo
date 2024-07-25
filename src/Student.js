import React from "react";
import axios from "axios";
import { useState } from "react";

function Student() {
  const [Name, setName] = useState("");
  const [RollNo, setRollNo] = useState("");
  const [Age, setAge] = useState("");
  const [Place, setPlace] = useState("");
  const [Email, setEmail] = useState("");

  // async function handleSubmit() {
  //   // console.log(Name, RollNo, Age, Place, Email);
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/student/postStudent"
  //     );
  //     console.log("Response:", response.data);
  //   } catch (error) {
  //     console.error("Error submitting data:", error);
  //   }
  // }

  async function handleSubmit() {
    try {
      const response = await axios.post(
        "http://localhost:3000/student/postStudent",
        {
          Name,
          RollNo,
          Age,
          Place,
          Email,
        }
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    setAge(0);
    setEmail("");
    setPlace("");
    setRollNo(0);
    setName("");
  }

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        value={Name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>RollNo</label>
      <input
        type="number"
        value={RollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />
      <label>Age</label>
      <input
        type="number"
        value={Age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label>Place</label>
      <input
        type="text"
        value={Place}
        onChange={(e) => setPlace(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
}

export default Student;
