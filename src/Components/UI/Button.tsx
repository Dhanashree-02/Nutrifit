type Props = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({ children, className = "", onClick }: Props) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-primary transition hover:bg-[#158ace] px-8 py-1 shadow-lg rounded-3xl text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;