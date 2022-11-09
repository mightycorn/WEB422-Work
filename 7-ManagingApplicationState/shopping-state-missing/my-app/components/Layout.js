import Link from "next/link";
import { useAtom } from "jotai";
import { cartListAtom } from "../store";

export default function Layout(props) {
  const [cartList, setCartList] = useAtom(cartListAtom);

  return (
    <>
      <div style={{ padding: "10px" }}>
        <h2>Online Shopping</h2>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/products" legacyBehavior>
          <a>Products</a>
        </Link>{" "}
        |{" "}
        <Link href="/cart" legacyBehavior>
          <a>Shopping Cart <span>({cartList.length})</span></a>
        </Link>
        <hr />
        {props.children}
      </div>
    </>
  );
}
