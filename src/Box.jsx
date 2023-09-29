import './Box.css'
function Box({firstName , lastName , age}){    
    return(
        <>
        <div className="box">
            <p>first name : {firstName}</p>
            <p>last name : {lastName}</p>
            <p>age : {age}</p>
        </div>
        </>
    )
}
export default Box