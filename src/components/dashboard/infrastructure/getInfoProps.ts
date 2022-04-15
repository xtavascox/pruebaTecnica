import axios from "axios";
import { RespProps } from "../domain/interface";

export const getInfoProps = async () => {
  
      const {data:{DataBeanProperties:{ObjectValue}}} = await axios.request<RespProps>({
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
            "java.util.List_getPropiedadesCatalogPorPropiedad_String_Object_Number",
          ArgumentList: [null, null, null]
        });
        return data;
      },
    ],
    url: process.env.REACT_APP_ENDPOINT,
    method: "POST",
  });

  
  return ObjectValue;
};
