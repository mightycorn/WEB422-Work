import { useAtom } from 'jotai'
import { countryAtom } from '../store'

export default function Country() {
    const [country, setCountry] = useAtom(countryAtom);

    return <>Country: { country }</>
}