import React from "react";
import { nanoid } from "nanoid";
import "./Fields.css"
export default function Fields(props) {
    const cv = props.cv
    const setCv = props.setCv
    
    function modifyInput(category, index, fieldKey, value) {
        let newCv = JSON.parse(JSON.stringify(cv));
        newCv[category]["items"][index]["fields"][fieldKey]["value"] = value;
        return newCv;
    }

    function addSubform(category, id, fields) {
        let newCv = JSON.parse(JSON.stringify(cv));
        newCv[category]["items"].push({id: id, fields: fields})
        return newCv;
    }

    function removeSubform(category, id) {
        let newCv = JSON.parse(JSON.stringify(cv));
        console.log("before: " + newCv[category]["items"])
        console.log(newCv[category]["items"])
        newCv[category]["items"] = newCv[category]["items"].filter((el) => el["id"] != id)
        console.log("after: " + newCv[category]["items"])
        console.log(newCv[category]["items"].filter((item) => item != id))
        return newCv;
    }

    function getFields(category, index, fieldsObject) {
        return Object.keys(fieldsObject).map((fieldKey) => (<label key={fieldKey}>
            {fieldsObject[fieldKey]["fieldTitle"]}
            <input 
                key={fieldKey} 
                type="text" 
                value={fieldsObject[fieldKey]["value"]}
                onChange={(e) => setCv(modifyInput(category, index, fieldKey, e.target.value))}
            />
            </label>))
    }

    function getSubforms(category) {
        return cv[category]["items"].map((x, i) => {
            return (
            <div key={cv[category]["items"][i]["id"]} className="subform">
                {getFields(category, i, x["fields"])}
                <button onClick={() => setCv(removeSubform(category, cv[category]["items"][i]["id"]))}>X</button>
            </div>)
        })
    }

    return (
        <div id="fields">
            <div id="personalDetails" className="form">
                <div className="formHeading">
                    {cv["personalDetails"]["categoryTitle"]}
                </div>
                {console.log(cv["personalDetails"]["items"][0]["fields"])}
                {getFields("personalDetails", 0, cv["personalDetails"]["items"][0]["fields"])}
            </div>

            <div id="education" className="form">
                <div className="formHeading">
                    {cv["education"]["categoryTitle"]}
                </div>
                {getSubforms("education")}
                <button onClick={() => setCv(addSubform("education", nanoid(), {
                    school: {fieldTitle: "School Name: ", value: ""}, 
                    degree: {fieldTitle: "Degree Name: ", value: ""}, 
                    start: {fieldTitle: "Start Date: ", value: ""},
                    end: {fieldTitle: "End Date: ", value: ""}
                }))}>+ Education</button>
            </div>

            <div id="experience" className="form">
                <div className="formHeading">
                    {cv["experience"]["categoryTitle"]}
                </div>
                {getSubforms("experience")}

                <button onClick={() => setCv(addSubform("experience", nanoid(), {
                    company: {fieldTitle: "Company Name: ", value: ""}, 
                    role: {fieldTitle: "Role Title: ", value: ""}, 
                    start: {fieldTitle: "Start Date: ", value: ""},
                    end: {fieldTitle: "End Date: ", value: ""}
                }))}>+ Experience</button>
            </div>


            
        </div>
    );

    // let labels = Object.keys(cv).forEach((k) => <label>
    //         {cv[k]}:{' '}
    //         <input 
    //             key={k}
    //             type="text"
    //             value={cv[k]}
    //             onChange={(e) => setCv({...cv, k: e.target.value})}
    //         />
    //     </label>)
    
    console.log(labels)

    // return (<div>
    //     {labels}
    //     {/* <label>
    //         Name:{' '}
    //         <input 
    //             type="text"
    //             value={cv.name}
    //             onChange={(e) => setCv({...cv, name: e.target.value})}
    //         />
    //     </label>
    //     <label>
    //         Role:{' '}
    //         <input 
    //             type="text"
    //             value={cv.role}
    //             onChange={(e) => setCv({...cv, role: e.target.value})}
    //         />
    //     </label>
    //     <label>
    //         email:{' '}
    //         <input 
    //             type="text"
    //             value={cv.email}
    //             onChange={(e) => setCv({...cv, email: e.target.value})}
    //         />
    //     </label> */}
    // </div>)
}