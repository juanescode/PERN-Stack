import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  InputBase,
  Card,
  Typography,
  CardContent,
  Button,
  CircularProgress,
} from "@mui/material";
import { Link,useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingTaskId, setLoadingTaskId] = useState(null); //
  const [searchId, setSearchId] = useState(""); //
  const [taskData, setTaskData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    //
    loadTasks(); //
  }, []); //

  const loadTasks = async () => {
    setLoading(true); //
    try {
      //
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      //
      console.log("Error loading tasks", error); //
    } finally {
      setTaskData(null);
      //
      setLoading(false); //
    } //
  };
  const handleDelete = async (id) => {
    setLoadingTaskId(id); //
    try {
      await fetch(`http://localhost:3000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    } finally {
      //
      setLoadingTaskId(null); //
    } //
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const filteredTasks = searchId //
    ? tasks.filter((task) => task.id.toString() === searchId)
    : tasks; //

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    loadTasks(searchId);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent">
          <Toolbar>
            {taskData && (
              <div>
                <p>ID: {taskData.id}</p>
                <p>title: {taskData.title}</p>
              </div>
            )}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#eee" }}>
                PERN STACK
              </Link>
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/task/new")}
            >
              New Task
            </Button>
            <Search>
              <form onSubmit={handleSearchSubmit}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
              </form>
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <h1>Task List</h1>
      {filteredTasks.map((task) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#1e272e",
          }}
          key={task.id}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "white" }}>
              <Typography variant="subtitle1" component="h2">ID: {task.id}</Typography>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>

            <div>
              <Button
                variant="contained"
                color="primary"
                onClick={() => navigate(`/task/${task.id}/edit`)}
              >
                {loading && loadingTaskId === task.id ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Edit"
                )}
              </Button>

              <Button
                variant="contained"
                color="error"
                onClick={() => handleDelete(task.id)}
                style={{ marginLeft: ".5rem" }}
                disabled={loading && loadingTaskId === task.id}
              >
                {loading ? (
                  <CircularProgress color="inherit" size={24} />
                ) : (
                  "Delete"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default TaskList;
