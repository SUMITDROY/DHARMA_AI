import axios from "axios";

export async function GenerateText(text) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
   
     const res = await axios({
       url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
       method: "POST",
       data: {
         contents: [
           {
             parts: [
               {
                 text:
                   text +
                   " give answer only according to bhagwat geegta and what krishna said about this strictly",
               },
             ],
           },
         ],
       },
     });
     // console.log(res['data']['candidates'][0]['content']['parts'][0]['text']);
     return (res["data"]["candidates"][0]["content"]["parts"][0]["text"]);
   }