// 画像付きツイート（DBから取得、likes降順）
const TWEETS = [
  {
    date: "2026-02-19",
    text: "🍎の写真認証の際のカメラをハックしてあらかじめ用意した写真を差し込めた！",
    likes: 18,
    category: "tech",
    images: ["https://pbs.twimg.com/media/HBjMT-2bUAEVn7R?format=jpg&name=900x900"]
  },
  {
    date: "2026-01-29",
    text: "🍎の自動ファーストメッセ！",
    likes: 9,
    category: "tech",
    images: ["https://pbs.twimg.com/amplify_video_thumb/2016874940507828225/img/hu9JCeonUYv-Rzxe.jpg"]
  },
  {
    date: "2026-01-29",
    text: "生粋レポジトリ",
    likes: 7,
    category: "tech",
    images: ["https://pbs.twimg.com/media/G_zUQkHbUAYZ6g0?format=jpg&name=900x900"]
  },
  {
    date: "2025-05-25",
    text: "マッシュさんに撮影してもらいました！\n自然な雰囲気はもちろん、アプリ用に案件を意識した写真をたくさん撮ってもらえてとてもありがたかったです！",
    likes: 5,
    category: "practice",
    images: [
      "https://pbs.twimg.com/media/GLoMg8obsAAIBRK?format=jpg&name=small",
      "https://pbs.twimg.com/media/GLoMg82awAATBGx?format=jpg&name=small",
      "https://pbs.twimg.com/media/GLoMg8qacAA_n05?format=jpg&name=small",
      "https://pbs.twimg.com/media/GLoMg8pbIAADu7K?format=jpg&name=small"
    ]
  },
  {
    date: "2026-02-19",
    text: "プロフ写真用のAI画像生成サービスを試作して見たけど、良いユーザーインターフェース、エクスペリエンスやプロンプトの作り込みがめんどい",
    likes: 5,
    category: "tech",
    images: ["https://pbs.twimg.com/media/HBiguuSbUAE3Irh?format=jpg&name=900x900"]
  },
  {
    date: "2025-08-19",
    text: "これはプロ👏",
    likes: 4,
    category: "practice",
    images: [
      "https://pbs.twimg.com/media/GytQhfXacAUQiiP?format=jpg&name=small",
      "https://pbs.twimg.com/media/GytQhfXacAE4Y_x?format=jpg&name=small"
    ]
  },
  {
    date: "2025-09-05",
    text: "KP @yumaru_pua",
    likes: 4,
    category: "practice",
    images: ["https://pbs.twimg.com/media/G0F8dnFaMAApMpK?format=jpg&name=medium"]
  },
  {
    date: "2025-09-26",
    text: "今の自分には「飢え」が足りてないんだよな",
    likes: 4,
    category: "mindset",
    images: ["https://pbs.twimg.com/media/G1x1pDmaYAAnqez?format=jpg&name=small"]
  },
  {
    date: "2025-03-25",
    text: "🏨搬だった",
    likes: 4,
    category: "practice",
    images: ["https://pbs.twimg.com/media/Gm6tRcIbYAAt4gF?format=jpg&name=small"]
  },
  {
    date: "2025-03-10",
    text: "買った🤓\nNACで美白はまあええかと思ってたけど、メイク考えると気になってきた",
    likes: 4,
    category: "beauty",
    images: ["https://pbs.twimg.com/media/Glqt83fbsAAzINU?format=jpg&name=900x900"]
  },
  {
    date: "2026-02-19",
    text: "ライン版もある",
    likes: 4,
    category: "tech",
    images: ["https://pbs.twimg.com/media/HBih2DsagAAJmch?format=jpg&name=medium"]
  },
  {
    date: "2025-12-30",
    text: "チャットアプリ自動ローラーbot作ってる🛼",
    likes: 3,
    category: "tech",
    images: ["https://pbs.twimg.com/media/G9aqFlsasAEqhP8?format=jpg&name=900x900"]
  },
  {
    date: "2026-02-05",
    text: "指定したユーザーのツイート取得ツールを作った",
    likes: 3,
    category: "tech",
    images: ["https://pbs.twimg.com/media/HAWrx-6acAUQ2fM?format=jpg&name=900x900"]
  },
  {
    date: "2026-02-13",
    text: "🔥の自動スワイプ、せっかくなのでログを保存することにした\n解析したりスワイプ改良する",
    likes: 3,
    category: "tech",
    images: ["https://pbs.twimg.com/media/HBCNe14bcAAYbat?format=jpg&name=900x900"]
  },
  {
    date: "2026-02-13",
    text: "ラインも自動化しようとしてる",
    likes: 3,
    category: "tech",
    images: ["https://pbs.twimg.com/media/HBCNCoYa0AA_N1R?format=jpg&name=900x900"]
  },
  {
    date: "2025-11-25",
    text: "最近、ネクラが酷いのでこれを大事にしていきたい",
    likes: 3,
    category: "mindset",
    images: ["https://pbs.twimg.com/media/G6kVqXmbwAQUCHr?format=jpg&name=900x900"]
  },
  {
    date: "2025-05-08",
    text: "AIに作ってもらいましょう！",
    likes: 2,
    category: "tech",
    images: ["https://pbs.twimg.com/media/GqZLM5gWYAAVO_n?format=jpg&name=small"]
  },
  {
    date: "2025-08-20",
    text: "アポ来るか謎なので一人ノンアルKP",
    likes: 2,
    category: "practice",
    images: ["https://pbs.twimg.com/media/GyythnGb0AAflwR?format=jpg&name=medium"]
  },
  {
    date: "2025-09-06",
    text: "KP @229tai042 @kirishima_nanpa @Lum_x_",
    likes: 2,
    category: "practice",
    images: ["https://pbs.twimg.com/media/G0Lg_5PbUAAl_z9?format=jpg&name=small"]
  },
  {
    date: "2025-11-16",
    text: "界隈健康飯",
    likes: 2,
    category: "beauty",
    images: ["https://pbs.twimg.com/media/G53bS_QbQAADi3_?format=jpg&name=900x900"]
  },
  {
    date: "2025-07-01",
    text: "",
    likes: 1,
    category: "practice",
    images: ["https://pbs.twimg.com/media/GuxCp3wWQAAiizp?format=jpg&name=900x900"]
  },
  {
    date: "2025-07-09",
    text: "カレンダー曜日表",
    likes: 1,
    category: "practice",
    images: ["https://pbs.twimg.com/media/GvcjsocakAA5Tm3?format=jpg&name=small"]
  },
  {
    date: "2025-11-24",
    text: "赤枠の最後これで🌱です",
    likes: 1,
    category: "practice",
    images: ["https://pbs.twimg.com/media/G6gb8FhaAAAPlr1?format=jpg&name=900x900"]
  },
  {
    date: "2025-11-24",
    text: "グランジにしたら割とかっこいい\n今風じゃないけど",
    likes: 1,
    category: "beauty",
    images: ["https://pbs.twimg.com/media/G6gEk4la0AAbT6M?format=jpg&name=small"]
  },
];
