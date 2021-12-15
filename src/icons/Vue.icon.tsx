import { ISVGProps } from '../interfaces/svg-props.interface'

export const VueIcon = ({
  width,
  height,
  color = 'white',
}: ISVGProps): JSX.Element => {
  return (
    <svg
      width={width || '24px'}
      height={height || '24px'}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={color}
        d="M24.306 4.019h-4.806l-3.5 5.537-3-5.537h-11l14 23.981 14-23.981zM5.481 6.019h3.363l7.156 12.387 7.15-12.387h3.363l-10.512 18.012z"
      />
    </svg>
  )
}
