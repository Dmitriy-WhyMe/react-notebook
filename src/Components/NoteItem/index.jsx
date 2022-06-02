import { AiOutlineSwapLeft } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import style from './NoteItem.module.sass'
import { Link } from "react-router-dom";

const NoteItem = () => {
  return (
    <div className="container">
        <div className={style.header}>
            <div className={style.left}>
                <Link to="/allnotes">
                    <AiOutlineSwapLeft />
                </Link>
                <h2 className={style.title}>Title</h2>
            </div>
            <div className={style.flex}>
                <AiOutlineEdit />
                <AiOutlineClose />
            </div>
        </div>
        <p className={style.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos pariatur consequuntur nihil est? Commodi minima distinctio sunt accusamus necessitatibus temporibus praesentium natus modi qui ratione illo esse tenetur odit error, dicta quod vel ducimus nostrum sapiente, porro aspernatur fugit nam.
        </p>
    </div>
  )
}

export default NoteItem
