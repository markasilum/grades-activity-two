import { useState } from 'react'
import Form from './components/form'

function App() {
  const [tableData, setTableData] = useState([]);

  const handleFormSubmit = (formData) => {
    setTableData([...tableData, formData]);
  };
  return (
    <>
      <Form onSubmit={handleFormSubmit}></Form>
    </>
  )
}

export default App
