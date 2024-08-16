
import ButtenAvid from "../ButtonAvid/ButtonAvid";
import "./Avid.css";

function Avid() {
    const arrayOfObjects = [
        { Avidjs: "Html" },
        { Avidjs: "Frontend Mentor" },
        { Avidjs: "LonkedIn" },
        { Avidjs: "Twitter" },
        { Avidjs: "Instagram" }
    ];

    return (
        <div id="Avid">
            {arrayOfObjects.map((item) => (
                <ButtenAvid 
                 Avidjs={item.Avidjs} />
            ))}
        </div>
    );
}

export default Avid;