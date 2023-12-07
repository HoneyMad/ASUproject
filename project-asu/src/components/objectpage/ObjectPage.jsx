import React, {useEffect, useState} from 'react';
import ObjectListItem from "./ObjectListItem";
import AddObject from "./AddObject";
import Modal from "../Modal/modal";
import EditObject from "./EditObject";
import ObjectService from "../../API/ObjectService/ObjectService";


const loadData= async(setList) => {
    let data=await ObjectService.getAllObjects()
    console.log(data)
    setList(data)
}


const ObjectPage = () => {

    const [createModalVisible, setCreateModalVisible] = useState(false)
    const [editModalVisible, setEditModalVisible] = useState(false)

    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        loadData(setOrderList)
       //setOrderList([...loadData()])
        //setOrderList(loadData())
    },[])

    const addOrder = (order) => {
        setOrderList([...orderList, order])
    }

    const editOrder = (order, index) => {
        let arr = [...orderList]
        arr[index] = order
        setOrderList([...arr])
    }

    const printOrders = () => {
        if(orderList.length !==0) {
            return   orderList.map((order, index) =>
                <div key={"order:" + index}>
                    <ObjectListItem order={order} orderList={orderList} editOrder={editOrder} editModalVisible={editModalVisible} setEditModalVisible={setEditModalVisible}/>
                </div>
            )
        } return <div className={'d-flex justify-content-center rounded-3 p-3 w-100 mt-2'} style={{border:"solid 1px"}}>Список объектов пуст!</div>
    }

    return (
        <div className="px-3 pt-3">
            <div>
                <button className="border-2 border-black rounded-3 " style={{background: "#91FCA2"}}
                        onClick={() => setCreateModalVisible(true)}>
                    <img width={48} height={51} src={"./files/add.svg"}/>
                    <span>Добавить объект</span>
                </button>
            </div>

            <div>
                <Modal
                    visible={createModalVisible}
                    setVisible={setCreateModalVisible}
                    children={<AddObject  setModalVisible={setCreateModalVisible} addOrder={addOrder}/>}
                />

            </div>

            <div style={{height: "600px", overflowY: "auto"}}>
                {printOrders()}
            </div>
        </div>
    );
};

export default ObjectPage;