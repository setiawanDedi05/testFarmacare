import React from "react";

const TablePc = (props) => {
    return (
        <div className="header-div">
            <div className="header-table">
                <div className="header-row">
                    <div className="width-sm">Waktu</div>
                    <div className="width-sm">Kegiatan</div>
                    <div className="width-sm">Catatan</div>
                    <div className="width-xsm">Jml</div>
                    <div>Stock</div>
                </div>
            </div>
            {props.history.sort((a, b) => b.id - a.id).map(history => {
                return (
                    <div key={ history.id } className="header-table row-hover">
                        <div className="data-row">
                            <div className="width-sm" style={{color:"black"}}>{new Date(history.time).toDateString()}, {new Date(history.time).getHours()}: {new Date(history.time).getMinutes()}</div>
                            <div className="width-sm text-data-table">{history.title}</div>
                            <div className="width-sm">{history.note}</div>
                            <div className="width-xsm text-total-table">{history.id > 1 ? `+${history.total}` : history.total}</div>
                            <div className="width-xsm">{history.stock_before}</div>
                        </div>
                    </div>
                )
            }) }
        </div>
    )
}

export default TablePc