import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Logo from "../assets/cookrypt.svg";
import Image from "next/image";

const TopBanner = () => {
  return (
    <div
      className="banner"
      style={{
        display: "flex",
        alignItems: "center",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
        paddingBottom: 12,
        marginBottom: 36,
      }}
    >
      <div
        style={{
          marginRight: 36,
        }}
      >
        <Image src={Logo} height={36} alt="" />
      </div>
      <div>
        <nav>
          <Link className="link" style={{ marginRight: 16 }} href="/">
            Customer
          </Link>
          <Link className="link" href="/business">
            Business
          </Link>
        </nav>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <ConnectButton />
      </div>
    </div>
  );
};

export default TopBanner;
