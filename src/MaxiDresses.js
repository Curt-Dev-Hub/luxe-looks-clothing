import styles from './ProductPage.module.css';

  export default function MaxiDresses() {
    return (
      <div className={styles.productGroupContainer}>
        <div className={styles.singleProductContainer}>
          <img className={styles.productImage} src={`${process.env.PUBLIC_URL}womens_maxi_dresses/maxi_dress1.jpeg`} alt='Picture of a person in a black leather jacket'/>
          <p className={styles.caption}>Floral Embroidered Maxi Dress</p>
          <div className={styles.infoContainer}>
            <p className={styles.stockLevel}>7 In Stock</p>
            <p className={styles.productPrice}>£74.99</p>
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
        <img className={styles.productImage} src={`${process.env.PUBLIC_URL}womens_maxi_dresses/maxi_dress2.jpeg`} alt='Picture of a person in a black leather jacket'/>
          <p className={styles.caption}>Geometric Colour Design Maxi Dress</p>
          <div className={styles.infoContainer}>
            <p className={styles.stockLevel}>6 In Stock</p>
            <p className={styles.productPrice}>£34.99</p>
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
          <img className={styles.productImage} src={`${process.env.PUBLIC_URL}womens_maxi_dresses/skg-photography-YKcKLhuhUVk-unsplash.jpg`} alt='Picture of a person in a black leather jacket'/>
          <p className={styles.caption}>Red Maxi Dress Diamonte Pattern</p>
          <div className={styles.infoContainer}>
            <p className={styles.stockLevel}>Over 16 In Stock</p>
            <p className={styles.productPrice}>£75.99</p>
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
          <img className={styles.productImage} src={`${process.env.PUBLIC_URL}womens_maxi_dresses/maxi_dress4.jpeg`} alt='Picture of a person in a black leather jacket'/>
          <p className={styles.caption}>Pattern Maxi Dress - Available in 2 different colors</p>
          <div className={styles.infoContainer}>
            <p className={styles.stockLevel}>9 In Stock</p>
            <p className={styles.productPrice}>£37.99</p>
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
          <img className={styles.productImage} src={`${process.env.PUBLIC_URL}womens_maxi_dresses/joseph-kellner-LDBikYMpvpw-unsplash.jpg`} alt='Picture of a person in a black leather jacket'/>
          <p className={styles.caption}>Multicoloured Leaf Pattern Maxi Dress</p>
          <div className={styles.infoContainer}>
            <p className={styles.stockLevel}>10 In Stock</p>
            <p className={styles.productPrice}>£43.99</p>
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
  