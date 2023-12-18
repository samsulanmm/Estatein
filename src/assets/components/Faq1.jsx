import React from "react";
import { Link } from "react-router-dom";

const Faq1 = () => {
  return (
    <>
      <div className="faq-1">
        <div className="card mt-10 rounded-xl p-7 border-[1px] border-solid border-light-gray">
          <div className="faq-item">
            <h3 className="text-lg font-semibold pb-5">
              How do I search for properties?
            </h3>

            <p className="text-sm font-medium text-[#999] pb-5">
              Learn how to use our user-friendly search tools to find properties
              that match your criteria.
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

export default Faq1;
