import React from 'react'

type paramtype = {
    slug: string;
}

const page = ({params}: {params: paramtype}) => {
  return (
    <div>{params.slug}</div>
  )
}

export default page