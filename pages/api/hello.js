// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'POST') {
    res.status(200).json({ name: 'POST' });

    // do something on post request
  }

  // do something on any request
  res.status(200).json({ name: 'John Doe' });
}
