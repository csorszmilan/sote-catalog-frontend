import React from "react";


const AdminEditClassStudentList = (props) => {

    let content = ""

    if (props?.data ) {
      content =  <div className="studentList__container">
            <h1>Data arrived, id is: {props.data}</h1>
        </div>
    }

    return content
}

export default AdminEditClassStudentList