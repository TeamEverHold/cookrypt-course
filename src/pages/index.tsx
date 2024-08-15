import type { NextPage } from "next";
import Image from "next/image";
import ExampleDog from "../assets/example-dog.png";
import { Button } from "@mui/material";
import { useState } from "react";
import { BrowserHistory, getTags } from '../api/getTags';
import { RequestStatus } from '../api/status';

const Home: NextPage = () => {
  const [history, setHistory] = useState<BrowserHistory[]>([]);
  const [tags, setTags] = useState();
  const [tagStatus, setTagStatus] = useState<RequestStatus>("success");

  const getData = () => {
    setTagStatus("loading");
    const extensionID = "hnalnahjnkgjeboogihgpdgalmbkeemc";
    if (!chrome.runtime) {
      alert("Please install extension");
      console.log("Chrome runtime not found");
    } else {
      console.log("sending message");
      chrome.runtime.sendMessage(
        extensionID, {
          getHistory: true,
        },
        (response) => {
          //console.log(response);
          setHistory(response.history);
          // console.log(history);
          getTags({history: history}).then((res) => {
            setTagStatus("success");
            setTags(res.data);
            console.log("tags", tags);
          }).catch((err) => alert(err));
        }
      );
    }
  };

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
          <div
            style={{
              marginBottom: 20,
            }}
          >
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
            <Button variant="contained" onClick={getData}>
              Get and Upload Tags
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
