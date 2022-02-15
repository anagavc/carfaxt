import { FacebookRounded } from "@mui/icons-material";

const ReviewItem = (props) => {
  return (
    <div
      className="flex flex-col w-auto h-4/5 my-20 shadow-lg rounded-lg justify-around mt-6 p-8 space-y-4"
      key={props.id}
    >
      <h6 className="font-heading font-bold text-sm text-blue">
        {props.caption}
      </h6>
      <p className="font-body text-sm text-gray text-justify">"{props.text}"</p>
      <div className="flex justify-between items-center">
        <div className="flex content-center space-x-4 items-center">
          <div className="rounded-lg rounded w-1/5 h-full shadow-sm mt-4">
            <img src={props.image} alt="the reviewer" className="w-20 h-full" />
          </div>

          <div className="flex flex-col">
            <h6 className="font-heading font-bold text-xs text-blue">
              {props.name}
            </h6>
            <p className="font-body text-xs text-gray text-justify">
              {props.occupation}
            </p>
          </div>
        </div>

        <FacebookRounded className="fill-current text-blue" />
      </div>
    </div>
  );
};

export default ReviewItem;
