export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = JSON.stringify(req.body );
    // Save the post data to a database
      res.status(200).json({ name, email, message });
      


  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
