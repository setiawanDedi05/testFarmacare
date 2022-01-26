import React from "react";
import { useMediaQuery } from "react-responsive";
import TableSumaryMobile from "../component/tableSummaryMobile";
import { useHistory, useLocation } from "react-router-dom";
import TableSumaryPC from "../component/tableSummaryPc.js";

const Stack = () => {
    const history = useHistory()
    const location = useLocation()
    return (
        <div className="stack">
            <svg style={{ cursor: "pointer" }} onClick={() => history.goBack()} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.40994 7L12.7099 2.71C12.8982 2.5217 13.004 2.2663 13.004 2C13.004 1.7337 12.8982 1.47831 12.7099 1.29C12.5216 1.1017 12.2662 0.995911 11.9999 0.995911C11.7336 0.995911 11.4782 1.1017 11.2899 1.29L6.99994 5.59L2.70994 1.29C2.52164 1.1017 2.26624 0.995911 1.99994 0.995911C1.73364 0.995911 1.47824 1.1017 1.28994 1.29C1.10164 1.47831 0.995847 1.7337 0.995847 2C0.995847 2.2663 1.10164 2.5217 1.28994 2.71L5.58994 7L1.28994 11.29C1.19621 11.383 1.12182 11.4936 1.07105 11.6154C1.02028 11.7373 0.994141 11.868 0.994141 12C0.994141 12.132 1.02028 12.2627 1.07105 12.3846C1.12182 12.5064 1.19621 12.617 1.28994 12.71C1.3829 12.8037 1.4935 12.8781 1.61536 12.9289C1.73722 12.9797 1.86793 13.0058 1.99994 13.0058C2.13195 13.0058 2.26266 12.9797 2.38452 12.9289C2.50638 12.8781 2.61698 12.8037 2.70994 12.71L6.99994 8.41L11.2899 12.71C11.3829 12.8037 11.4935 12.8781 11.6154 12.9289C11.7372 12.9797 11.8679 13.0058 11.9999 13.0058C12.132 13.0058 12.2627 12.9797 12.3845 12.9289C12.5064 12.8781 12.617 12.8037 12.7099 12.71C12.8037 12.617 12.8781 12.5064 12.9288 12.3846C12.9796 12.2627 13.0057 12.132 13.0057 12C13.0057 11.868 12.9796 11.7373 12.9288 11.6154C12.8781 11.4936 12.8037 11.383 12.7099 11.29L8.40994 7Z" fill="#006A7A" />
            </svg>
            <span style={{ margin: 'auto', textTransform: 'capitalize' }}>{location.state.pokemon.name}</span>
        </div>
    )
}

const Summary = () => {
    const location = useLocation()
    const isMobile = useMediaQuery({ query: "(max-width:600px)" })
    const { pcs, dozen } = location.state.data
    const total = +pcs + (+dozen * 12)
    const { pokemon } = location.state
    return (
        <>
            {
                isMobile ? <Stack /> : null
            }
            <div className="container">
                <div className="home-title" data-testid='summary-title'>Konfirmasi update stock
                </div>
                <div style={{
                    marginTop :'40px'
                }}>
                    <label className="label-detail">selisih</label>
                </div>
                <div style={{marginBottom: '16px'}}>
                    <span className="text-total-stock" data-testid='total-pcs'>
                        +{ total } pcs
                    </span>
                </div>
                <div style={{display:'flex', flexDirection: 'column'}}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <label className="label-detail">
                            Di sistem
                        </label>
                        <label className="label-detail">
                            hasil update stock
                        </label>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div>
                            <label className="text-pcs" data-testid='stock-before'>
                                {pokemon.stock} pcs
                            </label>
                        </div>
                        <div>
                            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8H12.86L9.23 12.36C9.14595 12.4611 9.08265 12.5778 9.0437 12.7034C9.00474 12.829 8.99091 12.961 9.00298 13.0919C9.02736 13.3564 9.15578 13.6003 9.36 13.77C9.56422 13.9397 9.8275 14.0214 10.0919 13.997C10.3563 13.9726 10.6003 13.8442 10.77 13.64L15.77 7.64C15.8036 7.59228 15.8337 7.54214 15.86 7.49C15.86 7.44 15.91 7.41 15.93 7.36C15.9753 7.24534 15.9991 7.12329 16 7C15.9991 6.87671 15.9753 6.75466 15.93 6.64C15.93 6.59 15.88 6.56 15.86 6.51C15.8337 6.45786 15.8036 6.40773 15.77 6.36L10.77 0.360002C10.676 0.247119 10.5582 0.156339 10.4252 0.0941181C10.2921 0.0318971 10.1469 -0.000236672 10 1.91036e-06C9.76635 -0.000454603 9.53991 0.0809208 9.36 0.230002C9.25874 0.313951 9.17504 0.417051 9.11369 0.533399C9.05234 0.649746 9.01454 0.777054 9.00246 0.908031C8.99039 1.03901 9.00427 1.17108 9.04331 1.29668C9.08236 1.42229 9.1458 1.53895 9.23 1.64L12.86 6H1C0.734784 6 0.48043 6.10536 0.292893 6.2929C0.105357 6.48043 0 6.73479 0 7C0 7.26522 0.105357 7.51957 0.292893 7.70711C0.48043 7.89464 0.734784 8 1 8Z" fill="#333333" />
                            </svg>
                        </div>
                        <div style={{display:"flex", justifyContent:"start"}}>
                            <label className="text-pcs" data-testid='stock-after'>
                                {pokemon.stock + total } pcs
                            </label>
                        </div>
                    </div>
                </div>
                {
                    isMobile ? <TableSumaryMobile data={location.state.data} />  : <TableSumaryPC data={location.state.data} />
                }
            </div>
        </>
    )
}

export default Summary