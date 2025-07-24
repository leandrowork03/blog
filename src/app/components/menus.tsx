
//src/app/components/menus.tsx
"use client";

import { Information } from "@/types/info";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Menus() {
  const [infor, setInfor] = useState<Information[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: `
              query {
                posts {
                  id
                  title
                }
              }
            `,
          }),
        });

        const json = await res.json();
        setInfor(json.data.posts); // ← importante: nome deve bater com o schema
      } catch (err) {
        console.error("Erro ao buscar dados GraphQL:", err);
      }
    };

    fetchData();
  }, []);

  console.log(infor)
  return (
    <div className="flex flex-col  w-full font-black   pt-3">
      <Link href="/" className="hover:border-b-3 hover:border-blue-600 w-fit" >Home</Link>
      {infor.map((info) => (
        <div key={info.id}>
          <Link
            href={`/posts/${info.id}`}
            className="hover:border-b-3 hover:border-blue-600"
          >
            {info.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

