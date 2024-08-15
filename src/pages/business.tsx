import { SearchOutlined } from "@mui/icons-material";
import { FormControl, IconButton, TextField } from "@mui/material";
import { useState } from "react";
import { useAccount } from "wagmi";
import TagsGetter from "../api/TagsGetter";

const BusinessPage = () => {
  const [address, setAddress] = useState<string>("");
  const [addressQuery, setAddressQuery] = useState("");
  const [tagsQuery, setTagsQuery] = useState("");
  const account = useAccount();

  const searchTagsByAddress = () => {
    setAddress(addressQuery);
  };

  const searchUsersByTag = () => {
    console.log(tagsQuery);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        alignSelf: "center",
        width: "40vw",
      }}
    >
      <div style={{ display: "flex", width: "100%", marginTop: "20vh" }}>
        <span style={{ fontSize: 24, fontWeight: "bold" }}>Pricing</span>
        <span style={{ marginLeft: "auto", fontSize: 24, fontWeight: "bold" }}>
          {0.00001111}
        </span>
        <span style={{ marginLeft: 12, fontSize: 24 }}> ETH per search</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: 36,
        }}
      >
        <span style={{ marginBottom: 16, fontSize: 28, fontWeight: "bolder" }}>
          Search tags of user
        </span>
        <div style={{ display: "flex", width: "100%", flexDirection: "row" }}>
          <TextField
            label="User address"
            name="address"
            variant="outlined"
            style={{ width: "80%" }}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setAddressQuery(e.target.value);
            }}
          />
          <IconButton
            style={{ width: 64, height: 64, marginLeft: "auto" }}
            onClick={searchTagsByAddress}
          >
            <SearchOutlined />
          </IconButton>
        </div>

        {address === "" ? (
          <></>
        ) : (
          <TagsGetter address={address as `0x$string`} />
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          marginTop: 36,
        }}
      >
        <span style={{ marginBottom: 16, fontSize: 28, fontWeight: "bolder" }}>
          Search users with tag
        </span>
        <div>
          <FormControl
            style={{ display: "flex", width: "100%", flexDirection: "row" }}
          >
            <TextField
              label="Tag"
              variant="outlined"
              style={{ width: "80%" }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTagsQuery(e.target.value);
              }}
            />
            <IconButton
              style={{ width: 64, height: 64, marginLeft: "auto" }}
              onClick={searchUsersByTag}
            >
              <SearchOutlined />
            </IconButton>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
