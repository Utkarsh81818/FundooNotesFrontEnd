import React from 'react'
import './NoteTwo.css'
import { noteAdd } from '../../Services/dataService'
function NoteTwo() {
    const [title, setTitle] = React.useState("")
    const [description, setDescription] = React.useState("")
    const takeTitle = (event) => {
        setTitle(event.target.value)
    }
    const takeDescription = (event) => {
        setDescription(event.target.value)
    }
    const noteAdded = () => {
        console.log(title, description);
        let obj = {
            "title": title,
            "description": description
        }
        noteAdd(obj).then((res) => {
            console.log(res)
            console.log(res.data.data)
            localStorage.setItem("Token: ", res.data.data)
        }).catch((err) => {
            console.log(err)
        })
        console.log(obj);
    }

    return (
        <div className="containerNoteOne">
            <div className="containerNoteTwo">
                <input type="text" placeholder="Title" className="inputFields" onChange={takeTitle} />
            </div>
            <div className="containerNoteThree">
                <input type="text" placeholder="take a note" className="inputFields" onChange={takeDescription} />
            </div>
            <div className="containerNoteFour">
                <div className='iconHolder'>
                    <i class="material-icons">add</i>
                    <i class="material-icons">add</i>
                    <i class="material-icons">add</i>
                    <i class="material-icons">add</i>
                    <i class="material-icons">add</i>
                </div>
                <div className="ButtonClose">
                    <button className="closeButtonOne" onClick={noteAdded}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default NoteTwo
