import React from "react";

const Card = () => {
  return (
    <>
      <div className="card-1">

        <div id="card-1" className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 dark:text-white pb-4">About Us</h1>
              <p className="font-normal text-base leading-6 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div className="w-full lg:w-8/12">
              <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 dark:text-white pb-4">Our Story</h1>
              <p className="font-normal text-base leading-6 dark:text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png" />
                  <img className="md:hidden block" src="https://i.ibb.co/zHjXqg4/Rectangle-118.png" />
                  <p className="font-medium text-xl leading-5 dark:text-white mt-4">Alexa</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/fGmxhVy/Rectangle-119.png" />
                  <img className="md:hidden block" src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png" />
                  <p className="font-medium text-xl leading-5 dark:text-white mt-4">Olivia</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png" />
                  <img className="md:hidden block" src="https://i.ibb.co/C5MMBcs/Rectangle-120.png" />
                  <p className="font-medium text-xl leading-5 dark:text-blue-800 mt-4">Liam</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png" />
                  <img className="md:hidden block" src="https://i.ibb.co/ThZBWxH/Rectangle-121.png" />
                  <p className="font-medium text-xl leading-5 dark:text-white mt-4">Elijah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className=" card-2 flex justify-center items-center">
        <div className="text-black container grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          <SingleCard
            image="https://i.ibb.co/r2zns1m/image-01.jpg"
            CardTitle=" Creative Card Component designs graphic elements"
            titleHref="/#"
            btnHref="/#"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://i.ibb.co/0nbbWM9/image-02-1.jpg"
            CardTitle=" Creative Card Component designs graphic elements"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
          <SingleCard
            image="https://i.ibb.co/dL9fH7N/image-03-1.jpg"
            CardTitle=" Creative Card Component designs graphic elements"
            CardDescription=" Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit."
            Button="View Details"
          />
        </div>
      </div>

    </>
  );
};

export default Card;

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <>
      {/*  */}
      <div className="overflow-hidden bg-white rounded-lg ">
        <img src={image} alt="" className="w-full" />
        <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
          <h3>
            <a
              href={titleHref ? titleHref : "/#"}
              className="mb-4 block text-xl font-semibold text-dark hover:text-primary sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
            >
              {CardTitle}
            </a>
          </h3>
          <p className=" input text-base leading-relaxed mb-7 text-body-color">
            {CardDescription}
          </p>

          {Button && (
            <a
              href={btnHref ? btnHref : "#"}
              className="inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white"
            >
              {Button}
            </a>
          )}
        </div>
      </div>
      {/*  */}
    </>
  );
};

