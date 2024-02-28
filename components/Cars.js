/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Profile({name, picture}) {
  return (
    <div>
        <img src={picture} alt={name} width={200} />
        <p>{name}</p>
    </div>
  )
}