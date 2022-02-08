import React from "react";
import ReactDOM from "react-dom";
// import './index.css';
import { App } from "./components/App";
import { ThemeProvider, createTheme } from "@mui/material";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    MyButton: true;
  }
  // interface MyThema{
  //   palette:{primary:{
  //     main:`green`
  //   }}
  // }
}

// declare module '@mui/material/styles' {
//   interface Theme {
//    primary:{
//       main:string
//     }}
// }

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "MyButton" },
          style: {
            border: `2px solid`,
            color: "red",
            height: `4vh`,
            background: `green`,
          },
        },
      ],
    },
  },
  // palette:{primary:{
  //   main:`green`
  // }}
});
// const MyThema = createTheme({
//   palette:{primary:{
//     main:`green`
//   }}
// })

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
