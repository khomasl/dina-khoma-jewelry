import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/images/logo/logo_300x100.png'

const navItems = {
  '/': {
    name: 'Про мене',
  },
  '/collections': {
    name: 'Moї вироби',
  },
  '/contacts': {
    name: 'Контакти',
  },
}

export default function Navbar() {
  return (
    <aside className="ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <Image
            alt="Dina Khoma Jewelry Logo"
            src={logo}
            width={300}
            height={100}
            style={{
              maxWidth: "100%",
              height: "auto",
              marginRight: "auto"
            }}
          />
          <div className="w-full flex flex-row space-x-0 ml-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}