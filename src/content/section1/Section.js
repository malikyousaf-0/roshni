import img1 from "../../assets/section1.png";
import React from "react";
// style={{
//   backgroundImage: `url(${img1})`,
// }}
export default function Section() {
  return (
    <>
      <div className="container" id="vision">
        <div className="row my-5 sec1">
          <div
            className="col-md-5 sec1-img py-4 rounded"
            style={{
              // height: "20rem",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img src={img1} style={{ width: "100%" }} alt="" />
          </div>

          <div className="col-md-7 sec1-text py-4">
            <div style={{ width: "80%" }}>
              <h3>
                {" "}
                Roshni Welfare Organization's Vision for a Brighter Future in
                Pakistan
              </h3>
              <p>
                Roshni Welfare Organization will now work with full Potential
                with the help of Media Department, Education Department & Real
                Estate Department. Some other Departments will be added soon.
                Hope for the best for Future of Pakistan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
