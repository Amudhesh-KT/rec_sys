
import { Box } from "../components/Box.jsx"

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%"
    }}
  >
    {children}

  </Box>
);