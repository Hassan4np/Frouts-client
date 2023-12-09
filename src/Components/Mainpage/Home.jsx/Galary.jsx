import g1 from "../../../assets/Galary/Instagram Post (1).png"
import g2 from "../../../assets/Galary/Instagram Post (2).png"
import g3 from "../../../assets/Galary/Instagram Post (3).png"
import g4 from "../../../assets/Galary/Instagram Post (4).png"
import g5 from "../../../assets/Galary/Instagram Post (5).png"
import g6 from "../../../assets/Galary/Instagram Post.png"

const Galary = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <div className="h-[200px] w-[200px]" >
                <img src={g6}alt="" />
            </div>
            <div className="h-[200px] w-[200px]" >
                <img src={g1}alt="" />
            </div>
            <div className="h-[200px] w-[200px]" >
                <img src={g2}alt="" />
            </div> 
            <div className="h-[200px] w-[200px]" >
                <img src={g3}alt="" />
            </div>
            <div className="h-[200px] w-[200px]" >
                <img src={g4}alt="" />
            </div>
            <div className="h-[200px] w-[200px]" >
                <img src={g5}alt="" />
            </div>
        </div>
    );
};

export default Galary;