const FeaturedButton = ({ category, filter, children }) => {
  return (
    <button
      onClick={() => filter(category)}
      className="text-blue shadow bg-white rounded-sm px-10 py-2 font-medium text-sm font-heading hover:bg-blue hover:text-white transition duration-300"
    >
      {children}
    </button>
  );
};

export default FeaturedButton;
