import React, { Component } from 'react'
import Header from '../../Component/Header/Header'
import NoteOne from '../../Component/NoteOne/NoteOne'
import NoteTwo from '../../Component/NoteTwo/NoteTwo'
import '../Dashboard/Dashboard.css'

function Dashboard() {
    const [noteView, setNoteView] = React.useState(true)
    const listenToNoteOne = (data) => {
        setNoteView(false)
    }
    return (
        <div>
            <Header />
            {/* <NoteOne />
            <NoteTwo /> */}
            <div className='notesHolders'>
                {noteView ? <NoteOne listenToNoteOne={listenToNoteOne} /> : <NoteTwo />}
            </div>
        </div>
    )
}

export default Dashboard
