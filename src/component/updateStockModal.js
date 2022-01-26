import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UpdateStockModal = (props) => {
    const history = useHistory()
    const [pcs, setPcs] = useState(props.data ? +props.data.pcs : 0)
    const [dozen, setDozen] = useState(props.data ? +props.data.dozen : 0)
    const onSaveHandler = () => {
        props.setOpenModal(false)
        history.push({ pathname: '/summary', state: { pokemon: props.pokemon, data: { pcs, dozen } } })
    }
    return (
        <div className="container-modal" id="update-stock-modal">
            <div className="center-modal">
                <div className="modal">
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: "24px", marginRight:"24px", alignItems: 'center' }}>
                        <h1 style={{ fontSize: '20px' }}>Update Stock</h1>
                        <span style={{ textAlign: 'center', fontStyle: 'normal', fontSize: '14px', fontWeight: 'normal', letterSpacing: '-0.006em', margin: 'auto' }}>Masukan jumlah stock yang tersedia di rak saat ini.</span>
                        <div className="header-table">
                            <div className="header-row">
                                <div>Kemasan</div>
                                <div>Jml</div>
                                <div>Stock</div>
                            </div>
                        </div>
                        <div className="header-table">
                            <div className="data-row">
                                <span style={{color:'black'}}>Pcs</span>
                                <div style={{ padding: '2px', display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <span style={{ color: 'black', marginRight:'5px', width:"20px" }}>1</span>
                                    <span style={{ color: 'black', marginRight:'5px', width:"20px" }}>X</span>
                                    <input value={pcs} onChange={(e) => setPcs(e.target.value)} style={{
                                        position: 'static',
                                        width: '48px',
                                        height: '36px',
                                        left: '0px',
                                        top: '2px',
                                        background: '#FFFFFF',
                                        border: '1px solid #CCCCCC',
                                        boxSizing: 'border-box',
                                        boxShadow: 'inset 0px 2px 4px rgba(51, 51, 51, 0.15)',
                                        borderRadius: '4px'
                                    }} />
                                </div>
                                <span>{pcs}</span>
                            </div>
                        </div>
                        <div className="header-table">
                            <div className="data-row">
                                <span style={{ color: 'black', width: '20px' }}>Lusin</span>
                                <div style={{ padding: '2px', display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                                    <span style={{ color: 'black', marginRight: '5px', width: "20px" }}>12</span>
                                    <span style={{ color: 'black', marginRight: '5px', width: "20px" }}>X</span>
                                    <input value={dozen} onChange={(e)=> setDozen(e.target.value)} style={{
                                        position: 'static',
                                        width: '48px',
                                        height: '36px',
                                        left: '0px',
                                        top: '2px',
                                        background: '#FFFFFF',
                                        border: '1px solid #CCCCCC',
                                        boxSizing: 'border-box',
                                        boxShadow: 'inset 0px 2px 4px rgba(51, 51, 51, 0.15)',
                                        borderRadius: '4px'
                                    }} />
                                </div>
                                <span>{ 12 * dozen }</span>
                            </div>
                        </div>
                        <div className="header-table">
                            <div className="data-row" style={{border:"none"}}>
                                <span style={{ color: 'black' }}>TotalStock(dalam pcs)</span>
                                <div style={{ padding: '2px' }}>
                                </div>
                                <span>{+pcs + (12 * dozen)}</span>
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginLeft: "auto", marginTop: "32px", marginBottom: "32px", justifyContent:"flex-end"}}>
                            <button className="button-save" onClick={()=>{onSaveHandler()}}>Simpan</button>
                            <button className="button-cancel" onClick={() => {props.setOpenModal(false)}}>Batal</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateStockModal