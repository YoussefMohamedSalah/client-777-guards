import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image src="/logos/logopng.png" alt="logo" width={150} height={150} className="w-12" />
      </Link>
    </>
  );
};

export default Logo;
