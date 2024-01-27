import Link from 'next/link';
import React from 'react';
export const getStaticProps = async ()=>{
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  let data =await  res.json();
  return {
    props: {ninjas:data}
  }
}
function index({ninjas}) {
  // console.log(ninjas)
  return (
    <div>
      {
      ninjas.map(ninja=>{
        return (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id} className='ninjaDiv' style={{textAlign:'left',padding:'20px',backgroundColor:'#ffffff33',marginTop:'5px',borderRadius:'5px',display:'block'}}>
            {ninja.name}
          </Link>
        )
      })
      }
    </div>
  );
}

export default index;
