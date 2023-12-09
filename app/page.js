import Image from "next/image";
import Head from "next/head";
import FolderList from "./components/FolderList";

export default function Home() {
	return (
		<>
			<Head>
				<title>NaiTechh</title>
			</Head>{" "}
			<main className="min-h-screen p-2 md:p-5 bg-naitechh-surface overflow-clip">
				<div className=" bg-naitechh-base p-10 min-h-[98vh] rounded-xl border-4 md:border-8 border-black text-black flex flex-col justify-center items-start ">
					<h1 className="md:drop-shadow-[32px_32px_0px_#111] drop-shadow-[16px_16px_0px_#111] mb-10 lg:mb-16 text-center text-3xl lg:text-7xl font-extrabold p-4 md:p-14  rounded-xl bg-naitechh-surface border-8 border-black animate-fade-right animate-once animate-ease-in-out animate-normal mx-auto">
						Welcome to Naitechh-Linked !
					</h1>
					<FolderList />
				</div>
			</main>
		</>
	);
}
