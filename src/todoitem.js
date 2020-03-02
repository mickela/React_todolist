import React from 'react';


export default (props) => {
 
    const { checked, todo, identifier, toggle, trash } = props;

    return (
        <React.Fragment>
            <div className="row mb-3 border-bottom">
 
                <div className="col-md-1">
                    <input type="checkbox" checked={checked} id={identifier} onChange={toggle}/>
                </div>
 
                <div className="col-md-9">
                    <span className={checked ? "striked text-muted font-italic" : "font-weight-normal text-monospace"}>{todo}</span>
                </div>
 
                <div className="col-md-2 mb-1">
                    <button className="btn btn-danger btn-sm text-right" onClick={trash} id={identifier}>Delete</button>
                </div>
 
            </div>
        </React.Fragment>
    )

}
