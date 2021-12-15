import { CSSProperties } from 'react'

type TooltipProps = {
  label: string
}

const styles: CSSProperties = {
  backgroundColor: '#10002B',
}

export const Tooltip = ({ label }: TooltipProps): JSX.Element => {
  return (
    <div
      style={styles}
      className="tooltip relative rounded-sm py-2 px-6 text-white font-normal w-max"
    >
      {label}
    </div>
  )
}
