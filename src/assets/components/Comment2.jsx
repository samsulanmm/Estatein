import React from "react";

const Comment2 = () => {
  return (
    <>
      <div className="comment-1">
        <div className="card mt-10 rounded-xl p-7 border-[1px] border-solid border-light-gray">
          <div className="comment-item">
            <div className="flex justify-start">
              <img src="./comment-star.svg" alt="" />
            </div>

            <h3 className="text-lg font-semibold pt-4">Trusted Advisors</h3>

            <p className="text-sm font-medium text-[#999] pb-5">
              The Estatein team guided us through the entire buying process.
              Their knowledge and commitment to our needs were impressive. Thank
              you for your support!
            </p>

            <div className="pp flex items-center gap-3">
              <img src="./comment-2.svg" alt="" />

              <p className="text-base font-medium">
                Mang Asep
                <br />
                <span className="text-sm font-medium text-[#999]">
                  Wakanda, Kebondalem
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment2;
