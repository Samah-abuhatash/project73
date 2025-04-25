import { useState } from "react";
import User from "./User";
import Custombuton from "./shared/Custombuton";
import Custominput from "./shared/Custominput";

function App() {
  const [users, setUsers] = useState([
    { id: 1, name: "tariq", email: "tariq@gmail.com", isBlocked: true },
    { id: 2, name: "anas", email: "anas@gmail.com", isBlocked: false },
    { id: 3, name: "hala", email: "thalaariq@gmail.com", isBlocked: true },
    { id: 4, name: "asmaa", email: "asmaa@gmail.com", isBlocked: true },
  ]);

  return (
    <div className="users">
      <h2> welcome my users profile </h2>
      <div className="bg-light d-flex flex-column gap-3 p-3"  style={{ maxWidth: "400px"}}>
      <Custominput
        label="First Name"
        type="First Name:"
        name="firstName"
        placeholder="Enter your first name"
        title="Input field for first name"
      />
      <Custominput
        label="Last Name:"
        type="Last Name:"
        name="lastName"
        placeholder="Enter your last name"
        title="Input field for last name"
      />
      <Custominput
        label="Age"
        type="age:"
        name="age"
        placeholder="Enter your age"
        title="Input field for age"
      />
      <Custominput
        label="Email:"
        type="email:"
        name="email"
        placeholder="Enter your email"
        title="Input field for email"
      />
   
    </div>
    <Custombuton text= "add"/>
          
       
      {users.map(function (user) {
        return (
          
          <User
            key={user.id}
            name={user.name}
            email={user.email}
            isBlocked={user.isBlocked}
          />
         
        );
      })}
    </div>
  );
}

export default App;
