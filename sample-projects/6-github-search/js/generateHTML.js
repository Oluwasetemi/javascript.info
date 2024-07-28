export default function generateHTML(eachData) {
  return `
        <div class="card ${eachData.name}" data-url="${eachData.url}">
          <div className="body">
            <a href="https://github.com/${eachData.name}">
              <p>${eachData.login}</p>
            </a>
            <p>${eachData.location}</p>
            <p>${eachData.bio}</p>
          </div>
          <div className="image">
            <img src="${eachData.avatar_url}" alt="${eachData.name}" />
          </div>
        </div>
        `;
}
