import { useState } from 'react'
import './App.css'
import { ErrorAlert, ResultTable } from './components'
import { API_URL } from './constants'


function App() {
  const [income, setIncome] = useState(0.0)
  const [results, setResults] = useState({
    grossIncome: 0.0,
    netIncome: 0.0,
    tax: 0.0
  })
  const [showResults, setShowResults] = useState(false)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleIncomeChanged = (e) => {
    setIncome(e.target.value)
  }

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      handleCalcClicked()
    }
  }

  const handleCalcClicked = async () => {
    if (isLoading) return
    if (showResults && income == results.grossIncome) return
    setIsLoading(true)
    try {
      const response = await fetch(`${API_URL}/api/TaxCalc`, {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          grossIncome: income
        })
      });

      const data = await response.json();
      if (!response.ok) {
        setError(data.value)
        setShowResults(false)
        throw new Error(data.message)
      }
      setError(null)
      setResults(data.value)
      setShowResults(true)

    } catch (error) {
      console.error('There was an error!', error);
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <div className='w-screen flex place-items-center flex-col bg-base-300 h-screen m-0 p-4'>
      <h1 className="text-4xl semibold text-center">Tax Calc</h1>
      <div className="card bg-base-100 w-full sm:w-[600px] shadow-xl mt-10">
        <div className='card-body'>
          <div className='flex flex-col sm:flex-row place-items-center justify-evenly w-full'>
            <span>Gross Annual Income:</span>
            <input className="px-3 rounded-full" type="number" value={income} onChange={handleIncomeChanged} onKeyUp={handleKeyUp} />
            <button className='btn btn-primary min-h-[40px] h-[40px] w-[80px] mt-3 sm:mt-0' onClick={handleCalcClicked}>
              {isLoading ? <span className="loading loading-dots loading-sm"></span> : 'Calc'}
            </button>
          </div>
          {error && <ErrorAlert error={error} />}
          {showResults && <ResultTable data={results} />}
        </div>
      </div>
    </div>
  )
}

export default App
