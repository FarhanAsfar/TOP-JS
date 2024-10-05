function List(){
    const products = [
        {title: 'Cabbage', id:1, isFruit:false},
        {title: 'Apple', id:2, isFruit:true},
        {title: 'Garlic', id:3, isFruit:false}
    ];

    const listItems = products.map(product =>
        <li 
            key={product.id}
            style={{color: product.isFruit ? 'magenta': 'darkgreen' }}
            >
                {product.title}
            </li>
    );

    return(
        <ol>{listItems}</ol>
    );
}

export default List;