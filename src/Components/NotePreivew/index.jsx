import style from './Note.module.sass'
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const index = () => {
  return (
    <div className={style.item}>
      <Link to="/note">
        <h3>Title item</h3>
      </Link>
      <div className={style.date}>22 May</div>
      <AiOutlineClose />
    </div>
  )
}

export default index
