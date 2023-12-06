import Image from "next/image";
import Head from "next/head";
import FolderList from "./components/FolderList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Head>
        <title>NaiTechh</title>
      </Head>
      <Image src="/logo.png" alt="NaiTechh" width={160} height={160}></Image>
      <FolderList/>

    </main>
  );
}

