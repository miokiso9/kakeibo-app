// 収支に関するAPIルート
const express = require('express');
const router = express.Router();

// サンプルデータ（後でデータベースに切り替える）
const sampleExpenses = [
  { id: 1, type: 'income', category: '給与', amount: 250000, date: '2026-06-01', note: '6月分給与' },
  { id: 2, type: 'expense', category: '食費', amount: 3500, date: '2026-06-29', note: 'スーパーでの買い物' },
];

// 収支一覧を取得する
router.get('/', (req, res) => {
  res.json(sampleExpenses);
});

// 収支を1件登録する
router.post('/', (req, res) => {
  const { type, category, amount, date, note } = req.body;
  // ここは後でデータベース保存処理に差し替える
  const newExpense = {
    id: sampleExpenses.length + 1,
    type,
    category,
    amount,
    date,
    note,
  };
  sampleExpenses.push(newExpense);
  res.status(201).json({ message: '登録しました', data: newExpense });
});

module.exports = router;
