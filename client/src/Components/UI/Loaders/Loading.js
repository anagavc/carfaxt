import GridLoader from "react-spinners/GridLoader";
const Loading = (props) => {
  let loading = true;
  let color = "#2C3F6C";

  return (
    <div className="bg-blue-light h-screen  flex justify-center align-items-center py-80">
      <GridLoader color={color} loading={loading} size={30} />
    </div>
  );
};

export default Loading;
