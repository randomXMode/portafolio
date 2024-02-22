require('dotenv').config()
eventNames
const { fetchTransactions } = require('./lib/fetch');
const { eventNames } = require('./lib/googleClient');
const { transformTransactionsToUpdates } = require('./lib/transform')
const { updateSheet } = require('./lib/update')

;(async () => {
  const transactions = await fetchTransactions()
  const updates = transformTransactionsToUpdates(transactions)
  updateSheet(updates)
})()
