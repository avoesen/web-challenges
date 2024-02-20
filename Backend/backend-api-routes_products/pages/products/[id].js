import { useRouter} from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductDetail() {
    const router = useRouter()
    const {id} = router.query;

    const {data, error} = useSWR(`/api/products/${id}`, fetcher)
    console.log(data)

    if(error) {
        return <h1>error</h1>
    }
    if(!data) {
        return
    }
    
    const {name, description, price, currency, category} = data
    return (
        <>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{description}</p>
            <p>{price}{currency}</p>
        </>
    )
}