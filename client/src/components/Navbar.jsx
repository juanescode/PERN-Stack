// import { styled, alpha } from "@mui/material/styles";
// import AppBar from "@mui/material/AppBar";
// import Button from "@mui/material/Button";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// export default function Navbar() {
//   const [searchId, setSearchId] = useState("");
//   const [taskData, setTaskData] = useState(null);
//   const navigate = useNavigate();

//   const searchById = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:3000/tasks/${id}`);
//       if (!response.ok) {
//         throw new Error("No se encontró el elemento");
//       }
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//       setTaskData(null);
//     }
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     searchById(searchId);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" color="transparent">
//         <Toolbar>
//           {taskData && (
//             <div>
//               <p>ID: {taskData.id}</p>
//               <p>title: {taskData.title}</p>
//             </div>
//           )}
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           />
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             <Link to="/" style={{ textDecoration: "none", color: "#eee" }}>
//               PERN STACK
//             </Link>
//           </Typography>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={() => navigate("/task/new")}
//           >
//             New Task
//           </Button>
//           <Search>
//             <form onSubmit={handleSearchSubmit}>
//               <SearchIconWrapper>
//                 <SearchIcon />
//               </SearchIconWrapper>
//               <StyledInputBase
//                 placeholder="Search…"
//                 inputProps={{ "aria-label": "search" }}
//                 value={searchId}
//                 onChange={(e) => setSearchId(e.target.value)}
//               />
//             </form>
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

