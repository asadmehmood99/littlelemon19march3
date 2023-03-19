import Carousel from './SpecialsCarousel';
import GreekSalad from '../assets/1.jpg';
import Bruschetta from '../assets/2.jpg';
import LemonDessert from '../assets/3.jpg';
import SpecialCard from './SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>This weeks specials</h1>
                <a className="action-button" href={require('../assets/menu.jpg')} target="_blank" rel="noreferrer">Online Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={GreekSalad} name="Butter Chicken Pizza" price="$20" description="A classic Italian dish, featuring breaded chicken breast topped with melted mozzarella cheese and rich tomato sauce.
                 "/>
                <SpecialCard image={Bruschetta}name="Chicken Parmesan" price="$12.99" description="A quintessential New England treat, featuring tender chunks of fresh lobster meat tucked into a buttery, toasted bun.
               "/>
                <SpecialCard image={LemonDessert} name="Steak Frites" price="$18.50" description="A French bistro favorite, featuring a juicy steak paired with crispy, golden French fries and a side of tangy aioli sauce.
                 "/>
            </section>

            <section className="specials-carousel">
                <Carousel />
            </section>
        </section>
    );
}