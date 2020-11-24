import React from 'react';

export const Footer = (props)=>
{
    return (
        <footer  className="footer">
        <div style={{textAlign:"center", backgroundColor:"#343a40", padding:"20px"}}>
          <a href="https://github.com/shreyas4156" style={{color:"white"}} className="text-muted">Github</a>{" | "}
          <a href="https://www.linkedin.com/in/shreyas4156/" style={{color:"white"}} className="text-muted">Linkedin</a>
          <hr />
          <span style={{color:"white"}} className="text-muted">Made with ❤ by Shreyas K S.</span>
        </div>
      </footer>
    )
}