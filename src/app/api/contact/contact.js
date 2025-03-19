export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Simulating database storage (replace this with your actual database logic)
      console.log("Saving to database:", { name, email, message });

      return res.status(200).json({ success: "Message received!" });
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // If method is NOT POST, return 405 error
  return res.status(405).json({ error: "Method Not Allowed" });
}
