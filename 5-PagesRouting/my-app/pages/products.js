import { useRouter } from 'next/router'

export default function Products() {
    /*
        reading query parameters
    */
    const router = useRouter();
    const { page } = router.query;
    const { category } = router.query;

    console.log(page);

    if (page && category) {
        return <p>Products for page: {page} &amp; category: {category}</p>
    } else {
        return <p>Page and/or Category Parameters Missing</p>
    }
}