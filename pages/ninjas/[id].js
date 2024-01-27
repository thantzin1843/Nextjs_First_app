import React from 'react';
export const getStaticPaths = async()=>{
  let res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  const paths = data.map((ninja)=>{
    return {
      params:{id:ninja.id.toString()}
    }
  })
  return {
    paths,
    fallback:false
  }
}
export const getStaticProps = async (context) =>{
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
  const data =await res.json();
  return {
    props:{ninja:data}
  }
}
function Detail({ninja}) {
  return (
    <div>
      {ninja.name}
    </div>
  );
}

export default Detail;
