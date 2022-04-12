import axios from "axios";
import { RespLog } from "../domain/interface";

interface User {
  user: string;
  password: string;
}
const baseUrl = "http://adminco.orangecloud.com.co/jsserver";

export const loginAuth = async ({ user, password }: User) => {
  const { data } = await axios.request<RespLog>({
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
    url: baseUrl,
    method: "POST",
  });
  return data;
};
