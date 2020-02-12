import React from 'react';
import classes from './../../Styles/modules/Main.module.scss'

let Main = () => {
    return (
        <div>
            <div className={classes.item}>
                <p>2015</p>
                <p>individual entrepreneur and freelancer</p>
                <p>Cамое начало моей карьеры. Я учился в техническом университете и одновременно изучал <span style={{whiteSpace:'nowrap'}}>веб-разработку</span> и дизайн. Заказов было не так много, поэтому недостаток практики я восполнял постоянным оттачиванием навыков на собственных проектах.</p>
            </div>
            <div className={classes.item}>
                <p>2017</p>
                <p>layout designer And ui developer</p>
                <p>После окончания университета я начал работать над первым крупным проектом. Этот проект состоял в создании веб-приложения, которое решало задачу автоматизированного сбора данных о потребляемой энергии. Затем появились еще несколько стартапов направленных на создание веб-сервисов в которых я принял участие.</p>
            </div>
            <div className={classes.item}>
                <p>2019</p>
                <p>Frontend Developer on React.js </p>
                <p>After completing all the projects, I got a full-time job in an e-commerce company. After working in it for some time and getting some experience in marketing, I began to study React.js and got a job as a frontend developer at another company. There i develop and support technical solutions for bookmaker business.</p>
            </div>
        </div>
    )
}

export default Main