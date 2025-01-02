import Image from 'next/image'
import { CONTENT_HOMEPAGE } from 'src/modules/website/shared/constants'
import Link from "next/link";
import {FC} from "react";
import {Media} from "@/modules/admin/payload-types";

type Props = {
  logo: Media;
}

const Logo: FC<Props> = ({logo}) => (
  <Link href='/' className='relative w-full max-w-[180px] xl:max-w-[300px] aspect-[3]'>
    <Image
      alt={logo.alt || 'logo'}
      src={logo.url || '/logo.png'}
      fill
    />
  </Link>
)

export default Logo
