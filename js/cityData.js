const cityData = {
    "changchun": {
        "name": "长春市",
        "title": "北国春城",
        "description": "长春市是吉林省省会，地处东北平原中部，为东北亚几何中心和重要交通枢纽，铁路、航空网络发达。建城于1800年，曾为伪满洲国'新京'，现存伪满皇宫等历史遗迹。新中国工业摇篮，诞生了第一辆汽车（中国一汽）和第一列地铁列车（中车长客），被誉为'汽车城''轨道客车之都'。支柱产业涵盖汽车制造、光电信息、生物医药等，中国-东北亚博览会彰显开放活力。文化底蕴深厚，吉剧、长春电影节独具特色，拥有吉林大学等40余所高校。城市绿化率超40%，净月潭国家森林公园四季皆景，享有'北国春城'美誉，是工业、生态与人文交融的现代化都市。",
        // "video": 'assets/video/changchun/长春.mp4',
        // "audio": "assets/audio/changchun/长春介绍.mp3",
        "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/changchun/%E9%95%BF%E6%98%A5%E4%BB%8B%E7%BB%8D.mp3",
        "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/changchun/%E9%95%BF%E6%98%A5.mp4",
        "food": [
            {
                "name": "鼎丰真糕点",
                "desc": "鼎丰真糕点是吉林省长春市的百年老字号食品品牌，创立于1911年（清末宣统三年），由创始人王信瑞在长春市商贸区创立。其名称鼎丰真蕴含深刻的文化寓意：鼎象征三足鼎立、基业长青，丰代表五谷丰登，真则体现诚信为本、货真价实的经营理念。经过百年发展，鼎丰真以传统工艺与现代创新结合，成为东北地区乃至全国知名的糕点品牌。",
                // "video": "assets/video/changchun/鼎丰真糕点.mp4",
                // "audio": "assets/audio/changchun/鼎丰真糕点.mp3",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/changchun/%E9%BC%8E%E4%B8%B0%E7%9C%9F%E7%B3%95%E7%82%B9.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/changchun/%E9%BC%8E%E4%B8%B0%E7%9C%9F%E7%B3%95%E7%82%B9.mp4"
            },
            {
                "name": "雪衣豆沙",
                "desc": "雪衣豆沙的起源存在多种说法，主要围绕宫廷与民间两条脉络展开。其一与清朝宫廷相关：据传乾隆帝时期，御厨为满足太上皇饮食需求创制此菜，后由御厨林福山带回吉林乌拉（今吉林市），逐渐在东北流传，成为吉菜代表。其二源于民间传说：清代一贫寒秀才为病母制甜食，用猪网油包裹豆沙油炸，后改良为蛋清糊，得名'雪衣豆沙'，寓意团圆。此外，浙江台州等地称其为'蛋清羊尾'，并追溯至宋代或更早，存在南北起源争议。",
                // "video": "assets/video/changchun/雪衣豆沙.mp4",
                // "audio": "assets/audio/changchun/雪衣豆沙.mp3",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/changchun/%E9%9B%AA%E8%A1%A3%E8%B1%86%E6%B2%99.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/changchun/%E9%9B%AA%E8%A1%A3%E8%B1%86%E6%B2%99.mp4"
            },
            {
                "name": "长春蹄花丝",
                "desc": "长春蹄花丝是吉林省特色小吃，起源于二十世纪初南阳察院关的长春轩卤内馆，由清末官厨刘春富创制，已有百年历史。它以猪的皮、耳、嘴为主料，经拔毛、刮膘、卤煮、捆扎、切片等多道工序精制而成，成品棕红透明，筋脆爽口，清香不腻，是经典的下酒佳肴。食用时切成细丝，淋麻油或辣油，刀工要求极高，否则易成蹄花条。其工艺融合满族传统技法，现为长春饮食文化的重要代表。",
                // "audio": "assets/audio/changchun/长春蹄花丝.mp3",
                // "video": "assets/video/changchun/长春蹄花丝.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/changchun/%E9%95%BF%E6%98%A5%E8%B9%84%E8%8A%B1%E4%B8%9D.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/changchun/%E9%95%BF%E6%98%A5%E8%B9%84%E8%8A%B1%E4%B8%9D.mp4"
            }
        ],
        "attractions": [
            {
                "name": "伪满皇宫博物院",
                "desc": "伪满皇宫位于吉林省长春市，是日本侵华期间扶持溥仪建立的伪满洲国傀儡政权旧址，建于1932年。这座建筑群融合中式传统、欧式风格与现代建筑元素，曾作为溥仪的办公与居所。宫内分为勤民楼、缉熙楼、同德殿等区域，内部陈设奢华，见证溥仪被操控的傀儡生活。现为伪满皇宫博物院，陈列大量历史文物与资料，揭露日本殖民统治罪行，被列为全国重点文物保护单位，是爱国主义教育的重要基地。",
                // "video": "assets/video/changchun/伪满皇宫博物馆.mp4",
                // "audio": "assets/audio/changchun/伪满皇宫博物院.mp3",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/changchun/%E4%BC%AA%E6%BB%A1%E7%9A%87%E5%AE%AB%E5%8D%9A%E7%89%A9%E9%99%A2.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/changchun/%E4%BC%AA%E6%BB%A1%E7%9A%87%E5%AE%AB%E5%8D%9A%E7%89%A9%E9%A6%86.mp4",
                "fee": 70
            },
            {
                "name": "净月潭国家森林公园",
                "desc": "净月潭位于吉林省长春市东南部，是国家5A级旅游景区，被誉为亚洲第一大人工林海。景区面积约96平方公里，森林覆盖率高达96%，潭水面积4.3平方公里，形似弯月，故得名。这里四季景致各异：春赏绿意、夏避酷暑、秋观红叶、冬享冰雪，尤以冬季'净月雪世界'和滑雪场闻名。作为长春的'城市绿肺'，净月潭集生态保护、休闲运动、自然观光于一体，是远离喧嚣、亲近自然的理想之地。",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/changchun/%E5%87%80%E6%9C%88%E6%BD%AD.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/changchun/%E5%87%80%E6%9C%88%E6%BD%AD%E5%9B%BD%E5%AE%B6%E6%A3%AE%E6%9E%97%E5%85%AC%E5%9B%AD.mp3",
                // "img": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/CountDown.png",
                // "audio": "assets/audio/changchun/净月潭国家森林公园.mp3",
                // "video": "assets/video/changchun/净月潭国家森林公园.mp4",
                "fee": 30
            },
            {
                "name": "长影旧址博物馆",
                "desc": "长影旧址博物馆位于吉林省长春市，依托新中国第一家电影制片厂——长春电影制片厂原址建成，被誉为'新中国电影摇篮'。馆内完整保留上世纪制片车间、摄影棚等历史建筑，展出珍贵电影文物、道具及经典剧本手稿，再现《白毛女》《上甘岭》等经典影片创作历程。红砖建筑群融合工业复古风与艺术气息，设有艺术展览及互动体验区，游客可沉浸式感受电影制作魅力，是了解中国电影史与工业美学的文化地标。",
                // "video": "assets/video/changchun/长影旧址博物馆.mp4",
                // "audio": "assets/audio/changchun/长影旧址博物馆 .mp3",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/changchun/%E9%95%BF%E5%BD%B1%E6%97%A7%E5%9D%80%E5%8D%9A%E7%89%A9%E9%A6%86%20.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/changchun/%E9%95%BF%E5%BD%B1%E6%97%A7%E5%9D%80%E5%8D%9A%E7%89%A9%E9%A6%86.mp4",
                "fee": 40
            }
        ],
        "route": [
            "Day1: 伪满皇宫，重点：勤民楼、同德殿、历史展览馆→ 长影旧址博物馆→步行到达54路有轨电车长春号→桂林路夜市",
            "Day2: 净月潭骑行，环潭骑行到碧松塔楼，到女神广场——夏季缆车，冬季滑雪 → 长春世界雕塑园",
            "Day3:这有山商场爬山打卡→吉林省博物馆必看高句丽壁画→南湖公园进行金沙滩散步"
        ],
        "budget": {
            "住宿": 200,
            "餐饮": 100,
            "交通": 50,
            "门票": 100
        }
    },
    "jilin": {
        "name": "吉林市",
        "title": "雾凇之都",
        "description": "吉林市位于中国吉林省中部，素有'雾凇之都'美誉。冬季松花江水流经丰满水电站后水温较高，遇严寒空气蒸腾凝结，沿江两岸树木凝结成晶莹剔透的冰晶雾凇，形成'寒江雪柳'的奇幻景观。每年12月至次年2月为最佳观赏期，尤以雾凇岛、松江路等景点闻名。这一自然奇观被列为中国四大气象景观之一，冰雪文化与城市风光交融，吸引无数游客与摄影爱好者，成为北国冬季旅游的金色名片。",
        // "video": 'assets/video/jiling/吉林.mp4',
        // "audio": "assets/audio/jiling/吉林介绍.mp3",
        "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/jiling/%E5%90%89%E6%9E%97.mp4",
        "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/jiling/%E5%90%89%E6%9E%97%E4%BB%8B%E7%BB%8D.mp3",
        "food": [
            {
                "name": "煎粉",
                "desc": "煎粉是起源于吉林省吉林市的特色小吃，最早可追溯至清末民初，后逐渐传入长春，成为东北地区特有的美食符号。其核心原料为淀粉（以绿豆淀粉为佳），通过煎制工艺形成块状，配以芝麻酱、蒜汁等调料，口感弹牙、清爽香醇。吉林市与长春在制作上存在差异：吉林的'煎粉'注重粉块完整，火候适中，色泽偏灰，口味原汁原味；而长春的'炒粉'则煎炒得更碎，色泽金黄，味道浓郁，调料多融入麻酱汤中。尽管辽宁等地也有类似小吃（如大连炒焖子），但吉林煎粉被视为最正宗的代表，体现了东北饮食文化中'一煎一炒'的工艺智慧。粉是东北地区独具特色的传统小吃，尤以吉林地区最为著名。它以地瓜淀粉或土豆淀粉为主料，经蒸制凝固后切块，在铁板上煎至外皮金黄酥脆，内里滑嫩弹牙。淋上秘制麻酱、蒜汁、辣椒油，佐以香醋、香菜提味，形成咸香酸辣的复合口感。作为街头美食代表，煎粉既有冬日热吃的暖意版本，也有夏季凉拌的清爽吃法，焦脆与软糯的双重体验令人回味无穷，是承载关东烟火气的经典风味。",
                // "video": 'assets/video/jiling/煎粉.mp4',
                // "audio": "assets/audio/jiling/煎粉.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/jiling/%E7%85%8E%E7%B2%89.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/jiling/%E7%85%8E%E7%B2%89.mp3"
            },
            {
                "name": "白肉血肠",
                "desc": "白肉血肠是东北传统名菜，源自满族饮食文化，为'杀猪菜'的灵魂组合。精选肥瘦相间的五花白肉，薄如蝉翼，入口脂香丰腴；血肠以新长春血肠的诞生与东北农村的'杀年猪'习俗密不可分。在严寒的东北，冬季是农闲时节，家家户户会宰杀养了一年的肥猪，称为'杀年猪'。猪的全身都被充分利用，而猪血的保存成为难题。为了不浪费，人们将猪血混合荞麦面、高粱米等粗粮，加入盐、葱花等调料灌入肠衣，制成血肠。煮熟后，血肠既可单独食用，也会与酸菜、白肉一同炖煮，成为'杀猪菜'的核心。这一做法最早可追溯至满族等少数民族的饮食传统。满族先民狩猎后习惯将兽血与粮食混合食用，后随着农耕发展演变为以猪血制肠。清代以来，山东、河北移民'闯关东'涌入东北，将中原的面食技艺与本地食材结合，进一步丰富了血肠的制作方法。为东北地区乃至全国知名的糕点品牌。鲜猪血灌入肠衣，蒸煮后嫩滑弹润，切段后浸入酸菜汤中同炖，肉香与血肠的鲜嫩交融。食用时蘸蒜泥酱油或韭菜花酱，咸鲜酸香，层次饱满。这道粗犷豪迈的冬日暖食，凝聚着关东人围炉聚食的温情，是年节宴席上不可或缺的乡土风味符号。",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/jiling/%E7%99%BD%E8%82%89%E8%A1%80%E8%82%A0.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/jiling/%E7%99%BD%E8%82%89%E8%A1%80%E8%82%A0.mp3"
                // "video": "assets/video/jiling/白肉血肠.mp4",
                // "audio": "assets/audio/jiling/白肉血肠.mp3"
            },
            {
                "name": "筱筱火勺",
                "desc": "油酥面皮包裹椒盐或白糖馅，炭火烤制，外酥内软，形似马蹄。传说清末一王姓师傅为躲避战乱逃至吉林，创制此饼，因'火烧'谐音不吉，改称'火勺'，现以河南街'福源馆'老字号最为知名。",
                "audio": "assets/audio/jiling/筱筱火勺.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/jiling/%E7%AD%B1%E7%AD%B1%E7%81%AB%E5%8B%BA.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/jiling/%E7%AD%B1%E7%AD%B1%E7%81%AB%E5%8B%BA.mp3"
                // "video": "assets/video/jiling/筱筱火勺.mp4",
                // "audio": "assets/audio/jiling/筱筱火勺.mp3"
            }
        ],
        "attractions": [
            {
                "name": "雾凇岛",
                "desc": "冬季观赏雾凇雾凇岛位于吉林省吉林市龙潭区乌拉街满族镇，是松花江下游一座冲积小岛，因冬季壮丽的雾凇奇观闻名。每年12月至次年2月，江水蒸腾的雾气遇冷凝结于枝头，形成玉树琼花的绝美景象，被誉为'中国四大自然奇观'之一。清晨薄雾缭绕时，岛上的韩屯、曾通屯等满族村落与银白雾凇相映成趣，构成水墨画卷，吸引无数摄影爱好者与游客前来赏景，体验北国冰雪与民俗交织的独特魅力。奇观最佳地点",
                // "video": 'assets/video/jiling/雾凇岛.mp4',
                // "audio": "assets/audio/jiling/雾凇岛.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/jiling/%E9%9B%BE%E5%87%87%E5%B2%9B.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/jiling/%E9%9B%BE%E5%87%87%E5%B2%9B.mp3",
                "fee": 60
            },
            {
                "name": "松花湖",
                "desc": "吉林省最大松花湖位于吉林省吉林市西南约15公里处，是1937年拦截松花江水建造丰满水电站形成的人工湖。湖体狭长如蛟龙，全长约200公里，最宽处10公里，最深处达77.5米，蓄水量108亿立方米，面积达700平方公里，被誉为'北国明珠'。湖区以水旷、山幽、林秀著称，四季景色各异：春有山花烂漫，夏可泛舟避暑，秋赏层林尽染，冬观银装素裹。湖中分布五虎岛、金龟岛等百余岛屿，盛产松花白鱼、鳊花等珍稀鱼类，曾是清代贡品。兼具防洪、发电、旅游等功能，现为国家AAAA级景区，吸引大量游客体验自然与人文交融的独特魅力。人工湖，四季皆宜",
                // "audio": "assets/audio/jiling/松花湖.mp3",
                // "video": 'assets/video/jiling/松花湖.mp4',
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/jiling/%E6%9D%BE%E8%8A%B1%E6%B9%96.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/jiling/%E6%9D%BE%E8%8A%B1%E6%B9%96.mp3",
                "fee": 40
            },
            {
                "name": "北山公园",
                "desc": "北山公园位于吉林市区，融汇山水灵韵与宗教文化，是国家4A级景区。园内九座百年寺庙群依山而建，玉皇阁、药王庙等清代古刹香火绵延，佛、道、儒三教共存，素有'千山寺庙甲东北，北山庙会盛千山'之誉。春有桃花庙会，秋赏层林尽染，冬览雪映古寺。登顶揽月亭可俯瞰松花江与城市全景，山间湖桥亭榭错落，康熙帝曾题'天下第一江山'，是历史与自然交织的'城市绿肺'。",
                // "audio": "assets/audio/jiling/北山公园.mp3",
                // "video": 'assets/video/jiling/北山公园.mp4',
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/jiling/%E5%8C%97%E5%B1%B1%E5%85%AC%E5%9B%AD.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/jiling/%E5%8C%97%E5%B1%B1%E5%85%AC%E5%9B%AD.mp3",
                "fee": 100
            }
        ],
        "route": [
            "Day1: 松花湖游船 → 北山公园",
            "Day2: 雾凇岛 → 乌拉街满族镇"
        ],
        "budget": {
            "住宿": 150,
            "餐饮": 80,
            "交通": 60,
            "门票": 120
        }
    },
    "yanbian": {

        "name": "延吉市",
        "title": "风情之都",
        "description": "延吉市位于吉林省东部，是延边朝鲜族自治州首府，中国唯一的朝鲜族自治州所在地。这里民族文化浓厚，汉朝双语交融，既有热情奔放的民俗歌舞，又有冷面、打糕等独具特色的美食。境内自然资源丰富，森林覆盖率高，周边拥有老里克湖、帽儿山等风光胜地，是感受边境文化与自然风光完美结合的理想之地。",
        // "video": "assets/video/yanbian/延边.mp4",
        // "audio": "assets/audio/yanbian/延边介绍.mp3",
        "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/yanbian/%E5%BB%B6%E8%BE%B9.mp4",
        "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/yanbian/%E5%BB%B6%E8%BE%B9%E4%BB%8B%E7%BB%8D.mp3",
        "food": [
            {
                "name": "延吉冷面",
                "desc": "延吉冷面是朝鲜族传统名食，以荞麦面为主料，配冰镇牛肉清汤，酸甜沁凉。汤底由牛骨、牛肉熬制，冷藏后调入白醋、糖、梨汁，入口清爽。面上铺牛肉片、煮蛋、辣白菜、黄瓜丝，缀苹果片或西瓜，红黄绿相间，色彩明快。面条筋道弹牙，汤水冰爽透心，搭配黄芥末酱更添辛香。盛夏时节一碗下肚，暑气顿消，冬季也有“以冷制冷”的独特食俗，是延边饮食文化的灵魂代表。（ps:水上市场或西市场有正宗的冷面~）",
                // "video": "./assets/video/yanbian/延吉冷面.mp4",
                // "audio": "assets/audio/yanbian/延吉冷面.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/yanbian/%E5%BB%B6%E5%90%89%E5%86%B7%E9%9D%A2.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/yanbian/%E5%BB%B6%E5%90%89%E5%86%B7%E9%9D%A2.mp3",
            },
            {
                "name": "打糕",
                "desc": "打糕是朝鲜族传统风味糕点，以糯米为原料蒸熟后反复捶打而成，故得名。成品色泽洁白，口感软糯弹牙，常撒上炒香的黄豆粉或包裹红豆沙，甜而不腻。制作时需多人协作，木槌敲击石槽的“咚咚”声与热气交融，充满仪式感。逢年过节、婚庆嫁娶时必备，象征团圆美满。与汉族年糕不同，打糕强调现打现吃，冷食可蘸蜂蜜，热食可油煎焦香，延边市场常见现场捶打售卖场景，是承载民族饮食文化的活态符号。",
                // "video": "./assets/video/yanbian/延吉打糕.mp4",
                // "audio": "assets/audio/yanbian/打糕.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/yanbian/%E5%BB%B6%E5%90%89%E6%89%93%E7%B3%95.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/yanbian/%E6%89%93%E7%B3%95.mp3"
            },
            {
                "name": "人参",
                "desc": "🌱 人参：千年灵草的神话与传奇人参自古被誉为“百草之王”，《神农本草经》载其“补五脏，安精神”。相传深山中的人参可修炼成精，化作红衣童子，采参人须系红绳防其遁逃。东北长白山为道地产区，采参习俗“放山”传承千年，挖参前喊山、用鹿骨针轻取，以苔藓包裹，尽显敬畏。满清视其为“关东神草”，皇家御用；如今延边人工种植兴起，但野山参仍是药中黄金，一须千金。一株参，半部中华医药史，半卷山野灵性传说。 🪔",
                // "video": "./assets/video/yanbian/延吉人参.mp4",
                // "audio": "assets/audio/yanbian/人参.mp3",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/yanbian/%E5%BB%B6%E5%90%89%E4%BA%BA%E5%8F%82.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/yanbian/%E4%BA%BA%E5%8F%82.mp3"
            }
        ],
        "attractions": [
            {
                "name": "长白山北景区",
                "desc": "长白山北景区位于吉林省延边州，是长白山火山地貌的核心游览区。主峰海拔2691米，以天池、瀑布、温泉群等自然奇观闻名。北坡天池视角开阔，湛蓝湖面嵌于火山口，云雾缭绕尤显神秘。68米高的长白瀑布如银河倾泻，为松花江正源。聚龙泉温泉群水温达83℃，可品尝特有的温泉鸡蛋。幽邃的谷底森林保留原始生态，2.5公里木栈道适合徒步观景。景区四季分明：夏季22℃均温避暑佳，秋季层林尽染，冬季化身冰雪王国。游览需注意昼夜温差大，建议携带防风外套，最佳观天池时段为上午10点前。",
                // "audio": "assets/audio/yanbian/长白山北景区.mp3",
                // "video":"assets/video/yanbian/长白山.mp4",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/yanbian/%E9%95%BF%E7%99%BD%E5%B1%B1%E5%8C%97%E6%99%AF%E5%8C%BA.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/yanbian/%E9%95%BF%E7%99%BD%E5%B1%B1%E5%8C%97%E6%99%AF%E5%8C%BA.mp3",
                "fee": 40,
            },
            {
                "name": "图们口岸",
                "desc": "图们口岸位于中国吉林省延边朝鲜族自治州图们市，是中国与朝鲜之间的重要陆路口岸，隔图们江与朝鲜南阳口岸相望。作为国家一类国际客货运输口岸，其历史可追溯至1933年，1990年正式开放，2016年新联检楼启用后通关效率显著提升。该口岸承担中朝间人员往来及货物运输，年过货能力超百万吨，主要进出口矿产、农产品、日用品等，是吉林省唯一铁路公路并行的口岸，中朝国际铁路在此跨境。作为东北亚区域合作枢纽，图们口岸对中朝经贸合作、边境旅游及区域互联互通具有战略意义，江岸观景台可远眺朝鲜风光，成为边境特色旅游打卡地。",
                // "audio": "assets/audio/yanbian/图门口岸.mp3",
                "img": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/yanbian/%E5%9B%BE%E4%BB%AC%E5%8F%A3%E5%B2%B8.jpg",
                // "video": "",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/yanbian/%E5%9B%BE%E9%97%A8%E5%8F%A3%E5%B2%B8.mp3",
                "fee": 90,
            },
            {
                "name": "延吉水上市场",
                "desc": "吉林省延边朝鲜族自治州首府延吉市最具烟火气的传统早市，因靠近烟集河（俗称“水上市场”）得名，以地道朝鲜族美食和民俗风情闻名，被誉为“延吉早餐天花板”。位于，延吉市参花街1425号（近烟集河）开放时间每日早5:00-8:00**（建议6:30前到，热门摊位售完即止）必吃推荐江米鸡、打糕（现捶现卖）、米肠、泡菜、酱汤、温面、七彩油条、明月汤饭、豆浆面、糯叽叽的月亮糕。摊主多着朝鲜族服饰，可围观打糕制作过程，品尝免费泡菜试吃，市场内双语（汉语、朝鲜语）叫卖声交织，充满边境小城的生活气息。",
                // "audio": "assets/audio/yanbian/延吉水上市场.mp3",
                // "video":"assets/video/yanbian/延吉水上市场.mp4",
                "video": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/video/yanbian/%E5%BB%B6%E5%90%89%E6%B0%B4%E4%B8%8A%E5%B8%82%E5%9C%BA.mp4",
                "audio": "https://typora-aoyu.oss-cn-hangzhou.aliyuncs.com/assets/audio/yanbian/%E5%BB%B6%E5%90%89%E6%B0%B4%E4%B8%8A%E5%B8%82%E5%9C%BA.mp3",
                "fee": 0,
            }
        ],
        "route": [
            "Day1: 延吉水上市场体验地道朝鲜族早餐→ 中国朝鲜族民俗园换装拍照、观演→ 傍晚打卡延边大学双语霓虹灯墙、晚餐布车餐厅→ 夜间游布尔哈通河冰雪欢乐谷",
            "Day2（冬季推荐）: 自驾前往和龙老里克湖，穿越雾凇森林→ 午餐后返回延吉→ 下午在延吉百货或延边美术馆自由闲逛→ 品尝冷面或温面收尾",
            "Day2（夏季替代）: 前往帽儿山国家森林公园登山俯瞰延吉全景→ 中午在附近农家乐品尝朝鲜族风味餐→ 下午自由购物或游览延边博物馆"
        ],
        "budget": {
            "住宿": 180,
            "餐饮": 120,
            "交通": 80,
            "门票": 80
        }
    }

}
