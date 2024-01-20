import axios from "axios";

const usePostUser = (user) => {
    if (user?.email) {
        const { displayName, email } = user;
        axios.post("http://localhost:5000/users", { name: displayName, email, role: "user" })
    }
}

export default usePostUser