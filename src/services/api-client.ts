import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "22f58539e8de4cf284f152bc9103496f",
  },
});
