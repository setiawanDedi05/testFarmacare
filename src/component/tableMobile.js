import React from "react";

const TableMobile = (props) => {
    return (
        <div className="header-div">
            {props.history.sort((a, b) => b.id - a.id).map((history, i) => {
                    return (
                        <div key={history.id} className="header-table row-hover">
                            <div className="header-row">
                                <span className="text-header-table width-lg" data-testid='date-history'>{new Date(history.time).toDateString()}</span>
                                <div className="text-header-table space-column">Jml</div>
                                <div className="text-header-table space-column">Stock</div>
                            </div>
                            <div className="line">
                                <span style={{ fontSize: '12px' }} data-testid="hours-history">{new Date(history.time).getHours()} : {new Date(history.time).getMinutes()}</span>
                                <div className="data-row remove-line remove-margin">
                                    <span className="text-data-table width-lg">{history.title}</span>
                                    <span className={!i ? "text-total-table space-column-data" : "text-total-before space-column-data"}>{i ? history.total : `+${history.total}`}</span>
                                    <span className="space-column-data">{history.stock_before}</span>
                                </div>
                                <span className="label-detail">{history.note ? `"${history.note}"` : null}</span>
                            </div>
                        </div>
                    )    
                })}
        </div>
    )

}

export default TableMobile