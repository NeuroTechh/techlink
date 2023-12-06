"use client";
import { useState, useEffect } from 'react';
import client from '@/app/utils/sanity';
import { usePathname } from 'next/navigation';

export default function Folder({}) {
  const  folderName  = usePathname().replace("/","");
console.log(folderName);
  const [folderData, setFolderData] = useState(null);


  useEffect(() => {
    if (folderName) {
      const fetchFolderData = async () => {
        const result = await client.fetch(
          `*[_type == "folder" && title == "${folderName}"]{_id, title, description, image, links[]->{_id, title, url}}`
        );
        setFolderData(result[0]);
      };

      fetchFolderData();
    
    }
  }, []);

  if (!folderData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{folderData.title}</h1>
      <p>{folderData.description}</p>
      {folderData.image && <img src={folderData.image.url} alt={folderData.title} />}

      <ul>
        {folderData.links.map(link => (
          <li key={link._id}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
