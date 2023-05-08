import HoteBar from "./hoteBar";
import "../assets/home.css"

function Home() {
    return (
        <div>
            <HoteBar />
            <div>
                <h1>FelicioFLores o melhor das flores</h1>
                <img className="bg" src="../assets/sergey-shmidt-koy6FlCCy5s-unsplash.jpg" alt="" />
            </div>
        </div>
    )
}

export default Home