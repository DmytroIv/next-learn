export default function handler(req, res) {
  const { id } = req.query;

  // do something  on any request to /api/feedback/[id]

  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    res.status(200).json({ message: `Success request with email: ${userEmail}` });

    // do something with usr email
    console.log(userEmail);
  }

  console.log(id);

  res.status(200).json({ someData: 'someData' });
}
