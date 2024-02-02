import mongoose from 'mongoose';

const DBConnection = async () =>{
  
    const MONGO_URI=`mongodb://admin:user1234@ac-bueqxue-shard-00-00.gqaxobd.mongodb.net:27017,ac-bueqxue-shard-00-01.gqaxobd.mongodb.net:27017,ac-bueqxue-shard-00-02.gqaxobd.mongodb.net:27017/?ssl=true&replicaSet=atlas-bcck64-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(MONGO_URI)
        console.log('database connected successfully');



    }catch(error){
        console.error('error while connecting with the database',error.message);

    }
}
export default DBConnection;