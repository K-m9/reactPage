import React from 'react';
// import icons
import { BiHomeAlt } from 'react-icons/bi';
import { BsBriefcase } from 'react-icons/bs';
// link
import { Link } from 'react-scroll';


const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-6 w-full overflow-hidden z-50'>
      <div className="container mx-auto"></div>
      {/* nav inner */}
      <div className='w-full bg-black/20 h-[90px] backdrop-blur-xl
    rounded-full max-w-[260px] mx-auto px-5 flex justify-between
    text-2xl items-center text-white/50'>
        <Link to='home'
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-100}
          className='cursor-pointer w-[60px] h-[60px]
      flex items-center justify-center'>
          <BiHomeAlt />
        </Link>
        <Link to='work'
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px]
      flex items-center justify-center'>
          <BsBriefcase />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
