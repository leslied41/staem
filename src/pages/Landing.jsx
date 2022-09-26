import GameList from "../components/gameList";
import OperateButtons from "../components/operateButtons";
import s from "./Landing.module.css";
const Landing = () => {
  return (
    <div className="mt-[74px] md:mt-[125px]">
      <div className="flex gap-4 items-center">
        <div className="bg-[#214B6B] h-[10px] w-3 sm:w-[50px] rounded-[20px]"></div>
        <h1 className="text-lx sm:text-l font-bold text-white capitalize">
          new & trending
        </h1>
        <div className="bg-[#214B6B] h-[10px] w-[127px] rounded-[20px]"></div>
      </div>
      <OperateButtons className="mx-6 md:mx-[74px] mt-7 md:mt-[35px]" />
      <GameList className="mt-5 mx-6 md:mx-[74px]" />
    </div>
  );
};

export default Landing;
