import React from 'react';

const Header = ({setPage, page}) => {
    return (
        <header className="d-flex justify-content-between align-items-center pt-5 "
                style={{borderBottom: "solid 2px"}}>
            <div>
                <img width={106} height={95} src={"./files/logo.svg"} onClick={() => setPage("Главная")}/>
                <button className="btn btn-light p-2 rounded-3 me-5" onClick={() => setPage("Объекты")}>
                     {page === "Объекты" ? <u>Объекты</u> : "Объекты"} </button>
                <button className="btn btn-light p-2 rounded-3" onClick={() => setPage("Отчеты")}>
                    {page === "Отчеты" ? <u>Отчеты</u> : "Отчеты"}
                </button>
                <button className="btn btn-light p-2 rounded-3 ms-5" onClick={() => setPage("Анализ")}>
                    {page === "Анализ" ? <u>Анализ</u> : "Анализ"}
                </button>

            </div>
            <div>
                <button className="btn btn-light p-2 rounded-3 me-5" onClick={() => setPage("Профиль")}>
                    {page === "Профиль" ? <u>Профиль</u> : "Профиль"}
                </button>
                <button className="btn btn-light p-2 rounded-3" onClick={() => setPage("Выйти")}>
                     {page === "Выйти" ? <u>Выйти</u> : "Выйти"}
                </button>
            </div>
        </header>
    );
};

export default Header;