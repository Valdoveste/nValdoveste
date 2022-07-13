import React from "react";
import Cube from '../Cube/Cubes'

const About: React.FC = () => {
    return (
        <section id="about">
            <article className="about__content">
                <h1 className="about__title">
                    About Me
                </h1>
                <p className="about__text">
                    Olá, me chamo Caio Valdoveste e eu gosto de desafios desde que
                    tive meu primeiro contato com programação em 2019 fiquei fascinado
                    com o quanto essa área é váriada, então após algum tempo realizando pequenos
                    projetos em outras linguagens. Tive meu primeiro contato com WEB onde percebi que
                    tinha um apreço não apenas pelo funcionamento das páginas, mas também na construação
                    da apresentação do conteudo para os usuários.
                </p>

                <p className="about__text">
                </p>

                <p className="about__text">

                </p>

                <div className="about__technologies">
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Familiar:</li>
                        <li className="technologies__item">JavaScript</li>
                        <li className="technologies__item">HTML</li>
                        <li className="technologies__item">CSS</li>
                        <li className="technologies__item">SASS</li>
                        <li className="technologies__item">Git & GitHub</li>
                        <li className="technologies__item">GitFlow</li>
                        <li className="technologies__item">MySQL(SSMS)</li>
                    </ul>
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Aprendendo:</li>
                        <li className="technologies__item">React(TypeScript)</li>
                        <li className="technologies__item">NodeJS</li>
                    </ul>
                    <ul className="about__technologies__list">
                        <li className="technologies__item">Pretendo aprender:</li>
                        <li className="technologies__item">Python</li>
                    </ul>
                </div>

            </article>
            <article className="technologies__cubes">
                <Cube></Cube>
            </article>
        </section>
    );
}

export default About;
