import React, { useState,useEffect } from "react";

import './content.css'
import { Navbar } from "./Navbar";

import {PacmanLoader
} from 'react-spinners'

import axios from 'axios'

export const Content = ()=>
{
    const [error,setError]=useState("")
    const [showNotification,setShowNotification] = useState(false);
    const [language,setLanuage]=useState('hi')
    const [inputText,setInputText]=useState('')
    const [translation,setTranslation] = useState("");
    const [isloading,setIsloading]=useState(false);

    const handleOptionChange=(e)=>
    {
        setLanuage(e.target.value);
        
    }

    const handleOnSubmit=(e)=>
    {
        setIsloading(true);
        e.preventDefault();
        if(!inputText)
        {
            setError("Message Box is Empty")
            return;
        }
        translate();
    }


        const translate = async () => {
          const encodedParams = new URLSearchParams();
          encodedParams.set('source_language', 'en');
          encodedParams.set('target_language', String(language));
          encodedParams.set('text', String(inputText));
          const options = {
            method: 'POST',
            url: 'https://text-translator2.p.rapidapi.com/translate',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'X-RapidAPI-Key': 'f368dbe452msh4cc3ebe5c9f7a36p1a6e8bjsn9fa4071ad5d6',
              'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
            },
            data: encodedParams,
          };


          await axios.request(options).then((res)=> 
          {
            setTranslation(res.data.data.translatedText);
            setIsloading(false);
          }).catch((error)=>
          {
            console.error("error message :",error);
          })
        };

        const handleInputChange=(e)=>
        {
            setInputText(e.target.value);
            setError("")

        }

        const handleCopy=()=>
            {
             navigator.clipboard.writeText(translation).then(()=>
                {
            disPlayNotification();
        }).catch((e)=>
        {
            console.log("error message",error);
        })
    };
   
    const disPlayNotification=()=>
    {
        setShowNotification(true);
        setTimeout(()=>
        {
            setShowNotification(false);
        },1000)
    }
    
    
    return(
        <div>
            <Navbar/>
            <div className="content-container">
            <h1>Text Translator</h1>
            <form  onSubmit={handleOnSubmit}>
                <div className="content-choice">
                    <input type="radio" id="hindi" name="language" value="hi" defaultChecked='hi'  onChange={handleOptionChange}  />
                        <label htmlFor="hindi">Hindi</label>
                    <input type="radio" id="spanish" name="language" value="es" onChange={handleOptionChange}  />
                        <label htmlFor="spanish">Spanish</label>
                    <input type="radio" id="french" name="language" value="fr" onChange={handleOptionChange}  />
                        <label htmlFor="french">French</label>
                    <input type="radio" id="italian" name="language" value="it" onChange={handleOptionChange}  />
                        <label htmlFor="italian">Italian</label>
                    <input type="radio" id="german" name="language" value="de" onChange={handleOptionChange}  />
                        <label htmlFor="german">German</label>
                    <input type="radio" id="greek" name="language" value="el" onChange={handleOptionChange}  />
                        <label htmlFor="greek">Greek</label>
                </div>
                <textarea name="message" placeholder="Type Your messagae" id="content" onChange={handleInputChange}></textarea>
                {error!==""?
               <div className="error">{error}</div>:""}
                
                <button type="submit">Translate</button>
            </form>
            <div className="content-translation">
                <div className="copy-btn" onClick={handleCopy}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
             <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
            </svg>
                </div>
               {isloading?<PacmanLoader
/>:translation}
            </div>
        {showNotification?
            (<div className="content-notification">
                    Copied To Clipboard
                </div>
            ):""
        }
        </div>
        </div>
    )

}

