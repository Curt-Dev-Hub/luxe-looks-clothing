import styles from './ProductPage.module.css';

export default function Trainers() {
    return (
      <div className={styles.productGroupContainer}>
        <div className={styles.singleProductContainer}>
          <img className={styles.productImage} src={`${process.env.PUBLIC_URL}/kids_trainers/trainer1.jpg`} alt='Picture of a pair of childs trainers yellow in colour with light blue and white highlights'/>
          <p className={styles.caption}>Rocket Racers - Yellow</p>
          <div className={styles.infoContainer}>
            <p className={styles.stockLevel}>Over 16 In Stock</p>
            <p className={styles.productPrice}>£14.99</p>
          </div>
          <div className={styles.selectWrap}>
            <label>Choose a size:</label>
            <select name='size' className={styles.sizeSelect}>
              <option value='' className={styles.sizeOptions} selected>Select</option>
              <option value='1.5' className={styles.sizeOptions}>1.5</option>
              <option value='2.0' className={styles.sizeOptions}>2.0</option>
              <option value='2.5' className={styles.sizeOptions} >2.5</option>
              <option value='x-2.5' className={styles.sizeOptions} >X-2.5</option>
            </select>
          </div>
        </div>
        <div className={styles.singleProductContainer}>
        <img className={styles.productImage} src={`${process.env.PUBLIC_URL}/kids_trainers/trainer2.jpg`} alt='Picture of a pair of Grey childrens with a star pattern'/>
          <p className={styles.caption}>Twinkle Star - Flats</p>
          <div className={styles.infoContainer}>
            <p className={styles.stockLevel}>11 In Stock</p>
            <p className={styles.productPrice}>£12.99</p>
          </div>
          <div className={styles.selectWrap}>
            <label>Choose a size:</label>
            <select name='size' className={styles.sizeSelect}>
              <option value='' className={styles.sizeOptions} selected>Select</option>
              <option value='1.5' className={styles.sizeOptions}>1.5</option>
              <option value='2.0' className={styles.sizeOptions}>2.0</option>
              <option value='2.5' className={styles.sizeOptions} >2.5</option>
              <option value='3.0' className={styles.sizeOptions} >3.0</option>
            </select>
          </div>
        </div>
        <div className={styles.singleProductContainer}>
          <img className={styles.productImage} src={`${process.env.PUBLIC_URL}/kids_trainers/trainer3.jpg`} alt='Picture of a pair of blue childrens with a star pattern'/>
          <p className={styles.caption}>Blue Prospects Trainer</p>
          <div className={styles.infoContainer}>
            <p className={styles.stockLevel}>4 In Stock</p>
            <p className={styles.productPrice}>£10.99</p>
          </div>
          <div className={styles.selectWrap}>
            <label>Choose a size:</label>
            <select name='size' className={styles.sizeSelect}>
              <option value='' className={styles.sizeOptions} selected>Select</option>
              <option value='1.5' className={styles.sizeOptions}>1.5</option>
              <option value='2.0' className={styles.sizeOptions}>2.0</option>
              <option value='2.5' className={styles.sizeOptions} >2.5</option>
              <option value='3.0' className={styles.sizeOptions} >3.0</option>
            </select>
          </div>
        </div>
        <div className={styles.singleProductContainer}>
          <img className={styles.productImage} src={`${process.env.PUBLIC_URL}/kids_trainers/trainer4.jpg`} alt='A picture of a pair of pink childrens trainers with a hearts pattern'/>
          <p className={styles.caption}>Heart Pattern - Flats </p>
          <div className={styles.infoContainer}>
            <p className={styles.stockLevel}>8 In Stock</p>
            <p className={styles.productPrice}>£14.99</p>
          </div>
          <div className={styles.selectWrap}>
            <label>Choose a size:</label>
            <select name='size' className={styles.sizeSelect}>
              <option value='' className={styles.sizeOptions} selected>Select</option>
              <option value='1.5' className={styles.sizeOptions}>1.5</option>
              <option value='2.0' className={styles.sizeOptions}>2.0</option>
              <option value='2.5' className={styles.sizeOptions} >2.5</option>
              <option value='3.0' className={styles.sizeOptions} >3.0</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
  