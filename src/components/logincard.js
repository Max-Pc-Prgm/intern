import React from 'react';
function logincard(props){
    return(
        <div>
            <div class="card">
            <div class="card-header">
                SignIn as
            </div>
            <div class="card-body">
                <h3 class="card-title">{props.role}</h3>
                <p class="card-text">{props.description}</p>
                <a href="#" class="btn btn-success">Login</a>
            </div>
            </div>
        </div>
    );
}
export default logincard;