// ReactJS code
const App = () => {
    const [items, setItems] = React.useState([
        { name: 'Apple Juice', quantity: 1, price: 250, image: 'apple-juice.jpg' },
        { name: 'Grapes Juice', quantity: 1, price: 250, image: 'grape-juice.jpg' }
    ]);

    const removeItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    const increaseQuantity = (index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity++;
        setItems(updatedItems);
    };

    const decreaseQuantity = (index) => {
        const updatedItems = [...items];
        updatedItems[index].quantity--;
        if (updatedItems[index].quantity <= 0) {
            removeItem(index);
        } else {
            setItems(updatedItems);
        }
    };

    const subTotal = items.reduce((total, item) => total + item.quantity * item.price, 0);

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {items.map((item, index) => (
                <div className="item" key={index}>
                    <img src={item.image} alt={item.name} className="item-image" />
                    <div className="item-details">
                        <p>{item.name}</p>
                        <p>{item.quantity} x {item.price} Rs.</p>
                    </div>
                    <div className="item-actions">
                        <button onClick={() => removeItem(index)}>Remove</button>
                        <button onClick={() => increaseQuantity(index)}>+</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => decreaseQuantity(index)}>-</button>
                        <p>{item.quantity * item.price} Rs.</p>
                    </div>
                </div>
            ))}
            <div className="total">
                <p>Sub-Total</p>
                <p>{items.length} items</p>
                <p>{subTotal} Rs.</p>
            </div>
            <button className="checkout">Checkout</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));