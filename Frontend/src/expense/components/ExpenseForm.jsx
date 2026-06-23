import React, { useState } from 'react'

const CATEGORIES = ['Food','Travel','Shopping','Bills','Salary','Entertainment','Others']

export default function ExpenseForm({ onAdd }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('Food')
  const [type, setType] = useState('Expense')
  const [date, setDate] = useState(new Date().toISOString().slice(0,10))

  function submit(e) {
    e.preventDefault()
    const n = name.trim()
    const a = parseFloat(amount)
    if (!n || Number.isNaN(a)) return
    onAdd({ id: Date.now().toString(), name: n, amount: a, category, type, date: new Date(date).toISOString(), createdAt: Date.now() })
    setName('')
    setAmount('')
    setCategory('Food')
    setType('Expense')
    setDate(new Date().toISOString().slice(0,10))
  }

  return (
    <form className="exp-form" onSubmit={submit}>
      <input placeholder="Transaction name" value={name} onChange={e=>setName(e.target.value)} />
      <input placeholder="Amount" value={amount} onChange={e=>setAmount(e.target.value)} type="number" step="0.01" />
      <select value={category} onChange={e=>setCategory(e.target.value)}>
        {CATEGORIES.map(c => <option key={c}>{c}</option>)}
      </select>
      <select value={type} onChange={e=>setType(e.target.value)}>
        <option>Expense</option>
        <option>Income</option>
      </select>
      <input type="date" value={date} onChange={e=>setDate(e.target.value)} />
      <button className="btn" type="submit">Add Transaction</button>
    </form>
  )
}
