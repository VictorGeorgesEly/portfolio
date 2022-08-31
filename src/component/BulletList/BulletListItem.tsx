import ListItem, { ListItemProps } from "@mui/material/ListItem";
import { FunctionComponent } from "react";

interface BulletListItemProps extends ListItemProps {
    hideBullet?: boolean;
  }
  
  const BulletListItem: FunctionComponent<BulletListItemProps> = ({
    children,
    hideBullet = false,
  }) => (
    <ListItem
      sx={{ display: hideBullet ? "block" : "list-item", lineHeight: 1.25 }}
      dense
    >
      {children}
    </ListItem>
  );
  
  export default BulletListItem;