"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import client from "../utils/sanity";

export default function FolderList() {
	const [folders, setFolders] = useState([]);

	useEffect(() => {
		const fetchFolders = async () => {
			const result = await client.fetch(
				'*[_type == "folder"]{_id, title, description, image, links[]->{_id, title, url}}'
			);
			setFolders(result);
		};

		fetchFolders();
	}, []);
	let arr = 0;
	return (
		<div className="min-w-full flex flex-col justify-center items-center">
			<h1
				className="  font-bold text-4xl md:text-6xl underline decoration-wavy md:decoration-solid md:decoration-8 decoration-black animate-fade-right animate-once animate-ease-in-out animate-normal"
				style={{ animationDelay: `${0.3}s` }} // Add staggered delay
			>
				Our Links!
			</h1>

			<ul>
				{folders.map((folder, index) => {
					return (
						<Link
							key={folder._id}
							href={`/${encodeURIComponent(folder.title)}`}
							className={`card group animate-fade-right animate-once animate-ease-in-out animate-normal `}
							style={{ animationDelay: `${index + 1 * 0.3}s` }} // Add staggered delay
						>
							<li
								key={folder._id}
								className="drop-shadow-[8px_8px_0px_#111] group-hover:drop-shadow-[16px_16px_0px_#111] bg-naitechh-green md:bg-naitechh-purple p-3 my-8 md:gap-4 rounded-xl border-4 border-black text-black min-w-[65vw] lg:min-w-[40rem] flex flex-col md:flex-row justify-center items-center transition-all duration-300 ease-in-out"
							>
								{folder.image && (
									<img
										src={folder.image.url}
										alt={folder.title}
										className="max-w-[10rem] md:pr-3 rounded-xl md:rounded-none md:border-r-2 border-black drop-shadow-xl"
									/>
								)}
								<span className="w-full min-h-full text-lg md:text-2xl font-bold flex flex-col justify-center">
									<h3 className="md:border-b-2 border-black mb-2 text-center p-2">
										{folder.title}
									</h3>
									<p className="text-center p-2">
										{folder.description}
									</p>
								</span>
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}
