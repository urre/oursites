import React from 'react'

const ToolBar = props => (
	<section className="toolbar">
		<div className="toolbar-left">
			<h2 className="toolbar-amount">
				Sites <span className="toolbar-amount-number">({props.amount})</span>
			</h2>
		</div>
	</section>
)

export default ToolBar
