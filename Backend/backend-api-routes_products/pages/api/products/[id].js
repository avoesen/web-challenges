import { getProductById } from "@/services/productServices"; 

export default function handler(request, response) {
    response.statusCode = 200; 
    const {id} = request.query; 
    response.json(getProductById(id))
}