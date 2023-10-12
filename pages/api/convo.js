export default function handler(req, res) {
  const body = req.body;

  res.status(200).json({
    user: `Name:  ${body.name}  
    Email: ${body.email}  
    Project Type: ${body.projectType} 
    Country: ${body.country} 
    Message: ${body.message}`,
  });
}
