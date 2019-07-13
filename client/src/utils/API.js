import axios from "axios";

export default {
    search: function() {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=time&printType=books&key=AIzaSyDGoqMMopeOfbbsJ8Re6SQHZS-lKYtYpVU");
    }
};