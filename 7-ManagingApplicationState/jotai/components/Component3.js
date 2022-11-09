import { useAtom } from 'jotai'
import { countAtom } from '../store'

export default function Component3(props) {
    console.log("Rendering Component 3");
    const [count] = useAtom(countAtom); 

    return (
        <>
            Component 3<br />
            <strong>Value: {count}</strong>
        </>
    )
}