import React from 'react'

const IssueCard = props => {
    const { title, html_url, state } = props;
    return (
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{state}</p>
                    <a href={html_url} className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}

export default IssueCard;