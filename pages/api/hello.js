// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const bodyParsed = JSON.parse(req.body);

    console.log(bodyParsed);

    const newVal = {
      id: Date.now(),
      value: bodyParsed.value,
    };

    fs.readFile('./db/data.json', 'utf8', (err, json) => {
      const data = json ? JSON.parse(json) : [];
      data.push(newVal);

      fs.writeFile('./db/data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
      });
    });

    res.status(200).json({ name: 'POST request successful' });
    // do something on post request
  }

  if (req.method === 'GET') {
    const user = {
      id: 2,
      name: 'John Doe',
      age: 2222,
    };

    fs.readFile('./db/data.json', 'utf8', (err, json) => {
      const data = json ? JSON.parse(json) : [];
      data.push(user);

      fs.writeFile('./db/data.json', JSON.stringify(data), (err) => {
        if (err) throw err;
      });
    });

    // do something on any request
    res.status(200).json({ name: 'GET request successful' });
  }
}
