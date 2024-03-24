import Image from "next/image";
import Link from "next/link";

interface Props {
  lang: string;
}

const Logo = ({ lang }: Props) => {
  return (
    <>
      <Link href={`/${lang}`} legacyBehavior passHref>
        <Image src="/logos/logopng.png" alt="logo" width={150} height={150} className="w-12" />
      </Link>
    </>
  );
};

export default Logo;
