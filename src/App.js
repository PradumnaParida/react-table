import React, { useState } from "react";
import "./App.css";
import data from "./data.json";

const App = () => {
  const [contacts] = useState(data);

  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>FULL NAME</th>
            <th>COUNTRY</th>
            <th>PHONE NUMBER</th>
            <th>EMAIL</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr>
              <td>{contact.id}</td>
              <td>{contact.fullName}</td>
              <td>{contact.country}</td>
              <td>{contact.phoneNumber}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
