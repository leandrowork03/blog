//src/app/components
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-blue-950 h-60 pt-10 border-t-2 border-t-blue-500">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <h1 className="text-4xl font-black">Leandro</h1>
        <div className="mt-5 flex flex-col md:flex-row gap-3">
            <Link href='https://www.linkedin.com/in/leandro-santos-front-end/' className="bg-sky-600 hover:bg-white hover:text-sky-600 text-2xl p-2 border-2 border-black rounded">Linkedin</Link>            
            <Link href='https://github.com/leandrowork03' className="bg-black hover:bg-white hover:text-black text-2xl p-2 border-2 border-black rounded">GitHub</Link>            
        </div>
      </div>
    </footer>
  );
}
