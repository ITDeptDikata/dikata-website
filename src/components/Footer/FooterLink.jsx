import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ children }) => (
    <li className="mt-[0.625rem] text-[rgba(255,255,255,0.75)]">{children}</li>
);

const FooterLink = () => {
    return (
        <div className="ml-[1.8375rem]">
            <h3 className="font-sans text-lg text-brand">Navigasi</h3>
            <ul className="">
                <LinkItem>Beranda</LinkItem>
                <LinkItem>Tentang Kami</LinkItem>
                <LinkItem>Kegiatan Kami</LinkItem>
                <LinkItem>Visi & Misi Kami</LinkItem>
                <LinkItem>Pencapaian Kami</LinkItem>
            </ul>
            <h3 className="mt-[1.8375rem] font-sans text-lg text-brand">
                Kerja Sama
            </h3>
            <ul>
                <LinkItem>Partnership</LinkItem>
                <LinkItem>Rumah Baca Dikata</LinkItem>
                <LinkItem>UMKM Gemuya</LinkItem>
                <LinkItem>Official Team Dikata</LinkItem>
            </ul>
        </div>
    );
};

export default FooterLink;
