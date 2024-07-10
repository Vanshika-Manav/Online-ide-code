import 'dotenv/config';
import axios from 'axios';
import { MongoClient } from 'mongodb';

// MongoDB connection setup
const uri = process.env.REACT_APP_MONGO_URL;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export async function fetchDataFromMongoDB() {
  try {
    await client.connect();
    const database = client.db('MyCluster'); // Replace with your database name
    const collection = database.collection('userdb.questions'); // Replace with your collection name
    
    // Fetch data from MongoDB
    const data = await collection.find({}).toArray();
    console.log('Data fetched from MongoDB:', data);

    // Now, let's send this data using Axios (example POST request)
    // const response = await axios.post('https://your_api_endpoint.com', data);
    // console.log('Response from API:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    await client.close();
  }
}

//fetchDataFromMongoDB();
