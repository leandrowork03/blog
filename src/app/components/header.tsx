// src/app/components/menus.tsx
"use client";

import { Post } from "@/types/info";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";


export function Header() {
  const [infor, setInfor] = useState<Post[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
        setInfor(json.data.posts);
      } catch (err) {
        console.error("Erro ao buscar dados GraphQL:", err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-fit font-black pt-3 flex md:block justify-end items-center" ref={menuRef}>
     <div>
          
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls="mobile-menu"
      >
        
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        )}
      </button>
        </div>

      <div
        id="mobile-menu"
        className={`
          ${isOpen ? 'block' : 'hidden'}
          md:flex
          md:flex-col
          absolute md:relative
          top-0 left-0
          bg-gray-900 md:bg-transparent
          w-64 md:w-fit
          h-screen md:h-auto
          z-20
          p-4 md:p-0
          rounded-b-lg md:rounded-none
          shadow-lg md:shadow-none
          font-black
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          md:translate-x-0
        `}
      >
        <Link
          href="/"
          className="hover:border-b-3 hover:border-blue-600 w-fit py-2 block overflow-hidden whitespace-nowrap text-ellipsis"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        {infor.map((info) => (
          <div key={info.id}>
            <Link
              href={`/posts/${info.id}`}
              className="hover:border-b-3  w-fit  hover:border-blue-600 py-2 block overflow-hidden whitespace-nowrap text-ellipsis"
              onClick={() => setIsOpen(false)}
            >
              {info.title}
            </Link>
          </div>
        ))}
         <Link
          href="https://www.linkedin.com/in/leandro-santos-front-end/"
          target="_blank"
          className="hover:border-b-3  text-blue-500 hover:border-blue-600 w-fit py-2 block flex items-center gap-4 overflow-hidden whitespace-nowrap text-ellipsis"
          onClick={() => setIsOpen(false)}
        >
          Linkedin
          <FaExternalLinkAlt/>
        </Link>
         <Link
          href="https://github.com/leandrowork03"
          target="_blank"
          className="hover:border-b-3  text-gray-400 hover:border-blue-600 w-fit py-2 block flex items-center gap-4 overflow-hidden whitespace-nowrap text-ellipsis"
          onClick={() => setIsOpen(false)}
        >
          GitHub
          <FaExternalLinkAlt/>
        </Link>
         <Link
          href="https://wa.me/5551982126888"
          target="_blank"
          className="hover:border-b-3 text-green-400 hover:border-blue-600 w-fit py-2 block flex items-center gap-4 overflow-hidden whitespace-nowrap text-ellipsis"
          onClick={() => setIsOpen(false)}
        >
          Whatsapp
          <FaExternalLinkAlt/>
        </Link>
      </div>
    </div>
  );
}

