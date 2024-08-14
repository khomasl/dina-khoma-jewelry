import Image from 'next/image'
import { CONTENT_HOMEPAGE } from '@/shared/constants'
import Link from "next/link";

const {logo} = CONTENT_HOMEPAGE.header;

const Logo = () => (
  <Link href={logo.link} className='relative w-full max-w-[180px] xl:max-w-[300px] aspect-[3]'>
    <Image
      alt={logo.title}
      src={logo.src}
      fill
    />
  </Link>
)

export default Logo