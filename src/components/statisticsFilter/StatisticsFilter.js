import React, {useEffect, useState} from "react";
import axios from "axios";
import LessonStatisticsTable from "../statisticsTable/LessonStatisticsTable";
import authHeader from "../../security/auth-header";
import {useCookies} from "react-cookie";

const StatisticsFilter = () => {
    const[turns, setTurns] = useState([]);
    const[turnId, setTurnId] = useState(null)
    const[selected, setSelected] = useState([])
    const[selectedType, setSelectedType] = useState([])
    const url = process.env.REACT_APP_URL;
    const [cookies, setCookies] = useCookies(["user"])



    useEffect(() => {
        fetchTurns().then(res => {
            setTurns(res)
            setTurnId(res[0]?.id)
        });

    }, [])


       const changeSelected = () => {
        fetchSelected(turnId).then(res => {
            setSelected(res.data)
        })
    }



    async function fetchTurns() {
        try {
            const resp = await  axios.get(url + "/turnus/all", {headers: authHeader(cookies.user)})
            return resp.data
        }
        catch (error) {

        }
    }
    async function fetchSelected(turnId) {
        try {
            const resp = await axios.get(url + "/classes/statistic/" + turnId, {headers: authHeader(cookies.user)});
            return resp.data
        } catch (error) {
            console.log(error)
        }
    }


    function selectTurn(e) {
        e.preventDefault()
        console.log(e.target.value)
        setTurnId(e.target.value)
    }


    const selectType = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setSelectedType(e.target.value)
        fetchSelected(turnId).then(res => {
            setSelected(res)
            }
        )
    }

    return <div className="statisticsFilter__main">

        <div className="statistics__turnSelect">
            <p>turnus:</p>
            <select onChange={selectTurn} name="turn" id="turner" className="newLesson__turnSelect">
                {turns.map(turn => (
                    <option value={turn.id} className="turn__option">{turn.name}</option>
                ))}
            </select>
        </div>
        <div className="statistics__selects">
        <div className="statistics__classSelect">
            <p>Figyelmeztetés szerint:</p>
            <select onChange={selectType} name="type" id="2" className="newLesson__lessonType">
                <option value="eloadas" className="type__option">Elöadás</option>
                <option value="gyakorlat" className="type__option">Gyakorlat</option>
                <option value="konzultacio" className="type__option">Konzultáció</option>
            </select>
        </div>

        <div className="statistics__searchSelect">
            <p>Jelenlét szerint:</p>
            <select name="type" id="2" className="newLesson__lessonType">
                <option value="student" className="type__option">Diák</option>
                <option value="lesson" className="type__option">Óra</option>
            </select>
        </div>
        </div>
        <div className="statistics__tableContainer">
            <LessonStatisticsTable key={selected} data={selected}/>
        </div>





    </div>
}


export default StatisticsFilter;