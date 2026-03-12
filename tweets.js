// 人気ツイート (likes >= 4) from 2025
const TWEETS = [
  // 2025 上半期
  {
    date: "2025-01-19",
    text: "鯛さんとストー",
    likes: 5,
    category: "practice"
  },
  {
    date: "2025-01-28",
    text: "サロンでお世話になっている支部代表のTIps購入しました〜\nいつも見ているM氏さんのムーブが言語化されていてとても納得感があり良かったです\n自分が悩んでいることに対しても詳しく具体的に書かれていてとても為になりました！",
    likes: 5,
    category: "mindset"
  },
  {
    date: "2025-01-31",
    text: "えむえむ",
    likes: 5,
    category: "practice"
  },
  {
    date: "2025-02-07",
    text: "今日出ます",
    likes: 6,
    category: "practice"
  },
  {
    date: "2025-03-04",
    text: "KK力上がるまでM行きます（戒め）",
    likes: 5,
    category: "mindset"
  },
  {
    date: "2025-03-10",
    text: "買った\nNACで美白はまあええかと思ってたけど、メイク考えると気になってきた",
    likes: 4,
    category: "beauty"
  },
  {
    date: "2025-03-14",
    text: "今日出る（戒め）",
    likes: 5,
    category: "practice"
  },
  {
    date: "2025-03-23",
    text: "連れ負けた",
    likes: 4,
    category: "practice"
  },
  {
    date: "2025-03-25",
    text: "弾丸即った！",
    likes: 9,
    category: "practice"
  },
  {
    date: "2025-03-25",
    text: "搬だった",
    likes: 4,
    category: "practice"
  },
  {
    date: "2025-04-01",
    text: "ストしてる時、「プラネタリウム⚪︎グダVer.」や「⚪︎ん⚪︎くばり虫」を脳内再生したり、鼻歌したりしてる\n#エイプリルフールなので嘘か本当かわからないことを言う",
    likes: 7,
    category: "mindset"
  },
  {
    date: "2025-04-03",
    text: "箱行ってきた（なお）",
    likes: 5,
    category: "practice"
  },
  {
    date: "2025-05-08",
    text: "今日夜スト出る！",
    likes: 5,
    category: "practice"
  },
  {
    date: "2025-05-08",
    text: "これ使う",
    likes: 4,
    category: "practice"
  },
  {
    date: "2025-05-19",
    text: "最近パレ前負け多いんだけど、好意を伝えるのに抵抗感ができてて良くない",
    likes: 4,
    category: "mindset"
  },
  {
    date: "2025-05-24",
    text: "今まで損切りする時にいきなりLINE交換を打診してましたが、流れを意識したより良い方法が学べて良かったです！\n#M氏ナンパ進化論",
    likes: 4,
    category: "mindset"
  },
  {
    date: "2025-05-24",
    text: "準即アポ入れる時にまさにNGな打診をしていたので猛省します！\n#M氏ナンパ進化論",
    likes: 6,
    category: "mindset"
  },
  {
    date: "2025-05-25",
    text: "みんなそんなお金使って大丈夫なのか（衝動的に服ポチー、note/tipsポチー）",
    likes: 4,
    category: "mindset"
  },
  {
    date: "2025-05-25",
    text: "マッシュさんに撮影してもらいました！\n自然な雰囲気はもちろん、アプリ用に案件を意識した写真をたくさん撮ってもらえてとてもありがたかったです！",
    likes: 5,
    category: "practice"
  },
  {
    date: "2025-05-31",
    text: "色恋使ってたキプと別れた！\nもう会えない悲しさと罪悪感から解放されて複雑な感情をしている",
    likes: 6,
    category: "mindset"
  },
  // 2025 下半期
  {
    date: "2025-07-09",
    text: "打診チキッた後のの食いつきの下がり具合よ",
    likes: 3,
    category: "mindset"
  },
  {
    date: "2025-07-10",
    text: "過激な発言\nこれは自分が納得してないことやなぜやらないかを伝えない生徒側にも問題があったりするので\n結局はストネト講習仕事問わずコミュニケーションは相手の価値観を理解しようと努めたうえでお互いが納得が行くまで話すのが大事（ブーメラン）",
    likes: 4,
    category: "mindset"
  },
  {
    date: "2025-07-17",
    text: "来てアポ決まった",
    likes: 5,
    category: "practice"
  },
  {
    date: "2025-08-19",
    text: "アツストの合流でリアタイで見たけど、このオープナーで色んなが笑ってて凄かった",
    likes: 6,
    category: "practice"
  },
  {
    date: "2025-08-19",
    text: "俺はセッ〇スをしたい訳では無い。スト仲間に即った言いたいだけなのだ",
    likes: 12,
    category: "mindset"
  },
  {
    date: "2025-08-20",
    text: "界隈って非モテ出身が多いので隠キャのラベリングはられがちだけど、モテに関してどうするべきかわからなかったからモテてこなかっただけで、根が陽キャな人ら普通にいるよな",
    likes: 4,
    category: "mindset"
  },
  {
    date: "2025-09-05",
    text: "今日悔しくて良い一日だったな\n頑張ろうと思えたので",
    likes: 5,
    category: "mindset"
  },
  {
    date: "2025-09-05",
    text: "KP @yumaru_pua",
    likes: 4,
    category: "practice"
  },
  {
    date: "2025-09-06",
    text: "髪型変えたらmでも反応いいぞ！",
    likes: 5,
    category: "beauty"
  },
  {
    date: "2025-09-06",
    text: "昨日内キス負けだた〜",
    likes: 4,
    category: "practice"
  },
  {
    date: "2025-09-14",
    text: "なんで人間は犬を飼うのかと思ったんだけど、人間にとって犬は「擬似的に赤ちゃんや家族に近い存在」と脳が認識するから飼ってるらしい",
    likes: 4,
    category: "mindset"
  },
  {
    date: "2025-09-21",
    text: "搬送はした",
    likes: 4,
    category: "practice"
  },
  {
    date: "2025-09-26",
    text: "「趣味は人間観察です」って言う人いるけど、ちゃんとkkして答えを確かめないと観察眼が成長しないよな",
    likes: 5,
    category: "mindset"
  },
  {
    date: "2025-09-26",
    text: "今の自分には「飢え」が足りてないんだよな",
    likes: 4,
    category: "mindset"
  },
  {
    date: "2025-09-30",
    text: "俺はイケメン俺はイケメン俺はイケメン",
    likes: 4,
    category: "mindset"
  },
  {
    date: "2025-09-30",
    text: "俺は最強、当たり前のように打診",
    likes: 4,
    category: "mindset"
  },
  {
    date: "2025-09-30",
    text: "あと一即できないかnar",
    likes: 4,
    category: "practice"
  },
  {
    date: "2025-10-31",
    text: "顔刺し即、いーじぃやねぇ（震え声）",
    likes: 16,
    category: "practice"
  },
  {
    date: "2025-11-08",
    text: "直即、専門！",
    likes: 6,
    category: "practice"
  },
  {
    date: "2025-11-08",
    text: "ギラつく時に「手ちっちゃいね」で手合わせたりするんだけど、自分の手が小さいので毎回「そんなことなくね？」って言われるのに永遠に改善しない",
    likes: 4,
    category: "practice"
  },
  {
    date: "2025-12-19",
    text: "パスソ\nありがとうございますありがとうございます\n今度なんか奢ります",
    likes: 5,
    category: "practice"
  },
  {
    date: "2025-12-30",
    text: "チャットアプリ自動ローラーbot作ってる",
    likes: 3,
    category: "tech"
  },
  {
    date: "2025-12-30",
    text: "とも自動化したいなぁ",
    likes: 3,
    category: "tech"
  },
];
