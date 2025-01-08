import Header from "./Header";

import { Box } from "@mui/material/";

const Layout = (props) => {
  const headerHeight = 65;
  return (
    <Box sx={{ display: "flex" }}>
      <Header height={headerHeight} />
      <Box
        component="main"
        sx={{
          width: "100%",
          height: `calc(100vh - ${headerHeight}px)`,
          marginTop: `${headerHeight}px`,
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default Layout;
