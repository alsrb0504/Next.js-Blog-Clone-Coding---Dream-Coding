import Image from "next/image";
import profileImage from "../../public/images/profile.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="max-h-64 rounded-full mx-auto"
        src={profileImage}
        alt="profile"
        width={256}
        height={256}
        priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm MinKyu"}</h2>
      <h3 className="text-xl font-semibold">Front-end engineer</h3>
      <p>꾸준히 성장하는 사람, 민규</p>
      <Link href="/contact">
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
