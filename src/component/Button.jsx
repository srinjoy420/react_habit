const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='bg-violet-600 hover:bg-violet-500 transition-colors rounded px-2 py-2 disabled:opacity-30 disabled:cursor-not-allowed'
    >
      {children}
    </button>
  )
}

export default Button