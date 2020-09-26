
import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";
import 'bootstrap/dist/css/bootstrap.min.css';



const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);
  const [multerImage, setMulterImage] = useState("");
  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const uploadImage = (e) => {
    var data = new FormData();
    data.append("imageName", "multer-image"+Date.now());
    data.append("imageData", e.target.files[0]);
    console.log(data);
    setMulterImage(URL.createObjectURL(e.target.files[0]));

    TutorialDataService.upload(data)
      .then(data => {
        if(data.data.success){
          alert("image uploaded successfully");
          setMulterImage("multer");
          console.log(data);
        }
      })

  }



  const saveTutorial = () => {
    var data = {
      title: tutorial.title,
      description: tutorial.description
    };

    TutorialDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={tutorial.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={tutorial.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>

          <br/>
          <div>
            <h4 className="process-heading">Process: using Multer</h4>
            
            <input type="file" className="process-upload" name="imageData" onChange={uploadImage}/>
            <img src={multerImage} alt="upload image" className="process-image"/>
          </div>  


        </div>
      )}
    </div>
  );
};

export default AddTutorial;