import React, { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";


import { createImageURL } from "../utils";
import Model from "./Model";

import PlayIcon from "@heroicons/react/24/solid/PlayCircleIcon";
import LikeIcon from "@heroicons/react/24/outline/HandThumbUpIcon";
import PlusIcon from "@heroicons/react/24/outline/PlusIcon";
import ChevronDownIcon from "@heroicons/react/24/outline/ChevronDownIcon";
import { fetchVideoInfo } from "../../common/api";

export default function MovieCard({ poster_path, title, id, uid}) {
  const CARD_WIDTH = 300;
  let movieCardRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [videoInfo, setVideoInfo] = useState(null);
  const [position, setPosition] = useState({});
  const [hidePoster, setHidePoster] = useState(false);

  

  const onClose = () => {
    setIsOpen(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  async function onMouseEnter() {
    let calculatedPosition = movieCardRef.current.getBoundingClientRect();

    let top = calculatedPosition.top ?? 0 - 100;
    let left = calculatedPosition.left ?? 0 - 100;

    let totalWidth = left + 300;

    if (totalWidth > document.body.clientWidth) {
      left = left - (totalWidth - document.body.clientWidth);
    }
   
    let totalHeight = top + 300;
    if (totalHeight > document.body.clientHeight) {
      top = top - (totalHeight - document.body.clientHeight);
    }

    setPosition({ top, left });
    
    setIsOpen(true);
    let videoInfo = await fetchVideoInfo(id);
    setVideoInfo(videoInfo);
  }

  useEffect(() => {
    movieCardRef?.current.addEventListener("mouseenter", onMouseEnter);

    () => movieCardRef?.current.removeEventListener("mouseenter", onMouseEnter);
  }, []);

  useEffect(() => {
    if (videoInfo?.key) {
      setTimeout(() => {
        setHidePoster(true);
      }, 800);
    }
    if (!isOpen) {
      setHidePoster(false);
    }
  }, [videoInfo,isOpen]);

  return (
    <>
      <section ref={movieCardRef} key={uid}  className=" flex-none ">
        <img
          loading="lazy"
          className="h-[170px] w-[200px]  rounded-xl pt-2 pb-2 pr-2"
          src={createImageURL(poster_path)}
          alt={title}
        />
      </section>
      <Model
        isOpen={isOpen}
        onClose={onClose}
        title={""}
        closeModal={closeModal}
        position={position}
      >
        <section className=" transform-[height] duration-700 ease-in">
          <img
            src={createImageURL(poster_path)}
            alt={title}
            className={`${
              hidePoster ? "invisible h-0" : "visible  h-[250]"
            } w-[300]`}
          />

          <YouTube
            className={`${!hidePoster ? "invisible h-0" : "visible h-[300]"} w-[300]`}
            opts={{
              width: "300",
              height: "300",
              playerVars: {
                autoplay: 1,
                playsinline: 1,
                controls: 0,
              },
            }}
            videoId={videoInfo?.key}
          />

          <section className="flex items-center justify-between p-3">
            <ul
              className="flex items-center justify-evenly gap-4
          "
            >
              <li className="h-10 w-10 overflow-hidden  ">
                <button className="h-full w-full ">
                  <PlayIcon />
                </button>
              </li>
              <li className="h-10 w-10 overflow-hidden rounded-full border-2 border-gray-400 p-2 hover:border-white">
                <button className="h-full w-full">
                  <LikeIcon />
                </button>
              </li>
              <li className="h-10 w-10 overflow-hidden rounded-full border-2 border-gray-400 p-2 hover:border-white">
                <button className="h-full w-full ">
                  <PlusIcon />
                </button>
              </li>
            </ul>
            <ul>
              <li className="h-10 w-10 overflow-hidden rounded-full border-2 border-gray-400 p-2 hover:border-white  ">
                <button className="h-full w-full ">
                  <ChevronDownIcon />
                </button>
              </li>
            </ul>
          </section>
        </section>
      </Model>
    </>
  );
}
