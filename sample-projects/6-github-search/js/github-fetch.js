async function githubAPIUsers(username) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: "token e750bb923725f6110c0008620638b491ce378488",
    },
  });

  // check
  if (!response.status) {
    throw new Error("api call failed");
  }

  const data = await response.json();
  return data;
}

export default githubAPIUsers;