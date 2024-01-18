'use client';

import {useTranslation} from "react-i18next";
import logo from "@/assets/images/main/logo.webp";
import Image from "next/image";
import s from "../PrivacyPolicyPage.module.scss";
import {useRouter} from "next/navigation";
import cn from "classnames";

const PrivacyPolicyPageRU = () => {
    const {i18n,t} = useTranslation();
    const currentLanguage = i18n.language;
    const router = useRouter();

    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.logoBlock} onClick={() => router.push('/' + currentLanguage)}>
                        <Image className={s.logo} src={logo} alt="logo"/>
                    <div onClick={() => router.push('/' + currentLanguage)}>

                            <button className={s.btn}>
                                {t("return")}
                            </button>
                    </div>
                </div>
                <h3 className={cn(s.mainTitle, s.titleRU)}>Политика конфиденциальности</h3>
                <h5 className={s.title}>1. Общие положения</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        Настоящая политика обработки персональных данных создана в соответствии с требованиями закона
                        Украины от 01.06.2010 № 2297-VI «О защите персональных данных» и определяет порядок обработки
                        персональных данных и меры по обеспечению безопасности персональных данных ОО «СККК «МИСАК
                        ДОДЖО»» (далее – Оператор).
                    </p>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Оператор ставит важнейшей целью и условием своей деятельности уважение прав и свобод
                            человека и гражданина при обработке его персональных данных, включая защиту права на
                            неприкосновенность частной жизни, личную и семейную тайну.
                        </li>
                        <li className={s.text}>
                            Политика Оператора по обработке персональных данных (далее – Политика) распространяется на
                            всю информацию, которую Оператор может получать о посетителях сайта <a
                            href="https://misakdojo.com/" className={s.link}>https://misakdojo.com/</a>.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>2. Основные понятия, используемые в Политике</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Автоматизированная обработка персональных данных – обработка персональных данных с
                            использованием средств вычислительной техники;
                        </li>
                        <li className={s.text}>
                            Блокировка персональных данных – временное прекращение обработки персональных данных (кроме
                            случаев, когда обработка необходима для уточнения персональных данных);
                        </li>
                        <li className={s.text}>
                            Сайт – совокупность графических и информационных материалов, а также программ для ЭВМ и баз
                            данных, обеспечивающих их доступность в сети Интернет по сетевому адресу
                            <a href="https://misakdojo.com/" className={s.link}>https://misakdojo.com/</a>;
                        </li>
                        <li className={s.text}>
                            Информационная система персональных данных — совокупность персональных данных, содержащихся
                            в базах данных, а также информационных технологий и технических средств, обеспечивающих
                            обработку персональных данных;
                        </li>
                        <li className={s.text}>
                            Обезличивание персональных данных — действия, в результате которых невозможно определить
                            принадлежность персональных данных конкретному Пользователю или иному субъекту персональных
                            данных без использования дополнительной информации;
                        </li>
                        <li className={s.text}>
                            Обработка персональных данных – любое действие (операция) или совокупность действий
                            (операций), осуществляемых средствами автоматизации или без использования таких средств с
                            персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение
                            (обновление, изменение), извлечение, использование, передачу (распространение,
                            предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных
                            данных;
                        </li>
                        <li className={s.text}>
                            Оператор – государственный орган, муниципальный орган, юридическое или физическое лицо,
                            которое самостоятельно или совместно с другими лицами организовывает и (или) осуществляет
                            обработку персональных данных, а также основные цели обработки персональных данных, состав
                            персональных данных, которые подлежат обработке, действия (операции), происходящие с
                            персональными данными;
                        </li>
                        <li className={s.text}>
                            Персональные данные – любая информация, которая прямо или косвенно относится к Пользователю
                            веб-сайта <a href="https://misakdojo.com/"
                                         className={s.link}>https://misakdojo.com/</a>, который уже идентифицирован или
                            определяется;
                        </li>
                        <li className={s.text}>
                            Пользователь – любой посетитель сайта <a href="https://misakdojo.com/"
                                                                     className={s.link}>https://misakdojo.com/</a>;
                        </li>
                        <li className={s.text}>
                            Предоставление персональных данных – действия, направленные на раскрытие персональных данных
                            определенному лицу или определенной группе лиц;
                        </li>
                        <li className={s.text}>
                            Распространение персональных данных – любые действия, направленные на раскрытие персональных
                            данных неопределенному кругу лиц (передача персональных данных) или доступ к персональным
                            данным неограниченного числа лиц, включая раскрытие персональных данных в средствах массовой
                            информации, размещение в информационных и телекоммуникационных сетях или предоставление
                            доступа к персональным данным любым другим способом;
                        </li>
                        <li className={s.text}>
                            Трансграничная передача персональных данных – передача персональных данных на территорию
                            иностранного государства иностранному органу власти, иностранному физическому или
                            иностранному юридическому лицу;
                        </li>
                        <li className={s.text}>
                            Уничтожение персональных данных – любые действия, в результате которых персональные данные
                            уничтожаются безвозвратно с невозможностью дальнейшего восстановления содержания
                            персональных данных в информационной системе персональных данных и (или) в результате
                            которых уничтожаются материальные носители персональных данных.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>3. Оператор может обрабатывать следующие персональные данные Пользователя</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Фамилия, имя, отчество;
                        </li>
                        <li className={s.text}>
                            Адрес электронной почты;
                        </li>
                        <li className={s.text}>
                            Номера телефонов;
                        </li>
                        <li className={s.text}>
                            Сайт также собирает и обрабатывает обезличенные данные пользователей (в том числе файлы
                            «cookie») с помощью сервисов интернет-статистики (Yandex Metrika, Google Analytics и др.).
                        </li>
                        <li className={s.text}>
                            Вышеуказанные данные далее в тексте Политики объединены общим понятием Персональные данные.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>4. Цель обработки персональных данных</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Целью обработки персональных данных Пользователя является информирование Пользователя
                            посредством отправки электронных писем.
                        </li>
                        <li className={s.text}>
                            Оператор также имеет право рассылать Пользователю уведомления о новых продуктах и услугах,
                            специальных предложениях и различных событиях. Пользователь всегда может отказаться от
                            получения информационных сообщений, отправив Оператору письмо на электронный адрес
                            MisakDojo@gmail.com с пометкой «Отказ от уведомления о новых товарах и услугах, специальных
                            предложениях».
                        </li>
                        <li className={s.text}>
                            Обезличенные данные Пользователей, полученные через службы интернет-статистики, используются
                            для сбора информации о действиях Пользователей на сайте, для улучшения качества сайта и его
                            содержания.
                        </li>

                    </ol>
                </div>
                <h5 className={s.title}>5. Правовые основания обработки персональных данных</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Оператор обрабатывает персональные данные Пользователя только в случае заполнения и / или
                            отправки Пользователем специальной формы, расположенной на сайте
                            <a href="https://misakdojo.com/"
                               className={s.link}>https://misakdojo.com/</a>.
                            Заполняя соответствующую форму и / или отправляя свои персональные данные Оператору,
                            Пользователь соглашается с настоящей Политикой.
                        </li>
                        <li className={s.text}>
                            Оператор обрабатывает обезличенные данные о Пользователе, если это разрешено в настройках
                            браузера Пользователя (включено сохранение файлов «cookie» и использование технологии
                            JavaScript).
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>
                    6. Порядок сбора, хранения, передачи и других видов обработки персональных данных.
                </h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        Безопасность персональных данных, обрабатываемых Оператором, обеспечивается путем принятия
                        правовых, организационных и технических мер, необходимых для полного соблюдения требований
                        действующего законодательства в области защиты персональных данных.
                    </p>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Оператор обеспечивает хранение персональных данных и принимает все необходимые меры для
                            исключения доступа к персональным данным посторонними лицами.
                        </li>
                        <li className={s.text}>
                            Персональные данные Пользователя ни при каких обстоятельствах не будут переданы третьим
                            лицам, за исключением случаев, связанных с исполнением действующего законодательства.
                        </li>
                        <li className={s.text}>
                            В случае определения неточностей в персональных данных Пользователь может обновить их
                            самостоятельно, отправив Оператору сообщение на адрес электронной почты Оператора
                            MisakDojo@gmail.com с пометкой «Обновление персональных данных».
                        </li>
                        <li className={s.text}>
                            Строк обробки персональних даних є необмеженим. Користувач може в будь-який момент
                            відкликати свою згоду на обробку персональних даних, направивши Оператору повідомлення
                            електронною поштою на електронну адресу Оператора MisakDojo@gmail.com с позначкою
                            «Відкликання згоди на обробку персональних даних».
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>7. Трансграничная передача персональных данных</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Перед трансграничной передачей персональных данных оператор должен убедиться, что
                            иностранное государство, на территорию которого предполагается осуществить передачу
                            персональных данных, обеспечивает надежную защиту прав субъектов персональных данных.
                        </li>
                        <li className={s.text}>
                            Трансграничная передача персональных данных на территории иностранных государств, которые не
                            соответствуют вышеуказанным требованиям, может осуществляться только в случае письменного
                            согласия субъекта персональных данных на трансграничную передачу его персональных данных и /
                            или исполнение договора, стороной которого является субъект персональных данных.
                        </li>
                    </ol>
                </div>
                <h5 className={s.title}>8. Заключительные положения</h5>
                <div className={s.textBlock}>
                    <ol className={s.list}>
                        <li className={s.text}>
                            Пользователь может получить любые разъяснения по вопросам, связанным с обработкой его
                            персональных данных, связавшись с Оператором по электронной почте MisakDojo@gmail.com.
                        </li>
                        <li className={s.text}>
                            В этом документе будут отражены любые изменения в политике обработки персональных данных
                            Оператором. Политика действует бессрочно, пока не будет заменена новой версией.
                        </li>
                        <li className={s.text}>
                            Текущая версия Политики находится в свободном доступе в сети Интернет по адресу <a
                            href="https://misakdojo.com/privacy-policy"
                            className={s.link}>https://misakdojo.com/privacy-policy</a>.
                        </li>
                    </ol>
                </div>
                <div className={s.logoBlock} onClick={() => router.push('/' + currentLanguage)}>
                        <Image className={s.logo} src={logo} alt="logo"/>
                    <div onClick={() => router.push('/' + currentLanguage)}>
                            <button className={s.btn}>
                                {t("return")}
                            </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicyPageRU;
