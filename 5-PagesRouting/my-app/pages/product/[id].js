import { useRouter } from 'next/router'

export default function Product() {
    /*
        reading route parameters
    */
    const router = useRouter();
    const { id } = router.query;

    return <p>Product: {id}</p>
}