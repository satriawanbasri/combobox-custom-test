import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import ComboboxCustomTest from 'combobox-custom-test'
import './form.css'

export const Form = ({
    data = [],
    filterEnabled = true,
    multipleSelect = true,
    outlinedStyle = false,
    shorterList = false,
    highlightedText = true,
}) => {
    const [selectedOptions, setSelectedOptions] = useState([])

    useEffect(() => {
        console.log('result:', selectedOptions)
    }, [selectedOptions])

    return (
        <div className="container">
            <label className="label">Label</label>
            <div className="combobox-container">
                <ComboboxCustomTest
                    data={data}
                    setSelectedOptionsResult={setSelectedOptions}
                    filterEnabled={filterEnabled}
                    multipleSelect={multipleSelect}
                    outlinedStyle={outlinedStyle}
                    shorterList={shorterList}
                    highlightedText={highlightedText}
                />
            </div>
        </div>
    )
}

Form.propTypes = {
    data: PropTypes.array,
    filterEnabled: PropTypes.bool,
    multipleSelect: PropTypes.bool,
    outlinedStyle: PropTypes.bool,
    shorterList: PropTypes.bool,
    highlightedText: PropTypes.bool,
};

Form.defaultProps = {
    data: [],
    filterEnabled: true,
    multipleSelect: true,
    outlinedStyle: false,
    shorterList: false,
    highlightedText: true,
};
