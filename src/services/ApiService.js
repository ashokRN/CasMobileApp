exports.login = async (loginBody) => {
    const Body = {email:loginBody.regno,password:loginBody.password};
    console.log("Body", Body);
    const response = fetch("http://192.168.1.9:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Body),
    });
    if (response.status === 200) {
        console.log(response,'response');
      return  response.json();
    } else {
      return response.json();
    }
  };