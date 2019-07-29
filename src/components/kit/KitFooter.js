import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function KitFooter(props) {
    return(
        <footer className="card-footer">
            <a href="#" className="has-text-black card-footer-item">
                {props.button1}
            </a>
            <a href="#" className="has-text-black card-footer-item">
                {props.button2}
            </a>
            <a href="#" className="has-text-info card-footer-item">
                {props.button3}
            </a>
            <a href="#" className="has-text-danger card-footer-item has-badge-rounded has-badge-danger has-badge-medium">
                {/* Removed data-badge={props.button4Data} from a tag */}
                {props.button4}
            </a>
        </footer>
    )
}

export default KitFooter