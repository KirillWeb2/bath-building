import { Contacts } from "@/features/contacts/Contacts";
import Head from "next/head";

export default function ContactsPage() {
  return (
    <>
      <Head>
        <title>Контакты</title>
      </Head>
      <Contacts />
    </>
  );
}
