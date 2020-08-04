import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'

interface PageHeatherProps { /* Um objeto qque recebe as variaveis que serão propriedades do component */
    title: string;
}

const PageHeader: React.FC<PageHeatherProps> = (props) => { /* O component que recebe variaveis por parametro precisa ser do tipo FC(FunctionComponent) */
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>

                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
            <strong>{props.title}</strong>

            {props.children}
            </div>
        </header>
    );
}

export default PageHeader;