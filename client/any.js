const initialState = {
    notes: [
        {
            message: "message1",
            summary: "summary1"
        }, {
            message: "message2",
            summary: "summary2"
        }, {
            message: "message3",
            summary: "summary3"
        }
    ]
};


function App(initialState) {
    return `<main id="app">
   <h1 class="app-title">Notes app</h1>
   <div class="sidebar">
      ${initialState.notes[0], initialState.notes[1], initialState.notes[2]}
      ${(() => {
            let result = "";
            for (let note of initialState.notes) {
                result += NoteThumb(note);
            }
            return result;
        })()}
        //
   </div>
   <div class="note">
     <h1 class="note-title">Note 2</h1>
     <p class="note-body">This is note 2!</p>
   </div>
 </main>`
};
const NoteThumb = (note) => {
    return `<div class="note-thumb">
    <h1 class="note-thumb-title">/${note.message}/</h1>
    <p class="note-thumb-summary">/${note.summary}/</p>
  </div>`
}

document.body.innerHTML = App(initialState);