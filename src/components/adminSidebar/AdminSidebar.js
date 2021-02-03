import React from "react";
import "./AdminSidebar.css"
import fontawesome from '@fortawesome/fontawesome'
import {faCalendarPlus, faChartBar, faUserPlus, faCog} from '@fortawesome/fontawesome-free-solid'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const AdminSidebar = () => {
    fontawesome.library.add(faCalendarPlus, faChartBar, faUserPlus, faCog);

    return <div className="admin__sidebar">
        <div className="admin__sidebarImage">
            <img className="admin__image" src={"https://www.semmelweiskiado.hu/images/termekek/2/1691/semmelweis_kiado_logo_1608213956.jpg"}  alt={"sote logo"}/>
            <p className={"admin__title"}>ADMIN SOTE</p>
        </div>
        <div className="admin__sidebarMenu">
           <p className="admin__newLesson"><span> <FontAwesomeIcon icon="calendar-plus"  className={"admin__calendar"}/></span> Órák hozzáadása</p>
            <p className="admin__statisztika"><span> <FontAwesomeIcon icon="chart-bar"  className={"admin__chart"}/></span> Statisztika</p>
            <p className="admin__newTeacher"><span> <FontAwesomeIcon icon="user-plus"  className={"admin__addTeacher"}/></span> Oktatók hozzáadása</p>
        </div>
        <div className="admin__settingsMenu">
            <p className="admin__settingsTitle">Beállitások</p>
            <p className="admin__settings"><span> <FontAwesomeIcon icon="cog"  className={"admin__cog"}/></span> Beállítások</p>
        </div>
    </div>
}


export default AdminSidebar;
