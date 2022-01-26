import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";

const TableSumaryMobile = (props) => {
    const location = useLocation()
    const history = useHistory()
    const [note, setNote] = useState("")
    const { pokemons } = useSelector((state) => state)
    const { pokemon } = location.state
    const { pcs, dozen } = props.data
    const total = +pcs + (+dozen * 12)
    const detail = `${total%12} pcs, ${Math.floor(total/12)} lusin (12pcs)`
    const saveHandler = () => {
        pokemons.forEach(el => {
            if (el.id === +pokemon.id) {
                el.history.push({
                    id: el.history.length+1,
                    id_pokemon: el.id,
                    time: new Date(),
                    title: "Update Stock",
                    note,
                    total,
                    stock_before: el.stock
                })
                el.stock += total
            }
        })
        history.push({ pathname: `details/${pokemon.id}`, state: { pokemon: pokemons[pokemon.id - 1] } })
    }
    return (
        <>
            <div style={{ marginTop: '40px', marginBottom: '8px' }}>
                <label className="text-sub">
                    Details stock opname
                </label>
            </div>
            <div className="header-div">
                <div className="header-table">
                    <div className="header-row">
                        <div className="width-md">Keterangan</div>
                        <div>Jumlah</div>
                        <div></div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', padding: '10px', borderBottom: '2px solid black' }}>
                    <span style={{ fontSize: '12px' }}>{new Date().getHours()} : {new Date().getMinutes()}</span>
                    <div className="summary-data">
                        <span className="text-data-table width-md">Hasil Update Stock</span>
                        <span>{total} pcs</span>
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.4001 3.34001L13.6601 0.60001C13.3024 0.264106 12.8338 0.0713693 12.3434 0.0584625C11.8529 0.0455557 11.3748 0.21338 11.0001 0.530011L2.00005 9.53001C1.67682 9.85598 1.47556 10.2832 1.43005 10.74L1.00005 14.91C0.986582 15.0565 1.00559 15.2041 1.05571 15.3424C1.10584 15.4807 1.18585 15.6062 1.29005 15.71C1.38349 15.8027 1.49431 15.876 1.61615 15.9258C1.73798 15.9756 1.86845 16.0008 2.00005 16H2.09005L6.26005 15.62C6.71685 15.5745 7.14409 15.3732 7.47005 15.05L16.4701 6.05001C16.8194 5.68098 17.0082 5.18852 16.995 4.68055C16.9819 4.17257 16.768 3.69052 16.4001 3.34001ZM6.08005 13.62L3.08005 13.9L3.35005 10.9L9.00005 5.32001L11.7001 8.02001L6.08005 13.62ZM13.0001 6.68001L10.3201 4.00001L12.2701 2.00001L15.0001 4.73001L13.0001 6.68001Z" fill="#006A7A" />
                        </svg>
                    </div>
                    <label className="caption">
                        {detail}
                    </label>
                </div>
                <div style={{ display: 'flex', marginTop: '14px', justifyContent: "space-between" }}>
                    <span className="label-detail">
                        Total hasil stock opname
                    </span>
                    <span className="label-detail">
                        {total} pcs
                    </span>
                </div>
                <div style={{ marginTop: '60px', display: "flex", flexDirection: "column" }}>
                    <span className="text-header-table" data-tableid='note-summary'>Catatan</span>
                    <textarea value={note} onChange={(e)=>setNote(e.target.value)} className="text-area" placeholder="Contoh: Stock Awal">
                    </textarea>
                    <div style={{ display: "flex", justifyContent: "end", marginTop: "16px" }}>
                        <button onClick={() => saveHandler()} className="button-save">
                            Simpan
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TableSumaryMobile