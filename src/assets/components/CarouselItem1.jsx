import React from "react";
import { Link } from "react-router-dom";

const CarouselItem1 = () => {
  return (
    <>
      <div className="card-1">
        <div className="card mt-10 rounded-xl p-4 border-[1px] border-solid border-light-gray">
          <div className="card-item">
            <div className="flex justify-center">
              <img src="./carousel-img-1.svg" alt="" />
            </div>

            <h3 className="text-lg font-semibold pt-4">
              Rustic Retreat Cottage
            </h3>

            <p className="text-sm font-medium text-[#999] pb-5">
              An elegant 4-bedroom, 3-bathroom townhouse in a gated community...{" "}
              <span className="underline text-white">Read More</span>
            </p>

            <div className="features flex justify-between gap-2 pb-5">
              <div className="feature-1 inline-flex items-center gap-1 py-2 px-4 rounded-lg bg-gray">
                <img src="./bedroom-icon.svg" alt="" />
                <p className="text-sm font-medium">
                  4 <br />
                  Bedroom
                </p>
              </div>

              <div className="feature-2 inline-flex justify-center items-center gap-1 py-2 px-4 rounded-lg bg-gray">
                <img src="./bathroom-icon.svg" alt="" />
                <p className="text-sm font-medium">
                  3 <br />
                  Bathroom
                </p>
              </div>

              <div className="feature-3 inline-flex justify-between items-center gap-1 py-2 px-4 rounded-lg bg-gray">
                <img src="./villa-icon.svg" alt="" />
                <p className="text-sm font-medium">Villa</p>
              </div>
            </div>

            <div className="price flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-[#999]">Price</p>
                <p className="text-lg font-bold">$550.000</p>
              </div>

              <Link
                to="/onprogress"
                className="text-sm font-medium py-4 px-5 rounded-lg bg-purple"
              >
                View Property Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselItem1;
