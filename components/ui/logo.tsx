import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      <span className="block relative w-[170px] h-[45px] md:ml-3">
        <Image
          src="/img/lhouse_wide_y.png"
          alt="Lighthouse Logo (dark)"
          fill
          className="block object-contain"
          priority
        />
      </span>
    </Link>
  );
}
