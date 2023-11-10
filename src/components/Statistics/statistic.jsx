
import css from "./statistic.module.css"
function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  
  return color;
}

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}> {stats.map(({ id, label, percentage }) => {
                    return (
        <li className={css.itemstat} key = {id} style={{backgroundColor:randomColor()}}>
          <span className="label">{label}</span>
          <span className="percentage"> {percentage}%</span>
        </li>
);
                    
 }
    )}
      </ul>
    </section>);
      
}