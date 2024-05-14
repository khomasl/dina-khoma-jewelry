"use client";

import Link from 'next/link';
import Image from 'next/image';
import {CONTENT} from '../utils/constants';

const {logo, info, myContacts, mySocials, promo} = CONTENT.footer;

  export default function Footer() {
    return (
      <footer className="w-full bg-[#74538E] py-16 px-20">
        <div className="flex justify-between gap-3 pb-6">
          <div className='max-w-56'>
            <h5 className="text-xl font-bold mb-2">{logo.title}</h5>
            <p>{logo.description}</p>
          </div>
          <div className='text-xl max-w-56'>
            <h5 className='text-xl font-bold mb-2'>{info.title}</h5>
            <>
              {info.nav.map((item) => (
                <Link
                  key={item}
                  href={'#'}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1"
                >
                  {item}
                </Link>
              ))}
            </>
          </div>
          <div className='text-xl max-w-56'>
            <h5 className='text-xl font-bold mb-2'>{myContacts.title}</h5>
            {myContacts.contacts.map((contact) => (
                <Link
                  key={contact.title}
                  href={contact.link}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1"
                >
                  <Image
                      alt={contact.title}
                      // src={require(`/public/svg/${contact.src}?url`)}
                      src={require(`/public/svg/facebook-line.svg?url`)}
                      width={16}
                      height={16}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                      // unoptimized 
                    />
                  {contact.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex justify-between gap-3 items-center">
          <div>
            <h5 className="text-xl font-bold mb-2">{mySocials.title}</h5>
            <div className='flex '>
              {mySocials.socials.map((social, idx) => {
                return (
                  <Link
                    key={social.title}
                    href={social.link}
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-1"
                  >
                    <Image
                      alt={social.title}
                      // src={require(`/public/svg/${social.src}?url`)}
                      src={require(`/public/svg/facebook.svg?url`)}
                      width={50}
                      height={50}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                      // unoptimized 
                    />
                  </Link>
                )
              })}
            </div>
          </div>
          <div className='flex gap-8 items-center border border-[#603813] rounded-md bg-gradient-to-b from-[#6A00A6] from-20% to-[#74538E] px-5 py-3'>
              <h5 className='text-xl font-bold'>{promo.title}</h5>
              <p className='max-w-72 text-2xl'>{promo.description}</p>
              <div className='text-2xl border border-[#A49898] rounded-md p-2'>
                {promo.code}
              </div>
          </div>
        </div>
      </footer>
    )
  }