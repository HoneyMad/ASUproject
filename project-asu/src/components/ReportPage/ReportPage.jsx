import React from 'react';
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

    const removeItem = (val) => {
        let arr = usedSystemList.filter((el)=> el !== val)
        setCurSystemList([curSystemList,val])
        setSelectedValue(val)
        setUsedSystemList([...arr])
    }

    return (
        <div>

            <div className={"mt-3"} >

                <h5 className={'text-center'}>По дате:</h5>
                <div className='d-flex justify-content-center' >
                    <div className={'d-flex justify-content-between w-50 p-2 rounded-3'} style={{border:'1px solid'}}>
                       <div>
                           <label>Начало периода:</label>
                           <input className={'form-control'} name={'order-date'} type={"date"}/>
                       </div>
                        <div>
                            <label>Конец периода:</label>
                            <input className={'form-control'} name={'order-date'} type={"date"}/>
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-center'>
                    <div className={'d-flex justify-content-between w-50 mt-4 p-2 rounded-3'} style={{border:'1px solid'}}>
                       <div>
                           <label>Статус объекта:</label>
                           <select className={'form-select'}>

                               <option>Выполнен</option>
                               <option>Отменен</option>

                           </select>
                       </div>
                        <div>
                            <label>СС на объекте:</label>
                            <select className={'form-select'}>
                                <option>ПС</option>
                                <option>ОС</option>
                                <option>ТСОН</option>
                                <option>СОУЭ</option>
                                <option>СКУД</option>
                                <option>АСПТ</option>
                                <option>ДУ</option>
                                <option>СКС</option>
                                <option>РД</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'w-100'}>
                <h3 className={'text-center'}>Архив по объектам</h3>
                <table className={'w-100'}>
                    <thead>
                        <th className={tableBorder}>№</th>
                        <th className={tableBorder}>Наименование</th>
                        <th className={tableBorder}>Код объекта</th>
                        <th className={tableBorder}>Статус</th>
                        <th className={tableBorder}>СС на объекте</th>
                        <th className={tableBorder}>Принят в работу</th>
                        <th className={tableBorder}>Сдан</th>
                        <th className={tableBorder}>Примечание</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={'border-1 border-black text-center'}>1</td>
                            <td className={'border-1 border-black'}>smth</td>
                            <td className={'border-1 border-black text-center'}>4fd8r</td>
                            <td className={'border-1 border-black text-center'}>Выполнен</td>
                            <td className={'border-1 border-black '}>ПС</td>
                            <td className={'border-1 border-black text-center'}>15.04.2002</td>
                            <td className={'border-1 border-black text-center'}>15.06.2002</td>
                            <td className={'border-1 border-black'}>апвапвапавпвп</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ReportPage;