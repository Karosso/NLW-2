import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/65686087?s=460&u=bba36bc959a12089d3ae508b30db2771a1ae0136&v=4" alt="Oscar Dias"/>
                <div>
                    <strong>Oscar Dias</strong>
                    <span>Física</span>
                </div>
            </header>
            <p>
                Lorem Ipsum
                <br/><br/>
                Lorem ipsum cras enim tincidunt lectus lorem aliquam nostra phasellus sollicitudin vulputate, arcu tristique semper ipsum torquent blandit primis ultrices consectetur euismod duis urna, quisque morbi sociosqu volutpat purus quisque curabitur sociosqu per mattis. libero felis morbi ultricies mi quis primis porttitor netus, mollis curae habitasse lectus sodales eget tortor, pharetra mattis venenatis quisque potenti porta urna. per nec odio pretium netus posuere eget convallis dapibus, donec justo libero mauris iaculis inceptos elit gravida curabitur, lacus sodales sagittis vel pellentesque eros id. platea magna turpis ante lacus malesuada litora, neque ac ad elit ullamcorper fusce, sagittis vitae mollis consectetur leo. 
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;