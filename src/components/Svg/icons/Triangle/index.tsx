import { SVGAttributes } from 'react'

export default function Triangle({ fill, ...rest }: SVGAttributes<HTMLOrSVGElement>) {
  return (
    <svg width='16' height='24' fill='none' {...rest}>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M8.864 9.465a1 1 0 00-1.728 0l-3.518 6.031A1 1 0 004.482 17h7.036a1 1 0 00.864-1.504l-3.518-6.03zM7.136 7.481l-5.259 9.015A1 1 0 002.741 18h10.518a1 1 0 00.864-1.504l-5.26-9.015a1 1 0 00-1.727 0z'
        fill={fill || '#fff'}></path>
    </svg>
  )
}
