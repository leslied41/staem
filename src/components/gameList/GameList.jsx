import React, { useState, useRef, useCallback } from "react";
import { SquanresIcon } from "../icons";
import { useData } from "../../hooks";
import { useGlobalContext } from "../globalContext";
import ClipLoader from "react-spinners/ClipLoader";
import cn from "clsx";

const GameList = ({ className }) => {
  const [page, setPage] = useState(1);
  const { sortTerm, searchTerm } = useGlobalContext();
  const { data, error, isLoading } = useData(page, sortTerm, searchTerm);
  const observer = useRef();

  const lastBookElementRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <>
      <div className={cn(className, "flex flex-col gap-5")}>
        {data?.body?.map((game, i) => {
          const { id, link, image, price, title, genre, tags } = game;
          const isLastElement = data.body.length === i + 1;
          return (
            <section
              ref={isLastElement ? lastBookElementRef : null}
              key={id}
              className="grid grid-cols-1 grid-rows-5 md:grid-rows-1 md:grid-cols-12 gap-5 bg-[#17202D] rounded-[30px] overflow-hidden"
            >
              <div className="col-span-1 row-span-3 md:row-span-1 md:col-span-5">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="col-span-1 row-span-3 md:row-span-1 md:col-span-7 flex flex-col gap-4 md:gap-2 px-5 py-5 md:pt-12 md:pb-9 md:px-8">
                <div className="flex justify-between">
                  <div>
                    <h2 className="text-lx text-white capitalize">{title}</h2>
                    <p className="text-base text-white opacity-50 mt-3">
                      {genre}
                    </p>
                    <div className="h-[10px] w-[127px] rounded-[20px] bg-[#214B6B] mt-6"></div>
                  </div>
                  <SquanresIcon className="hidden md:block" />
                </div>
                <div className="flex justify-between md:justify-end">
                  <SquanresIcon className="md:hidden" />
                  <p className="text-xxl text-white">{price}</p>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {isLoading && (
        <div className="flex justify-center mt-5">
          <ClipLoader />
        </div>
      )}
    </>
  );
};

export default GameList;
