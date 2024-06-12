import React from "react";
import {
  IconDeviceLandlinePhone,
  IconMail,
  IconMapPin,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import FooterCardLayout from "./FooterCardLayout";
import ContentCardWrapper from "../ContentCardWrapper";
import Image from "next/image";

export default function Footer() {
  return (
    <React.Fragment>
      <ContentCardWrapper>
        <FooterCardLayout>
          <div className="order-last lg:order-1 relative w-full p-2 flex flex-col items-center justify-center border-2 border-gray-600 rounded-xl gap-2">
            <h2 className="text-blue-600">CONNECT WITH US</h2>
            <section className="flex flex-row items-center gap-1">
              <IconDeviceLandlinePhone size={16} stroke={1} color="#ca8a04" />
              <p className="">+1 470-788-8255</p>
            </section>
            <section className="flex flex-row items-center gap-1">
              <IconMail size={16} stroke={1} color="#ca8a04" />
              <p className="">email@42barandgrill.com</p>
            </section>
          </div>
          <div className="relative lg:order-2 w-full p-2 flex flex-col items-center justify-center border-2 border-gray-600 rounded-xl gap-2">
            <Image
              className="absolute top-0 -translate-y-10 w-[72px] h-[72px] bg-black"
              src="/images/logo-square.png"
              width={72}
              height={72}
              alt="logo"
            />
            <h2 className="flex flex-col">
              <span className="text-blue-600">
                DEEP{" "}
                <span className="text-white">
                  NET <span className="text-slate-600">SOFT</span>
                </span>
              </span>
            </h2>
            <div className="flex flex-row gap-4">
              <IconBrandFacebook height={12} width={12} />
              <IconBrandTwitter height={12} width={12} />
              <IconBrandYoutube height={12} width={12} />
              <IconBrandInstagram height={12} width={12} />
            </div>
          </div>
          <div className="relative lg:order-3 w-full p-2 flex flex-col items-center justify-center border-2 border-gray-600 rounded-xl gap-2">
            <h2 className="text-blue-600">FIND US</h2>
            <section className="flex flex-row items-center gap-1">
              <IconMapPin size={16} stroke={1} color="#ca8a04" />
              <p className="">327 Memorial Dr SE, Atlanta. </p>
              <p className="">CA 30312, USA</p>
            </section>
          </div>
        </FooterCardLayout>
      </ContentCardWrapper>
      <div className="p-4 flex flex-cols justify-between bg-neutral-900">
        <section className="text-xs">
          2024 42 Bar & Grill. Developed by Deepnetsoft Solutions
        </section>
        <section className="flex flex-row justify-between gap-4">
          <p className="text-xs">Terms & Conditions</p>
          <p className="text-xs">Privacy Policy</p>
        </section>
      </div>
    </React.Fragment>
  );
}
