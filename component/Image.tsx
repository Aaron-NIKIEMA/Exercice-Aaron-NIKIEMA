"use client"
import React from 'react'   
import image from "next/image"


export default function Image({src, alt, width, height}: {src: string; alt: string; width?: number; height?: number}) {
    return (
        <div>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height }
            />
        </div>
    )
}