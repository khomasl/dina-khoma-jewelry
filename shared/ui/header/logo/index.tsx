import Image from 'next/image'
import {CONTENT} from '../../../../utils/constants'

const {logo} = CONTENT.header

const Logo = () => (
  <Image
    alt={logo.title}
    src={require(`/public/${logo.src}`)}
    width={300}
    height={100}
    style={{
      maxWidth: "100%",
      height: "auto",
    }}
  />
)

export default Logo