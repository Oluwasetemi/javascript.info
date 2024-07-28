// here
import users from "../user.json";
import generateHTML from './generateHTML';
import githubAPIUsers from "./github-fetch";
import { cardContainer, lengthP } from "./selectors";

lengthP.textContent = users.length;



(async function start() {
  // loop thru the json document and make api call using the githubuserName
  let result = [];

  for (let eachPerson of users) {
    let eachData = await githubAPIUsers(eachPerson.githubUsername);

    // console.log(eachData);
    const eachDataHTML =
      eachData.message === "Not Found"
        ? `<div class="card">'not data'</div>`
        : generateHTML(eachData);
    // console.log(eachDataHTML);
    result.push(eachDataHTML);
  }

  // github.textContent = JSON.stringify(result)
  cardContainer.innerHTML = result.join("");
})();
