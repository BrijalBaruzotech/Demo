export default class App extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("https://fakestoreapi.com/products")

      .then((res) => {
        console.log(res);
        this.setState({ products: res.data });
      });
  }

  render() {
    const productdata = this.state.products;
    return (
      <div>
        <ul>
          {productdata.map((product) => (
            <>
              --------------------------------------------------------------------------------------------------------------------------------------
              <li>Id: {product.id}</li>
              <li>Title: {product.title}</li>
              <li>Category: {product.category}</li>
              <li>Description{product.description}</li>
              <li>Price: {product.price}</li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}
