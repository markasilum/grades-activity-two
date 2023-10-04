import { useState } from 'react'
import Form from './components/form'
import GradesTable from './components/GradesTable';

function App() {
  const [tableData, setTableData] = useState([
    {id:1, crsName: 'TECHNOPRENEURSHIP 1', crsNum: 'IS 3149', units: 5, grade:'A', numGrade:4},
    {id:2, crsName: 'NETWORKING  1', crsNum: 'IT 3147', units: 5, grade:'B',numGrade:3},
    {id:3, crsName: 'IT ELECTIVE 2', crsNum: 'IT 3148', units: 5, grade:'C',numGrade:2},
  ]);

  const handleFormSubmit = (formData) => {
    setTableData([...tableData, formData]);
  };
  return (
    <>
      <Form onSubmit={handleFormSubmit}></Form>
      <GradesTable data={tableData}></GradesTable>
    </>
  )
}

export default App
