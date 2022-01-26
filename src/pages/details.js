import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import UpdateStockModal from "../component/updateStockModal";
import TableMobile from "../component/tableMobile";
import TablePc from "../component/tablePc";
const Button = (props) => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            { openModal ? <UpdateStockModal setOpenModal={setOpenModal} pokemon={props.pokemon} /> : null }
            <button className="button-update" onClick={()=> setOpenModal(true)}>
                Update Stock
            </button>
        </>
    )
}

const Details = () => {
    const history = useHistory()
    const location = useLocation()
    const isMobile = useMediaQuery({ query: "(max-width:600px)" })
    const [pokemon] = useState(location.state.pokemon)
    return (
        <>
            <div className="stack" data-testid='stack'>
                <svg className="icon-stack"
                    onClick={() => history.push('/')} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 6.99997H3.14L6.77 2.63997C6.93974 2.43575 7.0214 2.17247 6.99702 1.90805C6.97264 1.64362 6.84422 1.39971 6.64 1.22997C6.43578 1.06023 6.1725 0.97857 5.90808 1.00295C5.64365 1.02733 5.39974 1.15575 5.23 1.35997L0.23 7.35997C0.196361 7.40769 0.166279 7.45783 0.14 7.50997C0.14 7.55997 0.14 7.58997 0.0700002 7.63997C0.0246737 7.75463 0.000941121 7.87668 0 7.99997C0.000941121 8.12326 0.0246737 8.24531 0.0700002 8.35997C0.0700002 8.40997 0.0699999 8.43997 0.14 8.48997C0.166279 8.54211 0.196361 8.59225 0.23 8.63997L5.23 14.64C5.32402 14.7529 5.44176 14.8436 5.57485 14.9059C5.70793 14.9681 5.85309 15.0002 6 15C6.23365 15.0004 6.46009 14.9191 6.64 14.77C6.74126 14.686 6.82496 14.5829 6.88631 14.4666C6.94766 14.3502 6.98546 14.2229 6.99754 14.0919C7.00961 13.961 6.99573 13.8289 6.95669 13.7033C6.91764 13.5777 6.8542 13.461 6.77 13.36L3.14 8.99997H15C15.2652 8.99997 15.5196 8.89461 15.7071 8.70708C15.8946 8.51954 16 8.26519 16 7.99997C16 7.73475 15.8946 7.4804 15.7071 7.29286C15.5196 7.10533 15.2652 6.99997 15 6.99997Z" fill="#006A7A" />
                </svg>
                <span className="title-stack" data-testid="stack-title">Stock Pokémon</span>
                {
                    !isMobile ? <Button pokemon={pokemon} /> : null
                }
            </div>
            <div className="container">
                <span className="home-title" data-testid='pokemon-name'>
                    {pokemon.name}
                </span>
                {isMobile ? <Button pokemon={pokemon} /> : null}
                <label className="label-detail">Sisa Stock</label>
                <span className="text-total-stock" data-testid='pokemon-stock'>{pokemon.stock} Pcs</span>
                <span className="text-sub">Riwayat Stock</span>
                <span className="label-detail">Satuan stock dalam pcs</span>
                {
                    isMobile ? <TableMobile history={pokemon.history} /> : <TablePc history={pokemon.history} />
                }
            </div>
        </>
    )
    
}

export default Details