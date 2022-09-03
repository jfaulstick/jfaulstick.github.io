import Link from "next/link";
import { useState, useEffect } from "react";

export const Navitem = (props) => {
  return (
    <Link href={props.link}>
      <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 mr-3 rounded text-white items-center justify-center hover:bg-zinc-700 hover:text-white '>
        {props.label}
      </a>
    </Link>
   
  );
}

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [top, setTop] = useState(true)

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (scrollPosition == 0) {
      setTop(true)
    } else if (scrollPosition > 10) {
      setTop(false)
    } else if (scrollPosition < 10) {
      setTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const handleClick = () => {
    setActive(!active);
  };

  return (
      <nav className={
        `${top ? 'bg-transparent' : 'bg-zinc-800'}` +
        ' fixed top-0 z-50 w-full flex items-center flex-wrap py-2 px-4 lg:px-8'
      }>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-xl text-white tracking-wide'>
              Joe Faulstick
            </span>
          </a>
        </Link>
        <button
          className='inline-flex p-3 hover:bg-zinc-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Navitem link="/" label="About"></Navitem>
            <Navitem link="#skills" label="Skills"></Navitem>
            <Navitem link="#experience" label="Experience"></Navitem>
          </div>
        </div>
      </nav>
  );
};
   