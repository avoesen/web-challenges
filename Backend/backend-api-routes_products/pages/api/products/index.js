import { getAllProducts } from "@/services/productServices";

export default function handler(request, response) {
    response.statusCode = 200
    response.json(getAllProducts())
}