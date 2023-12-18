import React from "react";
import { Link } from "react-router-dom";

const Faq2 = () => {
  return (
    <>
      <div className="faq-2">
        <div className="card mt-10 rounded-xl p-7 border-[1px] border-solid border-light-gray">
          <div className="faq-item">
            <h3 className="text-lg font-semibold pb-5">
              What documents do I need to sell?
            </h3>

            <p className="text-sm font-medium text-[#999] pb-5">
              Find out about the necessary documentation for listing your
              property with us.
            </p>

            <Link
              to="/onprogress"
              className="text-sm font-medium text-center inline-block w-full py-4 rounded-lg border-[1px] border-solid border-light-gray"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq2;
