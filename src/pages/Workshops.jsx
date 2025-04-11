import React from 'react'
import Hero from '../components/Hero'
import WorkshopsCards from '../components/WorkshopCards'

const Workshops = () => {

    const workshops = {

        Technical: {

            name: "Technical",
            items: [
                {
                    name: "Flatter", // I assume you meant "Flutter"
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                    icon: "flutter", // optional if you want to show an icon
                },
                {
                    name: "Java",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
                {
                    name: "UI/UX",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
            ]
        },


        Non_Technical: {
            name: "Non-Technical",
            items: [
                {
                    name: "Presentation Skill",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
                {
                    name: "Event Management",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
                {
                    name: "Negotiation",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
            ]

        }
        ,


        Technical_PES: {
            name: "Technical PES",
            items: [
                {
                    name: "KNX",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
                {
                    name: "Lighting",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
                {
                    name: "Motors",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
                {
                    name: "Solar Energy",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
                {
                    name: "Energy",
                    description: "The firm, a highly reputed attorney in corporate law. Dr. Ahmed has over 20 years of experience providing legal advice.",
                },
            ],
        },

    };




    return (
        <div>

            <Hero page={"WORKSHOPS"} />

            <WorkshopsCards workshops={workshops} />
        </div>
    )
}

export default Workshops