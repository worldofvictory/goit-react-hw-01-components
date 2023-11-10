
import  css from "./friends.module.css";



export const GetFriendList = (props) => {
  return (
  <div className="container_for_friend">
  <ul className={css.friendlist}>
                {props.friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <li key={id} className={css.item}>
                            <span className={`${css.status} $ {{isOnline} === "true" && {css.true}}`}>{isOnline}</span>
                            <img className="avatar" src={avatar} alt="User avatar" width="48" />
                            <p className={css.name}>{name}</p>
                        </li>
        
                    )
                    
                 })}

            
   
            </ul>
        </div>
  )  }        



