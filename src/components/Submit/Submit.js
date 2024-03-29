import React, {useState} from 'react'
import axios from 'axios'
import './Submit.css'

const Submit = () => {
  
    const [paperDetails, setPaperDetails] = useState({
        paperTitle: '',
        paperDesc: '',
        paperApproval: '',
        paperUrl: '',
    })

    const [tags, setTags] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('paperSubmitAPICall', paperDetails);
            console.log(response);
            
            for(const tag of tags){
                const tagResponse = await axios.post('tagAddAPICall', tag);
                console.log(tagResponse);
            }
        }
        catch (err){
            console.log(err);
        }    
    } 

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPaperDetails ({
            ...paperDetails,
            [name] : value,
        });
    }

    const handleTags = (e) => {
        const tagString = e.target.value;
        const tagArray = tagString.split(',');
        setTags(tagArray);
    }

  return (
    <div className='submit'>
        <div className='submit-header'>
            <h1 className='submith1'> SUBMIT </h1><h1 className='abstract'> ABSTRACT</h1>
        </div>

        <div className='submit-body'>
            <div className='fields'>
                <h2>TITLE</h2>
                <input 
                    type = 'text'
                    placeholder='TITLE'
                    required
                    onChange = {handleChange}
                />
            </div>
            <div className='fields'>
                <h2>DESCRIPTION</h2>
                <input 
                    type = 'text'
                    placeholder='DESCRIPTION'
                    required
                    onChange = {handleChange}
                />
            </div>
            <div className='fields'>
                <h2>URL</h2>
                <input 
                    type = 'text'
                    placeholder='URL'
                    required
                    onChange = {handleChange}
                />
            </div>
            <div className='fields'>
                <h2>TAGS</h2>
                <input 
                    type = 'text'
                    placeholder='TAGS'
                    required
                    onChange = {handleTags}
                />
            </div>
        </div>
        <div className='submit-footer'>
            <button onClick = {handleSubmit}>
                SUBMIT
            </button>
        </div>
    </div>
  )
}

export default Submit
