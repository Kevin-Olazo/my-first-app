import { getCart } from "@/lib/db/cart";
import Link from "next/link";
import { redirect } from "next/navigation";
import ShoppingCartButton from "./ShoppingCartButton";

async function searchProducts(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) {
    redirect("/search?query=" + searchQuery);
  }
}

export default async function Navbar() {
  // Get cart
  const cart = await getCart();

  return (
    <div className="bg-base-100">
      <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost text-xl">
            <svg
              width="40"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 41.9314C21.6974 45.578 17.6315 48 13 48C5.8203 48 0 42.1797 0 35C0 27.8203 5.8203 22 13 22C17.7611 22 21.752 24.6222 24 28.3066C21.4353 32.5327 21.2482 37.8809 24 41.9314Z"
                fill="#61459C"
              ></path>
              <path
                d="M36.9851 22C41.2978 22.0203 45.5064 24.1849 47.9607 28.1126C51.7654 34.2014 49.9138 42.2216 43.8251 46.0262C37.7363 49.8309 29.7161 47.9793 25.9115 41.8905C23.3885 37.8529 23.4974 33.0789 25.4307 29.22C30.3737 29.1555 35.0083 26.4801 36.9851 22Z"
                fill="#442781"
              ></path>
              <path
                d="M13.3889 19.8399C11.4309 15.9973 11.4265 11.2647 13.7931 7.28346C17.4618 1.11185 25.439 -0.917178 31.6106 2.75151C37.7822 6.4202 39.8112 14.3973 36.1425 20.569C33.7097 24.6615 29.4164 26.7522 25.1007 26.8019C22.7784 22.4378 18.2768 19.5443 13.3889 19.8399Z"
                fill="#FF8124"
              ></path>
            </svg>
            Flowmazon
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action={searchProducts}>
            <div className="flex flex-col">
              <input
                name="searchQuery"
                placeholder="Buscar"
                className="input w-full min-w-[100px]"
              />
            </div>
          </form>
        </div>
        <ShoppingCartButton cart={cart} />
      </div>
    </div>
  );
}
