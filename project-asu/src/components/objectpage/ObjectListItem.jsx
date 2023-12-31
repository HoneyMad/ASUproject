import React from 'react';
import EditObject from "./EditObject";
import Modal from "../Modal/modal";

const ObjectListItem = ({order,orderList,editModalVisible,editOrder,setEditModalVisible}) => {
    return (
        <div className='w-100 mt-3' style={{border: "solid 1px"}}>
            <div className='d-flex justify-content-between align-items-center p-2'
                 style={{borderBottom: "solid 1px"}}>
                <div className={"d-flex justify-content-center align-items-center rounded-circle"}
                     style={{width: "48px", height: "48px", background: order.color}}></div>
                <div>{order.name}</div>
                <div>{order.code}</div>
                <div>{order.status}</div>
                <div><button className={'btn btn-outline-light'}  onClick={()=> {setEditModalVisible(true)}}><img src={'./files/edit.svg'} width={48} height={48}/></button></div>
            </div>

            <div>
                <div className={"d-flex justify-content-between align-items-center"}>
                    <div className={'w-25 text-center'}>Принят в работу</div>
                    <div className={"w-25 text-center"} style={{borderLeft: "solid 1px"}} >Краткий список СС</div>
                    <div className={'w-50 text-center'} style={{borderLeft: "solid 1px"}}>Примечание</div>
                </div>
                <div className={"d-flex justify-content-between align-items-center"} style={{borderTop: "solid 1px"}} >
                    <div className={'w-25 text-center'}>{order.startDate}</div>
                    <div className={'w-25 text-center'} style={{borderLeft: "solid 1px"}}>
                        {order.list.join(",")}
                    </div>
                    <div className={'w-50 text-wrap'} style={{borderLeft: "solid 1px"}}>{order.note}</div>
                </div>

                <Modal
                    visible={editModalVisible}
                    setVisible={setEditModalVisible}
                    children={<EditObject  setModalVisible={setEditModalVisible} editObject={editOrder} order={order} orderList={orderList}/>}
                />
            </div>

        </div>
    );
};

export default ObjectListItem;