import type { NextPage } from "next";
import Image from "next/image";
import ExampleDog from "../assets/example-dog.png";
import { Button } from "@mui/material";

const Home: NextPage = () => {
  return (
    <div
      style={{
        flexGrow: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20vh",
            paddingLeft: "15vw",
            paddingRight: 10,
          }}
        >
          <div style={{ marginBottom: 24 }}>
            <Image src={ExampleDog} alt="" height={300} />
          </div>
          <Button variant="contained" style={{ width: "100%" }}>
            View in xxx website
          </Button>
        </div>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "30vh",
          }}
        >
          <div style={{
            marginBottom: 20,
          }}>
            <span
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              {0.12345678}
            </span>
            <span
              style={{
                fontSize: 24,
              }}
            >
              {" "}
              ETH Received
            </span>
          </div>
          <div>
            <Button variant="contained">Open data collector extension</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
