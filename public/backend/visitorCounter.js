// visitorCounter.js
const backendUrl = "http://localhost:3001"; // Ändere dies zur URL deines Backends

export async function getCount() {
  try {
    const response = await fetch(`${backendUrl}/api/counter`);
    const data = await response.json();
    document.getElementById("count").textContent = data.count;
  } catch (error) {
    console.error("Error fetching counter:", error);
  }
}

export async function incrementCount() {
  try {
    const response = await fetch(`${backendUrl}/api/increment`, {
      method: "POST",
    });
    const data = await response.json();
    document.getElementById("count").textContent = data.count;
  } catch (error) {
    console.error("Error incrementing counter:", error);
  }
}

export async function initCounter() {
  await incrementCount();
  await getCount();
}
