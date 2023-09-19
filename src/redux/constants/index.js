const server = {
  baseUrl: "https://gradstoc-api.sandboxdevelopment.in/app/users",
  localUrl:"http://192.168.2.196:3010/app/users",
  prod: "",
};

const getCurrentHost = () => {
  if (process.env.REACT_APP_URL === "prod") {
    return server.prod;
  } else {
    return server.baseUrl;
  }
};

export default getCurrentHost;
