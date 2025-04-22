import { useContext } from "react";
import { AuthContext } from "../../contextApi/AuthProvider";


const Home = () => {
    const information = useContext(AuthContext)
    return (
        <div>
            {console.log(information)}
        </div>
    );
};

export default Home;