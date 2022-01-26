import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import { useQuery } from "react-query";
import { AppHeader, Header } from "components";
import { Example } from "shared";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  avatar: string;
  active: boolean;
}

function App() {
  const { isSuccess, data } = useQuery<User[]>("users", async () => {
    const response = await fetch("/api/users");
    return await response.json();
  });

  return (
    <>
      <AppHeader title="Monorepo App" />
      <main>
        <Header>
          <Typography variant="h5">App Title</Typography>
        </Header>

        <Example sx={{ m: 2 }} />

        <Box p={2}>
          <Container>
            {isSuccess && (
              <Paper>
                <List disablePadding>
                  {data!.map((user, index, arr) => (
                    <ListItem key={user.id} divider={index < arr.length - 1}>
                      <ListItemText
                        primary={user.name}
                        secondary={user.email}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            )}
          </Container>
        </Box>
      </main>
    </>
  );
}

export default App;
