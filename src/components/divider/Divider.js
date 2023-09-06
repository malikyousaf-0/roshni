import React from "react";

export default function Divider(props) {
  return (
    <>
      <div className="container divider mt-5">
        <div className="dividerText text-center mt-5">
          <div className="dividerHeading">{props.head}</div>
          <div className="dividerPara">{props.para}</div>
        </div>
      </div>
    </>
  );
}
