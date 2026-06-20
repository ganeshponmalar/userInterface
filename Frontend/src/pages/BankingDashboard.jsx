import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import BalanceCard from '../components/BalanceCard'
import CreditCard from '../components/CreditCard'
import TransactionTable from '../components/TransactionTable'
import TransferForm from '../components/TransferForm'
import Statistics from '../components/Statistics'
import '../App.css'

const MOCK_TRANSACTIONS = [
  { id: 'TX1001', date: '2026-06-01', description: 'Salary', amount: '+$5,000.00', type: 'credit', status: 'Completed' },
  { id: 'TX1002', date: '2026-06-02', description: 'Coffee Shop', amount: '-$4.50', type: 'debit', status: 'Completed' },
  { id: 'TX1003', date: '2026-06-03', description: 'Electricity Bill', amount: '-$120.00', type: 'debit', status: 'Pending' },
  { id: 'TX1004', date: '2026-06-04', description: 'Transfer to John', amount: '-$200.00', type: 'debit', status: 'Completed' },
]

export default function BankingDashboard({ onNavigate }) {
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS)

  function handleTransfer(tx) {
    setTransactions(prev => [ { id: tx.id, date: tx.date, description: `Transfer to ${tx.recipient}`, amount: `-${tx.amount}`, type: 'debit', status: 'Pending' }, ...prev ])
    alert('Transfer submitted: ' + tx.amount)
  }

  const stats = [
    { id: 1, title: 'Total Deposits', value: '$12,340' },
    { id: 2, title: 'Total Withdrawals', value: '$4,200' },
    { id: 3, title: 'Pending Transfers', value: '2' },
    { id: 4, title: 'Monthly Spending', value: '$1,200' },
  ]

  return (
    <div className="banking-root">
      <Sidebar onNavigate={onNavigate} />
      <div className="bank-main">
        <Header />
        <main className="bank-content">
          <section className="bank-top">
            <BalanceCard />
            <CreditCard card={{ holder: 'JANE DOE', number: '4111111111111111', expiry: '11/29' }} />
          </section>

          <section className="bank-middle">
            <div className="left">
              <div className="card">
                <h4>Recent Transactions</h4>
                <TransactionTable data={transactions} />
              </div>

              <div className="card">
                <h4>Transfer Money</h4>
                <TransferForm onTransfer={handleTransfer} />
              </div>
            </div>

            <aside className="right">
              <Statistics stats={stats} />
              <div className="card">
                <h4>Activity Timeline</h4>
                <ul className="timeline">
                  <li>2026-06-04: Transfer to John — Pending</li>
                  <li>2026-06-03: Electricity Bill — Paid</li>
                  <li>2026-06-01: Salary — Received</li>
                </ul>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  )
}
