import {  FormControlLabel, Tooltip } from '@material-ui/core';
import React, { useState } from 'react';
import FormInput from "../../components/UI/Input";
import Alert from 'react-bootstrap/Alert'
import axios from 'axios';
var FormData = require('form-data');
const From = () => {
    const path="https://testing-forum-ensi.herokuapp.com//add"
    const list_institut=["ENSI","ENSIT"]
    const [file, setFile] = useState()
    const [fileName, setFileName] = useState('')
    const [fileType, setFileType] = useState('')
    const [fileValue, setFileValue] = useState('')
    const [nameValue, setNameValue] = useState('')
    const [mailValue, setMailValue] = useState('')
    const [phoneValue, setPhoneValue] = useState('')
    const [institutValue, setInstitutValue] = useState('')
    const [accordValue, setAccordValue] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)
    const handleFile=(event)=>{
        setFileName(event.target.value.replace('C:\\fakepath\\',''));
        setFileType(event.target.value.slice(event.target.value.lastIndexOf('.')+1-event.target.value.length));
        setFileValue(event.target.value);
        setFile(event.target.files[0]);
    }
    const close=()=>{
        setFileName('');
        setFileType('');
        setFileValue('');
    }
    const handeleName=(event)=>setNameValue(event.target.value)
    const handeleMail=(event)=>setMailValue(event.target.value)
    const handelePhone=(event)=>setPhoneValue(event.target.value)
    const handeleInstitut=(event)=>setInstitutValue(event.target.value)
    const handeleAccord=(event)=>setAccordValue(event.target.checked)
    const handleSubmit=(event)=>{
        event.preventDefault();
        setLoading(true);
        const fd= new FormData()
        fd.append('file',file);
        fd.append('nom',nameValue);
        fd.append('email',mailValue);
        fd.append('num_tel',phoneValue);
        fd.append('accord',accordValue);
        fd.append('institut',institutValue);
        fd.append('fileValue',fileValue);
        console.log(fd);
        console.log(file);
        axios.post(`${path}`, fd)
        .then(res => {
            setLoading(false);
            setSent(res.data.sent)
            setError(res.data.error)
            setTimeout(()=>setError(false),3000)
            console.log(res.data);
        })
        .catch(()=>{setError(true);
            setLoading(false);
            setTimeout(()=>setError(false),3000)
        });
        
    }
    return (
        <div className="contact-form-wrap">
            <Alert show={error} variant={'danger'}>
                Une erreur s'est produite lors de votre inscription veuillez vous inscrire une nouvelle fois
            </Alert>
            <form id="contact-form" onSubmit={(event)=>handleSubmit(event)} encType="multipart/form-data">
                <div className="row">
                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'nom'}
                            placeholder={'Nom *'}
                            required={true}
                            onChange={(event)=>handeleName(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                             tag={'input'}
                             type={'email'}
                             name={'addresse_email'}
                             placeholder={'Addresse email *'}
                             required={true}
                             onChange={(event)=>handeleMail(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'num_telephone'}
                            placeholder={'Numéro de téléphone *'}
                            required={true}
                            onChange={(event)=>handelePhone(event)}
                        />
                    </div>

                    <div className="col-md-6">
                        <FormInput
                            tag={'input'}
                            type={'text'}
                            name={'institut'}
                            placeholder={'Institut *'}
                            list_id={'institut'}
                            list={list_institut}
                            required={true}
                            onChange={(event)=>handeleInstitut(event)}
                        />
                    </div>
                    <div className="col-md-6">
                        <div style={{display:fileType!=''?'':'none',width:"60px",textAlign:'center',paddingBottom:'15px'}}>
                            <div style={{width:"60px"}}>
                                <img src={ require(`../../assets/img/icons/pdf.png`)} style={{display:fileType!='pdf'?'none':''}}  width="100%"/>
                                <img src={ require(`../../assets/img/icons/doc.jpg`)} style={{display: !['docx','doc'].includes(fileType)?'none':''}}  width="150%"/>
                                <img src={ require(`../../assets/img/icons/ppt.png`)} style={{display: !['pptx','ppt'].includes(fileType)?'none':''}}  width="150%"/>
                                <span onClick={()=>close()} style={{display:fileType!='pdf'?'none':'',fontSize:'20px',position:'absolute',top:"-11px",left:'9px',cursor:'pointer'}}><i  className='fa fa-times'/></span>
                                <span onClick={()=>close()} style={{display: !['docx','doc','pptx','ppt'].includes(fileType)?'none':'',fontSize:'20px',position:'absolute',top:"-10px",left:'15px',cursor:'pointer'}}><i  className='fa fa-times'/></span>
                            </div>
                            <p style={{fontSize:'10px'}}>{fileName}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <input type='file' id='cv' value={fileValue} style={{display:'none'}} name='cv' onChange={(event)=>handleFile(event)} accept=".pdf,.ppt,.pptx,.doc,.docx"/>
                    </div>
                    <div className="col-md-12"  style={{marginLeft:'15px',paddingBottom:"20px"}}>
                        <FormControlLabel
                            control={<input onChange={(event)=>handeleAccord(event)} style={{padding:'15px'}} type='checkbox' name='accord' className="checkbox"/>}
                            label={<label style={{fontSize:"13px", marginTop:'8px',paddingLeft:'15px',color:"#8e8e8e"}}>J'accepte de partager mes informations avec les entreprises présentes au forum annuel de l'ENSI</label>}
                            icon={<span  />}
                        />   
                    </div>

                    <div className="col-md-12" style={{display:'flex',justifyContent: 'center'}}>

                        <FormInput
                            tag={'button'}
                            classes={'btn-outline'}
                            loading={loading}
                            
                            
                        />
                        <label style={{paddingLeft:'10px'}} htmlFor="cv"><Tooltip title='Attacher un CV'><span style={{cursor:'pointer'}} className='clipper-outline'><i className="fa fa-paperclip"/></span></Tooltip></label>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default From;