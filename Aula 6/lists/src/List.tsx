import PropTypes from "prop-types"

function List(props) {
    const category = props.category
    const itemList = props.items;

    const listItems = itemList.map(item => 
        <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>
    );

    if(itemList.length > 0) {
        return (
            <>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>
        );
    }
}

List.defaultProps = {
    category: "Category",
    items: [],
  }
  
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number, 
        name: PropTypes.string, 
        calories: PropTypes.number
    }))
}

export default List