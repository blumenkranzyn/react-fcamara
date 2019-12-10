import api from "../services/api";


class StudentsApi {
    getAllStudents() {
        return api.get("/students")
    }
    newStudent(dataStudent) {
        var config = {
            data: {
                ...dataStudent
            }
        };
        return api.post("/students", config);
    }
}
export default StudentsApi
