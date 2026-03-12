// ハイライトツイート（技術系）
const TWEETS = [
  // 2/27 - 🔥bot
  {
    date: "2026-02-27",
    text: "🔥bot動かしたら勝手にAIがファーストメッセを解析してくれて、ありがと系よりも質問系・褒め系の方が返信率が高いことがわかった",
    likes: 5,
    images: ["https://pbs.twimg.com/media/HCI8LHRa0AApYzA?format=jpg&name=small"]
  },
  // 2/19 - カメラハック
  {
    date: "2026-02-19",
    text: "🍎の写真認証の際のカメラをハックしてあらかじめ用意した写真を差し込めた！",
    likes: 18,
    images: ["https://pbs.twimg.com/media/HBjMT-2bUAEVn7R?format=jpg&name=900x900"]
  },
  // 2/19 - AI画像生成サービス
  {
    date: "2026-02-19",
    text: "プロフ写真用のAI画像生成サービスを試作して見たけど、良いユーザーインターフェース、エクスペリエンスやプロンプトの作り込みがめんどい",
    likes: 5,
    images: ["https://pbs.twimg.com/media/HBiguuSbUAE3Irh?format=jpg&name=900x900"]
  },
  // 2/13 - 自動スワイプログ
  {
    date: "2026-02-13",
    text: "🔥の自動スワイプ、せっかくなのでログを保存することにした\n解析したりスワイプ改良する",
    likes: 3,
    images: ["https://pbs.twimg.com/media/HBCNe14bcAAYbat?format=jpg&name=900x900"]
  },
  // 2/13 - ライン自動化
  {
    date: "2026-02-13",
    text: "ラインも自動化しようとしてる",
    likes: 3,
    images: ["https://pbs.twimg.com/media/HBCNCoYa0AA_N1R?format=jpg&name=900x900"]
  },
  // 2/10 - AIピカさん
  {
    date: "2026-02-10",
    text: "AIピカさんを作った",
    likes: 18,
    images: ["https://pbs.twimg.com/media/HAwZ3cMb0AAbyqP?format=jpg&name=900x900", "https://pbs.twimg.com/media/HAwZ3cNaAAEy9t6?format=jpg&name=900x900", "https://pbs.twimg.com/media/HAwkJxPbMAA8uVN?format=jpg&name=900x900", "https://pbs.twimg.com/media/HAwkJxGaAAA_bSb?format=jpg&name=900x900"]
  },
  // 2/8 - ストナンtips
  {
    date: "2026-02-08",
    text: "想像していたお○んぽ侍さんの集大成ストナンtips",
    likes: 8,
    images: ["https://pbs.twimg.com/media/HAnwXtQacAAAXKH?format=png&name=900x900"]
  },
  // 2/5 - AI返信レポート
  {
    date: "2026-02-05",
    text: "マチアプAIの返信レポートを見てひたすら添削してる☑️",
    likes: 4,
    images: ["https://pbs.twimg.com/media/HAbsMMkaQAAlOte?format=jpg&name=small"]
  },
  // 2/5 - ツイート取得ツール
  {
    date: "2026-02-05",
    text: "指定したユーザーのツイート取得ツールを作った",
    likes: 3,
    images: ["https://pbs.twimg.com/media/HAWrx-6acAUQ2fM?format=jpg&name=900x900"]
  },
  // 1/29 - 自動ファーストメッセ
  {
    date: "2026-01-29",
    text: "🍎の自動ファーストメッセ！",
    likes: 9,
    images: ["https://pbs.twimg.com/amplify_video_thumb/2016874940507828225/img/hu9JCeonUYv-Rzxe.jpg"]
  },
  // 1/20 - 位置偽造アプリ
  {
    date: "2026-01-20",
    text: "位置共有アプリの位置偽造アプリを作った（）",
    likes: 9,
    images: ["https://pbs.twimg.com/media/G_EWMnAWMAAfVmo?format=jpg&name=900x900", "https://pbs.twimg.com/media/G_EWMm6WUAAgjXj?format=jpg&name=medium"]
  },
  // 12/30 - 自動ローラーbot
  {
    date: "2025-12-30",
    text: "チャットアプリ自動ローラーbot作ってる🛼",
    likes: 3,
    images: ["https://pbs.twimg.com/media/G9aqFlsasAEqhP8?format=jpg&name=900x900"]
  },
  // 12/30 - 自動化したい
  {
    date: "2025-12-30",
    text: "🔥と🍎も自動化したいなぁ",
    likes: 3,
    images: []
  },
];
