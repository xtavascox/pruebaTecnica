import axios from "axios";
import { RespLog } from "../domain/interface";

interface User {
  user: string;
  password: string;
}


export const loginAuth = async ({ user, password }: User) => {
    
  const resp = await axios.request<RespLog>({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    transformRequest: [
      function (data) {
        data = JSON.stringify({
          IDClient: "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
          ServiceName: "AdminService",
          WSToken: "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
          MethodHash:
            "com.advantage.bean.account.WorkSession_loguinUsuarioWS_String_String",
          ArgumentList: [user, password],
        });
        return data;
      },
    ],
    url: process.env.REACT_APP_ENDPOINT,
    method: "POST",
  });
  return resp;
};
