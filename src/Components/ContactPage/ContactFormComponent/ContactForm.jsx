import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import "./ContactForm.css";
import FireBaseDatabase from '../FireBaseConfig/FireBaseConfig';
import 'firebase/firestore';
import 'firebase/firestore';
import { addDoc, collection, getDocs } from 'firebase/firestore';

// async function getAllDocuments() {
//     const colRef = collection(FireBaseDatabase, "viewers"); // Specify collection
//     const listOfDocs = await getDocs(colRef);

//     const allData = [];
//     listOfDocs.forEach((doc) => {
//         allData.push(doc.data()); // Add each document's data to the array
//     });

//     return allData;
// };

function storeInFiresBase(viewerData) {
    const dbRef = collection(FireBaseDatabase, "viewers");

    addDoc(dbRef, viewerData)
        .then((res) => {
            // console.log(res);
            alert("Successfully Sent");
        })
}

function ContactForm(props) {


    // getAllDocuments().then((data) => {
    //     // Use the retrieved data array in your component
    //     console.log(data);
    // });

    const formData = {
        Viewer_Name: ".",
        Viewer_E_Mail: ".",
        Viewer_Message: ".",
        Viewer_Company_Or_Organization_Name: "."
    }

    const values = {
        Viewer_Name: "",
        Viewer_E_Mail: "",
        Viewer_Message: "",
        Viewer_Company_Or_Organization_Name: ""
    }

    const [getFormData, setFormData] = useState(formData);
    const [getValues, setValues] = useState(values);
    const [ErrorMessage, setErroeMessage] = useState("");

    const ValidateAndSend = () => {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const tempFormData = getFormData;
        var count = 0;
        var emailIs = true;
        for (let viewerKey in getFormData) {
            // console.log(viewerKey);
            if (getFormData[viewerKey] === ".") {

                // console.log(obj);
                tempFormData[viewerKey] = "";


            }
            else if (viewerKey === "Viewer_E_Mail") {

                if (emailPattern.test(getFormData[viewerKey])) {
                    count++;
                    setErroeMessage("");
                }
                else {
                    if (tempFormData[viewerKey] === "") {
                        setErroeMessage("please fill the email field");
                    }
                    else {
                        setErroeMessage("'" + tempFormData[viewerKey] + "' it is not a email");
                    }

                    tempFormData[viewerKey] = "";

                    emailIs = false;
                }
            }
            else if (getFormData[viewerKey] === "") {
                setErroeMessage("Please fill in the required field.");

            }
            else {
                count++;
            }
        }
        if (count === 4) {
            storeInFiresBase(tempFormData);
            setValues({ ...values });
            setFormData({ ...formData });
            setErroeMessage("");
        }
        else {
            setFormData({ ...tempFormData });

            // console.log(getFormData);

            if (emailIs) {
                setErroeMessage("Please fill in the required field.");
            }

        }



    };

    return (
        <Container fluid className='ContactForm-container' >
            <Row>
                <div className='ContactForm-container-row-col-1'>
                    <div>
                        <h6 className='ContactForm-h6' >It happens with us. We would love to hear from you.</h6>
                    </div>
                </div>

                <div className='ContactForm-container-row-col-2'>
                    <div className='ContactForm-form-container'>
                        <form action=""  >
                            <div className='ContactForm-field-container'>
                                <div>
                                    <p className='ContactForm-field-lable'>Your Name*</p>
                                </div>
                                <div>
                                    <input type="text" value={getValues.Viewer_Name} style={{ borderColor: getFormData.Viewer_Name === "" && '#f08989' }} className='ContactForm-field-input' onChange={(e) => { setFormData({ ...getFormData, Viewer_Name: (e.target.value) }); setValues({ ...getValues, Viewer_Name: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable' >E-mail*</p>
                                </div>
                                <div>
                                    <input type="email" value={getValues.Viewer_E_Mail} style={{ borderColor: getFormData.Viewer_E_Mail === "" && '#f08989' }} className='ContactForm-field-input' onChange={(e) => { setFormData({ ...getFormData, Viewer_E_Mail: (e.target.value) }); setValues({ ...getValues, Viewer_E_Mail: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable' >Company/Organization Name*</p>
                                </div>
                                <div>
                                    <input type="text" value={getValues.Viewer_Company_Or_Organization_Name} style={{ borderColor: getFormData.Viewer_Company_Or_Organization_Name === "" && '#f08989' }} className='ContactForm-field-input' onChange={(e) => { setFormData({ ...getFormData, Viewer_Company_Or_Organization_Name: (e.target.value) }); setValues({ ...getValues, Viewer_Company_Or_Organization_Name: (e.target.value) }) }} />
                                </div>
                            </div>
                            <div className='ContactForm-field-container'>
                                <div >
                                    <p className='ContactForm-field-lable'>How Can We Help You*</p>
                                </div>
                                <div>
                                    <textarea type="text" value={getValues.Viewer_Message} style={{ borderColor: getFormData.Viewer_Message === "" && '#f08989' }} className='ContactForm-field-textarea' onChange={(e) => { setFormData({ ...getFormData, Viewer_Message: (e.target.value) }); setValues({ ...getValues, Viewer_Message: (e.target.value) }) }} />
                                </div>
                                <div>
                                    <p className='ErrorMessage'>{ErrorMessage}</p>
                                </div>
                            </div>

                            <div className='ContactForm-field-container'>
                                <div className='ContactForm-field-button'>
                                    <button className='about-us-btn' type='button' onClick={ValidateAndSend}>Submit</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </Row>
        </Container>
    );
}

export default ContactForm;