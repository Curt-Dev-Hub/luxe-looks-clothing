// below "styles" can be named ny myself like a variable name
import styles from './ProductPage.module.css';

export default function MensLeatherJackets() {
  return (
    <div className={styles.productGroupContainer}>
      <div className={styles.singleProductContainer}>
        <img className={styles.productImage} src={`${process.env.PUBLIC_URL}leather_jackets/riccardo-vicidomini-varotto-QtrXWT2cpes-unsplash.jpg`} alt='Picture of a person in a black leather jacket'/>
        <p className={styles.caption}>Biker Style Jacket - Available in 3 different colors</p>
        <div className={styles.infoContainer}>
          <p className={styles.stockLevel}>Over 10 In Stock</p>
          <p className={styles.productPrice}>£64.99</p>
        </div>
        <div className={styles.selectWrap}>
          <label>Choose a size:</label>
          <select name='size' className={styles.sizeSelect}>
            <option value='' className={styles.sizeOptions} selected>Select</option>  {/* defaultValue='' */}
            <option value='small' className={styles.sizeOptions}>Small</option>
            <option value='medium' className={styles.sizeOptions}>Medium</option>
            <option value='large' className={styles.sizeOptions} >Large</option>
            <option value='x-large' className={styles.sizeOptions} >X-Large</option>
          </select>
        </div>
      </div>
      <div className={styles.singleProductContainer}>
        <img className={styles.productImage} src={`${process.env.PUBLIC_URL}leather_jackets/leatherJacket2.jpg`} alt='Picture of a person in a black leather jacket'/>
        <p className={styles.caption}>Fur Lined Leather Jacket</p>
        <div className={styles.infoContainer}>
          <p className={styles.stockLevel}>6 In Stock</p>
          <p className={styles.productPrice}>£81.99</p>
        </div>
        <div className={styles.selectWrap}>
          <label>Choose a size:</label>
          <select name='size' className={styles.sizeSelect}>
            <option value='' className={styles.sizeOptions} selected>Select</option>
            <option value='small' className={styles.sizeOptions}>Small</option>
            <option value='medium' className={styles.sizeOptions}>Medium</option>
            <option value='large' className={styles.sizeOptions} >Large</option>
            <option value='x-large' className={styles.sizeOptions} >X-Large</option>
          </select>
        </div>
      </div>
      <div className={styles.singleProductContainer}>
        <img className={styles.productImage} src={`${process.env.PUBLIC_URL}leather_jackets/dami-adebayo-k6aQzmIbR1s-unsplash.jpg`} alt='Picture of a person in a black leather jacket'/>
        <p className={styles.caption}>Brown Biker Style Jacket</p>
        <div className={styles.infoContainer}>
          <p className={styles.stockLevel}>9 In Stock</p>
          <p className={styles.productPrice}>£92.00</p>
        </div>
        <div className={styles.selectWrap}>
          <label>Choose a size:</label>
          <select name='size' className={styles.sizeSelect}>
            <option value='' className={styles.sizeOptions} selected>Select</option>
            <option value='small' className={styles.sizeOptions}>Small</option>
            <option value='medium' className={styles.sizeOptions}>Medium</option>
            <option value='large' className={styles.sizeOptions} >Large</option>
            <option value='x-large' className={styles.sizeOptions} >X-Large</option>
          </select>
        </div>
      </div>
      <div className={styles.singleProductContainer}>
        <img className={styles.productImage} src={`${process.env.PUBLIC_URL}leather_jackets/leatherJacket4.jpg`} alt='Picture of a person in a black leather jacket'/>
        <p className={styles.caption}>Red Biker Style Jacket - Available in 3 different colors</p>
        <div className={styles.infoContainer}>
          <p className={styles.stockLevel}>Over 16 In Stock</p>
          <p className={styles.productPrice}>£54.99</p>
        </div>
        <div className={styles.selectWrap}>
          <label>Choose a size:</label>
          <select name='size' className={styles.sizeSelect}>
            <option value='' className={styles.sizeOptions} selected>Select</option>
            <option value='small' className={styles.sizeOptions}>Small</option>
            <option value='medium' className={styles.sizeOptions}>Medium</option>
            <option value='large' className={styles.sizeOptions} >Large</option>
            <option value='x-large' className={styles.sizeOptions} >X-Large</option>
          </select>
        </div>
      </div>
      <div className={styles.singleProductContainer}>
        <img className={styles.productImage} src={`${process.env.PUBLIC_URL}leather_jackets/minh-pham-EbljdUqktgQ-unsplash.jpg`} alt='Picture of a person in a black leather jacket'/>
        <p className={styles.caption}>Biker Style Jacket</p>
        <div className={styles.infoContainer}>
          <p className={styles.stockLevel}>8 In Stock</p>
          <p className={styles.productPrice}>£62.99</p>
        </div>
        <div className={styles.selectWrap}>
          <label>Choose a size:</label>
          <select name='size' className={styles.sizeSelect}>
            <option value='' className={styles.sizeOptions} selected>Select</option>
            <option value='small' className={styles.sizeOptions}>Small</option>
            <option value='medium' className={styles.sizeOptions}>Medium</option>
            <option value='large' className={styles.sizeOptions} >Large</option>
            <option value='x-large' className={styles.sizeOptions} >X-Large</option>
          </select>
        </div>
      </div>
      <div className={styles.singleProductContainer}>
        <img className={styles.productImage} src={`${process.env.PUBLIC_URL}leather_jackets/fuu-j-Bv3MnkJRUeE-unsplash.jpg`} alt='Picture of a person in a black leather jacket'/>
        <p className={styles.caption}>Biker Style Jacket - Available in 2 different colors</p>
        <div className={styles.infoContainer}>
          <p className={styles.stockLevel}>Over 16 In Stock</p>
          <p className={styles.productPrice}>£67.99</p>
        </div>
        <div className={styles.selectWrap}>
          <label>Choose a size:</label>
          <select name='size' className={styles.sizeSelect}>
            <option value='' className={styles.sizeOptions} selected>Select</option>
            <option value='small' className={styles.sizeOptions}>Small</option>
            <option value='medium' className={styles.sizeOptions}>Medium</option>
            <option value='large' className={styles.sizeOptions} >Large</option>
            <option value='x-large' className={styles.sizeOptions} >X-Large</option>
          </select>
        </div>
      </div>
    </div>
  )
}
