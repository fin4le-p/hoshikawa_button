// app/bot/page.tsx
"use client";

import Link from "next/link";

type BotVoice = {
    no: number;
    text: string;
};

const BOT_VOICES: BotVoice[] = [
    { no: 0, text: "英語自己紹介" },
    {
        no: 1,
        text:
            "星川がリプくれた好き！じゃなくて配信見て面白かった好きのほうが嬉しい",
    },
    {
        no: 2,
        text:
            "え？熱中症って言って？そんな遠回りしなくても言うんだけど。んねぇチューしよ？、終わり！",
    },
    { no: 3, text: "んねぇ、チューしよ？" },
    { no: 4, text: "おわり！（声が変）" },
    { no: 5, text: "はい、ていうことで今日は～" },
    { no: 6, text: "よろしくおねがいします、ぱちぱちぱちぱち" },
    {
        no: 7,
        text:
            "え？これまじかっこよくない？スコ？わかる？わかるよなぁ？うん。",
    },
    { no: 8, text: "星虐たすかるじゃねんだよ" },
    { no: 9, text: "キモいんだけど、超キモいんだけどｗ" },
    { no: 10, text: "うわー" },
    { no: 11, text: "やばーい" },
    { no: 12, text: "まじでさー！キレそ" },
    { no: 13, text: "我慢できない女なの♡" },
    { no: 14, text: "しぇー！" },
    { no: 15, text: "おじぞう↑さん↓だ↓" },
    { no: 16, text: "ナイス！" },
    { no: 17, text: "学校行くか（ニート）" },
    { no: 18, text: "ねーもー！" },
    { no: 19, text: "あっち行って！" },
    { no: 20, text: "よっしゃ（？）" },
    { no: 21, text: "セクハラです！" },
    { no: 22, text: "（くしゃみ）" },
    { no: 23, text: "うん！この" },
    { no: 24, text: "あなたをかくすこと" },
    { no: 25, text: "ラララランドセルは♪" },
    { no: 26, text: "お金の臭いがした" },
    { no: 27, text: "ゲームうまいな星川" },
    { no: 28, text: "イ゛ヤ゛ー" },
    { no: 29, text: "おいおっさん！" },
    { no: 30, text: "はいざまぁ" },
    { no: 31, text: "もーやだー" },
    { no: 32, text: "後一回" },
    { no: 33, text: "後一回（二回）" },
    { no: 34, text: "ラスト一回！（三回）" },
    { no: 35, text: "たのしかったー" },
    { no: 36, text: "う゛わー！" },
    { no: 37, text: "は？" },
    { no: 38, text: "隠し子" },
    { no: 39, text: "ちっちゃいおっさん" },
    { no: 40, text: "はっはっは" },
    { no: 41, text: "出産してたのか" },
    { no: 42, text: "服着てる？" },
    { no: 43, text: "星川5億年歳" },
    { no: 44, text: "おっけー、んん゛" },
    { no: 45, text: "ナイスクリア（ネイティブ）" },
    { no: 46, text: "ぷっぷっぷ" },
    { no: 47, text: "やばぃ、あぶな" },
    { no: 48, text: "や゛ーだー" },
    { no: 49, text: "嘘です" },
    { no: 50, text: "はぁ！！（迫真）" },
    { no: 51, text: "ﾀﾋんだほうが早い" },
    { no: 52, text: "はぁぁぁぁ" },
    { no: 53, text: "あほみた" },
    { no: 54, text: "星川の体液" },
    { no: 55, text: "ひなこのーとOP" },
    { no: 56, text: "ちょーきもい" },
    { no: 57, text: "はぁぁぁ？？！" },
    { no: 58, text: "いじわる" },
    { no: 59, text: "もうやだ！" },
    { no: 60, text: "キレそう（三段）" },
    { no: 61, text: "止まれない女" },
    { no: 62, text: "あーね" },
    { no: 63, text: "はいざまぁ" },
    { no: 64, text: "おつかれ！" },
    { no: 65, text: "天才！" },
    { no: 66, text: "はぁ？なにあいつ" },
    { no: 67, text: "4321！" },
    { no: 68, text: "神ー！やば！" },
    { no: 69, text: "片手でプレイしてもろて" },
    { no: 70, text: "ざまぁ！" },
    { no: 71, text: "ほい！" },
    { no: 72, text: "苦しい星川" },
    { no: 73, text: "臭かった" },
    { no: 74, text: "臭かった２" },
    { no: 75, text: "臭かった３" },
    { no: 76, text: "痛い" },
    { no: 77, text: "はぁ゛！（迫真）" },
    { no: 78, text: "ふわぁーい！" },
    { no: 79, text: "やばい！" },
    { no: 80, text: "う゛わー！" },
    { no: 81, text: "いだーぃ！" },
    { no: 82, text: "ふん（ドヤ）" },
    { no: 83, text: "普段からロリ" },
    { no: 84, text: "普段からロリ２" },
    { no: 85, text: "うわっしょい！" },
    { no: 86, text: "よぁ゛ぁ゛" },
    { no: 87, text: "う゛わー！２" },
    { no: 88, text: "重くない？" },
    { no: 89, text: "いけぇ゛ー！" },
    { no: 90, text: "煽ってんじゃねぇぞ！" },
    { no: 91, text: "ペットにほしい" },
    { no: 92, text: "かぁ゛ー！" },
    { no: 93, text: "とっ、てっ、た、ど" },
    { no: 94, text: "ゆるせねぇ" },
    { no: 95, text: "う゛わー！３" },
    { no: 96, text: "顔がでかい星川" },
    { no: 97, text: "星川のこと好きなん" },
    { no: 98, text: "やばい元カレ" },
    { no: 99, text: "元カレに殺された" },
    { no: 100, text: "男になっちゃった" },
    { no: 101, text: "ロリかわ" },
    { no: 102, text: "ぴえん（挨拶）" },
    { no: 103, text: "尿意感じてる" },
    { no: 104, text: "うるせぇなぁ" },
    { no: 105, text: "うんこ落ちてるわ" },
    { no: 106, text: "ぴえんぴえん" },
    { no: 107, text: "発狂１" },
    { no: 108, text: "発狂２" },
    { no: 109, text: "くっせーな！" },
    { no: 110, text: "嫌なタイプ" },
    { no: 111, text: "おっと？" },
    { no: 112, text: "こいつ頭悪い" },
    { no: 113, text: "バーか！" },
    { no: 114, text: "バカがよ！" },
    { no: 115, text: "星川炎上" },
    { no: 116, text: "ぴえん（男前）" },
    { no: 117, text: "苦しい" },
    { no: 118, text: "微笑ましいです" },
    { no: 119, text: "イケメンだったら、、、" },
    { no: 120, text: "おめでとう！" },
    { no: 121, text: "サラちゃんでぴえん" },
    { no: 122, text: "ただいま" },
    { no: 123, text: "おつかれさま！" },
    { no: 124, text: "初めてで興奮した" },
    { no: 125, text: "わかりません！" },
    { no: 126, text: "あくうせつだん！" },
    { no: 127, text: "星川と結婚できるよ" },
    { no: 128, text: "結婚は無理" },
    { no: 129, text: "ごめんなさい" },
    { no: 130, text: "不安なんでい" },
    { no: 131, text: "とてもすき" },
    { no: 132, text: "幸せにする星川が" },
    { no: 133, text: "（くしゃみ）" },
    { no: 134, text: "ごめん" },
    { no: 135, text: "ぷりぷりしないでっ" },
    { no: 136, text: "いまお風呂" },
    { no: 137, text: "えっち～" },
    { no: 138, text: "罪深い男" },
    { no: 139, text: "応援してるよ！" },
    { no: 140, text: "デブやん！" },
    { no: 141, text: "怒るよ星川" },
    { no: 142, text: "かっこいい！" },
    { no: 143, text: "おつかれ様お仕事" },
    { no: 144, text: "楽しい今日はいい日" },
    { no: 145, text: "ぐやじぃ" },
    { no: 146, text: "星川ァ！" },
    { no: 147, text: "太れよ" },
    { no: 148, text: "デブになります" },
    { no: 149, text: "乾杯" },
    { no: 150, text: "ふん" },
    { no: 151, text: "ママごめん" },
    { no: 152, text: "何でも言って" },
    { no: 153, text: "メスよこせ" },
    { no: 154, text: "くぅ～ん" },
    { no: 155, text: "お願いご主人様" },
    { no: 156, text: "背に腹は代えられない" },
    { no: 157, text: "生きてるって最高" },
    { no: 158, text: "私待ってた" },
    { no: 159, text: "おっ○い！" },
    { no: 160, text: "ヤリ放題" },
    { no: 161, text: "うっさいわかったっ" },
    { no: 162, text: "浮気はダメ" },
    { no: 163, text: "しらんけど" },
    { no: 164, text: "今日もきれいですね" },
    { no: 165, text: "大好きだ！" },
    { no: 166, text: "あははは" },
    { no: 167, text: "てめぇ！" },
    { no: 168, text: "そんなぁ" },
    { no: 169, text: "ころせ" },
    { no: 170, text: "クソッタレ" },
    { no: 171, text: "びえぇん" },
    { no: 172, text: "おや？" },
    { no: 173, text: "一回告白" },
    { no: 174, text: "イケそうだった" },
    { no: 175, text: "Thnakyou for playing" },
    { no: 176, text: "何でもします" },
    { no: 177, text: "星川は金で買えない" },
    { no: 178, text: "オムライス食べた" },
    { no: 179, text: "うんこ行く？" },
    { no: 180, text: "タバコ吸うか" },
    { no: 181, text: "監禁！？" },
    { no: 182, text: "ビビるｗ" },
    { no: 183, text: "うんこできない" },
    { no: 184, text: "悲鳴１" },
    { no: 185, text: "きゃぁ" },
    { no: 186, text: "眼球にハエ" },
    { no: 187, text: "どゆこと？" },
    { no: 188, text: "星川のこと好き" },
    { no: 189, text: "すいません" },
    { no: 190, text: "晒上げ" },
    { no: 191, text: "自己中" },
    { no: 192, text: "居た！" },
    { no: 193, text: "どーこだ" },
    { no: 194, text: "ちょっとだけでいい" },
    { no: 195, text: "ぱぱ１" },
    { no: 196, text: "ぱぱ２" },
    { no: 197, text: "ぱぱ３" },
    { no: 198, text: "ぱぱ４" },
    { no: 199, text: "ぱぱ５" },
    { no: 200, text: "ぱぱ６" },
    { no: 201, text: "ぱぱ７" },
    { no: 202, text: "ぱぱ８" },
    { no: 203, text: "ありがとうパパ" },
    { no: 204, text: "パパじゃない" },
    { no: 205, text: "知るか" },
    { no: 206, text: "はぁあ゛？" },
    { no: 207, text: "いるやんけ" },
    { no: 208, text: "悲鳴２" },
    { no: 209, text: "悲鳴３" },
    { no: 210, text: "悲鳴４" },
    { no: 211, text: "悲鳴５" },
    { no: 212, text: "hello" },
    { no: 213, text: "おじさんを探せ" },
    { no: 214, text: "あたおか" },
    { no: 215, text: "会えるなら待つ" },
    { no: 216, text: "すぐ行く" },
    { no: 217, text: "妻を待つ" },
    { no: 218, text: "私気になります！" },
    { no: 219, text: "強いから泣かん" },
    { no: 220, text: "君が一番好き" },
];

export default function BotPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-sky-50 text-slate-800">
            {/* ふわふわ背景 */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-pink-200/60 blur-3xl" />
                <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />
            </div>

            {/* ヘッダー（既存ページと似せる） */}
            <header className="sticky top-0 z-20 border-b border-pink-100/40 bg-white/80 backdrop-blur-xl">
                <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <span className="pointer-events-none absolute inset-0 rounded-full bg-pink-300/70 blur-md opacity-70 animate-pulse" />
                            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-amber-300 text-sm font-bold text-white shadow-md shadow-pink-300/70">
                                S
                            </span>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pink-500">
                                Hoshikawa Bot
                            </span>
                            <span className="text-sm font-semibold text-slate-800 md:text-base">
                                しゃべるほちかわBot
                            </span>
                        </div>
                    </div>

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

            {/* 本文 */}
            <main className="mx-auto max-w-5xl px-4 pb-20 pt-5 md:pt-8">
                {/* Hero */}
                <section className="space-y-4 md:space-y-5">
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-pink-600 shadow-sm shadow-pink-100">
                        <span className="flex h-2 w-2 items-center justify-center">
                            <span className="h-2 w-2 rounded-full bg-pink-400 animate-ping" />
                        </span>
                        <span>Discordでほちかわとおしゃべり</span>
                    </p>
                    <h1 className="text-2xl font-extrabold leading-relaxed tracking-wide md:text-3xl">
                        しゃべるほちかわBotを招待して、
                        <span className="mx-1 inline-block -rotate-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 px-3 py-1 text-white shadow-md shadow-pink-300/70">
                            まるで通話みたいに
                        </span>
                        おしゃべりしよう。
                    </h1>
                    <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                        Botをサーバーに招待すると、ボイスチャンネルで
                        星川ボタンのボイスを再生できます。
                        下のボイスリストの番号をそのままコマンドとして使える形にしています。
                    </p>

                    {/* Twitterシェア部分 */}
                    <div className="mt-2 rounded-2xl border border-sky-100 bg-white/90 p-3 shadow-sm shadow-sky-100/70">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                            <div className="text-xs text-slate-600 md:text-sm">
                                コメント感覚でポストして星川への思いを共有しよう！
                            </div>
                            <a
                                href="https://twitter.com/share?url=https%3A%2F%2Fsara-hoshikawa.com/bot/download&text=%E3%81%B5%E3%82%93%E3%81%B5%E3%82%93%E3%81%81%EF%BC%81%E3%81%BB%E3%81%A1%E3%81%8B%E3%82%8F%E3%81%A8%E3%81%8A%E3%81%97%E3%82%83%E3%81%B9%E3%82%8ABot%E3%82%92%E4%BD%BF%E3%81%88%E3%81%B0%E3%80%81%E3%81%BE%E3%82%8B%E3%81%A7%E3%81%BB%E3%81%A1%E3%81%8B%E3%82%8F%E3%81%A8%E3%81%8A%E8%A9%B1%E3%81%97%E3%81%97%E3%81%A6%E3%82%8B%E3%81%BF%E3%81%9F%E3%81%84%EF%BC%81%20%23%E6%98%9F%E5%B7%9D%E3%83%9C%E3%82%BF%E3%83%B3%EF%BC%81&via=hoshikawa_com"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center justify-center rounded-full bg-gray-800 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-sky-300/70 transition hover:bg-gray-600"
                            >
                                ポスト
                            </a>
                        </div>
                    </div>
                </section>

                {/* 招待 & 使い方 */}
                <section id="invite" className="mt-10 space-y-6">
                    <div className="rounded-3xl border border-pink-100 bg-white/90 p-4 shadow-md shadow-pink-100/80">
                        <h2 className="text-base font-bold md:text-lg">しゃべるほちかわの招待</h2>

                        <div className="mt-3 space-y-4 text-sm text-slate-700">
                            <div>
                                <p className="text-[13px] font-semibold text-pink-600">
                                    ばーじょん2.0アップデート！
                                </p>
                                <p className="mt-1 text-xs md:text-sm">
                                    サーバーのアップデートと、ボットのバージョンアップを行いました！
                                    <br />
                                    ぜひお試しください！
                                </p>
                            </div>

                            <div className="space-y-1 text-xs md:text-sm">
                                <p className="text-[13px] font-semibold text-pink-600">リンク</p>
                                <ul className="mt-1 space-y-1">
                                    <li>
                                        <a
                                            href="https://discord.com/api/oauth2/authorize?client_id=735533208216666135&permissions=2150632448&scope=bot%20applications.commands"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sky-600 underline-offset-2 hover:underline"
                                        >
                                            招待コード（Discord OAuth2）
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="text-[13px] font-semibold text-pink-600">使い方</p>
                                <ol className="mt-1 list-decimal space-y-1 pl-5 text-xs md:text-sm">
                                    <li>自分がボイスチャンネルに入る</li>
                                    <li>適当なテキストチャンネルで「/s [指定のボイス番号]」と送信</li>
                                    <li>切断してほしいときは「/leave」</li>
                                    <li>音を止めたいときは「/stop」</li>
                                </ol>
                                <p className="mt-2 text-[11px] text-slate-500">
                                    また、このサイトを開きたいときは Discord 上で「/list」と入力してください。
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ボイスリスト */}
                <section id="voicelist" className="mt-10">
                    <h2 className="text-base font-bold md:text-lg">
                        しゃべるほちかわのボイスリスト
                    </h2>
                    <p className="mt-1 text-xs text-slate-600 md:text-sm">
                        下記の番号をそのまま「/s [番号]」としてコマンドに使えます。
                        （例: <code>/s 5</code> で「はい、ていうことで今日は～」）
                    </p>

                    <div className="mt-4 rounded-3xl border border-indigo-50 bg-white/90 p-3 shadow-lg shadow-indigo-100/80">
                        {/* ★ ここから：1カラム＆ページ全体スクロールに変更 */}
                        <ul className="space-y-1 text-xs md:text-sm">
                            {BOT_VOICES.map((v) => (
                                <li
                                    key={v.no}
                                    className="flex items-start gap-2 rounded-xl px-2 py-1 hover:bg-pink-50/80"
                                >
                                    <span className="mt-[1px] w-12 shrink-0 text-right font-mono text-[11px] text-slate-400">
                                        {v.no}
                                    </span>
                                    <span className="flex-1 leading-snug text-slate-700">
                                        {v.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        {/* ★ ここまで：内部スクロールなし */}
                    </div>
                </section>
            </main>

            {/* フッター */}
            <footer className="border-t border-pink-100/60 bg-white/70 py-4">
                <div className="mx-auto flex max-w-5xl flex-col gap-1 px-4 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between">
                    <p>© {new Date().getFullYear()} sara hoshikawa , 星川ボタン！</p>
                    <p className="leading-snug">
                        このBotおよびサイトを利用して発生した問題には一切関与しません。
                        利用規約を守って楽しく使ってください。
                    </p>
                </div>
            </footer>
        </div>
    );
}
