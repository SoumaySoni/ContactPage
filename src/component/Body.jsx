import { CALL_LOGO, SERVICE_LOGO, VIA_CHAT_LOGO } from "./Constant";

const Body = () => {
  const callPage = () => {
    console.log("btn clicked")
    window.confirm("Do you want to call on +91 8299421734")
    }
  return (
    <div className="">
      <h1 className="w-[315px] h-[72px] mt-[80px] ml-[188px] font-extrabold text-[48px] leading-[72px]">
        CONTACT US
      </h1>
      <p className="ml-[188px] mt-[11px] w-[975px] h-[72px] font-[600] text-[16px] leading-[24px]">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
        WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
        REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
        EMAIL, OR SOCIAL MEDIA.{" "}
      </p>
      <div className="ml-[188px] mt-[40px] ">
        <div className="flex">
          <button className="bg-black  text-white mr-[25px] rounded-md p-[10px] w-[212px] flex justify-center hover:bg-gray-500 active:text-black">
            <img
              className="h-[24px] mx-2 rounded-sm "
              src={VIA_CHAT_LOGO}
              alt="via-chat-logo"
            ></img>
            Via Support Chat
          </button>
          <button
            className="bg-black  text-white rounded-md w-[212px] p-[10px] flex justify-center hover:bg-gray-500 active:text-black"
            onClick={callPage}
          >
            <img
              className="h-[24px] mx-2 rounded-md"
              src={CALL_LOGO}
              alt="call-logo"
            ></img>
            Via Call
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <button className="bg-white text-black mr-[25px] w-[450px] border-2 border-black rounded-md p-[10px] mt-4 hover:bg-slate-300 active:text-red-600">
              Via Email Form
            </button>

            <input
              className="border-2 border-black rounded-md p-[10px] w-[450px] mt-4 hover:bg-slate-300"
              type="text"
              placeholder="Name"
            ></input>
            <input
              className="border-2 border-black rounded-md p-[10px] w-[450px] mt-4 hover:bg-slate-300"
              type="text"
              placeholder="Email"
            ></input>
            <input
              className="border-2 border-black rounded-md p-[10px] w-[450px]  mt-4 hover:bg-slate-300"
              type="text"
              placeholder="Description"
            ></input>
            <button className="p-[10px] w-[250px] bg-black  text-white rounded-md mt-4 hover:bg-gray-500 active:text-black">
              Submit
            </button>
          </div>
          <img
            className="w-[350px] h-[300px]"
            src={SERVICE_LOGO}
            alt="service-logo"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Body;
