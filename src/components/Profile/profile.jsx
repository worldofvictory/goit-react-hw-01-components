

import css from "./profile.module.css";



 export const Profile = ({username, tag, location, avatar, stats, id }) => {
   return (
    <div className={css.profile} key={id}>
  <div className={css.description}>
    <img src={avatar} className={css.avatar} />
    <p>{username}</p>
    <p>@{tag}</p>
         <p>{location}</p>
  </div>
    <ul className={css.stats}>
    <li>
      <span className="label">Followers </span>
      <span className="quantity">{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views </span>
      <span className="quantity">{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes </span>
      <span className="quantity">{stats.followers}</span>
    </li>
  </ul>
  
  </div>)

}
/*const description = React.createElement('div', { class: 'description' });*/
