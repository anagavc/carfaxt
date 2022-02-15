import React from "react";
import SecondaryButton from "../Buttons/SecondaryButton";
import { HeadingFour } from "../FontStyles/Headings";
const Card = (props) => {
  return (
    <div className="bg-white my-40 rounded-md w-5/6 lg:w-3/5  flex mx-auto space-y-6 py-20 px-8  h-4/5 filter drop-shadow flex-col justify-between h-4/5 filter drop-shadow-lg">
      <HeadingFour color="text-blue" align="text-center">
        {props.message}
      </HeadingFour>
      <SecondaryButton
        onClick={props.onClick}
        width="w-2/5"
        margin="mx-auto mt-6"
      >
        {props.caption}
      </SecondaryButton>
    </div>
  );
};

export default Card;
