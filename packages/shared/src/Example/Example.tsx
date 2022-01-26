import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { SxProps } from "@mui/material";

export interface ExampleProps {
  sx?: SxProps;
}

function Example({ sx }: ExampleProps) {
  return (
    <Paper square sx={{ padding: 2, ...sx }}>
      <Container>
        <Typography>Hello, world!</Typography>
      </Container>
    </Paper>
  );
}

export { Example };
