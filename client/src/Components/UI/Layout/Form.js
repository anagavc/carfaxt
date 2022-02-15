import classnames from "classnames";
import PrimaryButton from "../Buttons/PrimaryButton";
import { HeadingFour } from "../FontStyles/Headings";
import { AboutParagraph } from "../FontStyles/Paragraph";
import SecondaryButton from "../Buttons/SecondaryButton";
import InputCustom from "../Input/Input";
import { useHistory } from "react-router";
import FileBase from "react-file-base64";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FadeUpAnimation } from "../Animations/Animations";
const Form = (props) => {
  const history = useHistory();
  const backButtonHandler = () => {
    history.push(props.back);
  };
  const { loginFailed } = useSelector((state) => state.auth);

  const [failure, setFailure] = useState(loginFailed);
  useEffect(() => {
    setFailure(loginFailed);
  }, [loginFailed]);

  const mainBg = classnames(
    "flex w-5/6 bg-white flex-col mb-8 md:flex-row md:w-4/5 justify-between content-center mx-auto shadow-md h-full my-20 rounded-xl"
  );
  const largeSize = classnames(
    "py-14 px-8 w-full  md:py-12 space-y-12 md:flex flex-col md:w-4/5 hidden place-items-center",
    props.radiusLg,
    props.bgColor
  );
  const mobileSize = classnames(
    "py-14 px-4 w-full md:px-24 md:py-12 space-y-12 sm:flex flex-col md:w-4/5 md:hidden",
    props.radiusSm,
    props.bgColor
  );

  const fillable = classnames(
    "flex flex-col justify-items-center space-y-8 p-6 md:space-y-12 py-4 w-full md:p-24 md:py-12 md:w-4/5",
    props.order
  );

  return (
    <>
      <FadeUpAnimation className={mainBg}>
        <div className={largeSize}>
          <HeadingFour color={props.textColor}>{props.heading}</HeadingFour>

          <AboutParagraph color="text-white">
            <span className="font-bold">{props.boldp}</span>
            {props.smallp}
          </AboutParagraph>
          {props.image && (
            <img
              src={props.image}
              alt={props.title}
              className="w-3/5 self-center order-first md:order-last"
            />
          )}
          {props.info &&
            props.info.map((info) => {
              return (
                <div className="flex flex-col justify-around align-items-center h-full">
                  <span className="text-white text-center">{info.icon}</span>
                  <HeadingFour color="text-white" align="text-center">
                    {info.caption}
                  </HeadingFour>
                </div>
              );
            })}

          {props.carInfo && (
            <div className="flex flex-col ">
              <HeadingFour color="text-white" align="text-center">
                {props.carInfo.carName}
              </HeadingFour>
              <div className="flex flex-wrap justify-evenly">
                {props.carInfo.details.map((detail) => {
                  return (
                    <div className="flex flex-wrap w-2/5 my-6">
                      <span className="text-white">{detail.icon}</span>
                      <AboutParagraph color="text-white">
                        {detail.caption}
                      </AboutParagraph>
                    </div>
                  );
                })}
              </div>
              <img
                src={props.carInfo.carImage}
                alt={props.title}
                className="w-3/5 self-center order-first md:order-last"
              />
            </div>
          )}
        </div>
        <div className={mobileSize}>
          <AboutParagraph color="text-white">
            <span className="font-bold">{props.boldp}</span>
            {props.smallp}
          </AboutParagraph>
          <HeadingFour color={props.textColor}>{props.heading}</HeadingFour>
          {props.image && (
            <img
              src={props.image}
              alt={props.title}
              className="w-3/5 mx-8 self-center order-first"
            />
          )}

          {props.info &&
            props.info.map((info) => {
              return (
                <div className="flex flex-col justify-around align-items-center h-full">
                  <span className="text-white text-center">{info.icon}</span>
                  <HeadingFour color="text-white" align="text-center">
                    {info.caption}
                  </HeadingFour>
                </div>
              );
            })}
          {props.carInfo && (
            <div className="flex flex-col ">
              <HeadingFour color="text-white" align="text-center">
                {props.carInfo.carName}
              </HeadingFour>
              <div className="flex flex-col  place-items-center">
                {props.carInfo.details.map((detail) => {
                  return (
                    <div className="flex flex-wrap w-2/5 my-6">
                      <span className="text-white">{detail.icon}</span>
                      <AboutParagraph color="text-white">
                        {detail.caption}
                      </AboutParagraph>
                    </div>
                  );
                })}
              </div>
              <img
                src={props.carInfo.carImage}
                alt={props.title}
                className="w-3/5 self-center order-first md:order-last"
              />
            </div>
          )}
        </div>
        <div className={fillable}>
          <HeadingFour
            align="text-left"
            color="text-blue"
            className="self-center"
          >
            {props.title}
          </HeadingFour>

          <form className="space-y-8" onSubmit={props.onSubmit}>
            {failure && (
              <AboutParagraph color="text-red">
                The username or password you have entered is invalid
              </AboutParagraph>
            )}
            {props.details.map((detail) => {
              return (
                <InputCustom
                  label={detail.label}
                  placeholder={detail.placeholder}
                  id={detail.id}
                  type={detail.type}
                  name={detail.name}
                  value={detail.value}
                  maxLength={detail.maxLength}
                  onChange={detail.onChange}
                  failure={failure}
                />
              );
            })}
            {props.onDone && (
              <FileBase type="file" multiple={false} onDone={props.onDone} />
            )}

            <PrimaryButton width="w-full">{props.title}</PrimaryButton>
          </form>
          <AboutParagraph
            color="text-blue"
            align="text-center"
            size="text-sm"
            weight="font-normal"
          >
            {props.question}
            <span>&nbsp;</span>
            <NavLink to={{ pathname: props.path }} className="font-bold">
              {props.action}
            </NavLink>
          </AboutParagraph>
        </div>
      </FadeUpAnimation>
      <SecondaryButton
        width="w-4/5 md:w-2/5"
        margin="mx-auto mb-20"
        onClick={backButtonHandler}
      >
        Back
      </SecondaryButton>
    </>
  );
};

export default Form;
