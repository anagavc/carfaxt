import { FadeUpAnimation } from "../UI/Animations/Animations";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import GetStartedHolder from "../UI/Placeholders/GetStartedHolder";
import { HeadingFour } from "../UI/FontStyles/Headings";
import { HeadingParagraph } from "../UI/FontStyles/Headings";
const GetStarted = (props) => {
  const actions = [
    {
      id: 1,
      icon: <MyLocationIcon />,
      heading: "Select a location",
      caption: "Select a location to get started.",
    },
    {
      id: 2,
      icon: <CalendarTodayIcon />,
      heading: "Select the pickup date",
      caption: "Choose the date that you will need the ride.",
    },
    {
      id: 3,
      icon: <AssignmentTurnedInIcon />,
      heading: "Book your ride",
      caption: "Payment to fully book your ride.",
    },
  ];
  return (
    <div className="flex flex-col w-full h-full mx-auto items-center content-center my-40 mx-auto">
      {/* title */}
      <FadeUpAnimation>
        <div className="flex flex-col justify-around items-center space-y-4">
          <HeadingFour color="text-gray" case="uppercase">
            Get started
          </HeadingFour>
          <HeadingParagraph> Use carfaxt in three easy steps</HeadingParagraph>
        </div>
      </FadeUpAnimation>

      {/* actions */}
      <div className="flex flex-col justify-around mt-6 lg:flex-row">
        {actions.map((action) => {
          return (
            <GetStartedHolder
              key={action.id}
              id={action.id}
              icon={action.icon}
              heading={action.heading}
              caption={action.caption}
            />
          );
        })}
      </div>
    </div>
  );
};
export default GetStarted;
