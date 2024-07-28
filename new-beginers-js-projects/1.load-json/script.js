(async () => {
  let user = {
    name: 'John',
    surname: 'Smith'
  };

  let response = await fetch('./users.json', {
    method: 'GET',
    // headers: {
    //     'Content-Type': 'application/json;charset=utf-8'
    // },
  });

  let result = await response.json();
  console.log(result.users)
  alert(result.users.map(user => user.name).join(', '));
})()
