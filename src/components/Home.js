import React from "react";
import { connect } from "react-redux";
import { saveItem } from "../redux/save/saveActions";

function Home({ items, saveItem }) {
    return (
        <div>
            <h2>Home</h2>
            <div>
                {items.map(animal => (
                    <div id={animal.id} key={animal.id} className="animal">
                        {animal.name}
                        <button onClick={() => saveItem(animal.id)}>Save</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        items: state.save.items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveItem: (id) => dispatch(saveItem(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);