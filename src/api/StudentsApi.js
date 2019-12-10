import api from "../services/api";


class StudentsApi {

    getAllStudents() {
        return api.get("/students")
    }

}
export default StudentsApi
