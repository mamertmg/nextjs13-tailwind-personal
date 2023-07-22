"use client"

import { Fragment, useContext, useEffect } from "react";
import dynamic from "next/dynamic";
import { Context } from "../context/Context";
import '../styles/global.css'

import Cursor from "./components/Cursor";
import Mobile from "./components/Mobile";
import Sidebar from "./components/Sidebar";

import ImageView from "./components/popup/ImageView";
import MediaPopup from "./components/popup/MediaPopup";
import NewsModal from "./components/popup/NewsModal";
import ServiceModal from "./components/popup/ServiceModal";
import DetailsModal from "./components/popup/DetailsModal";

import { utils } from "../utils/utils";

const Portfolio = dynamic(() => import("../app/components/Portfolio"), {ssr: false,});

export default function RootLayout({ children }) {

  const { modal, serviceModal, newsModal, portfolioDetailsModal } = useContext(Context);

  useEffect(() => {
    utils.dataImage();
    utils.imageToSvg();
    utils.customCursor();
  }, []);

  return (
    <Fragment>
      <MediaPopup />
      <ImageView />
      {modal && serviceModal && <ServiceModal />}
      {modal && newsModal && <NewsModal />}
      {modal && portfolioDetailsModal && <DetailsModal />}
      <div className="tokyo_tm_all_wrap">
        <Mobile />
        <Sidebar />
        <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
          <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
            {children}
          </div>
        </div>
        <Cursor />
      </div>
  </Fragment>
)}
