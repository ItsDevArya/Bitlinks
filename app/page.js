import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./font/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
   <main className="bg-gray-100"> 
   <section className="grid grid-cols-2 h-[50vh] ">
    <div className=" flex flex-col gap-4 items-center justify-center">
      <p className={`text-2xl font-bold ${poppins.className}`}>
      The Best URL shortener in the Market
       
      </p>
      <p className="px-45">
        We are the most straight-forward no login BS URL shortener in the World.
        Most of the url shortener will ask you for signup and all, 
        But we dont That's what makes us special. 
        </p>
        <ul>
        <li className="flex gap-3">
      <a href="/shorten"> <button className="bg-gray-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white"> 
        Try Now</button></a>  
       <a href="https://github.com/ItsDevArya/Bitlinks"><button className="bg-gray-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white"> 
        GitHub</button></a>
       </li>
        </ul>
    </div>
    <div className="flex justify-start relative">
    <Image className="mix-blend-darken" alt="an image of vector" src={"/5541.png"} fill={true} />
    </div>
   </section>
   </main>
  );
}
