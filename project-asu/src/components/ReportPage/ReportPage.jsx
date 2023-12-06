import React, {useState,useMemo, useEffect} from 'react';
let tableBorder= 'border-1 border-black text-center'
let systemList = ['ПС','ОС', 'ТСОН', "СОУЭ", "СКУД", "АСПТ", "ДУ", "СКС", "РД"]

const ReportPage = () => {
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

    const filterSystemList = (item,pattern) => {
         return item.list.includes(pattern)
    }

    const removeItem = (val) => {
        let arr = usedSystemList.filter((el)=> el !== val)
        setCurSystemList([curSystemList,val])
        setSelectedValue(val)
        setUsedSystemList([...arr])
    }

    return (
        <div>
            <div className={'d-flex w-50 justify-content-between py-2 px-5 mx-auto'}>
                <div>
                    <label>Начало периода:</label>
                    <input className={'form-control'} name={'order-date'} type={"date"}/>
                </div>
                <div>
                    <label>Конец периода:</label>
                    <input className={'form-control'} name={'order-date'} type={"date"}/>
                </div>
                <div>
                    <label>Статус объекта:</label>
                    <select className={'form-select'} value={statusState} onChange={(e)=>{setStatusState(e.target.value)}}>
                        <option value={''}>Вcе статусы</option>
                        <option>Выполнен</option>
                        <option>Отменен</option>
                    </select>
                </div>
                <div>
                    <label>СС на объекте:</label>
                    <select className={'form-select'} value={systemListState}  onChange={(e)=>{setSystemListState(e.target.value)}}>
                        <option value={'all'}>Вcе системы</option>
                        <option value={'ПС'}>ПС</option>
                        <option value={'ОС'}>ОС</option>
                        <option value={'ТСОН'}>ТСОН</option>
                        <option value={'СОУЗ'}>СОУЭ</option>
                        <option value={'СКУД'}>СКУД</option>
                        <option value={'АСПТ'}>АСПТ</option>
                        <option value={'ДУ'}>ДУ</option>
                        <option value={'СКС'}>СКС</option>
                        <option value={'РД'}>РД</option>
                    </select>
                </div>
            </div>
            <div className={'w-100'}>
                <h3 className={'text-center'}>Архив по объектам</h3>
                <table className={'w-100'}>
                    <thead>
                       <tr>
                           <th className={tableBorder}>№</th>
                           <th className={tableBorder}>Наименование</th>
                           <th className={tableBorder}>Код объекта</th>
                           <th className={tableBorder}>Статус</th>
                           <th className={tableBorder}>СС на объекте</th>
                           <th className={tableBorder}>Принят в работу</th>
                           <th className={tableBorder}>Сдан</th>
                           <th className={tableBorder}>Примечание</th>
                       </tr>
                    </thead>
                    <tbody>

                    {



                        sortReports.map((template,index)=>
                            <tr key={"tr:"+index}>
                                <td className={'border-1 border-black text-center'}>{index+1}</td>
                                <td className={'border-1 border-black'}>{template.name}</td>
                                <td className={'border-1 border-black text-center'}>{template.code}</td>
                                <td className={'border-1 border-black text-center'}>{template.status}</td>
                                <td className={'border-1 border-black '}>{template.list.join(", ")}</td>
                                <td className={'border-1 border-black text-center'}>{template.startDate}</td>
                                <td className={'border-1 border-black text-center'}>{template.endDate}</td>
                                <td className={'border-1 border-black'}>{template.note}</td>
                            </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        </div>

    );
};




export default ReportPage;