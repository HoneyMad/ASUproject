import React from 'react';
import ObjectListItem from "./ObjectListItem";
import AddObject from "./AddObject";

const order = {
    name: "Кафе",
    code: "TY2123",
    status: "В работе",
    startDate: new Date().toLocaleString('en-CA'),
    list: ['ПС','ММ'],
    note: 'Текст примечани 666666666666666 6666666666666666666 6666666666я.....',
    color: "#0F6",
}


const ObjectPage = () => {
    return (
        <div className="px-3 pt-3">
            <div>
                <button className="border-2 border-black rounded-3 " style={{background: "#91FCA2"}}>

                    <img width={48} height={51} src={"./files/add.svg"}/>
                    <span>Добавить объект</span>
                </button>
            </div>

            <div>
                <AddObject/>
            </div>

            <div style={{height: "400px", overflowY: "auto"}}>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>
                <ObjectListItem order={order}/>

            </div>
        </div>
    );
};

export default ObjectPage;