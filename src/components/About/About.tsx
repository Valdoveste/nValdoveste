import React from "react";
// import ValdovesteImg from "../../assets/zap.gif";
import ValdovesteImg from "../../assets/Valdoveste.png";

const About: React.FC = () => {
    return (
        <section id="about">
            <h1 className="about__title">
                Sobre Mim
            </h1>
            <article className="about__content">
                <div>
                    <p className="about__text">
                        Olá, me chamo Caio Valdoveste e eu gosto de desafios, desde que tive meu primeiro contato com programação em 2019 fiquei
                        fascinado com o quanto essa área é váriada, então após algum tempo realizando pequenos projetos em várias linguagens.
                        Tive meu primeiro contato com o desenvolvimento WEB onde percebi que tinha um apreço não apenas pelo funcionamento das páginas,
                        mas também na construção da apresentação do conteúdo para os usuários.
                    </p>

                    <p className="about__text">
                        Sempre fui atraído por projetos de longa duração, onde efetivamente posso produzir e acompanhar cada processo de seu desenvolvimento. 
                        Tenho como objetivo de carreira trabalhar no desenvolvimento FrontEND, assim podem colocar em prática as habilidades que adquiri.
                    </p>

                    <p className="about__text">
                        Fique por dentro das tecnologias que estou utilizando recentemente,
                        além de algumas outras que estou aprendendo.
                    </p>

                    <div className="about__technologies">
                        <ul className="about__technologies__list">
                            <li className="technologies__item__header">Habilidades:</li>
                            <li className="technologies__item">React</li>
                            <li className="technologies__item">JavaScript</li>
                            <li className="technologies__item">HTML5</li>
                            <li className="technologies__item">CSS3</li>
                            <li className="technologies__item">SASS</li>
                            <li className="technologies__item">Git & GitHub</li>
                            <li className="technologies__item">GitFlow</li>
                            <li className="technologies__item">MySQL(CRUD)</li>
                        </ul>
                        <ul className="about__technologies__list">
                            <li className="technologies__item__header">Aprendendo:</li>
                            <li className="technologies__item">TypeScript</li>
                            <li className="technologies__item">NodeJS</li>
                        </ul>
                        <ul className="about__technologies__list">
                            <li className="technologies__item__header">Pretendo aprender:</li>
                            <li className="technologies__item">Python</li>
                        </ul>
                    </div>
                </div>

                <picture className="image__profissional__image">
                    <div></div>
                    <img src={ValdovesteImg} alt="Valdoveste" />
                </picture>

            </article>

        </section>
    );
}

export default About;
