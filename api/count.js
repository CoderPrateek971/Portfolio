export default async function handler(req, res) {
    try {
      const response = await fetch(
        "https://api.counterapi.dev/v1/prateek-gargs-team/first-counter-3724/up"
      );
  
      const data = await response.json();
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch count" });
    }
  }