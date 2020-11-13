import axios from 'axios';

const API={
    postListItems: function (item,title,id){
        return axios.post(`/api/addNote/${id}`,{
            user_plans:item,
            name:title,
            datetime: "Thursday"
        })
    }
}
export default API;