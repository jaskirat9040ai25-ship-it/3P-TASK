import { useState } from "react";

function Contactform() {

    const [form, setForm] = useState({name:"", email:"", message:""});

    const [errors, setErrors] = useState({});

    function validate(values) {

        const founderrors = {};

        const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/;

        if (!emailregex.test(values.email.trim())) {
            founderrors.email = "please enter a valid email";
        }

        const validatename = (values) => {
            const nameregex = /^[a-zA-Z\s]+$/;

            if (values.name.trim() === "") {
                founderrors.name = "name is required";
            }
        };

        return founderrors;
    }
    function handlesubmit(e){
        e.preventDefault();
        const validationerror = validate(form);
        setErrors(validateform);
        if(Object.keys(validateform).lenght === 0){
            console.log("form submitted successfully :",form);
            setForm({name:"",email:"",message:""});
        }else{
            console.log("form validsation error:" , validationerror);
        }
    }
    return(
        <form onSubmit={handlesubmit}>
            <div>
                <h2>contact form</h2>
                <label htmlFor="name">name</label>
                <input type="text"
            </div>
            
        
        </form>
    )
}