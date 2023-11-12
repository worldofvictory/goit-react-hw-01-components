import FriendsItem from "./FriendsItem";
import css from "./friends.module.css";

export default function FriendsList({ friends }) {
    return (
        <div className={css.friendlist}>
        <ul className={css.list}> 
            {friends.map(friend => (<FriendsItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}  
            />))}
            </ul>
            </div>
    )
}



