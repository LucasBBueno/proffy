import React from 'react';

import whatsappIcon from'../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem: React.FC = () => {

    return (
        <article className="teacher-item">
            <header>
                <img 
                src="https://avatars0.githubusercontent.com/u/45021630?s=460&u=25d45893c9bdbb8680f7271fec8cf32c2f26a20c&v=4"
                alt="Lucas Bueno"
                />
                <div>
                    <strong>Lucas Bueno</strong>
                    <span>Mobile</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de desenvolvimento Mobile

                <br /> <br />
                Apaixonado por desenvolver aplicações mobile voltada a experiência do usuário e acessibilidade.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>
                        R$ 80,00
                    </strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
};

export default TeacherItem;