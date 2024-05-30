'use client';

import {Fragment, useEffect, useState} from 'react';

import {Dialog, Transition} from '@headlessui/react';
import {usePathname, useSearchParams} from 'next/navigation';
import { MenuContent } from './MenuContent';
import Image from 'next/image';

const MobileMenu = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const currentParams = Object.fromEntries(searchParams.entries());

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname, searchParams]);

  return (
    <>
      <button
        type='button'
        onClick={() => setIsOpen(true)}
        aria-label='Open mobile menu'
        className='lg:hidden flex size-11 cursor-pointer items-center justify-center rounded-md transition-colors'
      >
        <Image
          alt="open"
          src="/svg/menu_40px.svg"
          width={40}
          height={40}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={() => setIsOpen(false)} className='relative z-50'>
          <Transition.Child
            as={Fragment}
            enter='transition-all ease-in-out duration-300'
            enterFrom='opacity-0 backdrop-blur-none'
            enterTo='opacity-100 backdrop-blur-[.5px]'
            leave='transition-all ease-in-out duration-200'
            leaveFrom='opacity-100 backdrop-blur-[.5px]'
            leaveTo='opacity-0 backdrop-blur-none'>
            <div className='fixed inset-0 bg-black/20' aria-hidden='true' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition-all ease-in-out duration-300'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition-all ease-in-out duration-200'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'>
            <Dialog.Panel className='fixed inset-y-0 right-0 flex size-full flex-col border-l border-neutral-700 bg-white/90 p-6 backdrop-blur-xl md:w-[390px]'>
              <div className='flex justify-end mb-4'>
                <button onClick={() => setIsOpen(false)}>
                  <Image
                    alt="close"
                    src="/svg/close_40px.svg"
                    width={40}
                    height={40}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </button>
              </div>
              <MenuContent />
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default MobileMenu;
