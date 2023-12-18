import React from "react";

const Comment3 = () => {
  return (
    <>
      <div className="comment-1">
        <div className="card mt-10 rounded-xl p-7 border-[1px] border-solid border-light-gray">
          <div className="comment-item">
            <div className="flex justify-start">
              <img src="./comment-star.svg" alt="" />
            </div>

            <h3 className="text-lg font-semibold pt-4">
              Efficient and Reliable
            </h3>

            <p className="text-sm font-medium text-[#999] pb-5">
              Estatein provided us with top-notch service. They helped us sell
              our property quickly and at a great price. We couldn't be happier
              with the results, iam very enjoy this trip
            </p>

            <div className="pp flex items-center gap-3">
              <img
                className="w-[60px]"
                src="./comment-3.svg"
                alt=""
              />

              <p className="text-base font-medium">
                Mang Thanos
                <br />
                <span className="text-sm font-medium text-[#999]">
                  Wakanda, Pulaumusang
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment3;
