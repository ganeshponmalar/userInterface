import React, { useState } from 'react'

export default function TransferForm({ onTransfer }) {
  const [recipient, setRecipient] = useState('')
  const [account, setAccount] = useState('')
  const [bank, setBank] = useState('')
  const [amount, setAmount] = useState('')
  const [note, setNote] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!recipient || !account || !amount) return alert('Please fill required fields')
    onTransfer && onTransfer({ recipient, account, bank, amount, note, date: new Date().toLocaleString(), id: 'TX' + Date.now() })
    setRecipient('')
    setAccount('')
    setBank('')
    setAmount('')
    setNote('')
  }

  return (
    <form className="transfer-form" onSubmit={handleSubmit}>
      <input placeholder="Recipient Name" value={recipient} onChange={e => setRecipient(e.target.value)} />
      <input placeholder="Account Number" value={account} onChange={e => setAccount(e.target.value)} />
      <input placeholder="Bank Name" value={bank} onChange={e => setBank(e.target.value)} />
      <input placeholder="Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      <input placeholder="Note (optional)" value={note} onChange={e => setNote(e.target.value)} />
      <button className="btn-primary" type="submit">Transfer</button>
    </form>
  )
}
