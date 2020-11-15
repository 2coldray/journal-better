import axios from "axios";


const API = {
//   postListItems: function ({name, datetime, user_plans}, id) {
//     return axios.post(`/api/addNote/${id}`, {
//       user_plans: user_plans,
//       name: name,
//       datetime: datetime,
//     });
//   },
  getTodayNotes: function (id) {
    return axios.get(`/api/TodayNotes/${id}`);
  },
};
export default API;
