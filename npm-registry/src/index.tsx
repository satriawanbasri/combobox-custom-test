import React, { useState, useEffect, useRef, ChangeEvent, MouseEvent, FC } from 'react'
import './styles.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

interface ComboboxCustomTestProps {
    data: string[]
    setSelectedOptionsResult: (options: string[]) => void
    filterEnabled?: boolean
    multipleSelect?: boolean
    outlinedStyle?: boolean
    shorterList?: boolean
    highlightedText?: boolean
}

const ComboboxCustomTest: FC<ComboboxCustomTestProps> = ({
    data = [],
    setSelectedOptionsResult,
    filterEnabled = true,
    multipleSelect = true,
    outlinedStyle = false,
    shorterList = false,
    highlightedText = true,
}) => {
    const [search, setSearch] = useState<string>('')
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)
    const [selectedOptions, setSelectedOptions] = useState<string[]>([])
    const searchContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setSelectedOptionsResult(selectedOptions)
    }, [selectedOptions, setSelectedOptionsResult])

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const handleClearSearch = () => {
        setSearch('')
    }

    const handleInputClick = () => {
        setDropdownVisible(true)
    }

    const handleOptionClick = (option: string) => {
        if (multipleSelect) {
            if (selectedOptions.includes(option)) {
                setSelectedOptions(selectedOptions.filter(o => o !== option))
            } else {
                setSelectedOptions([...selectedOptions, option])
            }
        } else {
            setSelectedOptions([option])
            setDropdownVisible(false)
        }
        setSearch('')
    }

    const handleRemoveOption = (option: string) => {
        setSelectedOptions(selectedOptions.filter(o => o !== option))
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
            setDropdownVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside as unknown as EventListener)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside as unknown as EventListener)
        }
    }, [])

    const highlightText = (text: string) => {
        if (!search || !filterEnabled || !highlightedText) return text
        const regex = new RegExp(`(${search})`, 'gi')
        const parts = text.split(regex)
        return parts.map((part, index) =>
            regex.test(part) ? (
                <span key={index} className="highlight">
                    {part}
                </span>
            ) : (
                part
            )
        )
    }

    return (
        <div className={`search-container ${outlinedStyle ? 'outlined' : ''}`} ref={searchContainerRef}>
            <div className="dropdown">
                <div className="dropdown-trigger" onClick={handleInputClick}>
                    <div className="selected-options-container">
                        {selectedOptions.map(option => (
                            <div key={option} className="selected-option">
                                {option}
                                <i
                                    className="fa-regular fa-circle-xmark remove-icon"
                                    onClick={(e: MouseEvent) => {
                                        e.stopPropagation()
                                        handleRemoveOption(option)
                                    }}></i>
                            </div>
                        ))}
                    </div>
                    <i className="fas fa-chevron-down dropdown-icon"></i>
                </div>
                {dropdownVisible && (
                    <div className="dropdown-list">
                        {filterEnabled && (
                            <div className="search-input-container">
                                <input type="text" id="search-input" className="search-input" value={search} onChange={handleSearchChange} />
                                <i className="fas fa-search search-icon"></i>
                                {search && <i className="fas fa-circle-xmark clear-icon" onClick={handleClearSearch}></i>}
                            </div>
                        )}
                        {data
                            .filter((option: string) => !shorterList || option.toLowerCase().includes(search.toLowerCase()))
                            .map((option, index) => (
                                <div
                                    key={index}
                                    className={`dropdown-item ${selectedOptions.includes(option) ? 'selected' : ''}`}
                                    onClick={() => handleOptionClick(option)}>
                                    {highlightText(option)}
                                </div>
                            ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ComboboxCustomTest
