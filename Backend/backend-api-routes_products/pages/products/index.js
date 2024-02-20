import useSWR from "swr"
import Link from "next/link"

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ProductPage() {
    const {data, error} = useSWR("/api/products", fetcher)
    console.log(data)

    if(error) {
        return <h1>error</h1>
    }
    if (!data) {
      return;
    }
    
        return (
          <>
            <h1>hello</h1>
            <ul>
              {data.map((product) => (
                <li key={product.id}>
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </li>
              ))}
            </ul>
          </>
        );
    }