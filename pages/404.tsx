import { Center } from "@mantine/core";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function ErroPaage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <Center>
        <h1>Oooops...</h1>
        <h2>That page cannot be found Sorry...</h2>
        <p>
          Go back to
          <Link href="/">
            {" "}
            <button>Home</button>{" "}
          </Link>
        </p>
      </Center>
    </div>
  );
}
