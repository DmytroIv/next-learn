export default function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (!email || !name || !text.trim()) {
      res.status(422).json({ message: 'Invalid comment data.' });
      return;
    }

    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      text,
    };

    res.status(200).json({ message: 'Comment posted...' });
  }

  if (req.method === 'GET') {
    // do some logic to get comment...
  }
}
