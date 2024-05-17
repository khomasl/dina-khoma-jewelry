"use client";

import Link from 'next/link';
import Image from 'next/image';
import {CONTENT} from '@/shared/constants';

const {logo, nav, socials, phone} = CONTENT.header

const navItems = {
  '/about': {
    name: nav[0],
  },
  '/collections': {
    name: nav[1],
  },
  '/contacts': {
    name: nav[2],
  },
};

export default function Navbar() {
  return (
    <aside className="ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 w-full">
        <nav
          className="border-b flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
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
          <div className="hidden md:flex flex-row space-x-1 ml-5">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="text-3xl transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-2"
                >
                  {name}
                </Link>
              )
            })}
          </div>
          <div className="hidden md:flex flex-row space-x-1 ml-5">
            {socials.map((social, idx) => {
              return (
                <Link
                  key={social.title}
                  href={social.link}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  <>
                    {/* {idx===0 && <Instagram />} */}
                    {/* {idx===1 && <Facebook />} */}
                    {/* {idx===2 && <Telegram className="hover:bg-red-400 hover:stroke-red-100" */}
                {/* />} */}
                    <Image
                      alt={social.title}
                      src={require(`/public/svg/${social.src}?url`)}
                      // src={instagramUrl}
                      width={50}
                      height={50}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                      // unoptimized 
                    />
                  </>
                </Link>
              )
            })}
          </div>
          <Link
            key={phone.title}
            href={`tel:${phone.link}`}
            className="hidden md:block text-3xl  transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 text-violet-400"
          >
            {phone.title}
          </Link>
          <div className='flex md:hidden flex-col justify-between w-8 h-8'>
            <div className='border border-b'></div>
            <div className='border border-b'></div>
            <div className='border border-b'></div>
          </div>
        </nav>
      </div>
    </aside>
  );
};