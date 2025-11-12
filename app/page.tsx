"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type Voice = {
  id: string;      // React 用ユニークID
  label: string;   // ボタンのラベル
  fileId: number;  // 旧 data-file（= mp3 の番号）
};

type VoiceGroup = {
  id: string;
  title: string;
  youtubeUrl: string;
  voices: Voice[];
};

const VOICE_GROUPS: VoiceGroup[] = [
  {
    id: "yuurei-train",
    title:
      "【幽霊列車】最新作ホラー！危険すぎる電車に乗ってみた・・・【星川サラ/にじさんじ】",
    youtubeUrl: "https://youtu.be/MP_2N1Tahwg",
    voices: [
      { id: "v-214", label: "あたおか", fileId: 214 },
      { id: "v-188", label: "星川のこと好き", fileId: 188 },
      { id: "v-195", label: "ぱぱ１", fileId: 195 },
      { id: "v-196", label: "ぱぱ２", fileId: 196 },
      { id: "v-197", label: "ぱぱ３", fileId: 197 },
      { id: "v-198", label: "ぱぱ４", fileId: 198 },
      { id: "v-199", label: "ぱぱ５", fileId: 199 },
      { id: "v-200", label: "ぱぱ６", fileId: 200 },
      { id: "v-201", label: "ぱぱ７", fileId: 201 },
      { id: "v-202", label: "ぱぱ８", fileId: 202 },
      { id: "v-203", label: "ありがとうパパ", fileId: 203 },
      { id: "v-204", label: "パパじゃない", fileId: 204 },
      { id: "v-180", label: "タバコ吸うか", fileId: 180 },
      { id: "v-179", label: "うんこ行く？", fileId: 179 },
      { id: "v-183", label: "うんこできない", fileId: 183 },
      { id: "v-185", label: "きゃぁ", fileId: 185 },
      { id: "v-184", label: "悲鳴１", fileId: 184 },
      { id: "v-208", label: "悲鳴２", fileId: 208 },
      { id: "v-209", label: "悲鳴３", fileId: 209 },
      { id: "v-210", label: "悲鳴４", fileId: 210 },
      { id: "v-211", label: "悲鳴５", fileId: 211 },
      { id: "v-206", label: "はぁあ゛？", fileId: 206 },
      { id: "v-182", label: "ビビるｗ", fileId: 182 },
      { id: "v-190", label: "晒上げ", fileId: 190 },
      { id: "v-191", label: "自己中", fileId: 191 },
      { id: "v-178", label: "オムライス食べた", fileId: 178 },
      { id: "v-181", label: "監禁！？", fileId: 181 },
      { id: "v-186", label: "眼球にハエ", fileId: 186 },
      { id: "v-187", label: "どゆこと？", fileId: 187 },
      { id: "v-189", label: "すいません", fileId: 189 },
      { id: "v-193", label: "どーこだ", fileId: 193 },
      { id: "v-192", label: "居た！", fileId: 192 },
      { id: "v-194", label: "ちょっとだけでいい", fileId: 194 },
      { id: "v-205", label: "知るか", fileId: 205 },
      { id: "v-207", label: "いるやんけ", fileId: 207 },
      { id: "v-212", label: "hello", fileId: 212 },
      { id: "v-213", label: "おじさんを探せ", fileId: 213 },
      { id: "v-215", label: "会えるなら待つ", fileId: 215 },
      { id: "v-216", label: "すぐ行く", fileId: 216 },
      { id: "v-217", label: "妻を待つ", fileId: 217 },
      { id: "v-218", label: "私気になります！", fileId: 218 },
      { id: "v-219", label: "強いから泣かん", fileId: 219 },
    ],
  },
  {
    id: "instant-lover",
    title:
      "１分以内に女の子を攻略できないと爆死するゲームＷＷＷ【生き急げ！インスタントラバー】",
    youtubeUrl: "https://youtu.be/UakbGA_qGvU",
    voices: [
      { id: "v-155", label: "お願いご主人様", fileId: 155 },
      { id: "v-159", label: "おっ○い！", fileId: 159 },
      { id: "v-151", label: "ママごめん", fileId: 151 },
      { id: "v-152", label: "何でも言って", fileId: 152 },
      { id: "v-153", label: "メスよこせ", fileId: 153 },
      { id: "v-154", label: "くぅ～ん", fileId: 154 },
      { id: "v-160", label: "ヤリ放題", fileId: 160 },
      { id: "v-146", label: "星川ァ！", fileId: 146 },
      { id: "v-175", label: "Thnakyou for playing", fileId: 175 },
      { id: "v-147", label: "太れよ", fileId: 147 },
      { id: "v-148", label: "デブになります", fileId: 148 },
      { id: "v-149", label: "乾杯", fileId: 149 },
      { id: "v-150", label: "ふん", fileId: 150 },
      { id: "v-156", label: "背に腹は代えられない", fileId: 156 },
      { id: "v-157", label: "生きてるって最高", fileId: 157 },
      { id: "v-158", label: "私待ってた", fileId: 158 },
      { id: "v-161", label: "うっさいわかったっ", fileId: 161 },
      { id: "v-162", label: "浮気はダメ", fileId: 162 },
      { id: "v-163", label: "しらんけど", fileId: 163 },
      { id: "v-164", label: "今日もきれいですね", fileId: 164 },
      { id: "v-165", label: "大好きだ！", fileId: 165 },
      { id: "v-166", label: "あははは", fileId: 166 },
      { id: "v-167", label: "てめぇ！", fileId: 167 },
      { id: "v-168", label: "そんなぁ", fileId: 168 },
      { id: "v-169", label: "ころせ", fileId: 169 },
      { id: "v-170", label: "クソッタレ", fileId: 170 },
      { id: "v-171", label: "びえぇん", fileId: 171 },
      { id: "v-172", label: "おや？", fileId: 172 },
      { id: "v-173", label: "一回告白", fileId: 173 },
      { id: "v-174", label: "イケそうだった", fileId: 174 },
      { id: "v-176", label: "何でもします", fileId: 176 },
      { id: "v-177", label: "星川は金で買えない", fileId: 177 },
    ],
  },
  {
    id: "zatsudan",
    title:
      "【雑談】少し喋る！イベントお疲れさまでした！！【星川サラ/にじさんじ】",
    youtubeUrl: "https://youtu.be/dZT22QVCRSY",
    voices: [
      { id: "v-127", label: "星川と結婚できるよ", fileId: 127 },
      { id: "v-128", label: "結婚は無理", fileId: 128 },
      { id: "v-137", label: "えっち～", fileId: 137 },
      { id: "v-136", label: "いまお風呂", fileId: 136 },
      { id: "v-124", label: "初めてで興奮した", fileId: 124 },
      { id: "v-131", label: "とてもすき", fileId: 131 },
      { id: "v-132", label: "幸せにする星川が", fileId: 132 },
      { id: "v-133", label: "（くしゃみ）", fileId: 133 },
      { id: "v-135", label: "ぷりぷりしないでっ", fileId: 135 },
      { id: "v-141", label: "怒るよ星川", fileId: 141 },
      { id: "v-142", label: "かっこいい！", fileId: 142 },
      { id: "v-126", label: "あくうせつだん！", fileId: 126 },
      { id: "v-122", label: "ただいま", fileId: 122 },
      { id: "v-123", label: "おつかれさま！", fileId: 123 },
      { id: "v-143", label: "おつかれ様お仕事", fileId: 143 },
      { id: "v-125", label: "わかりません！", fileId: 125 },
      { id: "v-129", label: "ごめんなさい", fileId: 129 },
      { id: "v-134", label: "ごめん", fileId: 134 },
      { id: "v-130", label: "不安なんでい", fileId: 130 },
      { id: "v-138", label: "罪深い男", fileId: 138 },
      { id: "v-139", label: "応援してるよ！", fileId: 139 },
      { id: "v-140", label: "デブやん！", fileId: 140 },
      { id: "v-144", label: "楽しい今日はいい日", fileId: 144 },
      { id: "v-145", label: "ぐやじぃ", fileId: 145 },
    ],
  },
  {
    id: "pien",
    title:
      "【PIEN】これホラゲってまじ？怖いぴえん～WWW【星川サラ にじさんじ】",
    youtubeUrl: "https://youtu.be/t5nGBhQNosc",
    voices: [
      { id: "v-113", label: "バーか！", fileId: 113 },
      { id: "v-114", label: "バカがよ！", fileId: 114 },
      { id: "v-103", label: "尿意感じてる", fileId: 103 },
      { id: "v-105", label: "うんこ落ちてるわ", fileId: 105 },
      { id: "v-109", label: "くっせーな！", fileId: 109 },
      { id: "v-121", label: "サラちゃんでぴえん", fileId: 121 },
      { id: "v-102", label: "ぴえん（挨拶）", fileId: 102 },
      { id: "v-116", label: "ぴえん（男前）", fileId: 116 },
      { id: "v-106", label: "ぴえんぴえん", fileId: 106 },
      { id: "v-104", label: "うるせぇなぁ", fileId: 104 },
      { id: "v-107", label: "発狂１", fileId: 107 },
      { id: "v-108", label: "発狂２", fileId: 108 },
      { id: "v-110", label: "嫌なタイプ", fileId: 110 },
      { id: "v-111", label: "おっと？", fileId: 111 },
      { id: "v-112", label: "こいつ頭悪い", fileId: 112 },
      { id: "v-115", label: "星川炎上", fileId: 115 },
      { id: "v-117", label: "苦しい", fileId: 117 },
      { id: "v-118", label: "微笑ましいです", fileId: 118 },
      { id: "v-119", label: "イケメンだったら、、、", fileId: 119 },
      { id: "v-120", label: "おめでとう！", fileId: 120 },
    ],
  },
  {
    id: "smash",
    title:
      "【スマブラSP】23時までに１勝できなかったら罰ゲーム！？【星川サラ/にじさんじ】",
    youtubeUrl: "https://youtu.be/ug5xJzGuNaA",
    voices: [
      { id: "v-101", label: "ロリかわ", fileId: 101 },
      { id: "v-83", label: "普段からロリ", fileId: 83 },
      { id: "v-84", label: "普段からロリ２", fileId: 84 },
      { id: "v-70", label: "ざまぁ！", fileId: 70 },
      { id: "v-96", label: "顔がでかい星川", fileId: 96 },
      { id: "v-97", label: "星川のこと好きなん", fileId: 97 },
      { id: "v-98", label: "やばい元カレ", fileId: 98 },
      { id: "v-99", label: "元カレに殺された", fileId: 99 },
      { id: "v-100", label: "男になっちゃった", fileId: 100 },
      { id: "v-93", label: "とっ、てっ、た、ど", fileId: 93 },
      { id: "v-72", label: "苦しい星川", fileId: 72 },
      { id: "v-73", label: "臭かった", fileId: 73 },
      { id: "v-74", label: "臭かった２", fileId: 74 },
      { id: "v-75", label: "臭かった３", fileId: 75 },
      { id: "v-71", label: "ほい！", fileId: 71 },
      { id: "v-78", label: "ふわぁーい！", fileId: 78 },
      { id: "v-82", label: "ふん（ドヤ）", fileId: 82 },
      { id: "v-77", label: "はぁ゛！（迫真）", fileId: 77 },
      { id: "v-79", label: "やばい！", fileId: 79 },
      { id: "v-80", label: "う゛わー！", fileId: 80 },
      { id: "v-87", label: "う゛わー！２", fileId: 87 },
      { id: "v-95", label: "う゛わー！３", fileId: 95 },
      { id: "v-76", label: "痛い", fileId: 76 },
      { id: "v-81", label: "いだーぃ！", fileId: 81 },
      { id: "v-85", label: "うわっしょい！", fileId: 85 },
      { id: "v-86", label: "よぁ゛ぁ゛", fileId: 86 },
      { id: "v-89", label: "いけぇ゛ー！", fileId: 89 },
      { id: "v-92", label: "かぁ゛ー！", fileId: 92 },
      { id: "v-94", label: "ゆるせねぇ", fileId: 94 },
      { id: "v-91", label: "ペットにほしい", fileId: 91 },
      { id: "v-88", label: "重くない？", fileId: 88 },
    ],
  },
  {
    id: "mario2",
    title:
      "#2【スーパーマリオ２】鬼畜レベルのマリオ！？全力で挑戦！【星川サラ/にじさんじ】",
    youtubeUrl: "https://youtu.be/4CHq3lFHtQo",
    voices: [
      { id: "v-35", label: "たのしかったー", fileId: 35 },
      { id: "v-36", label: "う゛わー！", fileId: 36 },
      { id: "v-37", label: "は？", fileId: 37 },
      { id: "v-38", label: "隠し子", fileId: 38 },
      { id: "v-39", label: "ちっちゃいおっさん", fileId: 39 },
      { id: "v-40", label: "はっはっは", fileId: 40 },
      { id: "v-41", label: "出産してたのか", fileId: 41 },
      { id: "v-42", label: "服着てる？", fileId: 42 },
      { id: "v-43", label: "星川5億年歳", fileId: 43 },
      { id: "v-44", label: "おっけー、んん゛", fileId: 44 },
      { id: "v-45", label: "ナイスクリア（ネイティブ）", fileId: 45 },
      { id: "v-46", label: "ぷっぷっぷ", fileId: 46 },
      { id: "v-47", label: "やばぃ、あぶな", fileId: 47 },
      { id: "v-48", label: "や゛ーだー", fileId: 48 },
      { id: "v-49", label: "嘘です", fileId: 49 },
      { id: "v-50", label: "はぁ！！（迫真）", fileId: 50 },
      { id: "v-51", label: "ﾀﾋんだほうが早い", fileId: 51 },
      { id: "v-52", label: "はぁぁぁぁ", fileId: 52 },
      { id: "v-53", label: "あほみた", fileId: 53 },
      { id: "v-54", label: "星川の体液", fileId: 54 },
      { id: "v-55", label: "ひなこのーとOP", fileId: 55 },
      { id: "v-56", label: "ちょーきもい", fileId: 56 },
      { id: "v-57", label: "はぁぁぁ？？！", fileId: 57 },
      { id: "v-58", label: "いじわる", fileId: 58 },
      { id: "v-59", label: "もうやだ！", fileId: 59 },
      { id: "v-60", label: "キレそう（三段）", fileId: 60 },
      { id: "v-61", label: "止まれない女", fileId: 61 },
      { id: "v-62", label: "あーね", fileId: 62 },
      { id: "v-63", label: "はいざまぁ", fileId: 63 },
      { id: "v-64", label: "おつかれ！", fileId: 64 },
      { id: "v-65", label: "天才！", fileId: 65 },
      { id: "v-66", label: "はぁ？なにあいつ", fileId: 66 },
      { id: "v-67", label: "4321！", fileId: 67 },
      { id: "v-68", label: "神ー！やば！", fileId: 68 },
      { id: "v-69", label: "片手でプレイしてもろて", fileId: 69 },
    ],
  },
  {
    id: "yomawari",
    title:
      "【夜廻】有名ホラー！不気味な夜の街を歩く・・・！【星川サラ にじさんじ】",
    youtubeUrl: "https://youtu.be/I5VrzonHY0c",
    voices: [
      { id: "v-10", label: "うわー", fileId: 10 },
      { id: "v-11", label: "やばーい", fileId: 11 },
      { id: "v-12", label: "まじでさー！キレそ", fileId: 12 },
      { id: "v-13", label: "我慢できない女なの♡", fileId: 13 },
      { id: "v-14", label: "しぇー！", fileId: 14 },
      { id: "v-15", label: "おじぞう↑さん↓だ↓", fileId: 15 },
      { id: "v-16", label: "ナイス！", fileId: 16 },
      { id: "v-17", label: "学校行くか（ニート）", fileId: 17 },
      { id: "v-18", label: "ねーもー！", fileId: 18 },
      { id: "v-19", label: "あっち行って！", fileId: 19 },
      { id: "v-20", label: "よっしゃ（？）", fileId: 20 },
      { id: "v-21", label: "セクハラです！", fileId: 21 },
      { id: "v-22", label: "（くしゃみ）", fileId: 22 },
      { id: "v-23", label: "うん！この", fileId: 23 },
      { id: "v-24", label: "あなたを隠すこと", fileId: 24 },
      { id: "v-25", label: "ラララランドセルは♪", fileId: 25 },
      { id: "v-26", label: "お金の臭いがした", fileId: 26 },
      { id: "v-27", label: "ゲームうまいな星川", fileId: 27 },
      { id: "v-28", label: "イ゛ヤ゛ー", fileId: 28 },
      { id: "v-29", label: "おいおっさん！", fileId: 29 },
      { id: "v-30", label: "はいざまぁ", fileId: 30 },
      { id: "v-31", label: "もーやだー", fileId: 31 },
      { id: "v-32", label: "あと一回", fileId: 32 },
      { id: "v-33", label: "あと一回（二回）", fileId: 33 },
      { id: "v-34", label: "ラスト一回（三回）", fileId: 34 },
    ],
  },
  {
    id: "wows",
    title:
      "【World of Warships】負けたら罰ゲーム！皆と戦争だ～！！！【星川サラ にじさんじ】",
    youtubeUrl: "https://youtu.be/Oa9bzdAWS0E",
    voices: [
      { id: "v-3", label: "ちゅーしよ", fileId: 3 },
      { id: "v-4", label: "おわりっ", fileId: 4 },
      { id: "v-5", label: "ていうことで今日は～", fileId: 5 },
      { id: "v-6", label: "よろしくおねがいします！パチパチ", fileId: 6 },
      {
        id: "v-7",
        label: "これまじかっこよくない？わかるよなぁ？",
        fileId: 7,
      },
      { id: "v-8", label: "星虐たすかるじゃねんだよ", fileId: 8 },
      { id: "v-2", label: "熱中症って言って？ちゅーしよ", fileId: 2 },
    ],
  },
];

// data-file → 実ファイルパス
const getVoiceSrc = (fileId: number) => `/download/snd/${fileId}.mp3`;

export default function Page() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentId, setCurrentId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = (voice: Voice) => {
    // 同じボタンをもう一度押したら停止
    if (currentId === voice.id && isPlaying) {
      stopAll();
      return;
    }

    // すでに再生中なら止める
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const src = getVoiceSrc(voice.fileId);
    const audio = new Audio(src);
    audioRef.current = audio;
    setCurrentId(voice.id);
    setIsPlaying(true);

    audio.play().catch((err) => {
      console.error("Audio play error", err);
      setIsPlaying(false);
      setCurrentId(null);
    });

    audio.onended = () => {
      setIsPlaying(false);
      setCurrentId(null);
    };
  };

  const stopAll = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50 text-slate-800">
      {/* ふわふわ背景 */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
        <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />
      </div>

      {/* ヘッダー */}
      <header className="sticky top-0 z-20 border-b border-pink-100/40 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
          {/* 左側ロゴ + テキスト */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* ふわっと光るグロー */}
              <span className="pointer-events-none absolute inset-0 rounded-full bg-pink-300/70 blur-md opacity-70 animate-pulse" />
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-amber-300 text-sm font-bold text-white shadow-md shadow-pink-300/70">
                S
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pink-500">
                Hoshikawa Button
              </span>
              <span className="text-sm font-semibold text-slate-800 md:text-base">
                星川ボタン！
              </span>
            </div>
          </div>

          {/* ナビ（ホバーで線がぬるっと出る） */}
          <nav className="flex gap-3 text-xs md:gap-4 md:text-sm">
            <Link
              href="/"
              className="group relative inline-flex items-center rounded-full px-3 py-1 text-slate-600 transition hover:text-pink-600"
            >
              <span>ボタン一覧</span>
              <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-pink-400 via-amber-300 to-sky-400 transition group-hover:scale-x-100" />
            </Link>
            <Link
              href="/bot"
              className="group relative inline-flex items-center rounded-full px-3 py-1 text-slate-600 transition hover:text-pink-600"
            >
              <span>しゃべるほちかわBOT</span>
              <span className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-[2px] origin-center scale-x-0 rounded-full bg-gradient-to-r from-pink-400 via-amber-300 to-sky-400 transition group-hover:scale-x-100" />
            </Link>
          </nav>
        </div>
      </header>

      {/* コンテンツ */}
      <main className="mx-auto max-w-5xl px-4 pb-20 pt-5 md:pt-8">
        {/* ヒーロー：ヘッダー画像 + キャッチ */}
        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
          {/* 左：テキスト */}
          <div className="space-y-3">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-pink-600 shadow-sm shadow-pink-100">
              <span className="flex h-2 w-2 items-center justify-center">
                <span className="h-2 w-2 rounded-full bg-pink-400 animate-ping" />
              </span>
              <span>星川ボイスボタンコレクション</span>
            </p>
            <h1 className="text-2xl font-extrabold leading-relaxed tracking-wide md:text-3xl">
              かわいい声を
              <span className="mx-1 inline-block -rotate-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 px-3 py-1 text-white shadow-md shadow-pink-300/70">
                ぽちっ
              </span>
              とするだけ。
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 md:text-base">
              ボタンを押して遊ぼう！
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href="#voices"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-400 to-pink-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-pink-300/60 transition hover:translate-y-[-1px] hover:shadow-xl"
              >
                ボタン一覧へ
              </a>
              <a
                href="/bot"
                className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-xs font-medium text-pink-600 shadow-sm transition hover:bg-pink-50"
              >
                Discordでも使える！
              </a>
            </div>
          </div>

          {/* 右：ヘッダー画像 + 浮遊パーツ + NowPlaying */}
          <div className="relative mt-4 md:mt-0">
            {/* 発光するグラデーション枠 */}
            <div className="pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-r from-pink-300/40 via-amber-200/40 to-sky-300/40 opacity-80 blur-xl transition duration-700 group-hover:opacity-100 group-hover:blur-2xl" />

            <div className="group relative overflow-hidden rounded-[1.8rem] border border-pink-100 bg-white/80 shadow-xl shadow-pink-200/70">
              <Image
                src="/images/header-main.jpg" // ← 1500x500 の画像パス
                alt="星川ボタンのヘッダー画像"
                width={1500}
                height={500}
                priority
                className="h-40 w-full origin-center object-cover transition duration-500 ease-out sm:h-52 md:h-60 lg:h-64 xl:h-72 group-hover:scale-[1.03] group-hover:rotate-[0.6deg]"
              />

              {/* 右上の小さなチップ */}
              <div className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-pink-500 shadow-sm shadow-pink-200/80">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>星川サラ</span>
              </div>

              {/* 左下の「tapで再生」吹き出し */}
              <div className="pointer-events-none absolute left-3 bottom-3 flex items-center gap-1 rounded-2xl bg-sky-50/95 px-3 py-1.5 text-[10px] text-sky-600 shadow-sm shadow-sky-100 animate-bounce">
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-sky-100 text-[9px]">
                  ▶
                </span>
                <span>ボタンを tap して再生</span>
              </div>
            </div>

            {/* 今再生中のボイス表示カード */}
            <div className="absolute -bottom-5 left-2 right-2 rounded-2xl border border-pink-100 bg-white/95 px-3 py-2 text-xs shadow-lg shadow-pink-200/80 md:left-6 md:right-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pink-500">
                Now Playing
              </p>
              <p className="mt-1 line-clamp-2 text-xs font-semibold text-slate-700">
                {isPlaying && currentId
                  ? VOICE_GROUPS.flatMap((g) => g.voices).find(
                    (v) => v.id === currentId
                  )?.label ?? "再生中のボイス"
                  : "再生しているボイスはありません"}
              </p>
              <button
                type="button"
                onClick={stopAll}
                className="mt-2 inline-flex items-center rounded-full bg-pink-50 px-3 py-1 text-[11px] font-semibold text-pink-600 shadow-sm shadow-pink-100 transition hover:bg-pink-100"
              >
                stop する
              </button>
            </div>
          </div>
        </section>

        {/* BGM */}
        <section id="bgm" className="mt-12 space-y-4">
          <div>
            <h2 className="text-lg font-bold md:text-xl">BGM コーナー</h2>
            <p className="text-xs text-slate-600 md:text-sm">
              OP/EDなどを再生できます！
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-pink-100 bg-white/80 p-3 shadow-md shadow-pink-100/70">
              <p className="text-xs font-semibold text-slate-700">OP テーマ</p>
              <audio
                controls
                src="/download/snd/OP.mp3"
                className="mt-2 w-full"
              />
            </div>
            <div className="rounded-2xl border border-pink-100 bg-white/80 p-3 shadow-md shadow-pink-100/70">
              <p className="text-xs font-semibold text-slate-700">ED テーマ</p>
              <audio
                controls
                src="/download/snd/ED.mp3"
                className="mt-2 w-full"
              />
            </div>
            <div className="rounded-2xl border border-pink-100 bg-white/80 p-3 shadow-md shadow-pink-100/70">
              <p className="text-xs font-semibold text-slate-700">
                メインBGM（いちごホップ）
              </p>
              <audio
                controls
                src="/download/snd/ichigohoippu.mp3"
                className="mt-2 w-full"
              />
            </div>
          </div>
        </section>

        {/* ボタン一覧 */}
        <section id="voices" className="mt-12">
          <div className="mb-4">
            <h2 className="text-lg font-bold md:text-xl">ボタン一覧</h2>
            <p className="text-xs text-slate-600 md:text-sm">
              動画ごとにグループ分けされたボイスボタンです！
            </p>
          </div>

          <div className="space-y-6">
            {VOICE_GROUPS.map((group) => (
              <section
                key={group.id}
                className="rounded-3xl border border-indigo-50 bg-white/80 p-3 shadow-lg shadow-indigo-100/70 md:p-4"
              >
                <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="text-sm font-semibold md:text-base">
                    {group.title}
                  </h3>
                  <a
                    href={group.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-start text-xs font-medium text-sky-600 underline-offset-4 hover:underline"
                  >
                    YouTube で見る →
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                  {group.voices.map((voice) => {
                    const active = currentId === voice.id && isPlaying;
                    return (
                      <button
                        key={voice.id}
                        type="button"
                        onClick={() => handlePlay(voice)}
                        className={[
                          "flex items-center justify-between gap-1 rounded-full px-3 py-2 text-[11px] font-medium shadow-sm transition",
                          active
                            ? "bg-gradient-to-r from-pink-400 to-pink-500 text-white shadow-pink-300/70"
                            : "bg-white/90 text-slate-700 shadow-indigo-100 hover:bg-pink-50",
                        ].join(" ")}
                      >
                        <span className="truncate">{voice.label}</span>
                        <span
                          className={
                            "ml-1 rounded-full px-2 py-0.5 text-[9px] " +
                            (active
                              ? "bg-white/30"
                              : "bg-pink-50 text-pink-500")
                          }
                        >
                          {active ? "playing" : "tap"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>

        {/* このサイトについて */}
        <section id="about" className="mt-12">
          <div className="rounded-3xl border border-pink-100 bg-white/90 p-4 shadow-md shadow-pink-100/70">
            <h2 className="text-base font-bold md:text-lg">このサイトについて</h2>
            <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
              星川ボタンはすでに更新が行われておりません。更新や運用を協力してくれる方はご連絡ください。
            </p>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
              HP作成を含む、（星川サラ）に係る「動画」「DiscordBot」については、本人から了承していただいているようなアクションをいただいており、
              これらすべてのコンテンツに対して、本人のライブ配信中に「いつもありがとうだよ！」といったお言葉をいただいております。
            </p>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t border-pink-100/60 bg-white/70 py-4">
        <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} sara hoshikawa , 星川ボタン！</p>
          <p className="leading-snug">
            サイトの問題や質問、問い合わせは"@nakano06_"までお願いします
          </p>
        </div>
      </footer>

      {/* 右下 stop ボタン */}
      <button
        type="button"
        onClick={stopAll}
        aria-label="すべての音声を停止"
        className="fixed bottom-4 right-4 z-50 rounded-full bg-pink-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-pink-300 transition hover:bg-pink-600 active:translate-y-[1px]"
      >
        stop
      </button>
    </div>
  );
}
