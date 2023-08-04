import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-center m-5 p-5 fw-bold">
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <div className="">
                <Link to='/'>Home</Link> <br/>
                <Link to='/signin'>Sign In</Link> <br/>
                <Link to='/signup'>Sign Up</Link> <br/>
                <Link to='/team'>Onile Core Team</Link> <br/>
            </div>
        </div>
    )
}

export default Error;