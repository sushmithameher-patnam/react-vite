import { useState } from "react";
import '../RegisterForm.css';

function RegisterForm(){
    const[formData,setFormData]=useState({
        firstName:'',
        lastName:'',
        contactNumber: '',
        gender: '',
        email: ''
    })
    const handleChange=(event: any)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Form Submitted:', formData);
        setFormData({
            email: '',
            contactNumber: '',
            gender: '',
            firstName: '',
            lastName: '',
        });
    };



    return(
        <form onSubmit={handleSubmit}>
            
            <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="firstName"
                   name="firstName"
                   id="firstName"
                   onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName"
                   name="lastName"
                   id="lastName"
                   onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email"
                   name="email"
                   id="email"
                   onChange={handleChange}
            />
        </div>
        <div className="form-group">
            <label htmlFor="firstName">Contact Number</label>
            <input type="firstName"
                   name="firstName"
                   id="firstName"
                   onChange={handleChange}
            />
        </div>
      
        <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select>
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option selected value="Please select">Please select</option>

            </select>
            <input type="gender"
                   name="gender"
                   id="gender"
                   onChange={handleChange}
            />
        </div>
        <button type="submit">Register</button>
        </form>
    )





}
export default RegisterForm;