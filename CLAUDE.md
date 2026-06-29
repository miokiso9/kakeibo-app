# CLAUDE.md — kakeibo-app プロジェクト設定

## プロジェクト概要

**家計簿アプリ（kakeibo-app）**
収支を記録・管理するWebアプリケーション。

| 項目 | 内容 |
|---|---|
| プロジェクト名 | kakeibo-app |
| フロントエンド | React（Vite） |
| バックエンド | Node.js（Express） |
| リポジトリ | https://github.com/miokiso9/kakeibo-app |

---

## 技術スタック

### フロントエンド（`client/`）
- React 18 + Vite
- コンポーネント設計：関数コンポーネント + Hooks

### バックエンド（`server/`）
- Node.js + Express
- REST API

---

## コーディングルール

### コメント
- **コメントは必ず日本語で書くこと**
- 関数・コンポーネントには何をするものか日本語で説明を入れる
- 英語コメントは使わない

### 変更管理
- **コードを変更するたびに GitHub にプッシュすること**
- コミットメッセージは日本語で、変更内容がわかるように書く
- 例：`feat: 収支入力フォームを追加`、`fix: 合計金額の計算バグを修正`

### セキュリティ
- **`.env` ファイルは絶対に GitHub にプッシュしない**（`.gitignore` で除外済み）
- APIキー・パスワード・シークレットは必ず環境変数で管理する
- `.env.example` にキー名だけ記載して共有する

---

## フォルダ構成（予定）

```
kakeibo-app/
├── client/          フロントエンド（React + Vite）
│   ├── src/
│   │   ├── components/  コンポーネント
│   │   ├── pages/       ページ
│   │   └── App.jsx      ルートコンポーネント
│   └── package.json
├── server/          バックエンド（Node.js + Express）
│   ├── routes/      APIルート
│   ├── index.js     エントリポイント
│   └── package.json
├── .env.example     環境変数のサンプル（実際の値は書かない）
├── .gitignore       Git除外設定
└── CLAUDE.md        本ファイル
```

---

## 開発ルール（Claude Codeへの指示）

- 新機能追加は Plan Mode で全体設計を先に確認してから実装する
- コンポーネント名・関数名は英語、コメントは日本語
- 変更を加えたら必ず `git add → git commit → git push` まで行うこと
- `.env` ファイルは作成してもプッシュしないこと
