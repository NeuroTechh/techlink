"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import client from '../utils/sanity';

export default function FolderList() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const result = await client.fetch('*[_type == "folder"]{_id, title, description, image, links[]->{_id, title, url}}');
      setFolders(result);
    };
    console.log(folders);

    fetchFolders();
  }, []);

  return (
    <div>
      <h1>Folders</h1>
      <ul>
        {folders.map(folder => (
          <li key={folder._id}>
            <Link href={`/${encodeURIComponent(folder.title)}`}>
         
                <h3>{folder.title}</h3>
                <p>{folder.description}</p>
                {folder.image && <img src={folder.image.url} alt={folder.title} />}
      
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
