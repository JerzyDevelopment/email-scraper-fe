import axios from "axios";
import {saveAs} from "file-saver";

const sendUrl = async (url: string) => {
  try {
    const response = await axios({
      method: "post",
      url: `${process.env.REACT_APP_API}`,
      data: JSON.stringify({
        url,
      }),
      responseType: "blob", // Set the response type to 'blob' for file download
      headers: {
        "Content-Type": "application/json",
      },
    });

    const blob = new Blob([response.data], {type: "text/csv"});

    const now = new Date();
    const formattedTime = now
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      })
      .replace(/:/g, "-");
    saveAs(blob, `${formattedTime}-emails.csv`);

    console.log(response, "RESPONSE");

    return response;
  } catch (error) {
    console.error("Error downloading CSV file:", error);
    throw error;
  }
};

export default sendUrl;
