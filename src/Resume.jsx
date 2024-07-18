import React from "react";
export default function Resume(props) {
    let cv = props.cv;

    return (<div id="resume">
        <h1>{cv.personalDetails.items[0].fields.name.value}</h1>
        <p>{cv.personalDetails.items[0].fields.email.value}</p>
        <p>{cv.personalDetails.items[0].fields.location.value}</p>

        {cv.education.items.map(element => {
            return (<div key={element.id}>
                    <p>{element.fields.school.value}</p>
                    <p>{element.fields.degree.value}</p>
                    <p>{element.fields.start.value}</p>
                    <p>{element.fields.end.value}</p>
                </div>)
        })}

        {cv.experience.items.map(element => {
            return (<div key={element.id}>
                    <p>{element.fields.company.value}</p>
                    <p>{element.fields.role.value}</p>
                    <p>{element.fields.start.value}</p>
                    <p>{element.fields.end.value}</p>
                </div>)
        })}
        

    </div>)
}