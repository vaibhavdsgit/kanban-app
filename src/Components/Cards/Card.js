import React from 'react';
import './Card.css';
import { ChevronRight, ChevronLeft, Delete} from "react-feather"

function Card(props){

    const {id} = props.card;

    return(
        <div className='card'>
            <div className='card-data'>
                <p>{props.card?.name}</p>
            </div>
            <div className='card-buttons'>
                <p onClick={()=> props.moveLeft(props.boardId, id)}>{<ChevronLeft />}</p>
                <p onClick={()=> props.moveRight(props.boardId, id)}>{<ChevronRight />}</p>
                <p onClick={()=> props.removeCard(props.boardId, id)}>{<Delete />}</p>
            </div>
        </div>
    )
}
export default Card