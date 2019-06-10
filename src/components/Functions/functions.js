import React, { Component } from 'react';

export const ShowImage = (params) => {
    return (
        <div>
            <img src={params.src} width={params.width}/>
        </div>
    )
}

