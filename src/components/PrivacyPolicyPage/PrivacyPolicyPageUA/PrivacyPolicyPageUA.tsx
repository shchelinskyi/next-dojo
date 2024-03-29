'use client';

import {useTranslation} from "react-i18next";
import logo from "@/assets/images/main/logo.webp";
import Image from "next/image";
import Link from 'next/link';
import s from "../PrivacyPolicyPage.module.scss";


const PrivacyPolicyPageUA = () => {
    const {t} = useTranslation();



    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.logoBlock}>
                    <Link href="/">
                        <Image className={s.logo} src={logo} alt="logo"/>
                    </Link>
                    <div>
                        <Link href="/">
                            <button className={s.btn}>
                                {t("return")}
                            </button>
                        </Link>
                    </div>
                </div>
                <h3 className={s.mainTitle}>Політика конфіденційності</h3>
                <h5 className={s.title}>1. Загальні положення</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        Справжня політика обробки персональних даних створена відповідно до вимог
                        закону України від 01.06.2010 № 2297-VI «Про захист персональних даних» та визначає порядок
                        обробки персональних даних та заходи щодо забезпечення безпеки персональних даних ГО «СККК
                        «МІСАК ДОДЖО»» (далі – Оператор).</p>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Оператор ставить за найважливішу мету та умову здійснення своєї
                            діяльності дотримання прав
                            та свобод людини й громадянина під час обробки його персональних даних, в тому числі захист
                            прав на недоторканність приватного життя, особистої та сімейної таємниці.
                        </li>
                        <li className={s.text}>
                            Політика Оператора щодо обробки персональних даних (далі – Політика)
                            застосовується до всієї
                            інформації, яку Оператор може отримати про відвідувачів вебсайту <a
                            href="https://misakdojo.com/" className={s.link}>https://misakdojo.com/</a>.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>2. Основні поняття, які використовуються в Політиці</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Автоматизована обробка персональних даних – обробка персональних даних за
                            допомогою засобів обчислювальної техніки;
                        </li>
                        <li className={s.text}>
                            Блокування персональних даних – тимчасове припинення обробки персональних
                            даних (за винятком випадків, якщо обробка є необхідною для уточнення персональних даних);
                        </li>
                        <li className={s.text}>
                            Вебсайт – сукупність графічних та інформаційних матеріалів, а також програм для ЕОМ і баз
                            даних, що забезпечують їх доступність у мережі інтернет за мережевою адресою
                            <a href="https://misakdojo.com/" className={s.link}>https://misakdojo.com/</a>;
                        </li>
                        <li className={s.text}>
                            Інформаційна система персональних даних — сукупність персональних даних, що містяться в
                            базах даних, та інформаційних технологій і технічних засобів, що забезпечують обробку
                            персональних даних;
                        </li>
                        <li className={s.text}>
                            Знеособлення персональних даних — дії, в результаті яких неможливо визначити належність
                            персональних даних конкретному Користувачеві або іншому суб&apos;єкту персональних даних без
                            використання додаткової інформації;
                        </li>
                        <li className={s.text}>
                            Обробка персональних даних – будь-яка дія (операція) або сукупність дій (операцій), що
                            здійснюються шляхом використання засобів автоматизації або без використання таких засобів з
                            персональними даними, включаючи збір, запис, систематизацію, накопичення, зберігання,
                            уточнення (оновлення, зміна), витяг, використання, передачу (розповсюдження, надання,
                            доступ), знеособлення, блокування, видалення, знищення персональних даних;
                        </li>
                        <li className={s.text}>
                            Оператор – державний орган, муніципальний орган, юридична або фізична особа, що самостійно
                            або разом з іншими особами організовує та (або) здійснює обробку персональних даних, а також
                            основні цілі обробки персональних даних, склад персональних даних, що підлягають обробці,
                            дії (операції), що відбуваються з персональними даними;
                        </li>
                        <li className={s.text}>
                            Персональні дані – будь-яка інформація, що прямо або опосередковано відноситься до
                            Користувача вебсайту <a href="https://misakdojo.com/"
                                                    className={s.link}>https://misakdojo.com/</a>, який вже визначений
                            або визначається;
                        </li>
                        <li className={s.text}>
                            Користувач – будь-який відвідувач вебсайту <a href="https://misakdojo.com/"
                                                                          className={s.link}>https://misakdojo.com/</a>;
                        </li>
                        <li className={s.text}>
                            Надання персональних даних – дії, направлені на розкриття персональних даних певній особі
                            або певному колу осіб;
                        </li>
                        <li className={s.text}>
                            Розповсюдження персональних даних – будь-які дії, направленні на розкриття персональних
                            даних невизначеному колу осіб (передача персональних даних) або ознайомлення з персональними
                            даними необмеженого кола осіб, в тому числі оприлюднення персональних даних в засобах
                            масової інформації, розміщення в інформаційно-телекомунікаційних мережах або надання доступу
                            до персональних даних будь-яким іншим шляхом;
                        </li>
                        <li className={s.text}>
                            Транскордонна передача персональних даних – передача персональних даних на територію
                            іноземної держави органові влади іноземної держави, іноземній фізичній або іноземній
                            юридичній особі;
                        </li>
                        <li className={s.text}>
                            Знищення персональних даних – будь-які дії, в результаті яких персональні дані знищуються
                            безповоротно з неможливістю подальшого відновлення змісту персональних даних в інформаційній
                            системі персональних даних та (або) в результаті яких знищуються матеріальні носії
                            персональних даних.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>3. Оператор може обробляти наступні персональні дані Користувача</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Прізвище, ім&apos;я, по батькові;
                        </li>
                        <li className={s.text}>
                            Електронна адреса;
                        </li>
                        <li className={s.text}>
                            Номера телефонів;
                        </li>
                        <li className={s.text}>
                            Також на сайті відбувається збір та обробка знеособлених даних користувачів (в тому числі
                            файлів «cookie») за допомогою сервісів інтернет-статистики (Яндекс Метрика, Гугл Аналітика
                            та ін.).
                        </li>
                        <li className={s.text}>
                            Вищевказані дані далі по тексту Політики об&apos;єднані загальним поняттям Персональні дані.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>4. Мета обробки персональних даних</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Мета обробки персональних даних Користувача — інформування Користувача шляхом надсилання
                            електронних листів.
                        </li>
                        <li className={s.text}>
                            Також Оператор має право відправляти Користувачеві повідомлення про нові продукти та
                            послуги, спеціальні пропозиції та різноманітні події. Користувач завжди може відмовитись від
                            отримання інформаційних повідомлень, направивши Оператору лист на адресу електронної пошти
                            MisakDojo@gmail.com з позначкою «Відмова від повідомлень про нові продукти та послуги,
                            спеціальні пропозиції».
                        </li>
                        <li className={s.text}>
                            Знеособлені дані Користувачів, отримані за допомогою сервісів інтернет-статистики, служать
                            для збору інформації про дії Користувачів на сайті, покращення якості сайту та його змісту.
                        </li>

                    </ol>
                </div>
                <h5 className={s.title}>5. Правові підстави обробки персональних даних</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Оператор обробляє персональні дані Користувача лише у випадку самостійно заповненої та/або
                            відправленої Користувачем спеціальної форми, розташованої на сайті <a
                            href="https://misakdojo.com/" className={s.link}>https://misakdojo.com/</a>.
                            Заповнюючи відповідну форму та/або відправляючи свої персональні дані Операторові,
                            Користувач надає свою згоду з даною Політикою.
                        </li>
                        <li className={s.text}>
                            Оператор обробляє знеособлені дані щодо Користувача у випадку, якщо це дозволено в
                            налаштуваннях браузера Користувача (ввімкнено збереження файлів «cookie» та використання
                            технології JavaScript).
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>
                    6. Порядок збору, зберігання, передачі та інших видів обробки персональних
                    даних
                </h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        Безпека персональних даних, які обробляються Оператором, забезпечується шляхом реалізації
                        правових, організаційних та технічних заходів, необхідних для виконання в повному обсязі вимог
                        чинного законодавства в області захисту персональних даних.</p>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Оператор забезпечує збереження персональних даних та вживає всіх необхідних заходів, що
                            виключають доступ до персональних даних неуповноваженими особами.
                        </li>
                        <li className={s.text}>
                            Персональні дані Користувача ніколи, ні за яких умов не будуть передані третім особам, за
                            виключенням випадків, що пов&apos;язані з виконанням чинного законодавства.
                        </li>
                        <li className={s.text}>
                            У випадку виявлення неточностей в персональних даних, Користувач може актуалізувати їх
                            самостійно шляхом направлення Оператору повідомлення на адресу електронної пошти Оператора
                            MisakDojo@gmail.com з позначкою «Актуалізація персональних даних».
                        </li>
                        <li className={s.text}>
                            Строк обробки персональних даних є необмеженим. Користувач може в будь-який момент
                            відкликати свою згоду на обробку персональних даних, направивши Оператору повідомлення
                            електронною поштою на електронну адресу Оператора MisakDojo@gmail.com с позначкою
                            «Відкликання згоди на обробку персональних даних».
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>7. Транскордонна передача персональних даних</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Оператор до початку здійснення транскордонної передачі персональних даних зобов&apos;язаний
                            впевнитися в тому, що іноземною державою, на територію якої передбачається здійснювати
                            передачу персональних даних, забезпечується надійний захист прав суб&apos;єктів персональних
                            даних.
                        </li>
                        <li className={s.text}>
                            Транскордонна передача персональних даних на території іноземних держав, що не відповідають
                            вищевказаним вимогам, може здійснюватись лише у випадку згоди у письмовій формі суб&apos;єкту
                            персональних даних на транскордонну передачу його персональних даних та/або виконання
                            договору, стороною якого виступає суб&apos;єкт персональних даних.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>8. Кінцеві положення</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Користувач може отримати будь-які роз&apos;яснення щодо питань, які стосуються обробки його
                            персональних даних, звернувшись до Оператора за допомогою електронної пошти
                            MisakDojo@gmail.com.
                        </li>
                        <li className={s.text}>
                            В даному документі показуватимуться будь-які зміни політики обробки персональних даних
                            Оператором. Політика діє безстроково до заміни її новою версією.
                        </li>
                        <li className={s.text}>
                            Актуальна версія Політики в вільному доступі розташована у мережі Інтернет за адресою <a
                            href="https://misakdojo.com/privacy-policy" className={s.link}>https://misakdojo.com/privacy-policy</a>.
                        </li>
                    </ol>
                </div>
                <div className={s.logoBlock}>
                    <Link href="/">
                        <Image className={s.logo} src={logo} alt="logo"/>
                    </Link>
                    <div>
                        <Link href="/">
                            <button className={s.btn}>
                                {t("return")}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPageUA;
