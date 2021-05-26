import './filter.css'

const Filter = ({count, size, sort, sortProducts, filterProducts}) => {
    return (
        <div className='filter'>
            <div className="filter-result">{count} Products</div>
            <div className="filter-sort">
                Order { ' ' }
                <select value={sort} onChange={event => sortProducts(event.target.value)}>
                    <option value="">Latest</option>
                    <option value="lowest">lowest</option>
                    <option value="highest">highest</option>
                </select>
            </div>
            <div className="filter-size">
                Filter { ' ' }
                <select value={size} onChange={event => filterProducts(event.target.value)}>
                    <option value="">All</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option> 
                    <option value="XL">XL</option> 
                    <option value="XXL">XXL</option> 
                </select>
            </div>
        </div>
    )
}

export default Filter
