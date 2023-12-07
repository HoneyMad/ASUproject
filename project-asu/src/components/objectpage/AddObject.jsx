import React, {useState} from 'react';
import ObjectService from "../../API/ObjectService/ObjectService";

let template = {

    name: "",
    code: "",
    status: "Принята в работу",
    startDate: null,
    endDate: null,
    list: [],
    note: '',
    color: "#6496ff",
}

let systemList = ['ПС', 'ОС', 'ТСОН', "СОУЭ", "СКУД", "АСПТ", "ДУ", "СКС"]


const AddObject = ({setModalVisible,  addOrder}) => {

    const [templateState,setTemplateState] = useState(template)

    const [curSystemList, setCurSystemList] = useState(systemList)
    const [usedSystemList, setUsedSystemList] = useState([])
    const [selectedValue, setSelectedValue] = useState(systemList[0])

    const addItem = (val) => {
        let arr = [...usedSystemList]
        let filterArr = curSystemList.filter((el) => el !== val)
        arr.push(val)
        setCurSystemList([...filterArr])
        setUsedSystemList(arr)
        setSelectedValue(filterArr[0])
        setTemplateState({...templateState, list: arr})
    }

    const removeItem = (val) => {
        let arr = usedSystemList.filter((el) => el !== val)
        setCurSystemList([...curSystemList, val])
        setSelectedValue(val)
        setUsedSystemList([...arr])
        setTemplateState({...templateState, list: arr})
    }

    const submitForm = (e) => {
        e.preventDefault()

        setCurSystemList(systemList)
        setUsedSystemList([])
        setSelectedValue(systemList[0])

        addOrder(templateState)
        ObjectService.addObject(templateState)

        setModalVisible(false)
        setTemplateState(template)
    }


    return (
        <div className={"d-flex justify-content-center mt-2"}>

            <form onSubmit={(e) => {
                submitForm(e)
            }} className={" rounded-3 p-2"} style={{border: "solid 1px"}}>
                <h3 className={'text-center'}>Добавление заказа</h3>
                <div className={'d-flex justify-content-between mt-2'}>
                    <label>Наименование объекта</label>
                    <input className={'form-control'} name={'order-name'} placeholder={"Введите название объекта"} type={"text"} maxLength={50} value={templateState.name}
                           onChange={(e) => {setTemplateState({...templateState, name: e.target.value})}}/>
                </div>
                <div className={'d-flex justify-content-between mt-2'}>
                    <label>Код объекта</label>
                    <input className={'form-control w-25'} name={'order-code'} placeholder={'F48G1'} maxLength={6} type={"text"} value={templateState.code}
                           onChange={(e) => {setTemplateState({...templateState, code: e.target.value})}}/>
                </div>
                <div className={'d-flex justify-content-between mt-2'}>
                    <label className={"w-50"}>Список СС на объекте</label>

                    {
                        curSystemList.length !== 0
                            ?
                            <div className={'d-flex '}>
                                <select className={'form-select'} value={selectedValue} name={'order-select'}
                                        onChange={(e) => {
                                            setSelectedValue(e.target.value);
                                            console.log(e.target.value)
                                        }}>
                                    {curSystemList.map((system, index) =>
                                        <option key={"system" + index}>{system}</option>
                                    )}
                                </select>
                                <button className={'btn'} style={{background: "#91FCA2"}}
                                        type={"button"} onClick={(event) => {
                                    console.log(selectedValue);
                                    addItem(selectedValue)
                                }}>+
                                </button>
                            </div>
                            : <div className={'bg-warning px-2 rounded-3'}>Список доступных СС пуст</div>
                    }


                </div>
                <div className={' '}>
                    {
                        [...usedSystemList].map((val, index) =>
                            <div key={'input' + index} className={'d-flex mt-2 w-25 justify-content-between'}>
                                <input className={'form-control'} style={{width:"100px"}} defaultValue={val} readOnly={true}/>
                                <button type={"button"} className={'btn'} style={{background: "#91FCA2"}}
                                        onClick={() => removeItem(val)}>x
                                </button>
                            </div>
                        )
                    }
                </div>

                <div className={'d-flex justify-content-between mt-2'}>
                    <label className={"w-50"}>Дата заказа</label>
                    <input className={'form-control'} style={{width:"35%"}} name={'order-date'} type={"date"} value={templateState.startDate}
                           onChange={(e) => {setTemplateState({...templateState, startDate: e.target.value, endDate: e.target.value})}} />
                </div>
                <div className={'d-flex justify-content-between mt-2'}>
                    <label className={"w-50"}>Примечание</label>
                    <textarea className={"form-control"} name={'order-note'} maxLength={255} value={templateState.note}
                              onChange={(e) => {setTemplateState({...templateState, note: e.target.value})}} />
                </div>

                <div className={"d-flex justify-content-center mt-2"}>
                    <button className={"btn "} style={{background: "#91FCA2"}}>Добавить</button>
                </div>
            </form>
        </div>
    );
};

export default AddObject;