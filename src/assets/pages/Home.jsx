import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import CardDesktop from "../components/CardDesktop";
import Comment from "../components/Comment";
import CommentDesktop from "../components/CommentDesktop";
import Faq from "../components/Faq";
import FaqDesktop from "../components/FaqDesktop";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />

      <section className="px-4 md:px-0">
        <div className="hero md:w-[90%] md:mx-auto md:pt-12">
          <div className="flex justify-center rounded-3xl">
            <img
              src={"./hero-img.png"}
              alt="hero-img"
              className="pt-10 pb-14 md:hidden"
            />

            <img
              src="./hero-img.svg"
              alt="hero-img"
              className="pt-10 pb-14 hidden md:block absolute right-0 top-[100px] h-[600px]"
            />
          </div>

          <h2 className="text-3xl font-semibold pb-4 md:text-[68px] md:leading-[72px] md:w-[53%]">
            Discover Your Dream Property with Estatein
          </h2>

          <p className="text-sm font-medium pb-10 md:w-[40%]">
            Your journey to finding the perfect property begins here. Explore
            our listings to find the home that matches your dreams.
          </p>

          <Link
            to="/onprogress"
            className="block text-center text-sm font-medium py-4 border-[2px] border-solid border-light-gray rounded-lg mb-4 md:inline-block px-6 md:py-4 md:text-lg"
          >
            Learn More
          </Link>

          <Link
            to="/onprogress"
            className="block bg-purple text-center text-sm font-medium py-4 rounded-lg md:inline-block px-6 md:py-4 md:text-lg md:ml-5"
          >
            Browse Properties
          </Link>

          <div className="md:hidden">
            <div className="flex justify-between items-center gap-3 mt-10">
              <div className="p-4 bg-gray rounded-lg border-[2px] border-solid border-light-gray w-full text-center">
                <h3 className="text-2xl font-bold">200+</h3>
                <p className="text-sm font-medium text-[#999]">
                  Happy Customers
                </p>
              </div>

              <div className="p-4 bg-gray rounded-lg border-[2px] border-solid border-light-gray w-full text-center">
                <h3 className="text-2xl font-bold">10k+</h3>
                <p className="text-sm font-medium text-[#999]">
                  Properties For Clients
                </p>
              </div>
            </div>

            <div className="p-4 bg-gray rounded-lg border-[2px] border-solid border-light-gray w-full text-center mt-3">
              <h3 className="text-2xl font-bold">16+</h3>
              <p className="text-sm font-medium text-[#999]">
                Years of Experience
              </p>
            </div>
          </div>

          <div className="hidden md:flex">
            <div className="flex justify-between items-center gap-3 mt-6 w-[53%]">
              <div className="p-4 bg-gray rounded-lg border-[2px] border-solid border-light-gray w-full first-letter: text-center">
                <h3 className="text-2xl font-bold">200+</h3>
                <p className="text-sm font-medium text-[#999]">
                  Happy Customers
                </p>
              </div>

              <div className="p-4 bg-gray rounded-lg border-[2px] border-solid border-light-gray w-full text-center">
                <h3 className="text-2xl font-bold">10k+</h3>
                <p className="text-sm font-medium text-[#999]">
                  Properties For Clients
                </p>
              </div>

              <div className="p-4 bg-gray rounded-lg border-[2px] border-solid border-light-gray w-full text-center">
                <h3 className="text-2xl font-bold">16+</h3>
                <p className="text-sm font-medium text-[#999]">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 mt-10 mb-14 bg-dark-gray rounded-lg border-[2px] border-solid border-light-gray shadow-md shadow-light-gray md:w-[90%] md:mx-auto">
          <div className="flex justify-between gap-3">
            <div className="text-center bg-gray py-5 px-4 rounded-lg border-[2px] border-solid border-light-gray w-full">
              <div className="relative inline-block">
                <img src="./exp-icon-1.svg" alt="" />

                <img
                  src="./arrow.svg"
                  alt=""
                  className="absolute top-0 right-[-35px]"
                />
              </div>

              <h2 className="text-sm font-semibold">Find Your Dream Home</h2>
            </div>

            <div className="text-center bg-gray py-5 px-4 rounded-lg border-[2px] border-solid border-light-gray w-full">
              <div className="relative inline-block">
                <img src="./exp-icon-2.svg" alt="" />

                <img
                  src="./arrow.svg"
                  alt=""
                  className="absolute top-0 right-[-35px]"
                />
              </div>

              <h2 className="text-sm font-semibold">Unlock Property Value</h2>
            </div>
          </div>

          <div className="flex justify-between gap-3 mt-3">
            <div className="text-center bg-gray py-5 px-4 rounded-lg border-[2px] border-solid border-light-gray w-full">
              <div className="relative inline-block">
                <img src="./exp-icon-3.svg" alt="" />

                <img
                  src="./arrow.svg"
                  alt=""
                  className="absolute top-0 right-[-35px]"
                />
              </div>

              <h2 className="text-sm font-semibold">Property Management</h2>
            </div>

            <div className="text-center bg-gray py-5 px-4 rounded-lg border-[2px] border-solid border-light-gray w-full">
              <div className="relative inline-block">
                <img src="./exp-icon-4.svg" alt="" />

                <img
                  src="./arrow.svg"
                  alt=""
                  className="absolute top-0 right-[-35px]"
                />
              </div>

              <h2 className="text-sm font-semibold">Get Smart Investments</h2>
            </div>
          </div>
        </div>

        <div className="featured md:w-[90%] md:mx-auto">
          <img src="./dark-stars-icon.svg" alt="" />

          <h2 className="text-3xl font-semibold pb-1 md:text-[48px] md:pb-2 md:pt-2">
            Featured Properties
          </h2>

          <p className="text-sm font-medium text-[#999] md:text-lg">
            Explore our handpicked selection of featured properties. Each
            listing offers a glimpse into exceptional homes and investments
            available through Estatein.
          </p>
        </div>

        <div className="flex md:hidden">
          <Card />
        </div>

        <div className="hidden md:flex w-[90%] mx-auto">
          <CardDesktop />
        </div>

        <div className="client-said pt-10 md:w-[90%] md:mx-auto">
          <img src="./dark-stars-icon.svg" alt="" />

          <h2 className="text-3xl font-semibold pb-1 md:text-[48px] md:pb-2 md:pt-2">
            What Our Clients Say
          </h2>

          <p className="text-sm font-medium text-[#999] md:text-lg">
            Read the success stories and heartfelt testimonials from our valued
            clients. Discover why they chose Estatein for their real estate
            needs.
          </p>
        </div>

        <div className="flex md:hidden">
          <Comment />
        </div>

        <div className="hidden md:flex w-[90%] mx-auto">
          <CommentDesktop />
        </div>

        <div className="faq pt-10 w-[90%] mx-auto">
          <img src="./dark-stars-icon.svg" alt="" />

          <h2 className="text-3xl font-semibold pb-1 md:text-[48px] md:py-2">
            Frequently Asked Questions
          </h2>

          <p className="text-sm font-medium text-[#999] md:text-lg">
            Find answers to common questions about Estatein's services, property
            listings, and the real estate process. We're here to provide clarity
            and assist you every step of the way.
          </p>
        </div>

        <div className="flex md:hidden">
          <Faq />
        </div>

        <div className="hidden md:flex w-[90%] mx-auto">
          <FaqDesktop />
        </div>
      </section>
      <div className="journey bg-journey-img bg-cover py-12 mt-12">
        <div className="w-[90%] mx-auto md:flex justify-between items-center gap-[100px]">
          <div>
            <h3 className="text-3xl font-semibold pb-2 md:text-[48px] md:pb-5">
              Start Your Real Estate Journey Today
            </h3>

            <p className="text-sm font-medium text-[#999] pb-7 md:text-lg">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>

          <Link
            to="/onprogress"
            className="text-sm font-medium w-[60%] text-center py-4 bg-purple rounded-lg inline-block md:text-lg"
          >
            Explore Properties
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
