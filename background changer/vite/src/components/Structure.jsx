
function Structure(){
    return (
        <>
            <div className="sturc_box">
                <div className="cell" onClick={(e)=>{e.target.innerHTML="x"}}></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
            </div>
        </>
    )
}

export default Structure