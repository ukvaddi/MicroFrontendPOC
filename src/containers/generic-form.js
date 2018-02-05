import React, {Component} from "react";


//import Form from "react-jsonschema-form";

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {
            type: "string",
            title: "Title",
            default: "A new task"
        },
        done: {
            type: "boolean",
            title: "Done?",
            default: false
        }
    }
}

const GenericForm = () => {
    return (<h1 >test</h1>);
}

export default GenericForm;
