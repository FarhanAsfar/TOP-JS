function List(){
    const products = [
        {title: 'Cabbage', id:1},
        {title: 'Apple', id:2},
        {title: 'Garlic', id:3}
    ];

    const listItems = products.map(product =>
        <li key={product.id}>{product.title}</li>
    );

    return(
        <ol>{listItems}</ol>
    );
}

export default List;