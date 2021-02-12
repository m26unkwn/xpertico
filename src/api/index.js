import axios from "axios";
export const fetchData = async () => {
  try {
    let res = await axios.get("https://api.npoint.io/3bde211c488d8ca48157");
    console.log(res);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
