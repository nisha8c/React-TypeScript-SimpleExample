
import React, { useState, useEffect } from "react";
import { UserData } from './types/Types';

import UserName from './components/UserName/UserName';
import UserAge from './components/UserAge/UserAge';
import UserNameChanger from './components/UserNameChanger/UserNameChanger';
import UserAddress from './components/UserAddress/UserAddress';


function App() {

  const [user, setUser] = useState<UserData>({
    name: "", 
    age: 0, 
    address: ""
  });

  useEffect(() => {
    const getData = async () => {
      const response = await fetch ("https://randomuser.me/api/");
      const data = await response.json();
      
      const firstUser = data.results[0];

      setUser((prev) => {
        return {
          ...prev,
          name: firstUser.name.first,
          age: firstUser.dob.age,
          address: firstUser.location.city
        };
      });
    }

    getData();
    
  }, [])
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    // setUser({name: event.target.value, age: user.age});
    setUser({ ...user, name: event.target.value });
  }

  return (
    <div>
      <UserName user={user} />
      <UserAge user={user} />
      <UserAddress user={user} />
      <UserNameChanger user={user} onNameChanged={handleChange}/>
    </div>
  );
}

export default App;



