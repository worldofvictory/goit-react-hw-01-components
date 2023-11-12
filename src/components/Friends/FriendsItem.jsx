
import  css from "./friends.module.css";
export default function FriendItem({ id, avatar, name, isOnline }) {

                    return (
                        <li key={id} className={css.item}>
                            <span className={`${css.status} ${isOnline ? css.online : css.ofline}`}></span>
                            <img className="avatar" src={avatar} alt="User avatar" width="48" />
                            <p className={css.name}>{name}</p>
                        </li>  )  } 

