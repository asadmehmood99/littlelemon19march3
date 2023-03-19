import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import TestimonialCard from './TestimonialCard';
export default function CarouselPage() {
    return (
        <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <TestimonialCard name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
            <TestimonialCard name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
            <TestimonialCard name="Ali Majeed" description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."/>
            <TestimonialCard name="Muhammad usman" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
            <TestimonialCard name="Bilal Ahmad" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
            <TestimonialCard name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted so delicious after the trip here."/>
           </Carousel>
    )
}