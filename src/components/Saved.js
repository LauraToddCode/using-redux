import React from "react";
import { connect } from "react-redux";
import { removeItem } from "../redux/save/saveActions";

function Saved({ savedItems, removeItem }) {
    return (
        <div>
            <h2>Saved</h2>
            <div>
                {savedItems.map(animal => (
                    <div 
                        id={animal.id} 
                        key={animal.id} 
                        className="animal"
                    >
                        {animal.name}
                        <button onClick={() => removeItem(animal.id)}>
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        savedItems: state.save.savedItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeItem: (id) => dispatch(removeItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Saved);