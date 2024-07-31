import React, { useState, useEffect } from 'react'
import './App.css'
import ComboboxCustomTest from 'combobox-custom-test'

const dummyData = [
    'Option 1',
    'Option with icon',
    'Long Long Option 3',
    'Long Long Long Option 4',
    'Long Long Long Long Option 5',
    'Long Long Long Long Long Option 6',
]

const App = () => {
    const [filterEnabled, setFilterEnabled] = useState(true)
    const [multipleSelect, setMultipleSelect] = useState(true)
    const [outlinedStyle, setOutlinedStyle] = useState(false)
    const [shorterList, setShorterList] = useState(false)
    const [highlightedText, setHighlightedText] = useState(true)
    const [selectedOptions, setSelectedOptions] = useState([])

    useEffect(() => {
        console.log('result:', selectedOptions)
    }, [selectedOptions])

    const toggleFilter = () => {
        setFilterEnabled(!filterEnabled)
    }

    const toggleMultipleSelect = () => {
        setMultipleSelect(!multipleSelect)
    }

    const toggleOutlinedStyle = () => {
        setOutlinedStyle(!outlinedStyle)
    }

    const toggleShorterList = () => {
        setShorterList(!shorterList)
    }

    const toggleHighlightedText = () => {
        setHighlightedText(!highlightedText)
    }

    return (
        <div className="App">
            <div className="top-section">
                <div className="container">
                    <label className="label">Label</label>
                    <div className="combobox-container">
                        <ComboboxCustomTest
                            data={dummyData}
                            setSelectedOptionsResult={setSelectedOptions}
                            filterEnabled={filterEnabled}
                            multipleSelect={multipleSelect}
                            outlinedStyle={outlinedStyle}
                            shorterList={shorterList}
                            highlightedText={highlightedText}
                        />
                    </div>
                </div>
            </div>
            <div className="separator"></div>
            <div className="bottom-section">
                <table className="options-table">
                    <tbody>
                        <tr>
                            <td className="label-cell">With Search</td>
                            <td className="switch-cell">
                                <label className="switch">
                                    <input type="checkbox" id="filter-switch" checked={filterEnabled} onChange={toggleFilter} />
                                    <span className="slider"></span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="label-cell">Multiple</td>
                            <td className="switch-cell">
                                <label className="switch">
                                    <input type="checkbox" id="select-switch" checked={multipleSelect} onChange={toggleMultipleSelect} />
                                    <span className="slider"></span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="label-cell">Outlined</td>
                            <td className="switch-cell">
                                <label className="switch">
                                    <input type="checkbox" id="outlined-switch" checked={outlinedStyle} onChange={toggleOutlinedStyle} />
                                    <span className="slider"></span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="label-cell">Shorter List</td>
                            <td className="switch-cell">
                                <label className="switch">
                                    <input type="checkbox" id="shorter-list-switch" checked={shorterList} onChange={toggleShorterList} />
                                    <span className="slider"></span>
                                </label>
                            </td>
                        </tr>
                        <tr>
                            <td className="label-cell">Highlighted Text</td>
                            <td className="switch-cell">
                                <label className="switch">
                                    <input type="checkbox" id="highlighted-text-switch" checked={highlightedText} onChange={toggleHighlightedText} />
                                    <span className="slider"></span>
                                </label>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default App
