import { Prices } from "@/features/prices/Prices";
import Head from "next/head";

export default function Price() {
  return (
    <>
      <Head>
        <title>Цены и акции</title>
      </Head>
      <Prices />
    </>
  );
}
