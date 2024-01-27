import Link from 'next/link';
import { Router } from 'next/router';
import React, { useEffect } from 'react';

function notfound() {
  useEffect(()=>{
    setTimeout(()=>{
      Router.push('/')
    },3000)
  },[])
  return (
    <div>
      404 Not Found 
      <div>Go Back to Home <Link href='/'>Home</Link></div>
    </div>
  );
}

export default notfound;
