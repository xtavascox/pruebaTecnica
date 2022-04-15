import axios from "axios";

export const deleteProp = async (id:number) => {
  await axios({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    transformRequest: [
      function (data) {
        data = JSON.stringify({
            "IDClient": "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
            "ServiceName": "AdminService",
            "WSToken": "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
            "MethodHash": "boolean_deletePropiedades_Number",
            "ArgumentList": [
                id
            ]
           });
        return data;
      },
    ],
    url: process.env.REACT_APP_ENDPOINT,
    method: "POST",
  });

  
};
