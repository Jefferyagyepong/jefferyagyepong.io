export default function handler(req, res) {
  const body = req.body;

  res.status(200).json({
    user: `Name: ${body.name}
      Email: ${body.email} 
      Phone: ${body.phone} 
      Message: ${body.message}`,
  });
}
