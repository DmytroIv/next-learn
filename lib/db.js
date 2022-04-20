import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://graphqluser:Qwe123456@cluster0.uoiym.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  );

  return client;
}
