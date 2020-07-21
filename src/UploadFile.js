import React, {useState, useCallback} from 'react';
import axios from 'axios';

function UploadFile() {
  const [file, setFile] = useState('');

  const onFormSubmit = useCallback(async (e) => {
    e.preventDefault();
    const response = await fileUpload(file);
    console.log(response.data);
  }, [file])
  const onChange = useCallback((e) => {
    setFile(e.target.files[0])
  }, [])
  const fileUpload = (_file) => {
    const url = 'http://test.food-festa.com/mains';
    const formData = new FormData();
    formData.append('file', _file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return axios.post(url, formData, config)
  }
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </>
  )
}

export default UploadFile;