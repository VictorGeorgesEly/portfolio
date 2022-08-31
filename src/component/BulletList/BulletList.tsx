import List, { ListProps } from "@mui/material/List";
import { FunctionComponent } from "react";

const BulletList: FunctionComponent<ListProps> = ({ children }) => (
    <List sx={{ listStyleType: "disc", fontSize: "smaller", p: 0, ml: 5 }}>{children}</List>
  );
  
  export default BulletList;