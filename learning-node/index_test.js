function getUser() {
    const user = {
      name: "Carla",
      age: 26
    };
  
    return user;
  }

  const user1 = getUser();
  console.log(user1);
  
  const getUserArrowFunction = () => ({
    name: "Maria",
    age: 26
  });
  
  const user = getUserArrowFunction();
  console.log(user);