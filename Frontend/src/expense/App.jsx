import React, { useEffect, useMemo, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ExpenseForm from './components/ExpenseForm'
import TransactionList from './components/TransactionList'
import SummaryCards from './components/SummaryCards'
import Filters from './components/Filters'
import Charts from './components/Charts'

const STORAGE = 'expense:transactions'
const CATEGORIES = ['Food','Travel','Shopping','Bills','Salary','Entertainment','Others']

export default function App() {
  const [transactions, setTransactions] = useState([])
  const [dark, setDark] = useState(false)
  const [search, setSearch] = useState('')
  const [filters, setFilters] = useState({ category: 'All', type: 'All', date: '' })

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE)
      if (raw) setTransactions(JSON.parse(raw))
    } catch (e) {}
  }, [])

  useEffect(() => {
    try { localStorage.setItem(STORAGE, JSON.stringify(transactions)) } catch (e) {}
  }, [transactions])

  function addTransaction(tx) {
    setTransactions(prev => [tx, ...prev])
  }

  function deleteTransaction(id) {
    setTransactions(prev => prev.filter(t => t.id !== id))
  }

  function editTransaction(id) {
    const tx = transactions.find(t => t.id === id)
    if (!tx) return
    const name = prompt('Name', tx.name)
    if (!name) return
    const amount = parseFloat(prompt('Amount', tx.amount))
    if (Number.isNaN(amount)) return
    const category = prompt('Category', tx.category) || tx.category
    const type = prompt('Type (Income/Expense)', tx.type) || tx.type
    const date = prompt('Date (YYYY-MM-DD)', new Date(tx.date).toISOString().slice(0,10)) || tx.date
    setTransactions(prev => prev.map(t => t.id === id ? { ...t, name, amount, category, type, date } : t))
  }

  const stats = useMemo(() => {
    let income = 0, expense = 0
    transactions.forEach(t => { if (t.type === 'Income') income += t.amount; else expense += Math.abs(t.amount) })
    return { income, expense, balance: income - expense }
  }, [transactions])

  const filtered = useMemo(() => {
    return transactions.filter(t => {
      if (filters.category !== 'All' && t.category !== filters.category) return false
      if (filters.type !== 'All' && t.type !== filters.type) return false
      if (filters.date && t.date.slice(0,10) !== filters.date) return false
      if (search) {
        const q = search.toLowerCase()
        if (!(t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q))) return false
      }
      return true
    })
  }, [transactions, filters, search])

  return (
    <div className={`exp-root ${dark ? 'dark' : ''}`}>
      <div className="exp-container">
        <Header onToggleDark={() => setDark(d => !d)} dark={dark} />

        <SummaryCards income={stats.income} expense={stats.expense} balance={stats.balance} />

        <div className="exp-main">
          <aside className="left">
            <ExpenseForm onAdd={addTransaction} />
            <Filters categories={CATEGORIES} filters={filters} onFilter={setFilters} />
            <Charts transactions={transactions} />
          </aside>

          <section className="right">
            <div className="search-row">
              <input placeholder="Search transactions" value={search} onChange={e=>setSearch(e.target.value)} />
            </div>
            <TransactionList transactions={filtered} onDelete={deleteTransaction} onEdit={editTransaction} search={search} />
          </section>
        </div>
      </div>
    </div>
  )
}
