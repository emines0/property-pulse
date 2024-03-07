import connectDB from "@/config/database";
import Property from "@/models/Property";

// GET /api/properties/:import { second } from 'first'
export const GET = async (req, { params }) => {
  try {
    await connectDB();
    const property = await Property.findById(params.id);

    if (!property) return new Response("Property Not Found", { status: 404 });

    return new Response(JSON.stringify(property), {
      status: 200,
    });
  } catch (error) {
    console.log("Error: ", error);
    return new Response("Error: Something went wrong! ", {
      status: 500,
    });
  }
};
