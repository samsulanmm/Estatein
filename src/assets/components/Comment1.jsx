import React from "react";

const Comment1 = () => {
  return (
    <>
      <div className="comment-1">
        <div className="card mt-10 rounded-xl p-7 border-[1px] border-solid border-light-gray">
          <div className="comment-item">
            <div className="flex justify-start">
              <img src="./comment-star.svg" alt="" />
            </div>

            <h3 className="text-lg font-semibold pt-4">Exceptional Service!</h3>

            <p className="text-sm font-medium text-[#999] pb-5">
              Our experience with Estatein was outstanding. Their team's
              dedication and professionalism made finding our dream home a
              breeze. Highly recommended!
            </p>

            <div className="pp flex items-center gap-3">
              <img src="./comment-1.svg" alt="" />

              <p className="text-base font-medium">
                Mang Udin
                <br />
                <span className="text-sm font-medium text-[#999]">
                  Wakanda, Dukuhwaluh
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment1;
