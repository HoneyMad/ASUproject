import Header from "./components/Header";
import {useState} from "react";
import ObjectPage from "./components/objectpage/ObjectPage";

function App() {

    const [page, setPage] = useState("Главная")


    return (
        <div className="App px-5">
            <Header setPage={setPage} page={page}/>
            {createPage(page)}



        </div>
    );
}
const createPage = (page) => {
    switch (page){
        case "Главная":
            return <ObjectPage/>
        case "Объекты":
            return <ObjectPage/>
    }

}
export default App;
