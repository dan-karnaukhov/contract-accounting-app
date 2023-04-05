import { HTMLAttributes } from 'react'

const CrossIcon: React.FC<HTMLAttributes<SVGElement>> = (props) => {
  return (
    <svg
      width='26'
      height='26'
      viewBox='0 0 26 26'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_16_318)'>
        <path d='M19.1516 6.21644L13.2546 12.1608L7.35751 6.21644L6.52499 7.05564L12.422 13L6.52499 18.9444L7.35751 19.7836L13.2546 13.8392L19.1516 19.7836L19.9842 18.9444L14.0871 13L19.9842 7.05564L19.1516 6.21644Z' />
      </g>
      <defs>
        <clipPath id='clip0_16_318'>
          <rect
            width='17.9285'
            height='17.9285'
            transform='matrix(0.704277 -0.709926 0.704277 0.709926 0.62793 13)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default CrossIcon
