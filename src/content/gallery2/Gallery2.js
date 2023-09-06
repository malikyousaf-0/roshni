import React from "react";
import p1 from "../../assets/1.jpg";
import p2 from "../../assets/2.jpg";
import p3 from "../../assets/3.jpg";
import p4 from "../../assets/4.jpg";
export default function Gallery2() {
  return (
    <>
      <div className="imggallery">
        <div
          style={{
            backgroundImage: `url(${p1})`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${p2})`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${p3})`,
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${p4})`,
          }}
        ></div>
        {/* <div
          style="
                background-image: url(https://img.freepik.com/free-psd/landing-page-template-language-learning-with-line-shapes_23-2149522797.jpg?size=626&ext=jpg&ga=GA1.1.1874599103.1672515936&semt=ais);
              "
        ></div>
        <div
          style="
                background-image: url(https://img.freepik.com/free-vector/flat-design-ui-ux-landing-page_52683-72187.jpg?size=626&ext=jpg&ga=GA1.1.1874599103.1672515936&semt=ais);
              "
        ></div>
        <div
          style="
                background-image: url(https://img.freepik.com/free-vector/design-team-cartoon-landing-page-with-designers_107791-11253.jpg?size=626&ext=jpg&ga=GA1.1.1874599103.1672515936&semt=ais);
              "
        ></div> */}
      </div>
    </>
  );
}
