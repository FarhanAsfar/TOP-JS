import { useState } from "react";

function Form(){
    const [userInput, setUserInput] = useState({});

    function handleChange(event){
        const {name, value} = event.target;

        setUserInput(values => ({
            ...values,
            [name]:value
        }));
    } 

    function handleSubmit(event){
        event.preventDefault();
        console.log(userInput);
        // alert(Object.entries(userInput));
        alert(JSON.stringify(userInput));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text"
                        name="username"
                        onChange={handleChange}
                    ></input>
                </label><br /> <br />

                <label>Age:
                    <input type="number"
                        name="age"
                        onChange={handleChange}
                    ></input>
                </label> <br /><br />

                <label>Email:
                    <input type="email"
                        name="email"
                        onChange={handleChange}
                    ></input>
                </label><br /><br />

                <label>Numer:
                    <input type="number"
                        name="mobile"
                        onChange={handleChange}
                    ></input>
                </label><br /><br />


                <button type="submit">Submit</button>
            </form>

        </>
    )
}

export default Form;