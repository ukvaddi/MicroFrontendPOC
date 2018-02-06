import React, {Component} from "react";


import Form from "react-jsonschema-form";

const log = (type) => console.log.bind(console, type);

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

const formData = {
    title: "First task by hari",
    done: true
  };


  const onError = (errors) => console.log("I have", errors.length, "errors to fix");
const GenericForm = () => {
    return (
        <Form schema={schema} formData={formData}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")} 
            onError={onError}/>
    );
}

export default GenericForm;
