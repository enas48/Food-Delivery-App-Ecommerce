import React from "react";

interface Props {
  title: string;
  children:
    | string
    | number
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}
const Helmet = (props: Props) => {

  document.title = "Food ordering app | " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
