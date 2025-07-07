"use client"
import React from 'react'
import { Button } from './ui/button';
type cardtype = {
    title: string;
    thumbnail: string;
    auther: string;
}

const Card = (props: cardtype) => {
  return (
    <div className='bg-slate-800 p-5 rounded space-y-3'>
        <img src={props.thumbnail} alt="Blog Thumbnail" className='rounded w-72' />
        <h2 className='text-center'>{props.title}</h2>
        <div className='flex justify-between'>
        <Button>Read</Button>
        <b className='text-end w-full'>Auther: <i className='text-primary'>{props.auther}</i></b>
        </div>
    </div>
  )
}

export default Card