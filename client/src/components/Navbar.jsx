import {
  Box,
  AppBar,
  Container,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

//Importando componentes de material-ui para crear la barra de navegación
//Importando Link y useNavigate de react-router-dom para navegar entre rutas
function Navbar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{textDecoration: "none", color: "#eee"}}>PERN STACK</Link>
            </Typography>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/task/new")}
            >
              New Task
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

export default Navbar;
