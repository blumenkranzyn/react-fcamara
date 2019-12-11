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
    editStudent(dataStudent) {
    
        var config = {
            data: {
                ...dataStudent
            }
        };
        return api.put("/students/"+dataStudent.id, config);
    }
    deleteStudent(dataStudent) {
     
        var config = {
            data: {
                ...dataStudent
            }
        };
       return api.delete("/students/"+dataStudent, config);
    }
}
export default StudentsApi
