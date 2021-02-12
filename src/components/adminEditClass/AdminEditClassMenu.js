import React, {useEffect, useState} from 'react'
import AdminEditClassStudentList from "../AdminEditClassStudentList/AdminEditClassStudentList";
import axios from "axios";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";


const AdminEditClassMenu = () => {
    const url = process.env.REACT_APP_URL;
    const [turns, setTurns] = useState([])
    const [selectedTurnusId, setSelectedTurnusId] = useState(null);
    const [lessons, setLessons] = useState(null)
    const [cookies, setCookies] = useCookies(["user"])
    const [activeClass, setActiveClass] = useState(null)
    const [activeLesson, setActiveLesson] = useState(null)


    useEffect(() => {
        fetchTurns();
    }, [])

    useEffect(() => {
        getClassesById(selectedTurnusId)
    }, [selectedTurnusId])


    async function fetchTurns() {
        axios.get(url + "/turnus/all").then((res) => {
            setTurns(res.data)
        })
    }


    function getLesson(active) {
        let result = [];
        console.log(lessons)
        let all = Object.keys(lessons);
        switch (active) {
            case "eloadas":
                 return lessons[all[0]]
            case "konzultacio":
                console.log("konzultacio")
                return lessons[all[2]]
            case "gyakorlat":
                console.log("gyakorlat")
                return lessons[all[1]]
            default:
                alert("sthing went wrong")
                return result;
        }
    }


    async function getClassesById(turnusId) {
        if (turnusId !== null) {
            axios.get(url + "/classes/all/" + turnusId, {headers: authHeader(cookies.user)}).then(res => {
                console.log(res.data)
                setLessons(res.data)
            })
        }
    }

    let LessonSelect = <h1>Nincsen ilyen típusú óra ehhez a turnushoz</h1>;


    if (activeLesson !== null && activeLesson.length > 0) {
        console.log(activeLesson, "ACTIVE")
        LessonSelect =
            <>
                <p>Óra:</p>
                <select>
                    {
                        activeLesson.map(lesson => (
                            <option value="lesson">{lesson.name}</option>
                        ))
                    }
                </select>
            </>
    }


    const changeLessonType = (e) => {
        setActiveClass(e.target.value)
      setActiveLesson(getLesson(e.target.value))
    }


    const changeTurnus = () => {
        setSelectedTurnusId(document.getElementById("1").value)
    }


    return <div className="adminEdit__main">
        <div className="classSelect__container">
            <p>Turnus:</p>
            <select onChange={changeTurnus} name="turn" id="1" className="newLesson__turnSelect">
                {turns.map(turn => (
                    <option value={turn.id} className="turn__option">{turn.name}</option>
                ))}
            </select>

            <p>Óra típusa:</p>
            <select value={activeClass} onChange={changeLessonType} name="type" id="2"
                    className="newLesson__lessonType">
                <option value="eloadas" className="type__option">Elöadás</option>
                <option value="gyakorlat" className="type__option">Gyakorlat</option>
                <option value="konzultacio" className="type__option">Konzultáció</option>
            </select>
            {LessonSelect}
        </div>

        <div className="tableContainer">
            <AdminEditClassStudentList/>
        </div>
    </div>
}

export default AdminEditClassMenu

