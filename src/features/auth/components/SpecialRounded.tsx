import { ModeToggle } from "@/components/modeToggler";

const SpecialRounded = () => {
  return (
    <>
      <section className=" w-full hidden xl:flex  pl-[4rem] h-[100%] rounded-lg  ">
        <div className=" flex flex-col justify-between w-full h-full ">
          <div className="flex items-center w-full h-[10%] ">
            <div className=" w-[87%] h-full bg-blue-600 rounded-tr-[35px] rounded-tl-[35px] "></div>
            <div className=" h-[40px] w-[50px]  mt-[4rem] bg-blue-600 ml-[-1rem]  "></div>

            <div className=" flex justify-end w-[13%] h-full rounded-bl-[35px] bg-white dark:bg-[#0a0a0a] ml-[-2.13rem] ">
              <ModeToggle />
            </div>
          </div>
          <div className=" text-white justify-between flex flex-col p-3 h-[90%] w-full rounded-b-[35px] rounded-tr-[35px] rounded-bl-[35px] rounded-tl-none bg-blue-600">
            <div className=" flex mt-[-3rem]  p-7  items-center w-full   ">
              <h1 className=" w-[80%]   text-6xl font-bold ">
                Lorem ipsum dolor sit amet . <br />
                &quot
              </h1>
            </div>

            <div className="flex text-2xl px-7 flex-col gap-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              </p>
            </div>

            <div className=" flex flex-col  h-[300px]  mb-[1rem]   mx-auto w-[95%] ">
              <div className="flex flex-col justify-between w-full h-full">
                <div className="flex items-center w-full h-[22%]">
                  <div className="w-[87%] h-full bg-white rounded-tr-[35px] rounded-tl-[35px] "></div>
                  <div className="h-[50px] w-[50px] mt-[3rem] bg-white ml-[-1rem] "></div>
                  <div className="flex justify-start items-center flex-col w-[13%] h-full  rounded-bl-[35px] bg-blue-600 ml-[-2.17rem] ">
                    <div className=" h-[70px] w-[70px] mt-[-1.8rem] flex  rounded-full  bg-white "></div>
                  </div>
                </div>
                <div className="flex flex-col p-3 h-[78%] w-full rounded-b-[35px] rounded-tr-[35px] rounded-bl-[35px] rounded-tl-none bg-white "></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialRounded;
