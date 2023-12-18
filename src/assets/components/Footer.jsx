import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray p-4 border-t-[1px] border-light-gray">
        <div className="text-lg font-medium flex items-center gap-1 justify-center">
          <p>made by</p>

          <a
            className="underline"
            href="https://www.instagram.com/samsulanmm/"
            target="_blank"
          >
            samsulanam
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
