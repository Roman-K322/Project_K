const bookContentElement = document.getElementById('book-content');
const bookText = `
	<p><h1>Хавьер Мариа <br>Берта Исла</h1></p>
	<p>Какое-то время она не была уверена, что ее муж – это ее муж, так в полудреме мы не всегда можем понять, снится нам что-то или происходит наяву, управляем мы своими мыслями или, утомившись, теряем их нить. Иногда она верила, что да, это ее муж, иногда не верила, а иногда решала вообще ничему не верить и просто продолжать жить с ним, то есть с мужчиной, который похож на ее мужа, хотя и выглядит старше. Впрочем, она и сама стала старше за время его отсутствия, а ведь замуж вышла совсем молодой.

Именно такие периоды бывали самыми лучшими, и спокойными, и отрадными, и безмятежными, но они никогда не растягивались надолго, поскольку нелегко вот так взять и отмахнуться от столь мучительного вопроса и столь мучительного сомнения. Правда, сомнение удавалось отбросить, скажем, на несколько недель, чтобы бездумно погрузиться в повседневную рутину, которой занято большинство обитателей земли – им вполне достаточно видеть, как зарождается день и как он, описывая дугу, клонится к своему завершению. И люди воображают, будто неизбежно должно случиться некое завершение, некая пауза, должна появиться некая линия или граница, отмечающая момент засыпания, хотя в действительности это не так: время продолжает упорно двигаться вперед, изменяя не только наш облик, но и на наше сознание; и ему, то есть времени, нет дела до того, спим мы или страдаем бессонницей, прислушиваясь к каждому шороху, бежит сон от наших глаз или они закрываются сами собой против нашей воли, как у солдата-новобранца, заступившего на ночное дежурство, которое по-испански невесть почему принято называть “глюком” – наверное, потому что потом солдат вспоминает минувшую ночь как в тумане, будто это вовсе не он бодрствовал, пока весь мир спал, если, конечно, и сам не заснул и не попал за это под арест или даже под расстрел, случись такое дело в военное время. Вздремнул ненароком – и за это придется умереть, то есть заснуть навсегда. Любая мелочь порой таит в себе смертельную опасность.

А вот в те периоды, когда она верила, что ее муж – это ее муж, она была не так спокойна и по утрам вставала без малейшего желания окунуться в дневные хлопоты, потому что чувствовала себя заложницей того, чего так долго ждала и что наконец получила, то есть того, чего ждать больше не нужно: но тот, кто привык жить ожиданием, никогда не свыкнется с его завершением – ему вроде как перекрывают воздух. В те периоды, когда она не верила, что ее муж – это ее муж, сон у нее был тревожным, она мучилась угрызениями совести и не хотела просыпаться, чтобы опять и опять не смотреть на любимого человека с подозрением, казня себя за это пустыми упреками. Потому что ее огорчала собственная черствость, или даже низость. А вот в те периоды, когда она решала ничему больше не верить – и когда у нее получалось вообще ничему не верить, – изгнанные сомнения, наоборот, начинали казаться важным стимулом, как и отложенные на потом колебания, потому что эти колебания рано или поздно непременно должны были вернуться. Она обнаружила, что абсолютная уверенность во всем делает жизнь скучной, обрекает на одномерное существование или на то, что реальное и воображаемое срастаются воедино, хотя воображение свою работу все равно полностью не прекращает. Но ведь и вечные подозрения тоже изматывают душу: ты постоянно наблюдаешь за собой и за другими, но в первую очередь за другим, за ним, за самым близким тебе человеком, и сравниваешь свои наблюдения с воспоминаниями, которые никогда не бывают надежными. Нам не дано достоверно воспроизвести в памяти то, что уже исчезло из поля нашего зрения, даже то, что случилось совсем недавно, даже если в воздухе еще витает след того, кто только что с тобой простился, – его запах или его злые слова. Достаточно ему скрыться за дверью и пропасть из виду, чтобы знакомый образ начал блекнуть, потерял четкость или вообще растаял; то же самое происходит с нашим слухом и уж тем более с осязанием. Но можно ли тогда в точности вспомнить случившееся давным-давно? Можно ли непогрешимо восстановить в памяти облик мужа, каким он был пятнадцать или двадцать лет назад, мужа, который ложился в кровать к спящей жене и пользовался ее телом? Такие воспоминания тоже рассеиваются и мутнеют, совсем как память солдата о ночном дежурстве. Пожалуй, они рассеиваются даже быстрее любых других.</p>
	<p>Ее мужа, который был наполовину испанцем, наполовину англичанином, звали Том или Томас Невинсон, и раньше он не был таким угрюмым. Не распространял вокруг агрессивное раздражение, застарелую досаду, которую разносил по всему дому и которую нельзя было не заметить. Вместе с ним в гостиной, спальне, на кухне появлялось непонятное излучение. Иногда казалось, будто зависшая у него над головой грозовая туча следовала за ним повсюду, никогда не рассеиваясь. Наверное, поэтому он был немногословен и редко отвечал на вопросы, особенно на вопросы для него неудобные, хотя и на вполне безобидные тоже не отвечал. От первых он легко отделывался, ссылаясь на то, что ему о многом запрещено говорить, и пользовался случаем, чтобы напомнить своей жене Берте Исле: такого разрешения он вообще никогда не получит, даже десятилетия спустя и даже на смертном одре. Никогда он не сможет рассказать ей о своих нынешних поездках, о своих делах или заданиях, о той жизни, которую ведет, разлучаясь с Бертой. Она должна принять это как должное, и Берта твердо знала, что есть некая зона в жизни ее мужа, вернее, некая часть его личности, которая неизменно будет оставаться в тени, неизменно будет недоступна как для ее взора, так и для слуха, и неизменно будут существовать запретные темы, словно Берте приходилось смотреть на все это из-под приспущенных век, или она была близорукой, или вообще слепой, а поэтому многое можно было лишь предполагать или воображать.</p>

	<p>конкретных людей и мест. – Знаешь, часто эти истории бывают неприятными, довольно невеселыми, а финалы – неизбежно скверными как для одной стороны, так и для другой; иногда в них бывает что-то занятное, но они почти всегда грязные или, хуже того, оставляют в душе мучительный след. И меня потом нередко терзает совесть. К счастью, это быстро проходит. К счастью, я забываю о том, что сделал, и тут помогает непременная маска, как будто это вовсе не ты участвуешь в таких операциях или ты всего лишь актер, исполняющий очередную роль. Ведь актер снова становится самим собой после съемок или спектакля – а то и другое рано или поздно заканчивается, оставляя по себе лишь смутное воспоминание, как что-то увиденное во сне и далекое от реальности, во всяком случае недостоверное. Но главное, ни в коей мере не свойственное лично тебе, и ты говоришь: “Нет, я не мог так поступить, память что-то путает, там был другой я, это ошибка”. Или ты как сомнамбула не сознавал смысла своих действий и шагов.
Берта Исла знала, что живет отчасти с незнакомым человеком. Тот, кому запрещено давать объяснения по поводу целых месяцев своей жизни, в конце концов внушает себе, будто вполне может не объяснять и какие-то другие вещи. Но Берта считала Тома – хотя тоже лишь отчасти – мужчиной всей своей жизни, то есть чем-то само собой разумеющимся, как, скажем, воздух. А к воздуху мало кто постоянно и дотошно присматривается.

     Они были знакомы чуть ли не с детства, но тогда Томас Невинсон был веселым и беспечным парнем – никаких тайн и туманов. Сначала он учился в Британской школе на улице Мартинеса Кампоса, рядом с музеем Сорольи, но она выпихивала своих учеников в тринадцать-четырнадцать лет. Последние классы – пятый, шестой и подготовительный – нужно было доучиваться в другом месте, и часто этим другим местом становилась школа Берты под названием “Студия”. В пользу этой школы говорило то, что она была светской и что мальчики и девочки там обучались совместно, хотя это не было принято в Испании времен франкизма, к тому же школа находилась в одном районе с Британской – на соседней улице Микеланджело.</p>
	<p>“Новенькие” мальчишки, если не были совсем уж никудышными, быстро находили общий язык с девочками – как раз потому, что привлекали их своей новизной, и Берта почти сразу же влюбилась в юного Невинсона – слепо и наивно. В такой любви много простодушия и легкомыслия, но также эстетства и самоуверенности (юное существо смотрит вокруг и говорит: “Вот этот мне подходит!”); такая любовь поневоле начинается робко, со случайных взглядов, улыбок и незатейливых разговоров – под ними прячут чувство, которое тем не менее быстро пускает корни и на первых порах кажется вечным. Разумеется, влюбленность эта выдуманная, ничем не проверенная, скопированная из романов и фильмов, похожая на воображаемую проекцию с единственным и статичным образом: девушка видит себя женой своего избранника, а он себя – женатым на ней, и эта картинка не имеет ни продолжения, ни вариантов, ни истории, она только такая, какая есть; ни один из двоих не способен заглянуть чуть дальше, ведь зрелость пока еще представляется им чем-то недосягаемо далеким и никак с ними не связанным; они видят только кульминацию, поскольку порой именно кульминация и является целью – для самых догадливых и настойчивых. В те времена еще было принято, чтобы женщина, выходя замуж, добавляла к своей фамилии частицу “де” перед фамилией мужа, и на выбор Берты повлияли также зрительный и звуковой образ будущей – из далекого будущего – фамилии: куда интересней стать Бертой Ислой де Невинсон, что навевало мысли о приключениях или экзотических краях (в один прекрасный день у нее появится визитная карточка, где будет именно так и написано), чем, например, Бертой Ислой де Суарес, если вспомнить фамилию одноклассника, который нравился ей до появления Тома.

Правда, в их классе не одна Берта так пылко и откровенно поглядывала на него, не одна Берта вздыхала по нему. На самом деле переход Тома в “Студию” произвел в этом мирке настоящий переполох, который не утихал целых два триместра, пока не определилась бесспорная победительница. Томас Невинсон был хорош собой, ростом чуть выше среднего, рыжеватые волосы он зачесывал назад по старой моде (как летчики или машинисты поездов в сороковые годы, если стригся покороче, или как музыкант, если отпускал волосы подлиннее; но он никогда не нарушал образа, которому решал следовать; иногда его прическа напоминала ту, что носил актер второго плана Дэн Дьюриа, или ту, что была у знаменитого Жерара Филипа, – кому любопытно, может проверить свою зрительную память); а еще Тома отличала основательность, свойственная только людям, безразличным к веяниям моды и потому свободным от комплексов, которые у подростков годам к пятнадцати обретают самые разные формы, и мало кому удается проскочить этот возраст без травм. Казалось, Том ничем не был связан со своим временем или пролетал над ним, не придавая значения всякого рода рискованным обстоятельствам, хотя к таковым, если вдуматься, следует в первую очередь отнести и день, когда человек рождается, и даже век. На самом деле черты у Тома были не более чем приятными, и никто бы не назвал его образцом юношеской красоты; мало того, в них уже присутствовал намек на некую пресность, которая через пару десятилетий непременно подчинит себе все остальное. Пока от такого впечатления спасали пухлые и четко очерченные губы (по ним хотелось провести пальцем и потрогать – даже больше, чем поцеловать) и взгляд серых глаз – то тусклый, то сияющий и возбужденный, в зависимости от игры света или от назревавшей вспышки гнева, к тому же пытливые и живые глаза были расставлены шире обычного и редко оставались спокойными, что несколько нарушало общее впечатление от его внешности.</p>
	<p></p>

	<p>четкое представление даже он сам, не говоря уж об окружающих. Невинсон избегал выяснять отношения с самим собой и редко говорил с другими о своей персоне или делился своими взглядами, как будто такие разговоры казались ему детской забавой и пустой тратой времени. Он был полной противоположностью тем молодым людям, которым не терпится все выплеснуть наружу, которые анализируют, наблюдают, стараются разгадать себя и спешат поскорее определить, к какой человеческой категории они принадлежат, не понимая, что это не имеет никакого смысла, пока ты окончательно не сформировался, поскольку до того времени серьезные решения принимаются, а поступки совершаются на авось и вслепую, и когда ты себя наконец узнаешь, если узнаешь, будет уже поздно что-то исправлять, будет поздно меняться. Томас Невинсон не очень старался раскрыться перед другими и уж тем более избегал копаться в себе, считая это признаком нарциссизма. Похоже, тут сыграла свою роль английская половина его крови, но в любом случае никто доподлинно не знал, какой он на самом деле. За внешними дружелюбием, открытостью и общительностью таилась зона непроницаемости и скрытности. И главным признаком непроницаемости было как раз то, что окружающие не замечали и почти не догадывались о существовании такой зоны.
Он был в полном смысле слова двуязычным: говорил по-английски, как отец, и по-испански, как мать, и хотя жил в Мадриде с того возраста, когда ни одного слова произнести еще не умел или произносил всего несколько, это не делало его английский беднее или менее бойким; в младших классах он учился в Британской школе, дома у них разговаривали в основном на английском, к тому же каждое лето, сколько Том себя помнил, каникулы он проводил в Англии. Нельзя не упомянуть и про легкость, с какой мальчишка выучил третий и четвертый языки, а также его невероятную способность копировать любые говоры, акценты и манеру речи. Послушав человека самое короткое время, Том без труда и репетиций мог безупречно его изобразить. Это всем нравилось и вызывало дружный смех, так что одноклассники часто просили Тома повторить самые удачные номера. К тому же он очень искусно менял голос, изображая героев своих пародий – а это были прежде всего люди, не сходившие с экранов телевизоров, в том числе вечный Франко и некоторые его министры. Пародии на английском Томас приберегал до поездок в Лондон или в окрестности Оксфорда, то есть для тамошних приятелей и родичей (отец Томаса был уроженцем Оксфорда); потому что в мадридской “Студии”, расположенной в районе Чамбери, их бы никто просто не понял и не оценил, если не считать пары товарищей, таких же двуязычных, как и он сам, прежде учившихся с ним в Британской школе. Слушая Томаса, трудно было поверить, что один из этих языков для него неродной, поэтому его всегда без проблем принимали за своего в Мадриде, несмотря на английскую фамилию. Он знал все уличные выражения и жаргонные словечки и, если хотел, мог ругаться похлеще самого отчаянного сквернослова во всей столице, исключая разве что пригороды. На самом деле Томас был скорее обычным испанцем, чем обычным англичанином. Правда, не отказался поступить в университет на родине отца, на чем тот настаивал, но свою будущую жизнь связывал только с Мадридом, а с некоторых пор – и с Бертой. Если его примут в Оксфорд, он туда обязательно поедет, но, завершив образование, вернется в Мадрид.</p>
	<p>Глава семьи Джек Невинсон обосновался в Испании много лет назад – сначала так сложились обстоятельства, а потом он полюбил испанку и женился на ней. Том если что и знал про жизнь отца до Мадрида, то только понаслышке. Жизненным опытом родителей до рождения детей эти последние обычно не интересуются, мало того, он их вроде бы и не касается, пока они сами не повзрослеют, но тогда приступать к расспросам порой бывает поздно. Сеньор Невинсон совмещал должность в посольстве Англии с работой в Британском совете, куда его привел ирландец Уолтер Старки, почти пятнадцать лет бывший представителем этой организации в Мадриде. Он же в 1940 году открыл здесь Британскую школу и не один год прослужил ее директором. Старки слыл страстным исследователем испанской культуры, был бродягой и автором нескольких книг про цыган, включая одну под немного смешным названием Don Gypsy[1]. Джек Невинсон очень старался овладеть испанским языком и в конце концов освоил его синтаксис и грамматику, да и словарный запас накопил достаточно большой, правда, выглядевший чуть старомодным и книжным, но при этом так и не избавился от очень сильного акцента, из-за чего собственные дети иногда видели в нем чужака, непонятно как попавшего в их дом, и всегда обращались к нему по-английски, чтобы он не давал им повода для дурацких смешков и чтобы не приходилось краснеть за него. Они смущались, если принимали дома гостей-испанцев, ведь тогда отец волей-неволей говорил на их языке, а в его устах он звучал почти анекдотично, словно комики Лорел и Харди сами решили продублировать свои старые фильмы для проката в испаноязычных странах (Стэн Лорел был англичанином, а не американцем, поэтому акценты у них были разные, что сразу бросалось в глаза, когда они отваживались переходить на другие языки). Надо полагать, именно то, что Джек при устном общении чувствовал себя не слишком уверенно в приютившей его стране, позволяло Тому относиться к отцу с неприличным высокомерием, как будто собственные способности к языкам и имитации внушили ему мысль, что сам он сможет куда лучше устроиться в нашем мире – покорить его и извлечь из роли победителя максимальную для себя выгоду, – в отличие от Джека Невинсона, человека, который не пользовался большим авторитетом в семье, хотя на службе, судя по всему, имел совсем иную репутацию.</p>
	<p></p>

	<p>довольной, для чего ей хватало любой мелочи, – или старалась выглядеть довольной наперекор всему; а ведь многие мужчины очень ценят подобное качество, мало того, им часто хочется повелевать женским смехом – особенно при властном характере, – или считать, что звучит он исключительно для них и только они дали к нему повод. Им было невдомек, что улыбка, постоянно сверкавшая на лице Берты и открывавшая чудесные зубы, улыбка, которая притягивала к себе все взгляды, будет сверкать в любом случае, без особой на то причины, и ее следовало считать непременной частью лица – как нос, лоб или глаза. Привычка вечно улыбаться свидетельствовала о хорошем характере, покладистом и невзыскательном, однако такой вывод был бы не совсем верным: Берта смеялась искренне и охотно, но, если для смеха не было достойного повода, попусту притворяться не стала бы; причины для смеха она, конечно же, отыскивала легко, но, если не находила, могла выглядеть и серьезной, и печальной, и сердитой. Правда, с плохим настроением быстро справлялась, как будто ей самой надоедало быть унылой или мрачной и она сомневалась, что это пойдет ей на пользу или закончится чем-нибудь интересным. Затянувшаяся хандра, на ее взгляд, напоминала непрерывно капающую из крана воду – ведро постепенно наполняется, но вода остается водой. Если на Берту что-нибудь и накатывало, она старалась не рубить сплеча, а вести себя разумно. Под внешней уступчивостью, почти добродушием, таились здравомыслие и даже упрямство. Пожелав чего-то, она твердо шла к цели, но не напролом и никого не хватала за горло, а действовала уговорами, просила и убеждала, в чем ей помогал хорошо подвешенный язык, или доказывала собственную незаменимость, но главное – исходила из принципа, что никогда не следует скрывать свои желания, если в них нет ничего грязного и злого. А еще Берта умела походя внушить своим знакомым, приятелям и ухажерам (если, конечно, можно назвать ухажерами ребят подросткового возраста) весьма спорную мысль, что для них нет ничего хуже, чем потерять ее дружбу, или потерять ее уважение, или лишиться ее приятного общества; и точно так же она умела убедить любого, что общение с ней – дар Божий и нет большего счастья, чем сидеть с ней вместе в одном классе, обсуждать свои планы, развлекаться и вообще жить рядом в одном мире. Из этого не следует, что Берта была коварной, как Яго, и манипулировала людьми, подчиняла себе и обманывала, нашептывая им что-то на ухо. Нет, ни в коем случае. Берта, разумеется, сама искренне, хотя и не без самолюбования, верила в то, что говорила, и это было написано у нее на лбу, об этом свидетельствовали ее улыбка или вспыхивавшие ярким румянцем щеки, и она без всякой задней мысли заражала этой уверенностью окружающих. Успех она имела не только у мальчиков, точно так же относились к ней и подруги: стать одной из них почиталось даром небесным, а войти в ее ближнюю орбиту – большой честью; и как ни странно, это не вызывало ни зависти, ни ревности, а если и вызывало, то лишь в самой малой степени; казалось, искренность и сердечность по отношению ко всем на свете служили Берте защитной броней против ненависти и жестокости, свойственных этому изменчивому и капризному возрасту. Берта, как и Томас, вроде бы с ранних лет знала, что она из себя представляет и что из нее может получиться в будущем, и она, пожалуй, никогда не сомневалась в одном: ей предначертано всегда и непременно играть только главную, но никак не второстепенную, роль, по крайней мере в ее личной истории. А ведь есть люди, которые боятся, что им суждено оставаться на заднем плане даже в пределах своей частной жизни, они родились, будто уже твердо зная: да, конечно, история каждого человека неповторима, но только вот их история никогда никому не будет интересна, о ней разве что мельком упомянут, описывая чью-то другую судьбу, полную приключений и более яркую. Их история не пригодится даже для легкой беседы во время затянувшегося застолья или болтовни бессонной ночью у камина.</p>
	<p>В конце предпоследнего класса Берта и Том стали признанной парой – и вели себя настолько открыто, насколько это возможно в их возрасте; соперницы с покорными вздохами признали свое поражение и даже смирились с ним: раз уж Берта по-настоящему увлеклась Томасом Невинсоном, он просто не мог не выбрать именно ее, ведь мужская половина “Студии” уже год или два как провожала Берту цепкими взглядами, сталкиваясь с ней на огромной мраморной лестнице или на школьном дворе во время перемены. Берта пользовалась вниманием как одноклассников, так и старших и младших ребят; было несколько мальчишек девяти – одиннадцати лет, для которых Берта Исла стала их первой любовью, любовью на расстоянии, – и это была совершенно поразительная любовь, еще и названия такого не имевшая, поэтому они никогда не забывали Берту ни в юности, ни в зрелые годы, ни в старости, хотя не успели обменяться с ней ни единым словом, а для нее просто не существовали. Даже ребята из других школ бродили вокруг, чтобы увидеть ее у ворот “Студии”, и потом провожали, соблюдая приличную дистанцию, а мальчишки из “Студии” с гордым видом собственников дразнили чужаков и следили, чтобы Берта не попала в сети к кому-нибудь из “не наших”. Ни Тому, ни Берте, родившимся соответственно в августе и сентябре, еще не исполнилось пятнадцати, когда они решили “стать женихом и невестой”, как это тогда называлось, и признались друг другу в любви. На самом деле самой себе Берта призналась в этом раньше, но поначалу старалась скрывать и держать в узде свою наивную и безумную влюбленность – чтобы не оказаться в унизительной роли, чтобы не вести себя бесцеремонно и навязчиво, а выглядеть воспитанной девушкой, как понимали воспитанность в шестидесятые годы прошлого века, точнее, во второй их половине; и чтобы у Тома, когда он решится сделать первый шаг, не сложилось впечатление, будто инициатива исходит не от него, а от нее, а он лишь подчинился чужой воле.</p>
	<p></p>

	<p>времена, – вопреки порывам пробуждающейся и порой достаточно взрывоопасной сексуальности, считалось неблагоразумным и опрометчивым опережать события, если самим влюбленным их отношения казались серьезными, а Томас и Берта сразу поняли, что у них все серьезно, то есть речь идет не о мимолетном увлечении, которому суждено закончиться вместе с концом учебного года и даже не через пару лет, когда придет пора расставаться со школой. Том Невинсон был в меру робким и не имел никакого опыта в любовных делах, а кроме того, с ним случилось то, что случается со многими мальчишками: они слишком уважают девушку, которую выбрали в спутницы всей своей жизни – нынешней, будущей и вечной, – и не позволяют себе с ней ничего лишнего, хотя отнюдь не избегают этого лишнего с другими. В итоге они начинают проявлять чрезмерную заботу о ней, чересчур опекают, видя в предмете своей любви идеал, хотя и сделанный, как ни крути, из неуемной плоти и горячей крови, а следовательно, тоже озабоченный проблемами секса. Короче, они боятся осквернить ее и превращают почти в неприкасаемую. С Бертой произошло то, что происходит с немалым числом девушек, которые сами-то знают, что прикасаться к ним можно сколько угодно, а процесс “осквернения” их даже интригует, однако ни в коем случае не хотят выглядеть нетерпеливыми и уж тем более алчущими наслаждений. Поэтому нередко бывало и так: после затянувшегося боязливого ожидания, после пылких взглядов и робких поцелуев, после благоговейных ласк, которые не посягали на запретные области тела и притормаживались при первом подозрении, что благоговейность вот-вот дрогнет, “жених и невеста” впервые доводили дело до пресловутой кульминации по отдельности, то есть со случайными партнерами, находя, так сказать, временно исполняющих обязанности. И Берта и Том потеряли невинность, еще учась на первом университетском курсе, однако не признались в этом друг другу. В тот год жизнь их разлучила – но не насовсем, конечно. Тома приняли в Оксфорд – во многом благодаря хлопотам отца и протекции Уолтера Старки, но также благодаря его несомненным лингвистическим способностям. А Берта поступила на философско-филологический факультет мадридского Университета Комплутенсе. В Оксфорде каникулы бывали длинными – больше месяца между Michaelmas и Hilary, то есть между осенним триместром и зимним, потом столько же между Hilary и Trinity, зимним триместром и Троицей, и еще три полных месяца между Trinity и следующим Michaelmas, началом следующего курса, – то есть перед началом трех очередных очень условных триместров, так что Том возвращался в Мадрид после восьми-девяти недель напряженной учебы и снова окунался в мадридскую жизнь, не успев отвыкнуть от нее, чтобы сделать выбор в пользу оксфордской, и ничего не забыв. Но на эти восемь-девять недель разлуки Том и Берта как бы выносили друг друга за скобки, а пустоту заполняли ожиданием. При этом оба знали: как только они снова встретятся, все вернется в прежнее русло. Когда разлуки предсказуемо сменяются встречами, и те и другие начинают восприниматься как не совсем реальные, в них появляется что-то от Зазеркалья, и тогда каждый вновь наступивший период сразу кажется главным, заслоняет собой предыдущий и отрекается от него, если полностью не стирает из памяти; в итоге ничто из случившегося за это время не становилось фактом посюсторонним, увиденным наяву и действительно имеющим какое-либо значение. Том и Берта не знали, что под таким знаком пройдет большая часть их совместной жизни, вернее, совместной, но проведенной в основном порознь, или совместной, но прожитой каждым по-своему.
В 1969 году Европу захлестнули мода на политику, а также мода на секс, и обе коснулись главным образом молодежи. Парижские волнения мая 1968-го и Пражская весна, раздавленная советскими танками, взбудоражили – хотя и на короткое время – половину континента. А в Испании все еще сохранялась диктатура Франко, установленная более трех десятилетий назад. Забастовки рабочих и студентов заставили франкистский режим объявить на всей территории страны чрезвычайное положение, что было скорее эвфемизмом, способом еще больше ущемить и без того скудные права граждан, расширив права и безнаказанность полиции, развязав ей руки, чтобы она делала все, что хочет, и со всеми, с кем хочет. Двадцатого января умер, находясь под арестом, студент юридического факультета Энрике Руано, которого тремя днями раньше задержала грозная Политико-социальная бригада[2] за то, что он разбрасывал листовки. Официальная версия, все время менявшаяся и грешившая массой нестыковок, гласила, что этот двадцатилетний парень, когда его привезли в здание на нынешней улице Принца де Вергара для проведения обыска, вырвался из рук трех сопровождавших его полицейских и выбросился из окна седьмого этажа. Министр Мануэль Фрага и газета АВС постарались изобразить гибель Руано как самоубийство и ссылались на его психическую неуравновешенность. На первой полосе газеты с продолжением на следующей было опубликовано письмо Руано врачу-психиатру, но из текста письма сделали нарезку и подправили его, чтобы выдать за фрагменты личного дневника. Почти никто не поверил в эту версию, и гибель арестованного сочли политическим убийством, поскольку студент являлся членом Фронта народного освобождения, или попросту “Фелипе”[3], подпольной антифранкистской организации, не слишком влиятельной, какими в силу обстоятельств были почти все тогдашние организации (не слишком влиятельными и непременно подпольными). В официальную версию никто не поверил, потому что все правительства времен диктатуры имели привычку беззастенчиво врать, и вот двадцать семь лет спустя, уже в годы демократии, состоялся суд над теми тремя полицейскими, тело Руана было эксгумировано, и эксперты установили, что у жертвы была отпилена ключица, через которую, вне всякого сомнения, прошла пуля.</p>

	`;
const pageSize = 3; 
let currentPage = 0;
let pages = [];

function paginateText(text) {
	const paragraphs = text.trim().split('</p>');
	const pageCount = Math.ceil(paragraphs.length / pageSize);
	for (let i = 0; i < pageCount; i++) {
		const start = i * pageSize;
		const end = start + pageSize;
		pages.push(paragraphs.slice(start, end).join('</p>') + '</p>');
	}
}

function showPage(page) {
	bookContentElement.innerHTML = pages[page];
}

function prevPage() {
	if (currentPage > 0) {
		currentPage--;
		showPage(currentPage);
	}
}

function nextPage() {
	if (currentPage < pages.length - 1) {
		currentPage++;
		showPage(currentPage);
	}
}

document.getElementById('toggle-menu').addEventListener('click', function () {
	const sideMenu = document.getElementById('side-menu');
	if (sideMenu.style.display === 'none') {
		sideMenu.style.display = 'block';
	} else {
		sideMenu.style.display = 'none';
	}
});

document.getElementById('darkModeToggle').addEventListener('change', function () {
	document.body.classList.toggle('dark-mode');
});

document.getElementById('textSizeRange').addEventListener('input', function () {
	const bookContent = document.getElementById('book-content');
	bookContent.style.fontSize = this.value + 'px';
});

document.getElementById('brightnessRange').addEventListener('input', function () {
	const readerContainer = document.getElementById('reader-container');
	readerContainer.style.filter = `brightness(${this.value}%)`;
});

paginateText(bookText);
showPage(currentPage);