import { Link } from "react-router-dom";

const LinkItem = ({ children, to }) => (
    <li className="mt-[0.625rem] text-[rgba(255,255,255,0.75)]">
        <Link
            target={0}
            to={to}
        >
            {children}
        </Link>
    </li>
);

const FooterLink = () => {
    return (
        <div className="ml-[1.8375rem]">
            <h3 className="font-sans text-lg text-brand">Navigasi</h3>
            <ul className="">
                <LinkItem to={"/"}>Beranda</LinkItem>
                <LinkItem to={"/"}>Tentang Kami</LinkItem>
                <LinkItem to={"/"}>Kegiatan Kami</LinkItem>
                <LinkItem to={"/"}>Visi & Misi Kami</LinkItem>
                <LinkItem to={"/"}>Pencapaian Kami</LinkItem>
            </ul>
            <h3 className="mt-[1.8375rem] font-sans text-lg text-brand">
                Kerja Sama
            </h3>
            <ul>
                <LinkItem to={"/"}>Partnership</LinkItem>
                <LinkItem to={"/"}>Rumah Baca Dikata</LinkItem>
                <LinkItem to={"/"}>UMKM Gemuya</LinkItem>
                <LinkItem to={"/"}>Official Team Dikata</LinkItem>
            </ul>
        </div>
    );
};

export default FooterLink;
