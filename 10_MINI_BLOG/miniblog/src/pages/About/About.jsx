import styles from './About.module.css'
import reactLogo from '../../assets/reactLogo.png'
import firebaseLogo from '../../assets/firebaseLogo.png'
import htmlLogo from '../../assets/htmlLogo.png'
import cssLogo from '../../assets/cssLogo.png'
import javascriptLogo from '../../assets/javascriptLogo.png'
import typescriptLogo from '../../assets/typescriptLogo.png'

import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className={styles.about}>
            <h2>Sobre o Mini <span>Blog</span></h2>
            <p>Este projeto consiste em um blog feito com react no front-end e Firebase no back-end.</p>

            <div >
                <img src={reactLogo} alt="React" />
                <img src={firebaseLogo} alt="Firebase" />
            </div>

            <div >
                <img src={htmlLogo} alt="HTML" />
                <img src={cssLogo} alt="CSS" />
                <img src={javascriptLogo} alt="Javascript" />
                <img src={typescriptLogo} alt="Typescript" />
            </div>

            <Link to="/posts/create" className='btn'>
                Criar post
            </Link>
        </div>
    )
}