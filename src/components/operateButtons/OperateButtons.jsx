import { useState } from "react";
import { ArrowIcon } from "../icons";
import cn from "clsx";
import { debounce } from "lodash";
import { useGlobalContext } from "../globalContext";
import s from "./OperateButtons.module.css";

const sortTermList = ["price", "title"];

const OperateButtons = ({ className }) => {
  const { sortTerm, setSortTerm, setSearchTerm } = useGlobalContext();
  const [openDropDown, setOpenDropDown] = useState(false);

  const debounceFn = debounce((e) => setSearchTerm(e.target.value), 500);

  return (
    <div
      className={cn(
        className,
        "flex flex-col md:flex-row justify-between gap-y-4"
      )}
    >
      <div>
        <input
          onChange={debounceFn}
          type="text"
          aria-label="search"
          placeholder="Search"
          className="bg-[#1A3A53] rounded-[30px] w-[273px] h-10 text-tiny placeholder:pl-5 text-white pl-5"
        />
      </div>
      <div className="flex gap-5 items-center">
        <p className="text-white text-tiny">Sort by:</p>
        <div
          className="bg-[#1A3A53] rounded-[30px] w-[273px] h-10 text-tiny flex justify-between items-center px-4 relative cursor-pointer"
          onClick={() => setOpenDropDown(!openDropDown)}
          role="select"
          aria-label="sort by"
        >
          <span className="text-white text-tiny capitalize">{sortTerm}</span>
          <ArrowIcon
            className={cn("transition", { ["rotate-180"]: openDropDown })}
          />
          <div
            className={cn(
              "transition-all absolute top-[calc(100%+10px)] left-0 px-4  w-full bg-[#1A3A53] text-white text-tiny rounded overflow-hidden",
              {
                ["max-h-40"]: openDropDown,
                ["max-h-0"]: !openDropDown,
              }
            )}
          >
            <ul className={s.list}>
              {sortTermList.map((t) => (
                <li
                  key={t}
                  className="capitalize"
                  onClick={(e) => {
                    setSortTerm(e.target.innerText.toLowerCase());
                  }}
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperateButtons;
