import Image from 'next/image'
import { CONTENT } from '@/shared/constants'

const {logo} = CONTENT.header;

const Logo = () => (
  <div className='relative w-full max-w-[180px] xl:max-w-[300px] aspect-[3]'>
    <Image
      alt={logo.title}
      src={logo.src}
      fill
    />
  </div>
)

export default Logo