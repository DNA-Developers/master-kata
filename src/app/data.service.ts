import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  results = [{
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectKatakana: [],
    count: 0
  }];
  advancedResults = [{
    correct: 0,
    incorrect: 0,
    incorrectRo: [],
    incorrectKatakana: [],
    count: 0
  }];

  katakana = of( [
        {
            id: 1,
            katakana: 'ア',
            romanji: 'a',
            exampleSentence: 'アイスクリーム',
            translation: 'ice cream',
            choices: ['a', 'i', 'u', 'o'],
            display: ['ア','イ','ウ','オ']
        },
        {
            id: 2,
            katakana: 'イ',
            romanji: 'i',
            exampleSentence: 'イヤリング',
            translation: 'earring',
            choices: ['e', 'a', 'i', 'o'],
            display: ['エ','ア','イ','オ']
        },
        {
            id: 3,
            katakana: 'ウ',
            romanji: 'u',
            exampleSentence: 'ウィンナー',
            translation: 'wiener',
            choices: ['a', 'i', 'u', 'o'],
            display: ['ア','イ','ウ','オ']
        },
        {
            id: 4,
            katakana: 'エ',
            romanji: 'e',
            exampleSentence: 'エプロン',
            translation: 'apron',
            choices: ['a', 'e', 'u', 'o'],
            display: ['ア','エ','ウ','オ']
        },
        {
            id: 5,
            katakana: 'オ',
            romanji: 'o',
            exampleSentence: 'オーブン',
            translation: 'oven',
            choices: ['e', 'i', 'a', 'o'],
            display: ['エ','イ','ア','オ']
        },
        {
            id: 6,
            katakana: 'カ',
            romanji: 'ka',
            exampleSentence: 'カレーライス',
            translation: 'curry rice',
            choices: ['ka', 'ki', 'ku', 'ko'],
            display: ['カ','キ','ク','コ']
        },
        {
            id: 7,
            katakana: 'キ',
            romanji: 'ki',
            exampleSentence: 'キウイフルーツ',
            translation: 'kiwi',
            choices: ['ka', 'ki', 'ku', 'ko'],
            display: ['カ','キ','ク','コ']
        },
        {
            id: 8,
            katakana: 'ク',
            romanji: 'ku',
            exampleSentence: 'クリスマス',
            translation: 'christmas',
            choices: ['ku', 'ki', 'ka', 'ko'],
            display: ['ク','キ','カ','コ']
        },
        {
            id: 9,
            katakana: 'ケ',
            romanji: 'ke',
            exampleSentence: 'ケーキ',
            translation: 'cake',
            choices: ['ka', 'ke', 'ki', 'ko'],
            display: ['カ','ケ','キ','コ']
        },
        {
            id: 10,
            katakana: 'コ',
            romanji: 'ko',
            exampleSentence: 'コンピューター',
            translation: 'computer',
            choices: ['ke', 'ka', 'ku', 'ko'],
            display: ['ケ','カ','ク','コ']
        },
        {
            id: 11,
            katakana: 'サ',
            romanji: 'sa',
            exampleSentence: 'サーカス',
            translation: 'circus',
            choices: ['shi', 'se', 'sa', 'so'],
            display: ['シ','せ','サ','ソ']
        },
        {
            id: 12,
            katakana: 'シ',
            romanji: 'shi',
            exampleSentence: 'シロップ',
            translation: 'syrup',
            choices: ['se', 'shi', 'su', 'so'],
            display: ['セ','シ','ス','ソ']
        },
        {
            id: 13,
            katakana: 'ス',
            romanji: 'su',
            exampleSentence: 'スプーン',
            translation: 'spoon',
            choices: ['su', 'shi', 'se', 'so'],
            display: ['ス','シ','セ','ソ']
        },
        {
            id: 14,
            katakana: 'セ',
            romanji: 'se',
            exampleSentence: 'セーター',
            translation: 'sweater',
            choices: ['se', 'su', 'sa', 'so'],
            display: ['セ','ス','サ','ソ']
        },
        {
            id: 15,
            katakana: 'ソ',
            romanji: 'so',
            exampleSentence: 'ソーダ',
            translation: 'soda',
            choices: ['sa', 'shi', 'su', 'so'],
            display: ['サ','シ','ス','ソ']
        },
        {
            id: 16,
            katakana: 'タ',
            romanji: 'ta',
            exampleSentence: 'タオル',
            translation: 'towel',
            choices: ['tsu', 'te', 'to', 'ta'],
            display: ['ツ','テ','ト','タ']
        },
        {
            id: 17,
            katakana: 'チ',
            romanji: 'chi',
            exampleSentence: 'チーズ',
            translation: 'cheese',
            choices: ['tsu', 'chi', 'to', 'ta'],
            display: ['ツ','チ','ト','タ']
        },
        {
            id: 18,
            katakana: 'ツ',
            romanji: 'tsu',
            exampleSentence: 'ツイッター',
            translation: 'twitter',
            choices: ['tsu', 'te', 'chi', 'ta'],
            display: ['ツ','テ','チ','タ']
        },
        {
            id: 19,
            katakana: 'テ',
            romanji: 'te',
            exampleSentence: 'テーブル',
            translation: 'table',
            choices: ['ta', 'te', 'to', 'chi'],
            display: ['タ','テ','ト','チ']
        },
        {
            id: 20,
            katakana: 'ト',
            romanji: 'to',
            exampleSentence: 'トースト',
            translation: 'toast',
            choices: ['tsu', 'te', 'to', 'ta'],
            display: ['ツ','テ','ト','タ']
        },
        {
            id: 21,
            katakana: 'ナ',
            romanji: 'na',
            exampleSentence: 'ナイフ',
            translation: 'knife',
            choices: ['ne', 'nu', 'na', 'no'],
            display: ['ネ','ヌ','ナ','ノ']
        },
        {
            id: 22,
            katakana: 'ニ',
            romanji: 'ni',
            exampleSentence: 'ニュース',
            translation: 'news',
            choices: ['ne', 'nu', 'na', 'ni'],
            display: ['ネ','ヌ','ナ','ニ']
        },
        {
            id: 23,
            katakana: 'ヌ',
            romanji: 'nu',
            exampleSentence: 'ヌードル',
            translation: 'noodles',
            choices: ['nu', 'ne', 'ni', 'no'],
            display: ['ヌ','ネ','ニ','ノ']
        },
        {
            id: 24,
            katakana: 'ネ',
            romanji: 'ne',
            exampleSentence: 'ネクタイ',
            translation: 'tie',
            choices: ['ne', 'no', 'na', 'nu'],
            display: ['ネ','ノ','ナ','ヌ']
        },
        {
            id: 25,
            katakana: 'ノ',
            romanji: 'no',
            exampleSentence: 'ノート',
            translation: 'notebook',
            choices: ['ne', 'nu', 'na', 'no'],
            display: ['ネ','ヌ','ナ','ノ']
        },
        {
            id: 26,
            katakana: 'ハ',
            romanji: 'ha',
            exampleSentence: 'ハンバーガー',
            translation: 'hamburger',
            choices: ['ha', 'hi', 'fu', 'he'],
            display: ['ハ','ヒ','フ','ヘ']
        },
        {
            id: 27,
            katakana: 'ヒ',
            romanji: 'hi',
            exampleSentence: 'ヒーター',
            translation: 'heater',
            choices: ['he', 'fu', 'hi', 'ha'],
            display: ['ヘ','フ','ヒ','ハ']
        },
        {
            id: 28,
            katakana: 'フ',
            romanji: 'fu',
            exampleSentence: 'フランス',
            translation: 'France',
            choices: ['ha', 'hi', 'he', 'fu'],
            display: ['ハ','ヒ','ヘ','フ']
        },
        {
            id: 29,
            katakana: 'ヘ',
            romanji: 'he',
            exampleSentence: 'ヘリコプター',
            translation: 'helicopter',
            choices: ['he', 'ho', 'fu', 'ha'],
            display: ['ヘ','ホ','フ','ハ']
        },
        {
            id: 30,
            katakana: 'ホ',
            romanji: 'ho',
            exampleSentence: 'ホットケーキ',
            translation: 'pancakes',
            choices: ['ha', 'hi', 'ho', 'he'],
            display: ['ハ','ヒ','ホ','ヘ']
        },
        {
            id: 31,
            katakana: 'マ',
            romanji: 'ma',
            exampleSentence: 'マクドナルド',
            translation: 'McDonald\'s',
            choices: ['mu', 'ma', 'mi', 'me'],
            display: ['ム','マ','ミ','メ']
        },
        {
            id: 32,
            katakana: 'ミ',
            romanji: 'mi',
            exampleSentence: 'ミント',
            translation: 'mint',
            choices: ['mu', 'me', 'mi', 'mo'],
            display: ['ム','メ','ミ','モ']
        },
        {
            id: 33,
            katakana: 'ム',
            romanji: 'mu',
            exampleSentence: 'ムカデ',
            translation: 'centipede',
            choices: ['mu', 'mo', 'mi', 'ma'],
            display: ['ム','モ','ミ','マ']
        },
        {
            id: 34,
            katakana: 'メ',
            romanji: 'me',
            exampleSentence: 'メロン',
            translation: 'melon',
            choices: ['ma', 'me', 'mu', 'mo'],
            display: ['マ','メ','ム','モ']
        },
        {
            id: 35,
            katakana: 'モ',
            romanji: 'mo',
            exampleSentence: 'モノレール',
            translation: 'monorail',
            choices: ['mu', 'mo', 'mi', 'me'],
            display: ['ム','モ','ミ','メ']
        },
        {
            id: 36,
            katakana: 'ヤ',
            romanji: 'ya',
            exampleSentence: 'ヤフー',
            translation: 'yahoo',
            choices: ['yu', 'yo', 'ya', 'a'],
            display: ['ユ','ヨ','ヤ','ア']
        },
        {
            id: 37,
            katakana: 'ユ',
            romanji: 'yu',
            exampleSentence: 'ユニホーム',
            translation: 'uniform',
            choices: ['fu', 'ya', 'yo', 'yu'],
            display: ['フ','ヤ','ヨ','ユ']
        },
        {
            id: 38,
            katakana: 'ヨ',
            romanji: 'yo',
            exampleSentence: 'ヨット',
            translation: 'yacht',
            choices: ['ya', 'yo', 'yu', 'ha'],
            display: ['ヤ','ヨ','ユ','ハ']
        },
        {
            id: 39,
            katakana: 'ラ',
            romanji: 'ra',
            exampleSentence: 'ラーメン',
            translation: 'ramen',
            choices: ['ri', 'ru', 're', 'ra'],
            display: ['リ','ル','レ','ラ']
        },
        {
            id: 40,
            katakana: 'リ',
            romanji: 'ri',
            exampleSentence: 'リサイクル',
            translation: 'recycle',
            choices: ['ri', 'ra', 're', 'ro'],
            display: ['リ','ラ','レ','ロ']
        },
        {
            id: 41,
            katakana: 'ル',
            romanji: 'ru',
            exampleSentence: 'ルイヴィトン',
            translation: 'louis vuitton',
            choices: ['ri', 'ru', 're', 'ra'],
            display: ['リ','ル','レ','ラ']
        },
        {
            id: 42,
            katakana: 'レ',
            romanji: 're',
            exampleSentence: 'レタス',
            translation: 'lettuce',
            choices: ['re', 'ra', 'ri', 'ro'],
            display: ['レ','ラ','リ','ロ']
        },
        {
            id: 43,
            katakana: 'ロ',
            romanji: 'ro',
            exampleSentence: 'ロボット',
            translation: 'robot',
            choices: ['ro', 'ru', 're', 'ra'],
            display: ['ロ','ル','レ','ラ']
        },
        {
            id: 44,
            katakana: 'ワ',
            romanji: 'wa',
            exampleSentence: 'ワイン',
            translation: 'wine',
            choices: ['wo', 'wa', 'he', 'n'],
            display: ['ヲ','ワ','ヘ','ン']
        },
        {
            id: 45,
            katakana: 'ヲ',
            romanji: 'wo',
            exampleSentence: '',
            translation: '',
            choices: ['wa', 'n', 'wo', 'mo'],
            display: ['ワ','ン','ヲ','モ']
        },
        {
            id: 46,
            katakana: 'ン',
            romanji: 'n',
            exampleSentence: 'パン',
            translation: 'bread',
            choices: ['n', 'wo', 'wa', 'me'],
            display: ['ン','ヲ','ワ','メ']
        },
        {
            id: 47,
            katakana: 'ガ',
            romanji: 'ga',
            exampleSentence: 'ガードマン',
            translation: 'guard',
            choices: ['gi', 'ga', 'gu', 'go'],
            display: ['ギ','ガ','グ','ゴ']
        },
        {
            id: 48,
            katakana: 'ギ',
            romanji: 'gi',
            exampleSentence: 'ギター',
            translation: 'guitar',
            choices: ['ga', 'gu', 'gi', 'go'],
            display: ['ガ','グ','ギ','ゴ']
        },
        {
            id: 49,
            katakana: 'グ',
            romanji: 'gu',
            exampleSentence: 'グアム',
            translation: 'Guam',
            choices: ['ga', 'gi', 'go', 'gu'],
            display: ['ガ','ギ','ゴ','グ']
        },
        {
            id: 50,
            katakana: 'ゲ',
            romanji: 'ge',
            exampleSentence: 'ゲーム',
            translation: 'game',
            choices: ['ga', 'ge', 'gi', 'go'],
            display: ['ガ','ゲ','ギ','ゴ']
        },
        {
            id: 51,
            katakana: 'ゴ',
            romanji: 'go',
            exampleSentence: 'ゴリラ',
            translation: 'gorilla',
            choices: ['go', 'ga', 'gi', 'ge'],
            display: ['ゴ','ガ','ギ','ゲ']
        },
        {
            id: 52,
            katakana: 'ザ',
            romanji: 'za',
            exampleSentence: 'ザクロ',
            translation: 'pomegranate',
            choices: ['ji', 'za', 'ze', 'zu'],
            display: ['ジ','ザ','ゼ','ズ']
        },
        {
            id: 53,
            katakana: 'ジ',
            romanji: 'ji',
            exampleSentence: 'ジンクス',
            translation: 'jinks',
            choices: ['za', 'zo', 'ji', 'ze'],
            display: ['ザ','ゾ','ジ','ゼ']
        },
        {
            id: 54,
            katakana: 'ズ',
            romanji: 'zu',
            exampleSentence: 'ズッキーニ',
            translation: 'zucchini',
            choices: ['ji', 'za', 'zu', 'zo'],
            display: ['ジ','ザ','ズ','ゾ']
        },
        {
            id: 55,
            katakana: 'ゼ',
            romanji: 'ze',
            exampleSentence: 'ゼロ',
            translation: 'zero',
            choices: ['ze', 'ji', 'zo', 'zu'],
            display: ['ゼ','ジ','ゾ','ズ']
        },
        {
            id: 56,
            katakana: 'ゾ',
            romanji: 'zo',
            exampleSentence: 'ゾンビ',
            translation: 'zombie',
            choices: ['za', 'zo', 'zu', 'ji'],
            display: ['ザ','ゾ','ズ','ジ']
        },
        {
            id: 57,
            katakana: 'ダ',
            romanji: 'da',
            exampleSentence: 'ダンス',
            translation: 'dance',
            choices: ['de', 'ji', 'da', 'zu'],
            display: ['デ','ヂ','ダ','ヅ']
        },
        {
            id: 58,
            katakana: 'ヂ',
            romanji: 'ji',
            exampleSentence: '',
            translation: '',
            choices: ['zu', 'da', 'ji', 'do'],
            display: ['ヅ','ダ','ヂ','ド']
        },
        {
            id: 59,
            katakana: 'ヅ',
            romanji: 'zu',
            exampleSentence: '',
            translation: '',
            choices: ['da', 'zu', 'de', 'ji'],
            display: ['ダ','ヅ','デ','ヂ']
        },
        {
            id: 60,
            katakana: 'デ',
            romanji: 'de',
            exampleSentence: 'デトロイト',
            translation: 'Detroit',
            choices: ['do', 'zu', 'da', 'de'],
            display: ['ド','ズ','ダ', 'デ']
        },
        {
            id: 61,
            katakana: 'ド',
            romanji: 'do',
            exampleSentence: 'ドル',
            translation: 'dollar',
            choices: ['da', 'do', 'de', 'zu'],
            display: ['ダ','ド','デ','ヅ']
        },
        {
            id: 62,
            katakana: 'バ',
            romanji: 'ba',
            exampleSentence: 'バナナ',
            translation: 'banana',
            choices: ['bi', 'bu', 'ba', 'be'],
            display: ['ビ','ブ','バ','ベ']
        },
        {
            id: 63,
            katakana: 'ビ',
            romanji: 'bi',
            exampleSentence: 'ビ-ル',
            translation: 'beer',
            choices: ['ba', 'bi', 'bu', 'bo'],
            display: ['バ','ビ','ブ','ボ']
        },
        {
            id: 64,
            katakana: 'ブ',
            romanji: 'bu',
            exampleSentence: 'ブログ',
            translation: 'blog',
            choices: ['bi', 'ba', 'be', 'bu'],
            display: ['ビ','バ','ベ','ブ']
        },
        {
            id: 65,
            katakana: 'ベ',
            romanji: 'be',
            exampleSentence: 'ベッド',
            translation: 'bed',
            choices: ['be', 'ba', 'bu', 'bi'],
            display: ['ベ','バ','ブ','ビ']
        },
        {
            id: 66,
            katakana: 'ボ',
            romanji: 'bo',
            exampleSentence: 'ボクシング',
            translation: 'boxing',
            choices: ['bi', 'bo', 'ba', 'be'],
            display: ['ビ','ボ','バ','ベ']
        },
        {
            id: 67,
            katakana: 'パ',
            romanji: 'pa',
            exampleSentence: 'パスポート',
            translation: 'passport',
            choices: ['pu', 'pi', 'pa', 'pe'],
            display: ['プ','ピ','パ','ペ']
        },
        {
            id: 68,
            katakana: 'ピ',
            romanji: 'pi',
            exampleSentence: 'ピザ',
            translation: 'pizza',
            choices: ['pi', 'pa', 'pu', 'po'],
            display: ['ピ','パ','プ','ポ']
        },
        {
            id: 69,
            katakana: 'プ',
            romanji: 'pu',
            exampleSentence: 'プリン',
            translation: 'pudding',
            choices: ['pi', 'pu', 'pa', 'pe'],
            display: ['ピ','プ','パ','ペ']
        },
        {
            id: 70,
            katakana: 'ペ',
            romanji: 'pe',
            exampleSentence: 'ペン',
            translation: 'pen',
            choices: ['pe', 'pa', 'pu', 'pi'],
            display: ['ペ','パ','プ','ピ']
        },
        {
            id: 71,
            katakana: 'ポ',
            romanji: 'po',
            exampleSentence: 'ポケット',
            translation: 'pocket',
            choices: ['po', 'pe', 'pi', 'pu'],
            display: ['ポ','ペ','ピ','プ']
        },
        {
            id: 72,
            katakana: 'キャ',
            romanji: 'kya',
            exampleSentence: 'キャベツ',
            translation: 'cabbage',
            choices: ['kyu', 'kyo', 'kya', 'ga'],
            display: ['キュ','キョ','キャ','ガ']
        },
        {
            id: 73,
            katakana: 'キュ',
            romanji: 'kyu',
            exampleSentence: 'キューバ',
            translation: 'Cuba',
            choices: ['kyo', 'kya', 'pa', 'kyu'],
            display: ['キョ','キャ','パ','キュ']
        },
        {
            id: 74,
            katakana: 'キョ',
            romanji: 'kyo',
            exampleSentence: '',
            translation: '',
            choices: ['sha', 'kyo', 'kyu', 'kya'],
            display: ['シャ','キョ','キュ','キャ']
        },
        {
            id: 75,
            katakana: 'シャ',
            romanji: 'sha',
            exampleSentence: 'シャイ',
            translation: 'shy',
            choices: ['sho', 'sha', 'shu', 'kyo'],
            display: ['ショ','シャ','シュ','ショ']
        },
        {
            id: 76,
            katakana: 'シュ',
            romanji: 'shu',
            exampleSentence: 'シュークリーム',
            translation: 'creampuff',
            choices: ['shu', 'sho', 'sha', 'kya'],
            display: ['シュ','ショ','シャ','シャ']
        },
        {
            id: 77,
            katakana: 'ショ',
            romanji: 'sho',
            exampleSentence: 'ショッピング',
            translation: 'shopping',
            choices: ['kyu', 'sha', 'sho', 'shu'],
            display: ['キュ','シャ','ショ','シュ']
        },
        {
            id: 78,
            katakana: 'チャ',
            romanji: 'cha',
            exampleSentence: 'チャーハン',
            translation: 'fried rice',
            choices: ['kya', 'sha', 'cha', 'chu'],
            display: ['キャ','シャ','チャ','チュ']
        },
        {
            id: 79,
            katakana: 'チュ',
            romanji: 'chu',
            exampleSentence: 'チューリップ',
            translation: 'tulip',
            choices: ['cha', 'chu', 'cho', 'kya'],
            display: ['チャ','チュ','チョ','キャ']
        },
        {
            id: 80,
            katakana: 'チョ',
            romanji: 'cho',
            exampleSentence: 'チョコレート',
            translation: 'chocolate',
            choices: ['kyo', 'cho', 'chu', 'cha'],
            display: ['キョ','チョ','チュ','チャ']
        },
        {
            id: 81,
            katakana: 'ニャ',
            romanji: 'nya',
            exampleSentence: 'ニャー',
            translation: 'meow',
            choices: ['cha', 'nya', 'nyu', 'nyo'],
            display: ['チャ','ニャ','ニュ','ニョ']
        },
        {
            id: 82,
            katakana: 'ニュ',
            romanji: 'nyu',
            exampleSentence: 'ニューヨーク',
            translation: 'New York',
            choices: ['kyu', 'chu', 'nyu', 'nya'],
            display: ['キュ','チュ','ニュ','ニャ']
        },
        {
            id: 83,
            katakana: 'ニョ',
            romanji: 'nyo',
            exampleSentence: 'ニョッキ',
            translation: 'gnocchi',
            choices: ['kyo', 'nyo', 'nyu', 'cha'],
            display: ['キョ','ニョ','ニュ','チャ']
        },
        {
            id: 84,
            katakana: 'ビャ',
            romanji: 'bya',
            exampleSentence: '',
            translation: '',
            choices: ['bya', 'byo', 'byu', 'cha'],
            display: ['ビャ','ビョ','ビュ','チャ']
        },
        {
            id: 85,
            katakana: 'ビュ',
            romanji: 'byu',
            exampleSentence: 'ビュッフェ',
            translation: 'buffet',
            choices: ['byo', 'byu', 'bya', 'kya'],
            display: ['ビョ','ビュ','ビャ','キャ']
        },
        {
            id: 86,
            katakana: 'ビョ',
            romanji: 'byo',
            exampleSentence: '',
            translation: '',
            choices: ['byu', 'bya', 'kyo', 'byo'],
            display: ['ビュ','ビャ','キョ','ビョ']
        },
        {
            id: 87,
            katakana: 'ミャ',
            romanji: 'mya',
            exampleSentence: 'ミャンマー',
            translation: 'Myanmar',
            choices: ['mya', 'bya', 'myo', 'myu'],
            display: ['ミャ','ビャ','ミョ','ミュ']
        },
        {
            id: 88,
            katakana: 'ミュ',
            romanji: 'myu',
            exampleSentence: 'ミュージック',
            translation: 'music',
            choices: ['byu', 'myo', 'myu', 'mya'],
            display: ['ビュ','ミョ','ミュ','ミャ']
        },
        {
            id: 89,
            katakana: 'ミョ',
            romanji: 'myo',
            exampleSentence: 'ミョウガ',
            translation: 'japanese ginger',
            choices: ['byo', 'myo', 'kyo', 'cho'],
            display: ['ビョ','ミョ','キョ','チョ']
        },
        {
            id: 90,
            katakana: 'リャ',
            romanji: 'rya',
            exampleSentence: '',
            translation: '',
            choices: ['ryo', 'rya', 'ryu', 'kyo'],
            display: ['リョ','リャ','リュ','キョ']
        },
        {
            id: 91,
            katakana: 'リュ',
            romanji: 'ryu',
            exampleSentence: 'リュックサック',
            translation: 'backpack',
            choices: ['rya', 'ryu', 'cho', 'ryo'],
            display: ['リャ','リュ','チョ','リョ']
        },
        {
            id: 92,
            katakana: 'リョ',
            romanji: 'ryo',
            exampleSentence: '',
            translation: '',
            choices: ['ryo', 'rya', 'ryu', 'kya'],
            display: ['リョ','リャ','リュ','キャ']
        },
        {
            id: 93,
            katakana: 'ギャ',
            romanji: 'gya',
            exampleSentence: 'ギャラクシー',
            translation: 'galaxy',
            choices: ['gyo', 'gyu', 'gya', 'cha'],
            display: ['ギョ','ギュ','ギャ','チャ']
        },
        {
            id: 94,
            katakana: 'ギュ',
            romanji: 'gyu',
            exampleSentence: 'フィギュア',
            translation: 'figure',
            choices: ['gyu', 'gyo', 'gya', 'kyo'],
            display: ['ギュ','ギョ','ギャ','キョ']
        },
        {
            id: 95,
            katakana: 'ギョ',
            romanji: 'gyo',
            exampleSentence: 'ギョーザ',
            translation: 'gyoza',
            choices: ['gyo', 'gya', 'gyu', 'ryo'],
            display: ['ギョ','ギャ','ギュ','リョ']
        },
        {
            id: 96,
            katakana: 'ジャ',
            romanji: 'ja',
            exampleSentence: 'ジャパン',
            translation: 'Japan',
            choices: ['ja', 'jo', 'ju', 'rya'],
            display: ['ジャ','ジョ','ジュ','リャ']
        },
        {
            id: 97,
            katakana: 'ジュ',
            romanji: 'ju',
            exampleSentence: 'ジュース',
            translation: 'juice',
            choices: ['jo', 'ju', 'ja', 'kyo'],
            display: ['ジョ','ジュ','ジャ','キョ']
        },
        {
            id: 98,
            katakana: 'ジョ',
            romanji: 'jo',
            exampleSentence: 'ジョーク',
            translation: 'joke',
            choices: ['ja', 'jo', 'ju', 'ryu'],
            display: ['ジャ','ジョ','ジュ','リュ']
        },
        {
            id: 99,
            katakana: 'ヒャ',
            romanji: 'hya',
            exampleSentence: '',
            translation: '',
            choices: ['hyo', 'hya', 'hyu', 'rya'],
            display: ['ヒョ','ヒャ','ヒュ','リャ']
        },
        {
            id: 100,
            katakana: 'ヒュ',
            romanji: 'hyu',
            exampleSentence: 'ヒューストン',
            translation: 'Houston',
            choices: ['hyu', 'hyo', 'hya', 'ryu'],
            display: ['ヒュ','ヒョ','ヒャ','リュ']
        },
        {
            id: 101,
            katakana: 'ヒョ',
            romanji: 'hyo',
            exampleSentence: 'ヒョウ',
            translation: 'panther',
            choices: ['hya', 'hyo', 'hyu', 'cho'],
            display: ['ヒャ','ヒョ','ヒュ','チョ']
        },
        {
            id: 102,
            katakana: 'ピャ',
            romanji: 'pya',
            exampleSentence: '',
            translation: '',
            choices: ['pyu', 'pya', 'pyo', 'ryo'],
            display: ['ピュ','ピャ','ピョ','リョ']
        },
        {
            id: 103,
            katakana: 'ピュ',
            romanji: 'pyu',
            exampleSentence: 'コンピューター',
            translation: 'computer',
            choices: ['pya', 'pyo', 'pyu', 'hyo'],
            display: ['ピャ','ピョ','ピュ','ヒョ']
        },
        {
            id: 104,
            katakana: 'ピョ',
            romanji: 'pyo',
            exampleSentence: 'ピョンヤン',
            translation: 'pyongyang',
            choices: ['pyo', 'ryo', 'cho', 'kyo'],
            display: ['ピョ','リョ','チョ','キョ']
        },
        {
            id: 105,
            katakana: 'ヴァ',
            romanji: 'va',
            exampleSentence: 'ヴャンガード',
            translation: 'vanguard',
            choices: ['va', 've', 'vo', 'vi'],
            display: ['ヴァ','ヴェ','ヴォ','ヴィ']
        },
        {
            id: 106,
            katakana: 'ヴィ',
            romanji: 'vi',
            exampleSentence: 'ヴィクトリア',
            translation: 'Victoria',
            choices: ['ve', 'vo', 'va', 'vi'],
            display: ['ヴェ','ヴォ','ヴァ','ヴィ']
        },
        {
            id: 107,
            katakana: 'ヴェ',
            romanji: 've',
            exampleSentence: '',
            translation: '',
            choices: ['ve', 'va', 'vi', 'vo'],
            display: ['ヴェ','ヴァ','ヴィ','ヴォ']
        },
        {
            id: 108,
            katakana: 'ヴォ',
            romanji: 'vo',
            exampleSentence: 'ヴォーカル',
            translation: 'vocal',
            choices: ['va', 'vo', 've', 'vi'],
            display: ['ヴァ','ヴォ','ヴェ','ヴィ']
      },
    ]
  );

  getAllData() {
    return this.katakana;
  }

  getAdvancedResults() {
    return this.advancedResults;
  }
  getResults() {
    return this.results;
  }

}
