import React, {useState} from 'react';

let template = {
    name: "",
    code: "",
    status: "",
    startDate: new Date().toLocaleString('en-CA'),
    list: ['ПС','ММ','ММ','ММ','ММ'],
    note: '',
    color: "#0F6",
}

let systemList = ['ПС','ОС', 'ТСОН', "СОУЭ", "СКУД", "АСПТ", "ДУ", "СКС", "РД"]


const AddObject = () => {
    const[curSystemList, setCurSystemList]=useState(systemList)
    const[usedSystemList, setUsedSystemList]=useState([])
    const [selectedValue,setSelectedValue]=useState(systemList[0])

    const addItem = (val) => {
        let arr = [...usedSystemList]
        let filterArr = curSystemList.filter((el) => el !== val)
        arr.push(val)
        setCurSystemList([...filterArr])
        setUsedSystemList(arr)
        setSelectedValue(filterArr[0])
    }

    const removeItem = (val) => {
      let arr = usedSystemList.filter((el)=> el !== val)
        setCurSystemList([curSystemList,val])
        setSelectedValue(val)
        setUsedSystemList([...arr])
    }


    return (
        <div className={"d-flex justify-content-center mt-2"} >

            <form className={" rounded-3 p-2"} style={{border:"solid 1px"}}>
                <h3 className={'text-center'}>Добавление заказа</h3>
                <div className={'d-flex justify-content-between mt-2'}>
                    <label >Наименование объекта</label>
                    <input className={'form-control'} name={'order-name'} type={"text"}/>
                </div>
                <div className={'d-flex justify-content-between mt-2'}>
                    <label>Код объекта</label>
                    <input className={'form-control'} name={'order-code'} type={"text"}/>
                </div>
                <div className={'d-flex justify-content-between mt-2'}>
                    <label className={"w-50"}>Список СС на объекте</label>

                    {
                        curSystemList.length !== 0
                        ?
                            <div className={'d-flex '}>
                                <select className={'form-select'} value={selectedValue} name={'order-select'} onChange={(e)=> {setSelectedValue(e.target.value); console.log(e.target.value)}}>
                                    {curSystemList.map((system, index)=>
                                        <option key={"system"+ index}>{system}</option>
                                    )}
                                </select>
                                <button className={'btn'} style={{background: "#91FCA2"}}
                                        type={"button"} onClick={(event)=> {
                                    console.log(selectedValue);
                                    addItem(selectedValue)
                                }}>+</button>
                            </div>
                            : <div className={'bg-warning px-2 rounded-3'}>Список доступных СС пуст</div>
                    }


                </div>
                <div className={'d-flex flex-wrap justify-content-between '}>
                    {
                        [...usedSystemList].map((val,index)=>
                            <div key={'input'+index} className={'d-flex mt-2 w-25 ms-2'}>
                                <input  className={'form-control'} defaultValue={val} readOnly={true}/>
                                <button type={"button"} className={'btn'} style={{background: "#91FCA2"}} onClick={()=>removeItem(val)}>x</button>
                            </div>
                        )
                    }
                </div>

                <div className={'d-flex justify-content-between mt-2'}>
                    <label className={"w-50"}>Дата заказа</label>
                    <input className={'form-control'} name={'order-date'} type={"date"}/>
                </div>
                <div className={'d-flex justify-content-between mt-2'}>
                    <label className={"w-50"}>Примечание</label>
                    <textarea className={"form-control"} name={'order-note'} maxLength={255}/>
                </div>

                <div className={"d-flex justify-content-center mt-2"}>
                    <button className={"btn "} style={{background: "#91FCA2"}}>Добавить</button>
                </div>
            </form>
        </div>
    );
};

export default AddObject;