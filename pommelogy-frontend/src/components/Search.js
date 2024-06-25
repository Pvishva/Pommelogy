import React, { useState } from 'react'
import '../css/Search.css'
import * as XLSX from 'xlsx'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import Header from './Header'

const Search = () => {
  const [showFilter, setShowFilter] = useState(false)
  const tableData = [
    // Sample data
    {
      accNo: '1',
      accession: 'ABC123',
      cultivarName: 'Cultivar1',
      country: 'Country1',
      originProvince: 'Province1',
      originCity: 'City1',
      ePedigree: 'Pedigree1',
      eGenus: 'Genus1',
      eSpecies: 'Species1',
    },
    // Add more rows as needed
  ]

  const toggleFilter = () => {
    setShowFilter(!showFilter)
  }

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'VarietyData')
    XLSX.writeFile(workbook, 'VarietyData.xlsx')
  }

  const exportToPDF = () => {
    const doc = new jsPDF()
    const tableColumn = [
      'Acc No',
      'Accession',
      'Cultivar Name',
      'Country',
      'Origin Province',
      'Origin City',
      'E - Pedigree',
      'E - Genus',
      'E - Species',
    ]
    const tableRows = tableData.map((row) => [
      row.accNo,
      row.accession,
      row.cultivarName,
      row.country,
      row.originProvince,
      row.originCity,
      row.ePedigree,
      row.eGenus,
      row.eSpecies,
    ])

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
    })
    doc.save('VarietyData.pdf')
  }

  return (
    <div className='variety-container'>
      <div className='header1'>
        <Header />
        {/* <img src={backgroundImage} alt='Apples' className='background-image' /> */}
        <div className='search-bar-container'>
          <input type='text' className='search-bar' placeholder='Search' />
          <button className='filter-button' onClick={toggleFilter}>
            🔧
          </button>
        </div>
      </div>
      {showFilter && (
        <div className='filter-popup'>
          <h3>Filter Options</h3>
          <div>
            <label>
              Name: <input type='text' />
            </label>
          </div>
          <div>
            <label>
              Country: <input type='text' />
            </label>
          </div>
          <div>
            <label>
              Province: <input type='text' />
            </label>
          </div>
          <button onClick={toggleFilter}>Close</button>
        </div>
      )}
      <h2 className='variety-heading'>Variety Data</h2>
      <table className='variety-table'>
        <thead>
          <tr>
            <th>Acc No</th>
            <th>Accession</th>
            <th>Cultivar Name</th>
            <th>Country</th>
            <th>Origin Province</th>
            <th>Origin City</th>
            <th>E - Pedigree</th>
            <th>E - Genus</th>
            <th>E - Species</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td>{row.accNo}</td>
              <td>{row.accession}</td>
              <td>{row.cultivarName}</td>
              <td>{row.country}</td>
              <td>{row.originProvince}</td>
              <td>{row.originCity}</td>
              <td>{row.ePedigree}</td>
              <td>{row.eGenus}</td>
              <td>{row.eSpecies}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='export-buttons'>
        <button onClick={exportToExcel}>Export to Excel</button>
        <button onClick={exportToPDF}>Export to PDF</button>
      </div>
    </div>
  )
}

export default Search
