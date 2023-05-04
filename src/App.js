import axios from "axios";
import React, { Component } from 'react';

// export default function App() {
//   const [result, setResult] = useState("");
//   const handleImageUpload = (event) => {
//     event.preventDefault();
//     const file = event.currentTarget["fileInput"].files[0];
  
//   // const data = new URLSearchParams();
//   const formData = new FormData();
  
  
//   // for (var pair of formData.entries()) {
    
//   //   data.append(pair[0],pair[1])
//   // }
// //   {
// //     "email": "admin@gmail.com",
// //     "password": "1234"
// //   }
//   formData.append("image", file);
//   formData.append("medical_system_number", "15");
//   formData.append("is_active",true);
//   formData.append("national_code", "2520183063");
//   formData.append("gender", 1);
//   formData.append("city", "test");
//   formData.append("province", "test");
//   formData.append("clinic_address", "test");
  
  
//   var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMzE1OTQ5LCJpYXQiOjE2NzIzMTU2NDksImp0aSI6IjUzMTgxMDFhNWUyOTRlOWE5MzYwZTUzOTExNTIzMDdjIiwidXNlcl9pZCI6MX0.dW3YDVZ2rzpmnAQtqEla3fe6EREU8diniWHn9p9u2co';
//   axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
//   const config = {
//     headers: {
//       'accept': 'application/json',
//       'Accept-Language': 'en-US,en;q=0.8',
//       'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
//       Authorization: `Bearer ${token}`
//     }
//   };

//   axios.put('https://cors-anywhere.herokuapp.com/188.121.113.74/api/doctor/1/', formData, config).then(console.log).catch(console.log);
//   fetch("https://cors-anywhere.herokuapp.com/postman-echo.com/post/", {
//     method: "POST",
//     body: formData
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       setResult(data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });}
//   return (
//     <div>
//       <form onSubmit={handleImageUpload}>
//         <input id="fileInput" type="file" />
//         <input type="submit" />
//       </form>
//       <br />
//       <br />
//       Result:
//       <br />
//       <pre>{JSON.stringify(result, null, 2)}</pre>
//     </div>
//   );
// }


class App extends Component {

  state = {
    title: '',
    content: '',
    image: null
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state);
  const formData = new FormData();
  const tags = [1, 2, 3];
  for (var i = 0; i < tags.length; i++) {
    formData.append(`specialties[]`, tags[i]);
  }
  console.log(formData)
  // for (var pair of formData.entries()) {
    
  //   data.append(pair[0],pair[1])
  // }
//   {
//     "email": "admin@gmail.com",
//     "password": "1234"
//   }
  //formData.append("image", file);
  formData.append("medical_system_number", "15");
  formData.append("is_active",true);
  formData.append("national_code", "2520183063");
  formData.append("gender", 1);
  formData.append("city", "test");
  formData.append("province", "test");
  formData.append("clinic_address", "test");

  
  var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMzE4MDU2LCJpYXQiOjE2NzIzMTc3NTYsImp0aSI6ImYyYjExNjczZjg5YjRjZTA5YjJhMDdkODI1ZmRhNmQzIiwidXNlcl9pZCI6MX0.cy5VUUVILPV6mxavyUKt7RcniP5blfg_PA5fwO10n1A';
  axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
  axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
  const config = {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `application/json;`,
      Authorization: `Bearer ${token}`
    }
    };

    axios.put('https://cors-anywhere.herokuapp.com/188.121.113.74/api/doctor/1/', JSON.stringify(formData), config).then(console.log).catch(console.log);
    console.log("----------------------")
    axios.post('https://cors-anywhere.herokuapp.com/postman-echo.com/post',JSON.stringify(formData), config).then(console.log).catch(console.log);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
          </p>
          <p>
            <input type="text" placeholder='Content' id='content' value={this.state.content} onChange={this.handleChange} required/>

          </p>
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
export default App;