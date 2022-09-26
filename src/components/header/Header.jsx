import { InstalIcon } from "../icons";
import Carousel from "../carousel";
const Header = () => {
  return (
    <header>
      <div className="px-6 md:px-[52px] pt-[46px] flex justify-between">
        <p className="uppercase text-xl text-white font-bold">staem</p>
        <button
          aria-label="install"
          className="flex gap-4 w-[153px] h-10 justify-center items-center bg-[#214B6B] rounded-[30px]"
        >
          <InstalIcon />
          <span className="capitalize text-tiny text-white">install</span>
        </button>
      </div>
      <nav className="mt-5">
        <Carousel />
      </nav>
    </header>
  );
};

export default Header;
