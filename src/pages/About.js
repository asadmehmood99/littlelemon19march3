export default function About() {
    return (
        <article className="about-us">
            <section className="hero-text">
                <h1>Little Lemon Resturant </h1>
                <h2>Islamabad</h2>
                <p className="about-subtext">Welcome to Little Lemon, where we bring a slice of sunshine to your dining experience! Our restaurant is more than just a place to grab a bite to eat; it's a warm and inviting space where friends and family come together to share good food and great memories.

At Little Lemon, we are committed to using only the freshest ingredients in our dishes, and we take pride in creating delicious meals that are as healthy as they are tasty. Whether you're in the mood for a zesty salad, a hearty sandwich, or a comforting bowl of soup, our menu has something to satisfy every palate.

But we're not just about food. Our team is dedicated to providing exceptional customer service, and we strive to make every visit to Little Lemon a delightful experience. From the moment you walk through our doors, you'll be greeted with a smile and treated like family.

So whether you're looking for a quick lunch break, a leisurely brunch, or a cozy dinner date, Little Lemon is the perfect place to unwind and recharge. We can't wait to see you soon!





Regenerate response</p>
            </section>

            <section className="double-image">
                <img className="about-1" src={require('../assets/food3.jpg')} alt="Little Lemon restaurant cuisine 1"></img>
                <img className="about-2" src={require('../assets/food4.jpg')} alt="Little Lemon restaurant cuisine 2"></img>
            </section>
    </article>
    );
}