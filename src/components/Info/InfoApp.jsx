import React from 'react';
import '../Info/infoApp.css'
import chil from '../Info/зара-removebg-preview.png'
import chill2 from '../Info/last.png'
import Footer from '../footer/Footer';


const InfoApp = ({colInfo}) => {
    return (
        <div className='block-Info' style={{backgroundColor: `${colInfo}`}}>
            

            <h1> Информация о себе 🥰</h1>
            <div style={{display: 'flex', justifyContent:'center'}}>
           <div className='block__info-study'>
            <p><strong>Меня зовут Саид</strong> , мне 30 лет, обучался в Hogwards, специальность IT разработчик, на данный момент я работаю в компании Google, разработчиком Strong senior, иду на повышение но не точно😂😂, окончил Hogwards на золотой диплом, также окончил Makers в Бишкеке и закончил на золотой диплом. </p>
            <div className='photo'></div>
            </div>
            </div>


            <div  style={{display: 'flex', marginTop: "-100px",justifyContent:'center'}}>

            <div className='block__info-study'>
               <div className='photo__2'></div>
                <p>Родился я в Кыргызстане в городе Бишкек, с детсва я интересуюсь компьютерами, после школы я активно начал заниматься программированием на постоянной основе, и помогал мне в этом всю мою жизнь Makers courses, чему я очень благодарен, моим наставником был Азрет, и его коллеги которых я очень уважаю и посей день Айзирек и Эмира😌.   </p>
            </div>
            </div>
            <div className='block__info-story'>
                <p><strong> Мои цели: </strong>Я также очень активно занимаюсь спортом, а именно: Бокс, кикбокс, и моей мечтой в детсве было стать футболистом, но мне также в один момент моей жизни я влюбился в баскетбол, и поставил себе цель стать профи, которую я выполнил играя в NBA в 20 лет, играл я там 5 лет, в Канадской команде Toronto Raptors. Карьера получилась довольно удачной, после чего я начал исполнять свою вторую мечту стать Google разработчиком. </p>
                <div className='nba'>
                <div className='jordan'></div>
                <div className='goat'></div>
                <div className='koby'></div>
                </div>
              
              
            </div>
            <div className='block__info-last'>
                <strong>Мои Скиллы :</strong>
                <ul>
                    <li>Верстка сайтов</li>
                   <li>Pазработка приложений разных уровней</li> 
                    <li>Решение технических проблем</li> 
                    <li> IT языки: JS, Python, JAVA, S# </li>
                    <li>Языки: English, france, russia, kyrgyz</li>  

                </ul>
                
            </div>
            <Footer/>
        </div>
    );
};

export default InfoApp;