import React,{useRef} from 'react';
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import axios from 'axios';
 export const Ide = () => {
    const editorRef = useRef(null);
    const mount =(editor)=>{
        editorRef.current = editor;
    }
    const getCode = async  ()=>{
        const code = editorRef.current.getValue();
        console.log('Code is',code);   
        const jsonObject = {
            "problem_solution":code};
        try{
        const res = await axios.post('http://localhost:1234/submits',jsonObject);
        console.log('code posted to database successfully',res);
        alert("Problem solution saved to database successfully!");
        }
        catch(error){
            console.log(error);
            console.log('code failed to post on db');
        }
    }
    const skeletonCode = `
    class Solution{
        public int show(int x,int y){
            return x+y;
        }
    }
    `
  return (
    <>
    <Editor
        onMount = {mount}
        height="80vh"
        defaultLanguage="java"
        defaultValue={skeletonCode}
       
      />
      <Button onClick={getCode}  variant="contained">Submit Code </Button>
      </>
  )
}

export default Ide
