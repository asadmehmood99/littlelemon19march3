import Carousel from './TestimonialCarousel'
import TestimonialCard from './TestimonialCard';
export default function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>


            <section className="testimonials-cards">
                <TestimonialCard name="Ammad Ali" description="Little Lemon exceeded our expectations! The food was fresh, flavorful, and beautifully presented. The atmosphere was cozy and inviting, and the staff was attentive and friendly."/>
                <TestimonialCard name="Iqrar hassan" description="I highly recommend Little Lemon for a unique dining experience. The fusion menu has something for everyone, and the service is top-notch. Don't miss the masala fries!"/>
                <TestimonialCard name="Saira khan" description="Little Lemon's menu is a culinary adventure. The flavors are bold, and the combinations are unexpected. We loved the butter chicken pizza and the mango lassi."/>
                <TestimonialCard name="Bilal ahmad" description=  "Little Lemon is a must-try restaurant in Islamabad. The ambiance is charming, and the food is delicious. The Thai green curry and the Nutella crepes are to die for!" 
                 />
                <TestimonialCard name="Sobia Tariq" description="Little Lemon has become our favorite spot in Islamabad. The food is consistently outstanding, and the service is always warm and welcoming. You can't go wrong with the chicken tikka burger or the hot fudge sundae."/>
                <TestimonialCard name="Hassna Kanwal" description="I recently visited Little Lemon and was blown away by the attention to detail. From the perfectly cooked steak to the homemade lemonade, everything was exquisite. The staff was knowledgeable and friendly, making for a delightful dining experience."/>
                
              
            </section>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
        </section>
    );
}