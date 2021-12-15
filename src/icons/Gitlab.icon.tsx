import { ISVGProps } from '../interfaces/svg-props.interface'

export const GitlabIcon = ({
  width,
  height,
  color = 'white',
}: ISVGProps): JSX.Element => {
  return (
    <svg
      width={width || '24px'}
      height={height || '24px'}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path
          fill={color}
          d="M5.868 2.75L8 10h8l2.132-7.25a.4.4 0 0 1 .765-.01l3.495 10.924a.5.5 0 0 1-.173.55L12 22 1.78 14.214a.5.5 0 0 1-.172-.55L5.103 2.74a.4.4 0 0 1 .765.009z"
        />
      </g>
    </svg>
  )
}
