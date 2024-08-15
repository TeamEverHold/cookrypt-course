import type { NextPage } from "next";
import Image from "next/image";
import ExampleDog from "../assets/example-dog.png";
import { Button, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { BrowserHistory, getTags } from "../api/getTags";
import { RequestStatus } from "../api/status";
import Tag from "../components/Tag";
import { useWriteContract } from 'wagmi';
import { cookryptMainContractConfig } from '../api/abis';

const Home: NextPage = () => {
  const {data, writeContract} = useWriteContract();
  const [history, setHistory] = useState<BrowserHistory[]>([]);
  const [tags, setTags] = useState([]);
  const [tagStatus, setTagStatus] = useState<RequestStatus>("success");

  const getData = () => {
    setTagStatus("loading");
    setTags([]);
    const extensionID = "hnalnahjnkgjeboogihgpdgalmbkeemc";
    if (!chrome.runtime) {
      alert("Please install extension");
      console.log("Chrome runtime not found");
    } else {
      console.log("sending message");
      chrome.runtime.sendMessage(
        extensionID,
        {
          getHistory: true,
        },
        (response) => {
          //console.log(response);
          setHistory(response.history);
          // console.log(history);
          getTags({ history: response.history })
            .then((res) => {
              setTagStatus("success");
              setTags(res.data.tags);
              const _tags = res.data.tags;
              if (_tags && _tags.length > 0) {
                // const t = 
                writeContract({
                  ...cookryptMainContractConfig,
                  functionName: "registerTag",
                  args: [_tags[0].tag],
                });
              }
              console.log(`Uploading ${_tags[0].tag}`);
            })
            .catch((err) => {
              setTagStatus("error");
              alert(err);
            });
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
            <Image src={ExampleDog} alt="" height={150} />
          </div>
          <Button variant="contained" style={{ width: "100%" }}>
            Play with it
          </Button>
        </div>
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20vh",
            paddingLeft: "10%",
            paddingRight: "16%",
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
          <div
            style={{
              marginBottom: 20,
            }}
          >
            <Button
              variant="contained"
              onClick={getData}
              disabled={tagStatus === "loading"}
            >
              {tagStatus === "loading" ? "Loading..." : "Get and Upload Tags"}
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {tags.map((t) => (
              <Tag key={t["tag"]} label={`${t["tag"]}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
