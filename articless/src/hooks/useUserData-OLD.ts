// import axios from "axios";
// import { useContext, useEffect, useState } from "react";
// import { tokenContext } from "../shared/context/tokenContext";

// interface IUserData {
//     name ?: string;
//     iconImg ?: string;
// }

// export function useUserData() {
//     const [data, setData] = useState<IUserData>({})
//     const token = useContext(tokenContext);
    
//     useEffect(() => {
//       if (token && token !== undefined) {
//         axios.get('https://oauth.reddit.com/api/v1/me?raw_json=1', {
//           headers: {Authorization: `bearer ${token}`}
//         })
//         .then((resp) => {
//           const userData = resp.data;
//           // console.log(data)
//           setData({name: userData.name, iconImg: userData.icon_img});
//         });
//       }
//       // .catch(console.log)
//     }, [token])
//     return [data];
// }