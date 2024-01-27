import React from 'react';
import Link from 'next/link'
function Navbar() {
  return (
    <nav>
      <div>
        <strong>TZW</strong>
      </div>
        <div className='LinkCon'>
        <Link href="/" className='a'>Home</Link>
        <Link href='/about' className='a'>About</Link>
        <Link href='/ninjas' className='a'>Ninjas list</Link>
        </div>
    </nav>
  );
}

export default Navbar;
