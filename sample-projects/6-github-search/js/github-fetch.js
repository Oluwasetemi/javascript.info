async function githubAPIUsers(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  // check
  if (!response.status) {
    throw new Error("api call failed");
  }

  const data = await response.json();
  return data;
}

export default githubAPIUsers;