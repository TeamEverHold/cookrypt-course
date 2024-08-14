import { TextField } from "@mui/material";

const BusinessPage = () => {
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
          Search tags of user here
        </span>
        <TextField label="Input user address" variant="outlined" />
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
          Search users with tag here
        </span>
        <TextField label="Input tag" variant="outlined" />
      </div>
    </div>
  );
};

export default BusinessPage;
