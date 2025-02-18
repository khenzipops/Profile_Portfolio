import { api } from "./api";

// Mail is an object contains message, recipients and subject
/*
{
     message: "<p>Hello Researcher, <br/> your manuscript was accepted</p>",
    "recipients: ["timajokyle24@gmail.com", "timajo.kurtvincent08@gmail.com"],
    subject: "Manuscript Accepted"
}
*/
export const sendMail = async (mail) => {
  try {
    const { data } = await api.post("/mail", mail);

    return data;
  } catch (error) {
    return null;
  }
};

// sendMail({
//   message: "<p>Hello Researcher, <br/> your manuscript was accepted</p>",
//   recipients: ["timajokyle24@gmail.com", "timajo.kurtvincent08@gmail.com"],
//   subject: "Manuscript Accepted",
// });
