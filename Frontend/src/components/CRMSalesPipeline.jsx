import React from 'react'

function Column({ title, items = [] }) {
  return (
    <div className="pipeline-column">
      <h5>{title}</h5>
      <div className="pipeline-items">
        {items.map(i => (
          <div className="pipeline-card" key={i.id}>
            <div className="pipeline-title">{i.name}</div>
            <div className="pipeline-meta">{i.company}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CRMSalesPipeline({ pipeline = {} }) {
  return (
    <div className="crm-pipeline card">
      <h4>Sales Pipeline</h4>
      <div className="pipeline-board">
        <Column title="Lead" items={pipeline.lead || []} />
        <Column title="Contacted" items={pipeline.contacted || []} />
        <Column title="Proposal Sent" items={pipeline.proposal || []} />
        <Column title="Negotiation" items={pipeline.negotiation || []} />
        <Column title="Closed Won" items={pipeline.closed || []} />
      </div>
    </div>
  )
}
