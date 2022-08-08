import Card from '../card/card.components';
import './card-list.style.css';

const CardList = ({ monsters }) => (

    <div className="cart-list">
        {monsters.map((monster) =>{
            return <Card key={monster.id} monster={monster} />;
        })}
    </div>
);

export default CardList;