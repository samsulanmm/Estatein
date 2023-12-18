import React from "react";
import { Link } from "react-router-dom";

const Faq3 = () => {
  return (
    <>
      <div className="faq-3">
        <div className="card mt-10 rounded-xl p-7 border-[1px] border-solid border-light-gray">
          <div className="faq-item">
            <h3 className="text-lg font-semibold pb-5">
              How can I contact an Estatein agent?
            </h3>

            <p className="text-sm font-medium text-[#999] pb-5">
              Discover the different ways you can get in touch with our
              experienced agents.
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

export default Faq3;
