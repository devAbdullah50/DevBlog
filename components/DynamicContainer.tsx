import React from 'react'
type dynamictype = {
    title: string;
    thumbnail: string;
    content: string;
    auther: string;
}

const DynamicContainer = (props: dynamictype) => {
  return (
    <div>
        <img src={props.thumbnail} alt="Blog Thumbnail" />
        <h2>{props.title}</h2>
        <p>{props.content}</p>
        <b>Auther: <i>{props.auther}</i></b>
    </div>
  )
}

export default DynamicContainer