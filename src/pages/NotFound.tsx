import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        color: "white",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            margin: "10px",
            cursor: "default",
            fontSize: "8em",
            borderBottom: "1px dashed white",
          }}
        >
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </h1>
        <h3 style={{ margin: "10px", cursor: "default" }}>PAGE NOT FOUND</h3>
        <Button variant="outlined" component={Link} to="/">
          Return To Home
        </Button>
      </div>
    </div>
  );
}
