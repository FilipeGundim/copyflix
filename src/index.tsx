import React from "react";
import * as ReactDOM from "react-dom";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";

const queryClient = new QueryClient();

const theme = {
  bg: "black",
};

const MOUNT_NODE = document.getElementById("root");

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </ThemeProvider>
  </QueryClientProvider>,
  MOUNT_NODE
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
