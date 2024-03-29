import React from "react";
import Heading from "../../UI/Heading";
import service1 from "../../assets/Automation.json";
import service2 from "../../assets/Check Animation.json";
import service3 from "../../assets/DevOps.json";
import service4 from "../../assets/Manual.json";
import service5 from "../../assets/Microphone.json";
import Service6 from "../../assets/Security Testing.json";
import ServiceInner from "./ServiceInner";

const data = [
    {
        id : 1,
        icon : service1,
        title : "Test Automation",
        text : "Elevate your software quality with our Test Automation and Manual QA services. Combining advanced tools like Selenium with meticulous manual testing."
    },
    {
        id : 2,
        icon : service2,
        title : "Website Development",
        text : "Transform your business vision into digital reality. Our Website Development service crafts unique, standout digital experiences, turning ideas into impactful web presence."
    },
    {
        id : 3,
        icon : service3,
        title : "Performance Testing",
        text : "Ensure your software excels in real-world conditions with our Performance Testing. We optimize for peak performance, exceeding user expectations for speed and reliability. "
    },
    {
        id : 4,
        icon : service4,
        title : "Security Testing",
        text : "Secure your software's defenses with our Security Testing services. Specializing in Cyber Security Testing, we meticulously assess and strengthen your digital infrastructure. "
    },
    {
        id : 5,
        icon : service5,
        title : "Software Development",
        text : "Craft your business's future with our innovative Software Development services. Our team creates user-centric, competitive-edge solutions that drive growth and success."
    },
    {
        id : 6,
        icon : Service6,
        title : "UX \ UI Designs",
        text : "Craft your business's future with our innovative Software Development services. Our team creates user-centric, competitive-edge solutions that drive growth and success."
    },
]

const Services = () =>{
    return(
        <div id="Services">
        <div className="w-[90%] mx-auto mt-[5%]">
            <Heading heading = "Services"/>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mt-8">
                {data.map(service => <ServiceInner title = {service.title} description = {service.text}/>)}
            </div>
        </div>
        </div>
    )
}
export default Services;