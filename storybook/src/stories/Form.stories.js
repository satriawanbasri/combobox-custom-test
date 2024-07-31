import { Form } from './Form'

export default {
    title: 'Form',
    component: Form,
}

export const SelectDropdownField = {
    args: {
        data: [
            'Option 1',
            'Option with icon',
            'Long Long Option 3',
            'Long Long Long Option 4',
            'Long Long Long Long Option 5',
            'Long Long Long Long Long Option 6',
        ],
        filterEnabled: true,
        multipleSelect: true,
        outlinedStyle: false,
        shorterList: false,
        highlightedText: true,
    },
}
