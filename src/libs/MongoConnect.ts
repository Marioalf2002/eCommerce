import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("¡Ya estás conectado a MongoDB!");
      return mongoose.connection.asPromise();
    }

    await mongoose.connect(process.env.MONGO_URI!);
    console.log("Conexión exitosa a MongoDB!");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
  }
};
