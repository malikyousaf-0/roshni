import React from "react";
import Backimg from "../../assets/bg.jpg";
import logo from "../../assets/m.png";
export default function header() {
  const back = {};
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5 hero-text py-5">
            <img src={logo} style={{ width: "10rem" }} alt="" />
            <h1>Motive</h1>
            <h3 className="text-center">
              We give shelter with legal support to Women who are abused in our
              society.
            </h3>
            {/* <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At,
              facilis explicabo error harum est mollitia, provident tempora
              reiciendis suscipit corporis cumque officiis possimus quasi
              repellat autem pariatur, laborum quos cupiditate?
            </p> */}
          </div>
          <div
            className="col-md-7 headerBackground p-0"
            // style={{
            //   backgroundImage: `url(${Backimg})`,
            // }}
          >
            <img src={Backimg} style={{width:"100%" }} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
