import {Metadata} from "next";

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId}`)
        }, 100)
    });
    return {
        title: `Product ${params.productId}`
    }
}

type Props = {
    params: {
        productId: string;
    }
}

export default function ProductList({ 
    params ,
}: Props) {
    return <h1>Details about product {params.productId} </h1>
}