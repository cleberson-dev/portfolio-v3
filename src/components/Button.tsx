type ButtonProps = { title: string } & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ title, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      {...props}
      className={`
				rounded bg-blue-500 text-white py-2 px-4 font-medium text-base 
				${props.className}
			`}
    >
      {title}
    </button>
  )
}
