import NotePreivew from '../Components/NotePreivew'
import { AiOutlineSwapLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const AllNotes = () => {
  return (
    <div className="container">
      <div className="header">
        <Link to="/">
          <AiOutlineSwapLeft />
        </Link>
        <h1 className="internal-link">All Notes</h1>
      </div>
      
      <div className="flex-notes">
        <NotePreivew />
        <NotePreivew />
        <NotePreivew />
        <NotePreivew />
      </div>
    </div>
  )
}

export default AllNotes
