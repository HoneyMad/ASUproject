import React, {useState,useMemo, useEffect} from 'react';
let tableBorder= 'border-1 border-black text-center'

let templates = [
   {
        name: "Стоматологическая клиника Атмосфера",
        code: "TER89",
        status: "Выполнен",
        startDate: "15.02.2022",
        endDate: "19.03.2022",
        list: ['ПС', 'ТСОН', 'ОС', 'СКС'],
        note: '',

    },
    {
        name: "Продовольственный магазин Берег",
        code: "QR5T9",
        status: "Выполнен",
        startDate: "18.02.2022",
        endDate: "25.04.2022",
        list: ['ПС', 'ТСОН'],
        note: '',
        },
    {
        name: "ГБУЗ Иркутская областная клиническая больница",
        code: "RTY76",
        status: "Выполнен",
        startDate: "11.06.2020",
        endDate: "18.12.2020",
        list: ['ПС', 'ДУ', 'АСПТ', 'СКС','ТСОН'],
        note: '',

    },
    {
        name: "Ресторан",
        code: "АВ455Р",
        status: "Отменен",
        startDate: "20.03.2023",
        endDate: "01.05.2023",
        list: ['ПС', 'СКУД','СОУЭ','АСПТ','ДУ'],
        note: 'ырурварра845рва56р45пр56в4рва5ы4р564р 56ыва4р56ва4р 56ва4 р56',

    },
    {
        name: "Кафе “Остров”",
        code: "78ЕНР",
        status: "Выполнен",
        startDate: "10.04.2021",
        endDate: "20.04.2021",
        list: ['ТСОН'],
        note: 'рапроаправа п 54вап56 4п564вап 132вап32 а41356п45 вапрапрпарпар',
    }

]

function getData() {
    return templates
}

const ReportPage = () => {
    const [reports,setReports] = useState(getData())
    const [statusState,setStatusState] = useState('')
    const [systemListState,setSystemListState] = useState('all')


    const filterStatus = (item,pattern) => {
         return item.status.includes(pattern)
    }

    const filterSystemList = (item,pattern) => {
         return item.list.includes(pattern)
    }


  const sortReports = useMemo(()=>{
      let sortedReports = [...reports]
      //sortedReports = sortedReports.filter((el)=> filterStatus(el,statusState))
      sortedReports = systemListState === 'all' ? sortedReports : sortedReports.filter((el)=> filterSystemList(el,systemListState))
      return sortedReports
  },[statusState,systemListState])





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