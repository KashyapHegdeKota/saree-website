import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image
        src="/landing-page.png"
        alt="A descriptive alt text"
        width={500}
        height={300}
      />
      <div className="mt-10">
        <Link
          href="/home"
          className="
                inline-block rounded-full 
                bg-gray-600 px-10 py-4 
                text-lg font-bold text-white 
                shadow-lg shadow-black-500/30
                transition-all duration-300 ease-in-out
                hover:scale-105 hover:bg-green-700 hover:shadow-xl
              "
        >
          Start shopping
        </Link>
      </div>
    </main>
  );
}
