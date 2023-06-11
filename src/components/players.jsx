import { useEffect, useState } from 'react'
import '../style/players.css'

function Players() {
    const players = [
        {
            playerNumber : "1",
            playerName : "Ibraheem Almeh",
            position : "GoalKeeper",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
        {
            playerNumber : "22",
            playerName : "Taha Musa",
            position : "GoalKeeper",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
        {
            playerNumber : "2",
            playerName : "Ahmad Alkhissi",
            position : "Defender",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
        {
            playerNumber : "6",
            playerName : "Amer Jenniat",
            position : "Defender",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
        {
            playerNumber : "4",
            playerName : "Fares Arna'ot",
            position : "Defender",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
        {
            playerNumber : "10",
            playerName : "Mahmooud Almawas",
            position : "MidFielder",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
        {
            playerNumber : "12",
            playerName : "Mahmooud Authman",
            position : "MidFielder",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
        {
            playerNumber : "21",
            playerName : "Mohammad Almarmoor",
            position : "MidFielder",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
        {
            playerNumber : "9",
            playerName : "Omar Alsoomah",
            position : "ForWard",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
        {
            playerNumber : "11",
            playerName : "Omar khrebien",
            position : "ForWard",
            club : "al shorta baghdad",
            age : "30",
            played : "112",
            goals : "40",
            assists : "12"
        },
    ]
    const [play,setPlay] = useState(11);
    const [info,setInfo] = useState(players[9])
    console.log(info)
    useEffect (() => {
        const pl = document.querySelector(".pl");
        const plCircle = pl.querySelectorAll(".circle");
        plCircle.forEach(current => {
            current.onclick = (e) => {
                setPlay(e.target.innerText);
                for(let i = 0 ; i < players.length ; i++) {
                    if(players[i].playerNumber === e.target.innerText) {
                        setInfo(players[i])
                        plCircle[i].classList.add("active-pl")
                    }else {
                        plCircle[i].classList.remove("active-pl")
                    }
                }
                // e.target.
            }
        })
    })
    return(
        <>
        <section className="squad" id="players">
            <div className="container">
                <div className="line-up">
                    <div className="maneger">
                        <h3>management</h3>
                        <h4>hector cuper</h4>
                    </div>
                    <div className="pl">
                    {players.map(player => {
                        return(<div className='pl-c'>
                        <div className="circle">{player.playerNumber}</div>
                        <span className='circle-name'>{player.playerName}</span>
                        </div>
                        )
                    })}
                    </div>       
                    <div className="pl-spot">
                        <div className="head">
                            <div className="spot-text">
                                <h5>{info.playerName}</h5>
                                <div className="position">{info.position}</div>
                                <p className='club'>{info.club}</p>
                                <div className="age">Age <span>{info.age}</span></div>
                            </div>
                            <div className="number">{play}</div>
                        </div>
                        <div className="spot-body">
                            <div className="played p">Played <span>{info.played}</span></div>
                            <div className="goals p">Goals <span>{info.goals}</span></div>
                            <div className="assists p">Assist <span>{info.assists}</span></div>
                        </div>
                            </div>
                </div>
                <div className="para">
                    <div className="para-text">سوريا هي موطن للعديد من الملاعب البارزة التي لعبت دورًا مهمًا في الثقافة الرياضية في البلاد. يعد ملعب العباسيين أحد أشهر الملاعب ، ويقع في العاصمة دمشق. يتسع لأكثر من 30 ألف متفرج ، وقد كان مكانًا للعديد من مباريات كرة القدم وغيرها من الأحداث الرياضية. ملعب آخر بارز هو ملعب حلب الدولي ، الذي يقع في مدينة حلب. استضاف هذا الملعب ، الذي تبلغ سعته حوالي 53000 شخص ، العديد من المباريات الدولية والمحلية ، مما يدل على شغف البلاد بكرة القدم. ملعب تشرين في اللاذقية هو مكان معروف آخر ، يستوعب ما يقرب من 15000 متفرج. هذه الملاعب ، من بين أمور أخرى ، بمثابة أماكن تجمع للجماهير لدعم فرقهم المفضلة وشهدت لحظات مثيرة في تاريخ كرة القدم السورية. على الرغم من التحديات التي تواجهها بسبب الصراع المستمر ، لا تزال هذه الملاعب رموزًا مهمة للوحدة والصمود في المشهد الرياضي السوري</div>
                    <img src={require("../imgs/Rectang.png")} alt="" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Players;