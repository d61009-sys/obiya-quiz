// quiz.js

const QUIZ_DATA = [
    {
        id: 'quiz_1',
        title: '帯ぶら音クイズ',
        question: 'この音はなんでしょう？',
        options: [
            'コピー機',
            '印刷機', // 正解
            'コピー機',
            'コピー機'
        ],
        answer: '印刷機',
        audio_src: 'assets/audio/quiz_1_sound.mp3', 
        type: 'audio'
    },
    {
        id: 'quiz_2',
        title: '帯ぶら音クイズ2',
        question: 'この音は何でしょう？',
        options: [
            'ひよこ',
            'すずめ',
            'いんこ', // 正解
            'メジロ'
        ],
        answer: 'インコ(メガネの門田)',
        audio_src: 'assets/audio/quiz_2_sound.mp3', // 音声ファイルのパス
        type: 'audio' // 問題タイプ
    },
    {
        id: 'quiz_3',
        title: '帯ぶら音クイズ3',
        question: 'この音は何でしょう？',
        options: [
            '0',
            '1',
            '2', // 正解
            '3'
        ],
        answer: '2',
        audio_src: 'assets/audio/quiz_3_sound.mp3', 
        type: 'audio'
    },
    {
        id: 'quiz_4',
        title: '帯ぶら音クイズ4',
        question: 'この音はなんでしょう？',
        options: [
            '0',
            '1',
            'ヤマサキ洋装店', // 正解
            '2'
        ],
        answer: 'ヤマサキ洋装店',
        audio_src: 'assets/audio/quiz_4_sound.mp3', 
        type: 'audio'
    },
    {
        id: 'quiz_5',
        title: '帯ぶら音クイズ5',
        question: 'この音は何でしょう？',
        options: [
            '0',
            '1', // 正解
            '2',
            '3'
        ],
        answer: '1',
        audio_src: 'assets/audio/quiz_5_sound.mp3', 
        type: 'audio'
    }
];

// 選択されたクイズを保存する変数
let selectedQuiz = null;