
import  css from "./friends.module.css";

function getStatusStyle (status) {
    return status ? css.status : `${css.status} ${css.online}`;
}

export const GetFriendList = (props) => {
  return (
  <div className="container_for_friend">
  <ul className={css.friendlist}>
                {props.friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <li key={id} className={css.item}>
                            <span className={getStatusStyle(isOnline)}></span>
                            <img className="avatar" src={avatar} alt="User avatar" width="48" />
                            <p className={css.name}>{name}</p>
                        </li>
        
                    )
                    
                 })}

            
   
            </ul>
        </div>
  )  }        



