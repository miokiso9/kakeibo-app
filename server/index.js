// 家計簿アプリ バックエンド エントリポイント
const express = require('express');
const cors = require('cors');

const expensesRouter = require('./routes/expenses');

const app = express();
const PORT = process.env.PORT || 3001;

// フロントエンド（localhost:5173）からの接続を許可する
app.use(cors({ origin: 'http://localhost:5173' }));

// リクエストボディをJSONとして受け取れるようにする
app.use(express.json());

// 収支APIルートをマウントする
app.use('/api/expenses', expensesRouter);

// サーバーを起動する
app.listen(PORT, () => {
  console.log(`サーバー起動中 ポート:${PORT}`);
});
