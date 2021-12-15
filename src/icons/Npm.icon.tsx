import { ISVGProps } from '../interfaces/svg-props.interface'

export const NpmIcon = ({
  width,
  height,
  color = 'white',
}: ISVGProps): JSX.Element => {
  return (
    <svg
      width={width || '24px'}
      height={height || '24px'}
      viewBox="-2 -8 24 24"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMin"
    >
      <path
        fill={color}
        d="M0 0h20v6.857H10V8H5.556V6.857H0V0zm1.111 5.714h2.222V2.286h1.111v3.428h1.112V1.143H1.11v4.571zm5.556-4.571v5.714h2.222V5.714h2.222V1.143H6.667zm5.555 0v4.571h2.222V2.286h1.112v3.428h1.11V2.286h1.112v3.428h1.11V1.143h-6.666z"
      />
      <path d="M10 4.7H9V2.2h1z" />
    </svg>
  )
}
