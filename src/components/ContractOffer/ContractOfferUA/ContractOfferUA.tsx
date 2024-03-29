import logo from "@/assets/images/main/logo.webp";
import Image from "next/image";
import Link from 'next/link';
import s from "../ContractOffer.module.scss";

const ContractOfferUA = () => {


    return (
        <div className={s.container}>
            <div className={s.content}>
                <div className={s.logoBlock}>
                    <Link className={s.link2} href="/">
                        <Image className={s.logo} src={logo} alt="logo"/>
                    </Link>
                    <div>
                        <Link className={s.link2} href="/">
                            <button className={s.btn}>
                                ПОВЕРНУТИСЯ
                            </button>
                        </Link>
                    </div>
                </div>
                <h3 className={s.mainTitle}>Угода користувача</h3>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        Ця угода, адресована невизначеному колу осіб — фізичним та юридичним особам — відвідувачам сайту
                        в мережі інтернет: misakdojo.com (далі — Сайт), далі іменовані «Громадська організація», і є
                        офіційною і публічною пропозицією Громадської організації «СККК «МІСАК ДОДЖО»», далі іменується
                        Громадська організація, в особі Арзуманян Місак Алексанович, публікує цей договір, який є
                        умовами благодійного доброго вільного пожертвування (далі — договір) фізичною або юридичною
                        особою (далі — Благодійник), предмет і істотні умови якого вказані нижче:
                    </p>
                </div>
                <h5 className={s.title}>Терміни та визначення:</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Акцепт</b> — повне і безумовне прийняття угоди користувача шляхом вчинення дій по здійсненню
                        грошового переказу за допомогою платіжних форм і засобів розміщених на Сайті, а також шляхом
                        перерахування грошових коштів на розрахунковий рахунок Фонду через установи банків. Моментом
                        Акцепту є дата зарахування коштів на розрахунковий рахунок Фонду.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Платіж</b> — добровільна благодійна пожертва.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Добровільна благодійна пожертва</b> — здійсненний Благодійником грошового переказу для
                        досягнення цілей, завдань, напрямів та видів статутної діяльності.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Благодійник</b> — фізична або юридична особа, яка розміщує Замовлення на Сайті, або зазначена
                        як одержувач Товару, який отримує взамін на благодійний грошовий переказ. Погоджуючись з умовами
                        договору, ПОКУПЕЦЬ підтверджує, що він є дієздатним громадянином, який досяг 18 років, або
                        представником діючої компанії, яка має необхідні документи для дії від імені цієї юридичної
                        особи.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Громадська організація</b> — ГО «СККК «МІСАК ДОДЖО»».
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Інтернет-магазин</b> — Інтернет-сайт, розташований та має адресу в мережі Інтернет
                        misakdojo.com. На ньому
                        представлені ТОВАРИ, пропоновані ГРОМАДСЬКОЮ ОРГАНІЗАЦІЄЮ своїм Благодійникам, а також умови
                        доставки та
                        здійснення грошового переказу.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Сайт</b> — misakdojo.com .
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>Замовлення</b> — належним чином оформлений запит Благодійника на доставку за вказаною адресою
                        ТОВАРІВ,
                        розміщений Благодійником самостійно на Сайті або по телефону взамін на добровільну благодійну
                        пожертву.
                    </p>
                </div>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b> Товар</b> — об&apos;єкт матеріального світу, не вилучений з цивільного обороту і
                        представлений до
                        продажу на
                        Сайті. ТОВАРИ представлені на Сайті через фото-зразки, що є власністю Продавця.
                    </p>
                </div>
                <h5 className={s.title}>1. Предмет договору-оферти</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        1.1. ГРОМАДСЬКА ОРГАНІЗАЦІЯ зобов&apos;язується передати у власність БЛАГОДІЙНИКУ , а
                        БЛАГОДІЙНИК
                        зобов&apos;язується зробити добровільну благодійну пожертву і прийняти замовлений в
                        інтернет-магазині
                        ТОВАР.
                    </p>
                    <p className={s.text}>
                        1.2 Предметом цього договору є передача БЛАГОДІЙНИКОМ на користь ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ
                        грошових коштів для досягнення цілей, завдань, напрямів та видів статутної діяльності
                        ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ.
                    </p>
                    <p className={s.text}>
                        1.3 Акцепт Договору означає, що БЛАГОДІЙНИК згоден з усіма його положеннями, він повною мірою
                        усвідомлює предмет Договору і мету збору добровільних благодійних пожертв.
                    </p>
                    <p className={s.text}>
                        1.4 Договір укладається шляхом безумовного та повного приєднання БЛАГОДІЙНИКА до цього Договору
                        та
                        прийняття всіх істотних умов Договору.
                    </p>
                    <p className={s.text}>
                        1.5 БЛАГОДІЙНИК і ГРОМАДСЬКА ОРГАНІЗАЦІЯ, керуючись ст. 207, ч. 2 ст. 639, ст.ст. 641, 642
                        Цивільного кодексу України, ст. 7 Закону України «Про благодійну діяльність та благодійні
                        організації», погоджуються, що Договір вважається укладеним у письмовій формі без підписання
                        письмового примірника Сторонами з моменту вчинення БЛАГОДІЙНИКОМ дій, передбачених Договором, що
                        свідчать про згоду дотримуватися умов Договору.
                    </p>
                    <p className={s.text}>
                        1.6 Договір розміщено на сайті misakdojo.com у вільному доступі та у спосіб, що забезпечує
                        ознайомлення зі змістом цього Договору кожної особи, що звертається до ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ.
                    </p>
                    <p className={s.text}>
                        1.7 БЛАГОДІЙНИК не може запропонувати свої умови Договору.
                    </p>
                </div>

                <h5 className={s.title}>2. Момент укладання договору</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        2.1. Текст даного Договору є публічною офертою (відповідно до статті 638 та статті 641
                        Цивільного кодексу України).
                    </p>
                    <p className={s.text}>
                        2.2. Відповідно до статті 642 Цивільного Кодексу України у разі
                        прийняття викладених нижче умов і внесення добровільної благодійної пожертви, юридична або
                        фізична особа, яка провадить акцепт цієї оферти стає Благодійником (відповідно до ч.2 ст. 642 ЦК
                        України акцепт оферти рівносильний укладенню договору на умовах, викладених в оферті), а
                        ГРОМАДСЬКА ОРГАНІЗАЦІЯ і БЛАГОДІЙНИК спільно — сторонами договору оферти.
                    </p>
                    <p className={s.text}>
                        2.3. Факт ЗДІЙСНЕННЯ ГРОШОВОГО ПЕРЕКАЗУ ГРОМАДСЬКІЙ ОРГАНІЗАЦІЇ є беззаперечним прийняттям
                        даного Договору, і БЛАГОДІЙНИК розглядається як особа, яка вступила з ГРОМАДСЬКОЮ ОРГАНІЗАЦІЄЮ у
                        договірні відносини. Якщо БЛАГОДІЙНИК не згоден з її умовами, або з будь-яким пунктом умов,
                        ГРОМАДСЬКА ОРГАНІЗАЦІЯ пропонує БЛАГОДІЙНИКУ відмовитися від укладення Договору оферти і
                        використання послуг ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ.
                    </p>
                    <p className={s.text}>
                        <b>2.4. Оформлення замовлення:</b><br/>

                        Покупець проходить процедуру реєстрації на САЙТІ ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ з обов&apos;язковим
                        підтвердженням ознайомлення з умовами даного Договору оферти. БЛАГОДІЙНИК несе відповідальність
                        за правдивість наданої при оформленні реєстрації та Замовлення інформації. В іншому випадку
                        ГРОМАДСЬКА ОРГАНІЗАЦІЯ не несе відповідальності за своєчасну доставку.<br/><br/>

                        Зареєстрований БЛАГОДІЙНИК Інтернет-магазину має право отримати взамін на благодійний грошовий
                        переказ Товар, представлений на Сайті й наявний на складі ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ. Здійснюючи
                        БЛАГОДІЙНИЙ ГРОШОВИЙ ПЕРЕКАЗ на Сайті Інтернет-магазину, БЛАГОДІЙНИК приймає на себе
                        зобов&apos;язання з приймання ТОВАРУ, а ГРОМАДСЬКА ОРГАНІЗАЦІЯ приймає зобов&apos;язання з
                        доставки та
                        передачі у власність благодійника ТОВАРУ. Замовлення приймаються ГРОМАДСЬКОЮ ОРГАНІЗАЦІЄЮ через
                        систему прийняття ЗАМОВЛЕНЬ, інтегровану в Сайт ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ, а також телефоном.<br/><br/>

                        ГРОМАДСЬКА ОРГАНІЗАЦІЯ вправі обмежити кількість ТОВАРІВ, які благодійник оформляє в замовленні
                        взамін на благодійний грошовий переказ, проінформувавши про це БЛАГОДІЙНИКА. Після отримання
                        Замовлення ГРОМАДСЬКА ОРГАНІЗАЦІЯ надає відповідального менеджера, який від імені Громадської
                        організації погоджує з Благодійником всі істотні умови, в т. ч. доставки.<br/><br/>

                        При відсутності ТОВАРУ на складі ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ остання зобов&apos;язана проінформувати
                        про
                        це БЛАГОДІЙНИКА в письмовій (за допомогою електронної пошти) або усній формі (за допомогою
                        телефонного зв&apos;язку). В цьому випадку Благодійник має право замінити відсутній ТОВАР
                        аналогічним
                        ТОВАРОМ.<br/><br/>

                        ГРОМАДСЬКА ОРГАНІЗАЦІЯ залишає за собою право в односторонньому порядку припинити прийом
                        Замовлень від благодійника і відвантаження ТОВАРУ БЛАГОДІЙНИКУ, а також обмежити надання права
                        участі благодійника в акціях, що проводяться ГРОМАДСЬКОЮ ОРГАНІЗАЦІЄЮ, якщо БЛАГОДІЙНИК
                        систематично порушує умови даного Договору оферти або робить негативний вплив на роботу
                        Інтернет-магазину шляхом надмірної завантаження служб Інтернет-магазину. Підтвердження
                        узгоджених умов відвантаження, доставки і оплати ТОВАРУ висилаються ГРОМАДСЬКОЮ ОРГАНІЗАЦІЄЮ по
                        електронній пошті. На підставі отриманого Замовлення і узгоджених умов ГРОМАДСЬКА ОРГАНІЗАЦІЯ
                        відвантажує Товар БЛАГОДІЙНИКУ.<br/><br/>

                        Збір добровільних благодійних пожертв триває до моменту ліквідації ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ, якщо
                        інший термін не буде визначено ГРОМАДСЬКОЮ ОРГАНІЗАЦІЄЮ.
                    </p>
                </div>

                <h5 className={s.title}>3. Ціна товару</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        3.1. Ціни в Інтернет-магазині вказані в гривнях за одиницю ТОВАРУ.
                    </p>
                    <p className={s.text}>
                        3.2. Тарифи на надання послуг з доставки, навантаження-розвантаження, підйом ТОВАРУ вказані в
                        інтернет-магазині на кожен ТОВАР в залежності від його характеристики.
                    </p>
                    <p className={s.text}>
                        3.3. У разі неправильно зазначеної ціни ГРОМАДСЬКА ОРГАНІЗАЦІЯ зобов&apos;язується при першій
                        можливості повідомити про це Благодійника. При неможливості зв&apos;язатися з Покупцем
                        Замовлення
                        вважається скасованим.
                    </p>
                    <p className={s.text}>
                        3.4. БЛАГОДІЙНА ОРГАНІЗАЦІЯ залишає за собою право змінювати ціни в односторонньому порядку. При
                        цьому ціна ТОВАРІВ, сплачених Благодійником, зміні не підлягає.
                    </p>
                    <p className={s.text}>
                        3.5. Всі витрати по сплаті сум, пов’язаних з перерахуванням пожертвування, несе БЛАГОДІЙНИК.
                    </p>
                </div>

                <h5 className={s.title}>4. Оплата товару</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        4.1. При готівковій формі оплати БЛАГОДІЙНИК зобов&apos;язаний сплатити ГРОМАДСЬКІЙ ОРГАНІЗАЦІЇ
                        благодійний грошовий переказ в розмірі ціни ТОВАРУ в момент його передачі, а ГРОМАДСЬКА
                        ОРГАНІЗАЦІЯ зобов&apos;язана надати БЛАГОДІЙНИКУ касовий або товарний чек, або інший документ,
                        що
                        підтверджує благодійний грошовий переказ взамін на ТОВАР.
                    </p>
                    <p className={s.text}>
                        4.2. Повна вартість Замовлення складається з вартості ТОВАРУ в Інтернет-магазині й вартості
                        доставки.
                    </p>
                    <p className={s.text}>
                        4.3. БЛАГОДІЙНИК робить добровільну благодійну пожертву будь-яким способом, обраним в
                        Інтернет-магазині.
                    </p>
                    <p className={s.text}>
                        4.4. При безготівковій формі благодійної грошової пожертви обов&apos;язок благодійника щодо
                        сплати
                        ціни ТОВАРУ вважається виконаним з моменту надходження грошових коштів на розрахунковий рахунок
                        Громадської організації в розмірі 100% (ста відсотків) передоплати.
                    </p>
                    <p className={s.text}>
                        4.5. При безготівковій формі переведення благодійних грошових коштів взамін на Товар
                        прострочення сплати Благодійником ціни ТОВАРУ на термін понад 3 (трьох) днів є істотним
                        порушенням цього договору. В цьому випадку ГРОМАДСЬКА ОРГАНІЗАЦІЯ вправі в односторонньому
                        порядку без застосування до нього штрафних санкцій відмовитися від виконання цього договору,
                        повідомивши про це благодійника.
                    </p>
                    <p className={s.text}>
                        4.6. ТОВАРИ поставляються БЛАГОДІЙНИКУ за цінами, найменуванню, в кількості, що відповідає
                        ЗАМОВЛЕННЮ БЛАГОДІЙНИКА.
                    </p>
                </div>

                <h5 className={s.title}>5. Доставка товару</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        5.1. ГРОМАДСЬКА ОРГАНІЗАЦІЯ здійснює доставку ТОВАРУ за допомогою власної або зовнішньої служби
                        доставки.
                    </p>
                    <p className={s.text}>
                        5.2. Точна вартість доставки ТОВАРУ визначається менеджером ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ при
                        оформленні Замовлення і не може бути змінена після узгодження Замовлення з Благодійником.
                    </p>
                    <p className={s.text}>
                        5.3. Вартість доставки може варіюватися в залежності від ваги, розмірів ТОВАРУ, а так само
                        регіону і способу доставки.
                    </p>
                    <p className={s.text}>
                        5.4. При передачі ТОВАРУ БЛАГОДІЙНИКУ представник служби доставки має право вимагати документ,
                        що засвідчує особу благодійника, з метою протидії шахрайству.
                    </p>
                    <p className={s.text}>
                        5.5. ГРОМАДСЬКА ОРГАНІЗАЦІЯ зобов&apos;язується докласти всіх можливих зусиль для здійснення
                        доставки
                        ТОВАРУ, замовленого Благодійником, в терміни, зазначені на Сайті. Проте, ГРОМАДСЬКА ОРГАНІЗАЦІЯ
                        не бере на себе відповідальність за затримки, що сталося не з вини ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ.
                    </p>
                    <p className={s.text}>
                        5.6. Право власності на ТОВАР і всі ризики, пов&apos;язані з правом власності, переходять до
                        БЛАГОДІЙНИКА в момент отримання ТОВАРУ БЛАГОДІЙНИКОМ, що підтверджується підписом БЛАГОДІЙНИКА в
                        відвантажувальних документах, що підтверджують доставку.
                    </p>
                    <p className={s.text}>
                        5.7. У разі зміни терміну поставки, ГРОМАДСЬКА ОРГАНІЗАЦІЯ зобов&apos;язується негайно
                        інформувати
                        БЛАГОДІЙНИКА про зміну умов поставки з метою отримання згоди на нові умови виконання Замовлення.
                        ГРОМАДСЬКА ОРГАНІЗАЦІЯ інформує БЛАГОДІЙНИКА за допомогою телефонного або електронного
                        зв&apos;язку.
                    </p>
                    <p className={s.text}>
                        5.8. Доставка ТОВАРУ БЛАГОДІЙНИКУ здійснюється за адресою і в терміни, узгоджені Благодійником і
                        менеджером ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ при оформленні ЗАМОВЛЕННЯ.
                    </p>
                    <p className={s.text}>
                        5.9. Неявка благодійника або не вчинення інших необхідних дій для прийняття ТОВАРУ можуть
                        розглядатися ГРОМАДСЬКОЮ ОРГАНІЗАЦІЄЮ в якості відмови покупця від виконання договору.
                    </p>
                </div>

                <h5 className={s.title}>6. Права та обов&apos;язки сторін</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        <b>6.1. ГРОМАДСЬКА ОРГАНІЗАЦІЯ зобов&apos;язується:</b> <br/>
                    </p>
                    <p className={s.text}>
                        6.1.1. До укладення договору надати БЛАГОДІЙНИКУ на сайті Інтернет-магазину інформацію про
                        основні споживчі властивості ТОВАРУ, про адресу (місцезнаходження) ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ, про
                        місце виготовлення ТОВАРУ, про повне фірмове найменування (найменування) Громадської
                        організації, про умови передачі ТОВАРУ взамін на добровільну благодійну пожертву, про його
                        доставку, термін придатності, правила зберігання, про порядок здійснення добровільної
                        благодійної пожертви в розмірі ціни ТОВАРУ, а також про термін, протягом якого діє пропозиція
                        про укладення Договору.
                    </p>
                    <p className={s.text}>
                        6.1.2. Не розголошувати будь-яку приватну інформацію БЛАГОДІЙНИКА і не надавати доступ до цієї
                        інформації третім особам, за винятком випадків, передбачених українським законодавством.
                    </p>
                    <p className={s.text}>
                        6.1.3. Надати БЛАГОДІЙНИКУ можливість отримання безкоштовних телефонних консультацій за
                        телефонами, вказаними на Сайті Інтернет-магазину. Обсяг консультацій обмежується конкретними
                        питаннями, пов&apos;язаними з виконанням ЗАМОВЛЕННЯ.
                    </p>
                    <p className={s.text}>
                        6.1.4. Отримувати добровільні благодійні пожертви і використовувати їх для досягнення цілей,
                        завдань, напрямів та видів статутної діяльності Громадської організації відповідно до Договору
                        та Закону України «Про благодійну діяльність та благодійні організації».
                    </p>
                    <p className={s.text}>
                        6.1.5. За проханням БЛАГОДІЙНИКА надавати звіт про отриману добровільну благодійну пожертву та
                        її використання.
                    </p>
                    <p className={s.text}>
                        6.1.6. ГРОМАДСЬКА ОРГАНІЗАЦІЯ залишає за собою право змінювати даний ДОГОВІР в односторонньому
                        порядку до моменту його укладення.
                    </p>
                    <p className={s.text}>
                        <b>6.2. Благодійник зобов&apos;язується:</b> <br/>
                    </p>
                    <p className={s.text}>
                        6.2.1. До моменту укладення договору ознайомитися зі змістом договору-оферти, умовами переказу
                        добровільної благодійної пожертви в розмірі ціни Товару та доставки на Сайті Інтернет-магазину.
                    </p>
                    <p className={s.text}>
                        6.2.2. Надавати достовірну інформацію про себе (ПІБ, контактні телефони, адресу електронної
                        пошти) і реквізити для доставки ТОВАРУ.
                    </p>
                    <p className={s.text}>
                        6.2.3. Прийняти ТОВАР та зробити добровільну благодійну пожертву в розміри ціни Товару в
                        зазначені в цьому ДОГОВОРІ терміни.
                    </p>
                </div>

                <h5 className={s.title}>7. Відповідальність сторін та вирішення спорів</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        7.1. Сторони несуть відповідальність за невиконання або неналежне виконання цього Договору в
                        порядку, передбаченому цим Договором та чинним законодавством України.
                    </p>
                    <p className={s.text}>
                        7.2. Громадська організація не несе відповідальності за доставку Замовлення, якщо Благодійником
                        вказано неправильну адресу доставки.
                    </p>
                    <p className={s.text}>
                        7.3. ГРОМАДСЬКА ОРГАНІЗАЦІЯ не несе відповідальності, якщо очікування БЛАГОДІЙНИКА про споживчі
                        властивості ТОВАРУ виявилися не виправдані.
                    </p>
                    <p className={s.text}>
                        7.4. Благодійник, оформляючи Замовлення, несе відповідальність за достовірність наданої
                        інформації про себе, а також підтверджує, що з умовами цього Договору ознайомлений і згоден.
                    </p>
                    <p className={s.text}>
                        7.5. ГРОМАДСЬКА ОРГАНІЗАЦІЯ не несе відповідальності за неможливість обслуговування БЛАГОДІЙНИКА
                        з яких-небудь незалежних від нього причин, включаючи порушення роботи ліній зв&apos;язку,
                        несправність обладнання, невиконання зобов&apos;язань постачальників тих чи інших послуг.
                    </p>
                    <p className={s.text}>
                        7.6. У разі якщо з якої-небудь причини ГРОМАДСЬКА ОРГАНІЗАЦІЯ не відвантажить ТОВАР Благодійнику
                        або відвантажить ТОВАР з порушенням термінів, відповідальність Громадської організації за
                        допущене порушення Договору оферти обмежуються виключно продовженням термінів доставки Товару.
                    </p>
                    <p className={s.text}>
                        7.7. ГРОМАДСЬКА ОРГАНІЗАЦІЯ за жодних обставин не несе відповідальності за Договором оферти за:
                        a) будь-які дії та / або бездіяльності, що є прямим або непрямим результатом дій / бездіяльності
                        будь-яких третіх сторін; б) будь-які непрямі збитки та / або упущену вигоду благодійника і / або
                        третіх сторін незалежно від того, могла ГРОМАДСЬКА ОРГАНІЗАЦІЯ передбачити можливість таких
                        збитків чи ні; в) використання (неможливість використання) і які б то не було наслідки
                        використання (неможливості використання) Благодійником обраної ним форми оплати ТОВАРУ за
                        Договором оферти.
                    </p>
                    <p className={s.text}>
                        7.8. Сукупна відповідальність Громадської організації за Договором оферти, по будь-яким позовом
                        або претензії щодо Договору оферти або його виконання, обмежується сумою платежу, сплаченого
                        ГРОМАДСЬКІЙ ОРГАНІЗАЦІЇ Благодійником за Договором оферти.
                    </p>
                    <p className={s.text}>
                        7.9. Не вступаючи в суперечність із зазначеним вище, ГРОМАДСЬКА ОРГАНІЗАЦІЯ звільняється від
                        відповідальності за порушення умов Договору оферти, якщо таке порушення викликане дією обставин
                        непереборної сили (форс-мажор), включаючи: дії органів державної влади, пожежа, повінь,
                        землетрус, інші стихійні дії, відсутність електроенергії та / або збоїв роботи комп&apos;ютерної
                        мережі, страйки, громадянські заворушення, безлади, будь-які інші обставини, не обмежуючись
                        перерахованим, які можуть вплинути на виконання ГРОМАДСЬКОЮ ОРГАНІЗАЦІЄЮ Договору оферти.
                    </p>
                    <p className={s.text}>
                        7.10. Всі суперечки і розбіжності, що виникають при виконанні Сторонами зобов&apos;язань за цим
                        Договором, вирішуються шляхом переговорів. У разі неможливості їх усунення, СТОРОНИ мають право
                        звернутися за судовим захистом своїх інтересів.
                    </p>
                </div>

                <h5 className={s.title}>8. Повернення і обмін товару</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        8.1. ТОВАР, отриманий Благодійником від ГРОМАДСЬКОЇ ОРГАНІЗАЦІЇ взамін на добровільну благодійну
                        пожертву не підлягає обміну або поверненню.
                    </p>
                    <p className={s.text}>
                        8.2. Пожертва є добровільною та не підлягає поверненню.
                    </p>

                </div>

                <h5 className={s.title}>9. Форс-мажорні обставини</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        9.1. Сторони звільняються від відповідальності за невиконання або неналежне виконання
                        зобов&apos;язань за Договором на час дії непереборної сили. Під непереборною силою розуміються
                        надзвичайні і непереборні за даних умов обставини, що перешкоджають виконанню своїх
                        зобов&apos;язань
                        Сторонами за цим Договором. До них відносяться стихійні явища (землетруси, повені і т.д.),
                        обставини суспільного життя (воєнні дії, надзвичайні стани, найбільші страйки, епідемії і т.д.),
                        заборонні заходи державних органів (заборона перевезень, валютні обмеження, міжнародні санкції
                        заборони на торгівлю і т.д.). Протягом цього часу СТОРОНИ не мають взаємних претензій, і кожна з
                        сторін приймає на себе свій ризик наслідків форс-мажорних обставин.
                    </p>
                </div>

                <h5 className={s.title}>10. Термін дії договору</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        10.1. Даний Договір набирає чинності з моменту звернення Благодійника в Інтернет-магазин і
                        оформлення ЗАМОВЛЕННЯ та здійснення добровільної благодійної пожертви взамін на Товар, і
                        закінчується при повному виконанні зобов&apos;язань Сторонами.
                    </p>
                </div>

                <h5 className={s.title}>11. Персональні дані</h5>
                <div className={s.textBlock}>
                    <p className={s.text}>
                        11.1. ГРОМАДСЬКА ОРГАНІЗАЦІЯ збирає і обробляє персональні дані БЛАГОДІЙНИКІВ (а саме: прізвище,
                        ім&apos;я, по батькові покупця; адреса доставки; контактний телефон) з метою: - Виконання умов
                        цього
                        Договору; - Доставки Благодійнику замовленого Товару.
                    </p>
                    <p className={s.text}>
                        11.2. Здійснюючи Замовлення ТОВАРУ в Інтернет-магазин, Благодійник дає згоду на збір і обробку
                        персональних даних про себе з метою здійснення доставки замовленого ТОВАРУ і виконання умов
                        цього Договору.
                    </p>
                    <p className={s.text}>
                        11.3. При зборі та обробці персональних даних БЛАГОДІЙНИКІВ, ГРОМАДСЬКА ОРГАНІЗАЦІЯ не
                        переслідує інших цілей, окрім встановлених в п.11.1 цього Договору.
                    </p>
                    <p className={s.text}>
                        11.4. Доступ до персональних даних БЛАГОДІЙНИКІВ мають тільки особи, що мають безпосереднє
                        відношення до виконання ЗАМОВЛЕНЬ.
                    </p>
                    <p className={s.text}>
                        11.5. Інформація про благодійника може бути передана офіційним органам строго відповідно до
                        вимог законодавства України.
                    </p>
                    <p className={s.text}>
                        11.6. ГРОМАДСЬКА ОРГАНІЗАЦІЯ має право направляти БЛАГОДІЙНИКУ рекламні або інформаційні
                        повідомлення. Благодійник має право відмовитися від рекламно-інформаційних повідомлень,
                        направивши ГРОМАДСЬКІЙ ОРГАНІЗАЦІЇ відповідне письмове повідомлення.
                    </p>
                </div>
                <div className={s.logoBlock}>
                    <Link className={s.link2} href="/">
                        <Image className={s.logo} src={logo} alt="logo"/>
                    </Link>
                    <div>
                        <Link className={s.link2} href="/">
                            <button className={s.btn}>
                                ПОВЕРНУТИСЯ
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContractOfferUA;
