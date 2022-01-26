import { ReactNode } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface AppHeaderProps {
  title: ReactNode;
}

function AppHeader({ title }: AppHeaderProps) {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#3C576B",
        color: "common.white",
      }}
    >
      <Toolbar variant="dense">
        {/* App title */}
        <Typography
          variant="h6"
          color="inherit"
          flexGrow={1}
          noWrap
          fontWeight="regular"
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export { AppHeader };
