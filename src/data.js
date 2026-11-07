export const profile = {
  name: '张诗婷',
  nameEn: 'Zhang Shiting',
  role: 'AI 视觉设计师',
  roleSub: 'AI 短剧资产师',
  age: 27,
  phone: '13128267635',
  email: '275769640@qq.com',
  wechatQr: 'assets/img/wechat-qr.jpg',
  intro:
    '拥有 4 年视觉设计经验，精通设计与 AIGC 工具，具备美术素材的搜索、生成与优化能力；熟悉 AI 漫剧与游戏行业美术需求，兼具用户运营思维与 AIGC 技术学习力。',
  avatar: 'assets/img/avatar.jpg',
}

export const stats = [
  { value: '4', unit: '年', label: '视觉设计经验' },
  { value: '50', unit: '%+', label: '单日素材产出提效' },
  { value: '24', unit: '张', label: '节气系列海报' },
  { value: '7', unit: '+', label: '完整落地项目' },
]

export const experiences = [
  {
    role: 'AI 短剧资产师',
    company: '二毛（广州）动漫有限公司',
    period: '2026.05 — 2026.08',
    points: [
      '视觉资产制作：深度研读剧本，与导演确定整体风格后，生成人物、场景、道具等全套美术资产。',
      '生产流程提效：梳理资产制作流程，建立标准化交付模板与分类归档机制，支撑项目工业化量产。',
      '多方协作对接：作为美术侧关键接口人，高频对接导演组与甲方，保障项目按期推进。',
    ],
  },
  {
    role: '游戏美术设计师',
    company: '广州嘻哈网络有限公司',
    period: '2025.03 — 2026.04',
    points: [
      '主导 AIGC 美术流程从 0 到 1 的搭建，独立负责游戏人物形象与配饰的 AI 生成与后期精修。',
      '建立高效生产 SOP：测试不同 AI 工具的响应速度与生成质量，沉淀提示词库与操作指南，单日素材产出效率提升 50%+。',
      '赋能团队：指导实习生熟悉新流程，将个人方法论转化为团队生产力。',
    ],
  },
  {
    role: '视觉设计师',
    company: '广东华轻质量检测服务中心有限公司',
    period: '2022.07 — 2023.10',
    points: [
      '负责品牌视觉全流程设计，独立完成海报、画册、电商物料等商用设计，落地多套市场物料。',
      '参与行业展会物料设计，通过视觉策略强化品牌传播，具备跨部门协作与商用设计落地思维。',
    ],
  },
]

export const education = {
  school: '北京理工大学珠海学院',
  degree: '本科 · 商务英语',
  period: '2018.09 — 2022.05',
  notes: [
    '毕业前参加专业设计培训机构，系统学习平面设计、电商视觉与应用。',
    '英语专业八级，可查阅海外 AIGC 技术文档与美术素材。',
  ],
}

export const tools = [
  'Photoshop',
  'Illustrator',
  'Midjourney',
  '即梦',
  '可灵',
  'UE5',
  'Blender',
  'ComfyUI',
]

/* ------------------------------------------------------------------
 * 重头戏：宙斯为爱而来 · Case Study
 * 视频到位后，把 video 换成 'assets/video/zeus.mp4' 即可自动启用播放器。
 * ------------------------------------------------------------------ */
export const zeusCase = {
  index: '01',
  title: '宙斯为爱而来',
  en: 'Zeus · For Love',
  subtitle: 'AI 海外真人短剧 · 全案美术资产',
  year: '2026',
  role: '美术资产全流程：人设 → 场景 → 道具 → 变体',
  video: null,
  poster: 'assets/img/zeus-scene-01.jpg',
  cover: 'assets/img/zeus-scene-01.jpg',
  intro:
    '这是一部希腊神话背景的女频逆袭短剧：众神之王宙斯伪装成乞丐下凡，救下被逼嫁给老商人的科拉；奥林匹斯山遭冰霜巨人袭击，他被迫离开七年，归来时妻儿正被全镇当作「恶魔」羞辱迫害。故事在人间庄园与神界之间来回切换，美术要同时立起两套世界观——同一张脸换个身份还被认得出，同一座庄园换个机位还对得上。剧集的画风介于写实与电影感之间，我把「场景转角度 → 服装变体 → 演员脸模 → 道具资产表」拆成四个可复用的步骤，让 AI 产出的资产真正能直接进分镜与后期。',
  meta: [
    { k: '题材', v: '希腊 / 中世纪' },
    { k: '资产类型', v: '角色 · 场景 · 道具' },
    { k: '交付形态', v: '白底素材 + 资产表' },
  ],
  steps: [
    {
      no: '01',
      key: 'scenes',
      title: '场景转角度',
      en: 'Scene',
      desc: '每个场景先出一张全景定调：建筑比例、空间进深、光照方向一次说清；再以这张全景为基准向左向右延伸机位——外景、反打、内景与阶梯特写，全部共用同一套结构与同一束光，切镜头时不会穿帮。分镜需要哪个角度，资产表里就能直接调用。',
      points: ['全景定调结构与光比', '同一比例下延展机位', '内外景 / 日夜景成组归档'],
      sceneSets: [
        {
          key: 'olympus',
          no: 'A',
          title: '奥林匹斯山',
          en: 'Mount Olympus',
          note: '神界的母场景。全景交代悬浮山脉与瀑布群的位置关系，外景平台、神殿内景与阶梯都从这张图延展出来：同一圈柱廊、同一片云海，只是机位与时辰在变。',
          pan: {
            src: 'assets/img/zeus-scene-olympus-pan.jpg',
            caption: '奥林匹斯山 · 云海之上的神域全景，悬浮山体与瀑布群定调',
            ratio: '2 / 1',
          },
          shots: [
            {
              src: 'assets/img/zeus-scene-olympus-fight-1.jpg',
              caption: '外景 1 · 神殿外平台与雕像群，日落侧光下的山体轮廓',
              ratio: '16 / 9',
            },
            {
              src: 'assets/img/zeus-scene-olympus-fight-2.jpg',
              caption: '外景 2 · 同一平台的另一机位，向右俯瞰云海与远山',
              ratio: '16 / 9',
            },
            {
              src: 'assets/img/zeus-scene-olympus-temple.jpg',
              caption: '神殿内 · 弧形柱廊与王座，众神分列商议',
              ratio: '16 / 9',
            },
            {
              src: 'assets/img/zeus-scene-olympus-stairs.jpg',
              caption: '神殿阶梯 · 正面仰角，登殿入场的纵深',
              ratio: '16 / 9',
            },
          ],
        },
        {
          key: 'manor',
          no: 'B',
          title: '庄园',
          en: 'The Manor',
          note: '人间的主场景，也是科拉一家的住所——Smith 庄园，属于殷实的中产家庭。全景定下石砌主楼、庭院与远山的比例，夜宴、大路与后院是同一座庄园在不同时辰、不同机位下的样子。',
          pan: {
            src: 'assets/img/zeus-scene-manor-pan.jpg',
            caption: '庄园全景 · Smith 庄园的中产宅邸，石砌主楼与庭院，日落光比定调',
            ratio: '2 / 1',
          },
          shots: [
            {
              src: 'assets/img/zeus-scene-manor-feast-front.jpg',
              caption: '凯旋夜宴 · 庭院全景，长桌、火柱与挂旗，月光顶光',
              ratio: '16 / 9',
            },
            {
              src: 'assets/img/zeus-scene-manor-feast-reverse.jpg',
              caption: '凯旋夜宴 · 反打机位，从长桌方向回望主楼与拱门',
              ratio: '16 / 9',
            },
            {
              src: 'assets/img/zeus-scene-manor-yard.jpg',
              caption: '后院 · 女主洗衣处，晾衣绳、石井与葡萄架',
              ratio: '16 / 9',
            },
            {
              src: 'assets/img/zeus-scene-manor-road.jpg',
              caption: '庄园大路 · 火把夹道的夜间进庄镜头',
              ratio: '16 / 9',
            },
          ],
        },
        {
          key: 'market',
          no: 'C',
          title: '集市',
          en: 'The Market',
          note: '开场的相遇之地。主街全景交代摊棚、石板路与远处城堡的层次，再向内延伸到小巷里的那间茅草屋——它是宙斯下凡时随手找的落脚处，不是主角一家的居所（科拉的家是 Smith 庄园）。',
          pan: {
            src: 'assets/img/zeus-scene-market-pan.jpg',
            caption: '集市大路 · 主街全景，摊棚、石板路与远山城堡',
            ratio: '2 / 1',
          },
          shots: [
            {
              src: 'assets/img/zeus-scene-market-hut-out.jpg',
              caption: '小巷茅屋外 · 茅草顶与木构门脸，男主下凡时的临时落脚处',
              ratio: '16 / 9',
            },
            {
              src: 'assets/img/zeus-scene-market-hut-in.jpg',
              caption: '茅草屋内 · 昏暗室内，木桌、土炕与壁炉',
              ratio: '16 / 9',
            },
          ],
        },
      ],
    },
    {
      no: '02',
      key: 'variants',
      title: '服装变体与规则',
      en: 'Costume Variant & Rules',
      desc: '同一个角色靠可复用的变体规则被认出来：服装怎么换、状态怎么变、规则怎么定。',
      groups: [
        {
          no: 'A',
          key: 'costume',
          title: '服装变体',
          en: 'Costume Variant',
          desc: '同一角色在不同场景下的穿搭，讲究人设与场合同步。宙斯从下凡的乞丐装，到成婚的华服，再到奥林匹斯山的神王战甲；科拉从被使唤的女仆装、街上被拖行的白裙，到逆袭后的华服——衣服本身就是叙事线索。',
          points: ['同一脸模，换装不换人', '服装对应身份与场景', '每套出正 / 侧 / 背三视图'],
          casts: [
            {
              name: '宙斯',
              en: 'Zeus',
              items: [
                {
                  src: 'assets/img/zeus-cost-beggar.jpg',
                  caption: '乞丐装 · 下凡游历',
                  ratio: '3 / 2',
                },
                {
                  src: 'assets/img/zeus-cost-royal.jpg',
                  caption: '华服 · 成婚时茅屋变宫殿',
                  ratio: '3 / 2',
                },
                {
                  src: 'assets/img/zeus-cost-armor.jpg',
                  caption: '神王战甲 · 奥林匹斯山打斗',
                  ratio: '3 / 2',
                },
              ],
            },
            {
              name: '科拉',
              en: 'Cora',
              items: [
                {
                  src: 'assets/img/zeus-cost-kora-maid.jpg',
                  caption: '女仆装 · 在家被使唤',
                  ratio: '3 / 2',
                },
                {
                  src: 'assets/img/zeus-cost-kora-white.jpg',
                  caption: '白裙 · 街上被拖行',
                  ratio: '3 / 2',
                },
                {
                  src: 'assets/img/zeus-cost-kora-royal.jpg',
                  caption: '华服 · 成婚时茅屋变宫殿',
                  ratio: '3 / 2',
                },
              ],
            },
          ],
        },
        {
          no: 'B',
          key: 'state',
          title: '状态变体',
          en: 'State Variant',
          desc: '同一角色在剧情里会经历受伤、衰老、情绪爆发等状态。以提示词持续微调为主，必要时框选局部补绘，在保留脸部特征与服装结构的前提下，只改变情绪与伤势，让变体既「变了」又「还是他」。',
          points: ['提示词微调锁定情绪与伤势', '框选局部补充细节', '调色统一氛围与光比'],
          compare: {
            before: 'assets/img/zeus-hero-normal.jpg',
            after: 'assets/img/zeus-hero-rage.jpg',
            beforeLabel: '常态',
            afterLabel: '发怒变身',
            caption: '主角（宙斯）· 常态 / 发怒变身',
          },
          alt: [
            {
              before: 'assets/img/zeus-boy-normal.jpg',
              after: 'assets/img/zeus-boy-rage.jpg',
              label: '配角（红发少年）· 常态 / 发怒',
            },
            {
              before: 'assets/img/zeus-state-green-normal.jpg',
              after: 'assets/img/zeus-state-green-hurt.jpg',
              label: '贵妇 · 常态 / 受伤',
              afterLabel: '受伤',
            },
          ],
        },
        {
          no: 'C',
          key: 'costume-rules',
          title: '服饰原则 / 色彩体系',
          en: 'Principles · Palette',
          desc: '换装不是临时发挥。先用一组 if-then 规则约束「穿什么、戴不戴」，再用色彩体系把不同阶层的观感拉开——规则管逻辑，色彩管气质。',
          rules: {
            title: '服饰基本原则',
            en: 'If → Then',
            lead: '规则不写死具体款式，只约束「什么条件下必须/不能出现什么」，剩下的交给参考图与提示词。',
            items: [
              { cond: '场合', then: '睡衣去配饰，晚宴头饰 / 耳饰 / 项链全套' },
              { cond: '身份', then: '贵族绸缎金饰，平民粗布麻衣并做旧' },
              { cond: '重要性', then: '主角主色突出，群演暗色单层' },
              { cond: '时代', then: '与时代不符的饰品必须替换，不做硬凑' },
            ],
            note: '服装同理：款式参考若与设定有出入，以参考图为准，只在提示词末尾轻控制时代倾向。',
          },
          palette: {
            title: '色彩体系',
            en: 'Color System',
            lead: '同一部戏里三组人分三套色彩策略：主神靠色相区分神职，群演靠明暗拉层次，摊贩靠低饱和退回背景。看远景也能一眼分出谁是主角。',
          },
          tiers: [
            {
              name: '十二主神',
              en: 'The Twelve',
              note: '在贴合希腊服装风格的前提下，叠加高贵与神圣感。材质与色彩也随每位神祇的个性、执掌的职权而变——战神偏重甲胄与冷金属，海神取浪蓝与贝壳纹，爱神则用柔纱与浅粉。同一族群，气质各不相同，也不失神格统一。',
              caption: '三组分开定调：红蓝双色 / 粉紫冷调 / 米金暖调，男女神各成一组。',
              items: [
                { src: 'assets/img/zeus-color-gods-1.jpg' },
                { src: 'assets/img/zeus-color-gods-2.jpg' },
                { src: 'assets/img/zeus-color-gods-3.jpg' },
              ],
            },
            {
              name: '宴会群演',
              en: 'Banquet Cast',
              note: '表面身份是村民，但因与领主交好，实际同属贵族阶层。因此服装不能用平民的粗布：配色明艳且有层次，靠深浅与邻近色的叠穿拉开空间；面料考究，绸缎、细纱与金属饰件并用，既衬得起宴会场面，又整体压低一档饱和度，不与主神抢视线。',
              caption: '酒红配墨绿 / 棕褐配灰绿 / 灰紫配湖绿，整体压低一档饱和度。',
              items: [
                { src: 'assets/img/zeus-color-banquet-1.jpg' },
                { src: 'assets/img/zeus-color-banquet-2.jpg' },
                { src: 'assets/img/zeus-color-banquet-3.jpg' },
              ],
            },
            {
              name: '集市摊贩',
              en: 'Market Folk',
              note: '不能使用太显眼的颜色和高级材质，避免抢走主角风头，整体回到麻布、粗棉与皮革的哑光质感。人员搭配上刻意覆盖男女老少——妇人、孩童、青壮与老者同时出现在集市镜头里，让市井气息真实可信，也让主角入场时的对比更明显。',
              caption: '麻布裙装 / 粗棉皮革 / 低饱和大地色，覆盖男女老少。',
              items: [
                { src: 'assets/img/zeus-color-market-1.jpg' },
                { src: 'assets/img/zeus-color-market-2.jpg' },
                { src: 'assets/img/zeus-color-market-3.jpg' },
              ],
            },
          ],
        },
      ],
    },
    {
      no: '03',
      key: 'faces',
      title: '脸模融合',
      en: 'Face Model',
      desc: '先从演员素材里提炼稳定的面部特征，把脸模与服装、光影做融合，再向主角、配角、群演分层输出。核心不是「长得像」，而是同一个人在每一集里都能被认出来。',
      points: ['演员脸模矩阵筛选', '服装与脸模融合', '主角 / 配角 / 群演分层'],
      pair: true,
      media: [
        {
          src: 'assets/img/zeus-faces-01.jpg',
          caption: '脸模融合：演员素材 → 稳定面部特征',
          ratio: '1392 / 2164',
        },
        {
          src: 'assets/img/zeus-faces-02.jpg',
          caption: '脸模融合：根据人物身份 / 个性增强特征',
          ratio: '1800 / 1726',
        },
      ],
    },
    {
      no: '04',
      key: 'props',
      title: '道具资产表',
      en: 'Props',
      desc: '道具是最容易被 AI 画错的部分——器物的结构、纹样、比例都得经得起特写。做法是先批量产出多版备选，再逐个考据修正，最后按完好 / 破损出变体，抠成透明底交付后期。',
      points: ['批量生成多版备选', '考据修正结构与纹样', '完好 / 破损变体 + 透明底交付'],
      /* 两张同一格式的资产表：每张独占一行，横向铺满，共用一条说明 */
      mediaRows: {
        note: '道具资产表 · 按「道具名称 / 使用场景 / 多版备选」归档，黄框为选定版本',
        items: [
          { src: 'assets/img/zeus-prop-sheet-01.jpg' },
          { src: 'assets/img/zeus-prop-sheet-02.jpg' },
        ],
      },
    },
  ],
}

/* ------------------------------------------------------------------
 * 案例 02：古风簪花小游戏
 * ------------------------------------------------------------------ */
export const zanhuaCase = {
  index: '02',
  title: '簪花小游戏',
  en: 'Zanhua · Dress-up Game',
  subtitle: '古风休闲游戏 · 簪花饰品全案',
  year: '2026',
  badge: '从 0 到 1 的美术搭建 · 三个关卡',
  intro:
    '项目要在极短时间内产出大量风格统一、又能对上角色设定的簪花饰品。我先把三个关卡的画风、主色与核心视觉元素定下来，再把人物质感转成统一的古风插画语言；饰品按关卡主题做搭配，保证错落有致、颜色有层次，最后整理成规范切图导入游戏 UI 反复验证。',
  meta: [
    { k: '题材', v: '古风 / 花神' },
    { k: '资产类型', v: '人物 · 饰品 · 背景' },
    { k: '交付形态', v: '透明底切图 + 规范命名' },
  ],
  hero: [
    'assets/img/zh-final-01.jpg',
    'assets/img/zh-final-09.jpg',
    'assets/img/zh-final-06.jpg',
  ],
  steps: [
    {
      no: '01',
      key: 'redraw',
      title: '转绘与模型选型',
      en: 'Redraw · Model Test',
      desc: '真人素材要转成统一的古风插画语言，但不能丢掉脸和服饰结构。同一条提示词分别跑不同模型，比较笔触、光比与配色后选定最贴合这一档风格的那一个，再把人物与饰品分开转绘，方便后期独立搭配。',
      points: ['同一提示词横向评测不同 AI 模型', '锁定半厚涂笔触与柔和光比', '人物与饰品分轨转绘，保留结构'],
      groups: [
        {
          no: 'A',
          title: '素材与转绘',
          en: 'Redraw',
          note: '同一姿态、同一构图，左边原图、右边插画转绘，两张图尺寸对齐，拖动中间的竖线可以直接重合比对。人物看服制与五官，道具看结构、材质与工艺细节有没有被画丢。',
          pairs: [
            {
              label: '真人参考 → 转绘（梅花关）',
              before: 'assets/img/zh-pair-before-01.jpg',
              after: 'assets/img/zh-person-after-01.jpg',
            },
            {
              label: '真人参考 → 转绘（春色关）',
              before: 'assets/img/zh-pair-before-02.jpg',
              after: 'assets/img/zh-person-after-02.jpg',
            },
            {
              label: '真人参考 → 转绘（紫衣花海关）',
              before: 'assets/img/zh-pair-before-03.jpg',
              after: 'assets/img/zh-person-after-03.jpg',
            },
          ],
          propPairs: [
            {
              label: '缠花发钗 · 花瓣薄透与金箔碎点',
              before: 'assets/img/zh-pair-prop-flower-ref.jpg',
              after: 'assets/img/zh-pair-prop-flower-redraw.jpg',
            },
            {
              label: '贝母花钗 · 珠光层叠与油滴质感',
              before: 'assets/img/zh-pair-prop-mini-ref.jpg',
              after: 'assets/img/zh-pair-prop-mini-redraw.jpg',
            },
            {
              label: '蝶形发簪 · 冷光渐层与亮片肌理',
              before: 'assets/img/zh-pair-prop-butterfly-ref.jpg',
              after: 'assets/img/zh-pair-prop-butterfly-redraw.jpg',
            },
            {
              label: '点翠金钗 · 镂空走向与珐琅填色',
              before: 'assets/img/zh-pair-prop-gold-ref.jpg',
              after: 'assets/img/zh-pair-prop-gold-redraw.jpg',
            },
          ],
        },
        {
          no: 'B',
          title: '模型选择',
          en: 'Model Test',
          note: '同一张参考、同一条提示词横向跑不同模型，按资产类型分别评测：人物看五官与笔触，花钗看通透与层次，金饰看金属光泽与工艺细节。三类资产各自选出最贴合的那一个，再进入批量生产。',
          navSets: [
            {
              label: '人物转绘',
              en: 'Character',
              note: '同一张真人写真、同一条提示词。重点看五官是否被适度美化、皮肤有没有涂抹感、服制结构有没有跑偏。',
              items: [
                {
                  key: 'ref',
                  title: '原始参考',
                  en: 'Reference',
                  src: 'assets/img/zh-m-ref.jpg',
                  caption: '真人写真 · 姿态、服制与首饰位都以此为准',
                  desc: '参考图先把发式、服制层次和手部姿态定死，后面所有生成都对着这一张比对，避免不同模型各画各的。',
                },
                {
                  key: 'seedream',
                  title: 'seedream',
                  en: 'Test A',
                  src: 'assets/img/zh-m-01.jpg',
                  caption: 'seedream · 五官与原图太像，不够灵动',
                  desc: '笔触干净，但五官几乎照搬真人，缺少插画该有的概括与灵气，人物显得偏成熟，不太适合这套轻甜的古风调性。',
                },
                {
                  key: 'nanobanana',
                  title: 'NanoBanana',
                  en: 'Test B · Final',
                  final: true,
                  src: 'assets/img/zh-m-02.jpg',
                  caption: 'NanoBanana · 五官更甜美灵动，定为主用',
                  desc: '五官做了适度美化，眼神更灵动，同时保住了原本的配色与服制结构，是几个版本里最贴合风格的一版。',
                },
                {
                  key: 'refine',
                  title: '质感修复',
                  en: 'Refine',
                  src: 'assets/img/zh-m-03.jpg',
                  caption: '修复版 · 去涂抹感，还原织物质感',
                  desc: '在选定模型的基础上再修一遍：去掉大面积涂抹感，把刺绣、暗纹和衣料褶皱的细节重新拉回来，然后才进入批量生产。',
                },
              ],
            },
            {
              label: '花钗道具',
              en: 'Hairpin',
              note: '道具比人脸苛刻：要在纯白底上单独立住，花瓣的薄度、金丝的细度、珠子的透度都得撑得住放大观察。',
              items: [
                {
                  key: 'ref',
                  title: '原始素材',
                  en: 'Reference',
                  src: 'assets/img/zh-m-flower-ref.jpg',
                  caption: '实物照 · 白玉珠、缠枝花与梳齿结构为判据',
                  desc: '拿实物照当唯一基准：花心的珠子、外圈缠枝的走向、底下的梳齿数量都要能一一对上，才算没画错东西。',
                },
                {
                  key: 'nano',
                  title: 'NanoBanana 2.0',
                  en: 'Test A',
                  src: 'assets/img/zh-m-flower-nano.jpg',
                  caption: '画风偏旧，叶片不透亮、颜色发脏',
                  desc: '形是准的，但画风偏旧，叶片不够通透、通透感没出来，颜色也有点脏。',
                },
                {
                  key: 'gpt',
                  title: 'GPT-2',
                  en: 'Test B',
                  src: 'assets/img/zh-m-flower-gpt.jpg',
                  caption: '色泽鲜亮，但画面细碎',
                  desc: '颜色一下就对了，可金丝被切得太碎，镂空和花瓣的边缘全是小笔触，缩到道具栏尺寸就糊成一团。',
                },
                {
                  key: 'seedance',
                  title: 'Seedance 4.5',
                  en: 'Test C · Final',
                  final: true,
                  src: 'assets/img/zh-m-flower-seed.jpg',
                  caption: '各项适中 · 微调饱和度即可用',
                  desc: '通透度、金丝完整度、花瓣层次都落在中间值上，没有明显短板，后期只需要轻轻提一档饱和度就能直接交付。',
                },
              ],
            },
            {
              label: '金饰道具',
              en: 'Gold Ornament',
              ratio: '1 / 1',
              note: '金饰最难的是「像工艺而不是像渲染」：镂空要能透过去，珍珠要温润，表面得有细微的錾刻痕迹。',
              items: [
                {
                  key: 'ref',
                  title: '原始素材',
                  en: 'Reference',
                  src: 'assets/img/zh-m-gold-ref.jpg',
                  caption: '实物照 · 镂空花鸟、珍珠与押发齿',
                  desc: '以实物为准：花鸟纹样的镂空走向、中心珍珠的位置、下方押发齿的根数与弧度，都在这张图上量。',
                },
                {
                  key: 'nano',
                  title: 'NanoBanana 2.0',
                  en: 'Test A',
                  src: 'assets/img/zh-m-gold-nano.jpg',
                  caption: '仙侠游戏画风，可作备用',
                  desc: '风格化最重的一版，金色偏亮偏油，工艺细节被概括掉了；气质够仙，但和这套偏写实的古风插画放在一起会跳。',
                },
                {
                  key: 'gpt',
                  title: 'GPT-2',
                  en: 'Test B',
                  src: 'assets/img/zh-m-gold-gpt.jpg',
                  caption: '画面干净，但过于真实',
                  desc: '干净到像产品渲染图：金属反射太锐、没有插画的手绘味，直接用在游戏里会显得像贴了一张照片。',
                },
                {
                  key: 'seedance',
                  title: 'Seedance 4.5',
                  en: 'Test C · Final',
                  final: true,
                  src: 'assets/img/zh-m-gold-seed.jpg',
                  caption: '相对真实 · 保留工艺细节，再转绘收口',
                  desc: '工艺细节留得最全，镂空与錾刻都能看清，只差最后一层插画化处理——作为二次转绘的底图最省事。',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      no: '02',
      key: 'match',
      title: '饰品搭配与多材质实践',
      en: 'Matching · Materials',
      desc: '饰品是这套项目的核心资产。按十二花神逐套生成饰品种类——发冠、发簪、步摇、耳饰、项圈、手串，再按关卡主题做搭配：主花定视觉中心，配花拉开疏密，流苏与垂坠件控制节奏，颜色按同色系叠深浅、邻近色做过渡，保证错落有致、层次丰富，也不抢人物五官。',
      points: ['按花神出整套饰品种类', '主花定中心，配花拉开疏密', '同色系叠深浅 + 邻近色过渡'],
      groups: [
        {
          no: 'A',
          title: '多材质实践',
          en: 'Materials',
          note: '按材质分成四类各出一组：珐琅彩与宝石走厚重华贵，琉璃与热缩片做通透轻盈，绢花缠花负责柔和的体积感，金饰定整体的工艺底子。同一套造型里按需混搭，材质之间的对比就是层次。',
          prompt: {
            title: '提示词工程',
            en: 'Prompt Engineering',
            desc: '同一批原始素材要出多种质感，靠的不是反复抽卡。我把提示词拆成可替换的槽位：画风、构图、精度三段固定不动，只换最后一段材质描述。四类材质因此共用同一个画风底座——出图风格不跑，唯一在变的是「它是什么做的」。',
            layers: [
              { k: '画风', v: '现代古风插画 · 半厚涂 · 柔和光影 · 中高饱和但不发灰' },
              { k: '构图', v: '抠出主体 · 单件居中 · 纯白底 · 无阴影 · 完整不裁切' },
              { k: '精度', v: '超微距细节 · 材质纹理清晰 · 锐利聚焦' },
            ],
            tweaks: [
              { mat: '热缩片', en: 'Shrink Plastic', key: '半透明层叠 · 粉红渐变 · 高光泽' },
              { mat: '琉璃 / 水晶', en: 'Glass · Crystal', key: '晶莹剔透 · 内部纹理 · 强折光' },
              { mat: '亚克力', en: 'Acrylic', key: '透明硬质 · 镜面高光' },
              { mat: '树脂', en: 'Resin', key: '半透明朦胧 · 包裹感 · 琥珀质感' },
              { mat: '珍珠 / 贝母', en: 'Pearl · Shell', key: '莹润珠光 · 温润不刺眼' },
              { mat: '网纱', en: 'Gauze', key: '轻盈朦胧 · 层次分明 · 柔和边缘' },
              { mat: '绢花 / 缠花', en: 'Silk · Wrapped', key: '丝织纹理 · 花瓣轻盈 · 金边勾线' },
              { mat: '金饰', en: 'Gold Filigree', key: '金属光泽 · 镂空雕刻 · 纹样对称' },
            ],
            note: '三段锁死、只换材质槽，是这几批素材能保持同一套审美语汇的原因；反过来，材质词写虚了，出图就会退回「塑料花」的通用解。',
          },
          categories: [
            {
              label: '珐琅彩 · 珍珠贝母 · 宝石',
              en: 'Enamel · Pearl · Gem',
              items: [
                { src: 'assets/img/zh-mat-a1.jpg', caption: '珐琅彩 · 粉釉 U 形发钗、花丝发梳与珠花发簪套组' },
                { src: 'assets/img/zh-mat-a2.jpg', caption: '珍珠贝母 · 珍珠编珠发冠，淡青玉花与金叶点缀' },
                { src: 'assets/img/zh-mat-a3.jpg', caption: '宝石 · 红宝八瓣花钿，绿松石花心，珍珠内圈' },
                { src: 'assets/img/zh-mat-a4.jpg', caption: '珍珠贝母 · 珍珠长链，青金小花间隔点缀' },
              ],
            },
            {
              label: '琉璃 · 热缩片 · 水晶',
              en: 'Glass · Shrink Plastic · Crystal',
              items: [
                { src: 'assets/img/zh-mat-b1.jpg', caption: '热缩片 · 层叠玫瑰发饰，半透粉红渐变' },
                { src: 'assets/img/zh-mat-b2.jpg', caption: '琉璃 · 翠玉珠花双股发簪，配弧形珠链' },
                { src: 'assets/img/zh-mat-b3.jpg', caption: '水晶 · 粉花双股发钗，半透花瓣与玉色珠' },
                { src: 'assets/img/zh-mat-b4.jpg', caption: '琉璃 · 蓝紫花簇发钗，珠光花瓣与水晶流苏' },
              ],
            },
            {
              label: '绢花 · 缠花 · 绒花',
              en: 'Silk · Wrapped · Velvet',
              items: [
                { src: 'assets/img/zh-mat-c1.jpg', caption: '缠花 · 白瓣山茶与粉芍药双簪，坠水滴琉璃' },
                { src: 'assets/img/zh-mat-c2.jpg', caption: '绢花 · 牡丹团花发饰，配蝶翼与渐变绢叶' },
                { src: 'assets/img/zh-mat-c3.jpg', caption: '绢花 · 层瓣大牡丹，粉蓝渐变金丝勾边' },
                { src: 'assets/img/zh-mat-c4.jpg', caption: '绒花 · 多色绒条小花枝，绒花与串珠组合' },
              ],
            },
            {
              label: '金饰',
              en: 'Gold Filigree',
              items: [
                { src: 'assets/img/zh-mat-d1.jpg', caption: '金饰 · 发冠、簪钗与红宝流苏整套，金丝錾刻' },
                { src: 'assets/img/zh-mat-d2.jpg', caption: '金饰 · 蝶群花簪，配同款蝶形耳坠' },
                { src: 'assets/img/zh-mat-d3.jpg', caption: '金饰 · 凤鸟步摇与花丝发冠，点翠蓝料坠' },
                { src: 'assets/img/zh-mat-d4.jpg', caption: '金饰 · 发冠、簪钗与流苏套组，红宝点翠' },
              ],
            },
          ],
        },
        {
          no: 'B',
          title: '关卡成品',
          en: 'Final Scenes',
          note: '人物、饰品、背景三部分合成后，再按主题校一遍色调。同一套人设换个发型和配饰，就能撑起另一个花神关卡。',
          sections: [
            {
              no: '01',
              title: '十余件成套，不显杂乱',
              en: 'Density Control',
              desc: '单套饰品都在 10 件以上。主花定视觉中心，配花按大小与疏密分层铺开，流苏与垂坠件只在必要时出现——靠层级而不是靠数量撑起华丽感，视线有落点也有留白。',
              cols: 3,
              items: [
                { src: 'assets/img/zh-final-10.jpg', caption: '蜀葵关 · 冠、簪、钗与掩鬓十余件成套', ratio: '3 / 4' },
                { src: 'assets/img/zh-final-11.jpg', caption: '杏花关 · 主花居中，配花与流苏向两侧递减', ratio: '3 / 4' },
                { src: 'assets/img/zh-final-08.jpg', caption: '榴花关 · 金冠压顶，红宝与石榴花分层', ratio: '3 / 4' },
              ],
            },
            {
              no: '02',
              title: '配色跟着主题走',
              en: 'Palette by Theme',
              desc: '花品与时令决定主色，材质决定辅色：梅用朱红配月白，榴花取赤金，春色转柳绿湖蓝；再以珍珠、金饰作中性过渡。同色系叠深浅、邻近色做过渡，整组不跳色也不发灰。',
              cols: 3,
              items: [
                { src: 'assets/img/zh-final-02.jpg', caption: '桃花关 · 粉桃主色，嫩绿作叶色过渡', ratio: '3 / 4' },
                { src: 'assets/img/zh-final-03.jpg', caption: '春色关 · 柳绿配湖蓝，冷色系压住饱和度', ratio: '3 / 4' },
                { src: 'assets/img/zh-final-06.jpg', caption: '吾家有女 · 赤金主色，月白作中性间隔', ratio: '3 / 4' },
              ],
            },
            {
              no: '03',
              title: '循传统戴法，错落有致',
              en: 'Traditional Placement',
              desc: '冠、簪、钗、步摇、掩鬓各有其位：发髻中轴与两侧重量平衡，垂坠件不压五官，耳饰与项饰互不抢戏。既合汉服礼制，也让传统饰品的层次与讲究被看见。',
              cols: 3,
              items: [
                { src: 'assets/img/zh-final-04.jpg', caption: '春色关 · 庭院机位 · 冠居发髻中轴', ratio: '3 / 4' },
                { src: 'assets/img/zh-final-05.jpg', caption: '春色关 · 桥边机位 · 侧向步摇自然垂落', ratio: '3 / 4' },
                { src: 'assets/img/zh-final-07.jpg', caption: '吾家有女 · 蓝粉配色 · 鬓边掩鬓对称', ratio: '3 / 4' },
              ],
            },
          ],
        },
      ],
    },
    {
      no: '03',
      key: 'deliver',
      title: 'UI 实装与交付',
      en: 'Delivery',
      desc: '资产完成后与程序对接，明确输出格式、尺寸与命名规则，按关卡和用途分类归档。实装验证分两轮：先由我在美术侧按界面比例自测，再交给程序接进真机跑一轮，验证实际玩法中的视觉效果与辨识度——这一步常会发现单看没问题、缩小到道具栏就看不清的饰品。',
      points: ['美术自测 + 程序真机两轮验证', '格式 / 尺寸 / 命名规范统一', '切图与簪位成对归档、开箱即用'],
      groups: [
        {
          no: 'A',
          title: '游戏内 UI 效果',
          en: 'In-game UI',
          note: '把成品放进真实的界面比例里看：主花在缩略图状态下还认不认得出、流苏会不会糊成一片、背景与饰品的对比够不够。先由我自己在美术侧搭环境自测一轮，再交给程序那边接进真机跑一轮，两边对不上的地方在这里暴露出来。',
          uiSets: [
            {
              label: '美术自测',
              en: 'Art Test',
              note: '美术侧按界面比例搭好全套素材，逐个关卡跑一遍，先确认主花辨识度、流苏密度与配色层次，再交付给程序。',
              cols: 4,
              items: [
                { src: 'assets/img/zh-ui-01.jpg', caption: 'UI 实装 · 梅花关', ratio: '9 / 16' },
                { src: 'assets/img/zh-ui-02.jpg', caption: 'UI 实装 · 桃花关', ratio: '9 / 16' },
                { src: 'assets/img/zh-ui-03.jpg', caption: 'UI 实装 · 芍药关', ratio: '9 / 16' },
                { src: 'assets/img/zh-ui-04.jpg', caption: 'UI 实装 · 荷花关', ratio: '9 / 16' },
              ],
            },
            {
              label: '程序实装测试',
              en: 'Build Test',
              note: '程序接入后的真机界面截图：道具栏缩略图、发饰落位与判定区都由代码驱动，最接近玩家实际看到的样子。',
              cols: 2,
              ratio: '1191 / 837',
              items: [
                { src: 'assets/img/zh-build-01.jpg', caption: '真机测试 · 第一组 3 个关卡界面', ratio: '1191 / 837' },
                { src: 'assets/img/zh-build-02.jpg', caption: '真机测试 · 第二组 3 个关卡界面', ratio: '1205 / 846' },
              ],
            },
          ],
        },
        {
          no: 'B',
          title: '切图交付',
          en: 'Cut-out Delivery',
          note: '按关卡整理的最终切图包：每个饰品单独导出透明底 PNG，统一命名规则，再按「切图 / 簪位」成对归档，程序拿到包就能直接替换。',
          cuts: [
            { src: 'assets/img/zh-cut-01.jpg', label: '春色关', en: 'Spring', note: '12 件饰品切图，每件分「切图 / 簪位」两份成对命名，另附人物立绘与背景' },
            { src: 'assets/img/zh-cut-02.jpg', label: '石榴关', en: 'Pomegranate', note: '15 件饰品切图，含金饰鸟雀、点翠流苏与红宝项饰，附人物立绘、改名表与批处理脚本' },
            { src: 'assets/img/zh-cut-03.jpg', label: '桂花关', en: 'Osmanthus', note: '10 件饰品切图，另附人物立绘、PSD 源文件与改名对照表' },
          ],
        },
      ],
    },
  ],
}

/* ------------------------------------------------------------------
 * 精选项目：按重要性排序
 * video 存在时，卡片悬停自动播放，点击打开带进度条的完整视频。
 * ------------------------------------------------------------------ */
export const projects = [
  {
    id: 'maotang',
    index: '03',
    title: '猫咪和汤 · 节气系列',
    subtitle: '24 张节气海报 · IP 系列化',
    tags: ['IP 系列化', '游戏海报', 'AIGC 生产'],
    desc: '固定 Q 版猫咪人设，以植物、色彩与民俗元素对应物候，24 张海报验证了 AIGC 在 IP 系列化产出中的可控性。',
    cover: 'assets/img/mt-01.jpg',
    gallery: ['assets/img/mt-02.jpg', 'assets/img/mt-03.jpg', 'assets/img/mt-04.jpg'],
    assets: [
      { src: 'assets/img/mt-01.jpg', caption: '立春 · 春始万物生' },
      { src: 'assets/img/mt-15.jpg', caption: '雨水 · 润物细无声' },
      { src: 'assets/img/mt-11.jpg', caption: '惊蛰 · 春雷唤蛰虫' },
      { src: 'assets/img/mt-12.jpg', caption: '春分 · 昼夜均而寒暑平' },
      { src: 'assets/img/mt-13.jpg', caption: '清明 · 踏青与青团' },
      { src: 'assets/img/mt-07.jpg', caption: '谷雨 · 雨生百谷' },
      { src: 'assets/img/mt-16.jpg', caption: '立夏 · 荷塘纳凉' },
      { src: 'assets/img/mt-08.jpg', caption: '小满 · 麦粒渐满' },
      { src: 'assets/img/mt-17.jpg', caption: '芒种 · 煮梅送花神' },
      { src: 'assets/img/mt-02.jpg', caption: '夏至 · 日长之至' },
      { src: 'assets/img/mt-03.jpg', caption: '霜降 · 柿红压枝' },
      { src: 'assets/img/mt-04.jpg', caption: '秋分 · 桂香叶落' },
      { src: 'assets/img/mt-09.jpg', caption: '立冬 · 炉火初生' },
      { src: 'assets/img/mt-14.jpg', caption: '小雪 · 腊味与落雪' },
      { src: 'assets/img/mt-05.jpg', caption: '大雪 · 堆雪人' },
      { src: 'assets/img/mt-10.jpg', caption: '冬至 · 一家人围炉' },
    ],
    ambient: [
      'assets/img/mt-03.jpg',
      'assets/img/mt-04.jpg',
      'assets/img/mt-05.jpg',
      'assets/img/mt-08.jpg',
    ],
    video: 'assets/video/maotang.mp4?v=2',
    poster: 'assets/img/mt-01.jpg',
    mediaPos: '50% 34%',
    portrait: true,
    tone: 'peach',
    span: 'lg',
  },
  // 猫汤 7 / 四季 5
  {
    id: 'season',
    index: '04',
    title: '3D 等距微缩场景',
    subtitle: '四季系列 · 游戏场景资产',
    tags: ['3D 场景', '模块化', '四季轮换'],
    desc: '同一核心场景基底，通过植物、色彩与元素变化呈现四季氛围，实现风格可控、氛围可切换的模块化复用。',
    cover: 'assets/img/sc-01.jpg',
    gallery: ['assets/img/sc-02.jpg', 'assets/img/sc-03.jpg', 'assets/img/sc-04.jpg'],
    video: 'assets/video/season.mp4?v=2',
    poster: 'assets/img/sc-01.jpg',
    tone: 'butter',
    span: 'sm',
  },
  {
    id: 'kongque',
    index: '05',
    title: '孔雀东南飞',
    subtitle: '古风漫剧 · 全案视觉资产',
    tags: ['角色设定', '场景设计', '分镜', '视频生成'],
    desc: '从原著拆解到分镜落地，以古风二次元水彩语言统一人物、场景与镜头，完成 8 段分镜视频的全流程资产制作。',
    cover: 'assets/img/kq-01.jpg',
    gallery: ['assets/img/kq-05.jpg', 'assets/img/kq-04.jpg', 'assets/img/kq-02.jpg'],
    assetGroups: [
      {
        title: '人物设定',
        en: 'Characters',
        ratio: '3 / 4',
        items: [
          { src: 'assets/img/kq-char-2.jpg', caption: '少年刘兰芝' },
          { src: 'assets/img/kq-char-3.jpg', caption: '成年刘兰芝' },
          { src: 'assets/img/kq-char-5.jpg', caption: '焦仲卿' },
          { src: 'assets/img/kq-char-7.jpg', caption: '焦母' },
          { src: 'assets/img/kq-char-9.jpg', caption: '小姑 · 幼年' },
          { src: 'assets/img/kq-char-10.jpg', caption: '小姑 · 少年' },
          { src: 'assets/img/kq-char-8.jpg', caption: '刘妈' },
          { src: 'assets/img/kq-char-11.jpg', caption: '刘哥' },
        ],
      },
      {
        title: '场景设计',
        en: 'Scenes',
        ratio: '4 / 3',
        items: [
          { src: 'assets/img/kq-scene-1.jpg', caption: '兰芝房 · 织布机内景' },
          { src: 'assets/img/kq-scene-2.jpg', caption: '焦家小院 · 内景' },
          { src: 'assets/img/kq-scene-3.jpg', caption: '焦家小院 · 外景' },
          { src: 'assets/img/kq-scene-4.jpg', caption: '焦家大厅 · 正面' },
          { src: 'assets/img/kq-scene-5.jpg', caption: '焦家大厅 · 侧面机位' },
          { src: 'assets/img/kq-scene-6.jpg', caption: '刘家大厅 · 正面' },
          { src: 'assets/img/kq-scene-7.jpg', caption: '室外大道口' },
          { src: 'assets/img/kq-scene-8.jpg', caption: '太守府外' },
        ],
      },
    ],
    video: 'assets/video/kongque.mp4?v=2',
    poster: 'assets/img/kq-01.jpg',
    tone: 'jade',
    span: 'lg',
  },
  {
    id: 'character',
    index: '06',
    title: '游戏 UI 与角色设计',
    subtitle: '古风 2.5D UI · 奇幻职业角色',
    tags: ['UI 设计', '2.5D 国潮', '角色设计', '3D 黏土'],
    desc: '古风 UI 统一 45° 视角与光照方向，以卷轴、祥云、亭台为装饰语言，输出可换肤的标题框与配饰道具库；角色部分以矮人战士、精灵法师等职业为命题，通过服饰、武器与表情区分特征，并转译为 3D 化 Q 版形象。',
    cover: 'assets/img/ch-02.jpg',
    gallery: ['assets/img/ui-02.jpg', 'assets/img/ui-03.jpg', 'assets/img/ch-02.jpg'],
    assets: [
      { src: 'assets/img/ui-02.jpg', caption: '标题框 · 可换肤边框系列' },
      { src: 'assets/img/ui-03.jpg', caption: '道具图标 · 饰品与法器' },
      { src: 'assets/img/ui-04.jpg', caption: '探险出征 · 活动界面' },
      { src: 'assets/img/ch-01.jpg', caption: '职业角色 · 2D 卡通四视图' },
      { src: 'assets/img/ch-02.jpg', caption: '职业角色 · 3D 黏土转化' },
      { src: 'assets/img/ch-03.jpg', caption: '道具图标 · Q 版消消乐风格' },
    ],
    tone: 'lavender',
    span: 'sm',
  },
  {
    id: 'jinxue',
    index: '07',
    title: '烬雪',
    subtitle: '东方神话 · 角色与分镜',
    tags: ['东方神话', '角色设定', 'Seedance'],
    desc: '以水墨与冷色雾气构建神话叙事基调，为明雪与师兄建立可复用的角色资产与镜头语言。',
    cover: 'assets/img/jx-04.jpg',
    gallery: ['assets/img/jx-01.jpg', 'assets/img/jx-02.jpg', 'assets/img/jx-03.jpg'],
    tone: 'mist',
    span: 'half',
  },
]

export const strengths = [
  {
    no: '01',
    title: 'AIGC 全流程落地',
    desc: '从素材寻源、文生图 / 图生图到后期精修，独立跑通人物、场景、道具的完整资产链路。',
    tag: 'Workflow',
    tone: 'mint',
  },
  {
    no: '02',
    title: '视觉风格统一力',
    desc: '以 Lora 炼制与固定特征提示词解决 IP 跑偏问题，让系列化产出保持在同一条审美线上。',
    tag: 'Consistency',
    tone: 'peach',
  },
  {
    no: '03',
    title: '工业化生产 SOP',
    desc: '沉淀提示词库、交付模板与分类归档机制，单日素材产出效率提升 50%，支撑量产。',
    tag: 'Efficiency',
    tone: 'butter',
  },
  {
    no: '04',
    title: '多风格驾驭',
    desc: '真人写实、古风水墨、二次元水彩、欧美卡通、2.5D 国潮、3D 黏土与 Q 版场景，能按项目调性切换。',
    tag: 'Versatility',
    tone: 'lavender',
  },
  {
    no: '05',
    title: '跨团队协作',
    desc: '作为美术侧接口人对接导演、策划与程序，在需求冲突与紧张排期之间找到可执行的平衡。',
    tag: 'Collaboration',
    tone: 'sky',
  },
  {
    no: '06',
    title: '商用审美底蕴',
    desc: '4 年品牌视觉经验，海报、画册与电商物料落地经验，让 AI 产出不止好看，也能商用。',
    tag: 'Craft',
    tone: 'rose',
  },
]
