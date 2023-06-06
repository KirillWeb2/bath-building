import { Services } from "@/features/services/Services";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Главная</title>
      </Head>
      <Services />
    </div>
  );
}
