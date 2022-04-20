import { MongoClient } from 'mongodb';

async function contact(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !email.includes('@') || !name.trim() || !message.trim()) {
      return res.status(422).json({ message: 'invalid input' });
    }

    const newMessage = {
      email,
      name,
      message,
    };

    console.log(newMessage);

    const mongoDBConnectionUrl = '';
    if (mongoDBConnectionUrl) {
      let client;

      const connectionString = `//mongoClusterKey//${process.env.mongodb_username}:${process.env.mongodb_password}`;

      try {
        client = await MongoClient.connect(connectionString);
      } catch (err) {
        return res.status(500).json({ message: 'Could not connect to mongoDB' });
      }

      try {
        const db = client.db();
        const resultMessageInserting = await db.collection('messages').insertOne(newMessage);
        newMessage.id = resultMessageInserting.insertedId;
      } catch (err) {
        client.close();
        return res.status(500).json({ message: 'Could not insert new message to mongoDB' });
      }

      client.close();
    }

    res.status(201).json({ message: 'Successful stored message !' });
  }
}

export default contact;
