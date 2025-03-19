const Button = ({
  className,
  type = "text",
  children = "Get Started",
  ...rest
}) => {
  return (
    <button className={`btn btn-primary ${className}`} type={type} {...rest}>
      {children}
    </button>
  );
};

export { Button };
