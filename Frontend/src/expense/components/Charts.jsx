import React from 'react'

function Pie({ data }) {
  const total = data.reduce((s, d) => s + d.value, 0)
  let acc = 0
  return (
    <svg viewBox="0 0 32 32" width="160" height="160">
      {data.map((d, i) => {
        const v = d.value
        const start = (acc / total) * 2 * Math.PI
        acc += v
        const end = (acc / total) * 2 * Math.PI
        const x1 = 16 + 16 * Math.cos(start - Math.PI/2)
        const y1 = 16 + 16 * Math.sin(start - Math.PI/2)
        const x2 = 16 + 16 * Math.cos(end - Math.PI/2)
        const y2 = 16 + 16 * Math.sin(end - Math.PI/2)
        const large = end - start > Math.PI ? 1 : 0
        const path = `M16 16 L ${x1} ${y1} A 16 16 0 ${large} 1 ${x2} ${y2} Z`
        return <path key={i} d={path} fill={d.color} stroke="#fff" strokeWidth="0.5" />
      })}
    </svg>
  )
}

export default function Charts({ transactions }) {
  const byCategory = {}
  const colors = ['#60a5fa','#f59e0b','#ef4444','#34d399','#a78bfa','#fb7185','#f97316']
  transactions.forEach(t => { if (t.type === 'Expense') byCategory[t.category] = (byCategory[t.category] || 0) + Math.abs(t.amount) })
  const entries = Object.entries(byCategory).map(([k,v],i) => ({ label:k, value:v, color:colors[i%colors.length] }))

  const monthly = {}
  transactions.forEach(t => {
    const m = new Date(t.date).toLocaleString(undefined, { month: 'short', year: 'numeric' })
    monthly[m] = (monthly[m] || 0) + (t.type === 'Expense' ? Math.abs(t.amount) : 0)
  })

  return (
    <div className="exp-charts">
      <div className="chart card">
        <h4>Expense by Category</h4>
        {entries.length ? <Pie data={entries} /> : <div className="empty">No expense data</div>}
        <ul className="legend">
          {entries.map(e => <li key={e.label}><span className="swatch" style={{background:e.color}}/> {e.label} — ${e.value.toFixed(2)}</li>)}
        </ul>
      </div>
      <div className="chart card">
        <h4>Monthly Expense</h4>
        <div className="bar-list">
          {Object.entries(monthly).length ? Object.entries(monthly).map(([m,v]) => (
            <div key={m} className="bar-row">
              <div className="bar-label">{m}</div>
              <div className="bar" style={{width: `${Math.min(100, v / (Math.max(...Object.values(monthly),1)) * 100)}%`}} />
              <div className="bar-val">${v.toFixed(2)}</div>
            </div>
          )) : <div className="empty">No monthly data</div>}
        </div>
      </div>
    </div>
  )
}
