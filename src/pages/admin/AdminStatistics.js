import React from "react";
import AdminSidebar from "../../components/adminSidebar/AdminSidebar";
import NewTeacher from "../../components/newTeacher/NewTeacher";
import TeacherLister from "../../components/teacherLister/TeacherLister";
import StatisticsFilter from "../../components/statisticsFilter/StatisticsFilter";

const AdminStatistics = () => {
    return <div className="admin__main">
        <div className="admin__head">
            <AdminSidebar active={"new-turnus"} />
            <StatisticsFilter />
        </div>
        <TeacherLister />

    </div>
}

export default AdminStatistics;