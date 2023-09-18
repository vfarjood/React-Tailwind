import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette.jsx'
import ExpenseInput from "../Components/ExpenseInput.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ExpenseInput">
                <ExpenseInput/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews