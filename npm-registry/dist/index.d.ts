import { FC } from 'react';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
interface ComboboxCustomTestProps {
    data: string[];
    setSelectedOptionsResult: (options: string[]) => void;
    filterEnabled?: boolean;
    multipleSelect?: boolean;
    outlinedStyle?: boolean;
    shorterList?: boolean;
    highlightedText?: boolean;
}
declare const ComboboxCustomTest: FC<ComboboxCustomTestProps>;
export default ComboboxCustomTest;
