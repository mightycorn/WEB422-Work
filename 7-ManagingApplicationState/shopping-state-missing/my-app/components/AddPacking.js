// AddPacking.js

import { useAtom } from "jotai";
import { packingAtom } from "../store";

export default function ProductBox(props) {
    const [packing, setPacking] = useAtom(packingAtom);

    function addPacking(pack) {
        console.log(pack);
        setPacking((packList) => [...packList, pack]);
      }

    return (
        <>
            <form>
                <label for="fname">Add to Packing:</label><br />
                <input type="text" id="pack" name="pack" /><br />
                <button onClick={(e) => addPacking(packing)}>Add to Packing</button>
            </form>
            <p><span>Items to pack: {packing}</span></p>
        </>
    )
}