async function fetchContributionsByDate(username, date) {
  const url = `https://api.github.com/users/${username}/events`;

  const contributionsContainer = document.getElementById("contributions");
  const title = document.createElement("h1");
  title.innerText = "Today, Aadi has...";

  contributionsContainer.appendChild(title);
  const breakElement = document.createElement("br");
  contributionsContainer.appendChild(breakElement);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const events = await response.json();
    const targetDate = new Date(date).toDateString();

    const contributions = events.filter((event) => {
      const eventDate = new Date(event.created_at).toDateString();
      return eventDate === targetDate;
    });

    if (contributions.length === 0) {
      contributionsContainer.innerHTML = `<p>No contributions on ${targetDate}</p>`;
      return;
    }

    contributions.forEach((event, index) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.animationDelay = `${index * 0.15}s`; // Add delay for each card

      const repoLink = document.createElement("a");
      repoLink.href = `https://github.com/${event.repo.name}`;
      repoLink.target = "_blank";
      repoLink.textContent = event.repo.name;
      repoLink.className = "repo-link";

      if (event.type === "PushEvent") {
        const description = document.createElement("p");
        description.textContent = "Pushed to ";
        description.appendChild(repoLink);
        card.appendChild(description);

        const latestCommit = event.payload.commits.slice(-1)[0];
        if (latestCommit) {
          const commitMsg = document.createElement("p");
          commitMsg.className = "commit-message";
          commitMsg.textContent = `${latestCommit.message}`;
          card.appendChild(commitMsg);
        }
      } else if (event.type === "PullRequestEvent") {
        const description = document.createElement("p");
        description.textContent = "Opened a pull request in ";
        description.appendChild(repoLink);
        card.appendChild(description);
      } else if (event.type === "IssuesEvent") {
        const description = document.createElement("p");
        description.textContent = "Created an issue in ";
        description.appendChild(repoLink);
        card.appendChild(description);
      } else {
        const description = document.createElement("p");
        description.textContent = "Activity in ";
        description.appendChild(repoLink);
        card.appendChild(description);
      }

      contributionsContainer.appendChild(card);
    });
    const breakElement = document.createElement("br");
    contributionsContainer.appendChild(breakElement);
  } catch (error) {
    console.error("Error:", error);
  }
}

function getTodayDate() {
  const today = new Date();
  return today.toISOString().split("T")[0];
}

const todayDate = getTodayDate();

fetchContributionsByDate("aadibhat09", todayDate);
