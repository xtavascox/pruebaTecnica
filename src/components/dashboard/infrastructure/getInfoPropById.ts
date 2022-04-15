import axios from "axios";
import { RespProp } from '../domain/interface';

export const getInfoPropById = async (id: string="") => {
  const {data:{DataBeanProperties:{ObjectValue}}} = await axios.request<RespProp>({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    transformRequest: [
      function (data) {
        data = JSON.stringify({
          IDClient: "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
          ServiceName: "AdminService",
          WSToken: "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
          MethodHash: "com.admin.bean.Propiedades_getPropiedades_Number",
          ArgumentList: [id],
        });
        return data;
      },
    ],
    url: process.env.REACT_APP_ENDPOINT,
    method: "POST",
  });
  return ObjectValue;
};
