export default function ProductList({ 
    params ,
}: {
    params: { productId: string }
}) {
    return <h1>Details about product {params.productId} </h1>
}