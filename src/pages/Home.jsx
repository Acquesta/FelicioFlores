import HoteBar from "./hoteBar";
import "../assets/home.css"

function Home() {
    return (
        <div>
            <HoteBar />
            <div>
                <h1>FelicioFlores o melhor das flores</h1>
                <div className="container">
                    <div className="image">
                        <img className="bg" src="/src/assets/sergey-shmidt-koy6FlCCy5s-unsplash.jpg" alt="" />
                    </div>
                    <div className="linha">
                        <div className="coluna">
                            <h2>Sobre nós</h2>
                            <p>
                                Bem-vindo ao nosso site de floricultura online! Aqui, você encontrará uma ampla variedade de flores, arranjos e presentes para todas as ocasiões. Nós nos dedicamos a fornecer aos nossos clientes produtos frescos e de alta qualidade, além de um atendimento excepcional. 
                            </p>
                        </div>
                        <div className="texto2">
                            <p>Com nosso site, você pode navegar facilmente por nossas opções e fazer seus pedidos com apenas alguns cliques. Quer seja para um aniversário, um casamento ou uma ocasião especial, temos o presente perfeito para você.</p>
                            <p>Além disso, oferecemos entrega em toda a região, para que você possa surpreender alguém especial com um belo presente, mesmo que esteja longe. Estamos ansiosos para ajudá-lo a tornar seus momentos especiais ainda mais memoráveis com nossas flores frescas e deslumbrantes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home