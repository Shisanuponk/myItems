import React, { useContext, useState } from 'react'

// Import Theme
import ThemeContext, { Themes } from "../../storage/Themes";
// Import Styled
import { ItemPage, ItemShow, ItemImgBox, ItemImgMain, ItemImgSelect, ItemInfo, Reviews } from './ViewPageStyled'
// Import Components
import Reviewer from './Reviewer';

const ViewItem = () => {
    const [themes, setThemes] = useContext(ThemeContext);
    const [ImgMain, setImgMain] = useState("item1.webp")

    const ImgSelect = () => {
        return <ItemImgSelect>
            <img onClick={() => ChangeImgMain("item1.webp")} src="./img/item1.webp" alt="" />
            <img onClick={() => ChangeImgMain("item2.webp")} src="./img/item2.webp" alt="" />
            <img onClick={() => ChangeImgMain("item1.webp")} src="./img/item1.webp" alt="" />
            <img onClick={() => ChangeImgMain("item2.webp")} src="./img/item2.webp" alt="" />
            <img onClick={() => ChangeImgMain("item1.webp")} src="./img/item1.webp" alt="" />
            <img onClick={() => ChangeImgMain("item2.webp")} src="./img/item2.webp" alt="" />
            <img onClick={() => ChangeImgMain("item1.webp")} src="./img/item1.webp" alt="" />
            <img onClick={() => ChangeImgMain("item2.webp")} src="./img/item2.webp" alt="" />
            <img onClick={() => ChangeImgMain("item1.webp")} src="./img/item1.webp" alt="" />
            <img onClick={() => ChangeImgMain("item2.webp")} src="./img/item2.webp" alt="" />
            <img onClick={() => ChangeImgMain("item1.webp")} src="./img/item1.webp" alt="" />
            <img onClick={() => ChangeImgMain("item2.webp")} src="./img/item2.webp" alt="" />
        </ItemImgSelect>
    }

    const ChangeImgMain = (imgChange) => {
        setImgMain(imgChange)
    }

    return (
        <ItemPage theme={themes}>
            <ItemShow>
                <ItemImgBox>
                    <ItemImgMain>
                        <img src={`./img/${ImgMain}`} alt="" />
                    </ItemImgMain>
                    {ImgSelect()}
                </ItemImgBox>
                <ItemInfo theme={themes}>
                    <div className="item-info">
                        <h2 className="item-name">
                            veniam qui. Numquam, alias veniam.
                        </h2>
                        <div className="item-detail-detail">
                            <h3>Price tag: 250 coins</h3>
                            <h3>Quantity: 5 piece available</h3>
                            <h3>Merchant: John dujim</h3>
                        </div>

                        <div className="add-to-cart">
                            <button className="btn-inp">-</button>
                            <input type="text" value="0" />
                            <button className="btn-inp">+</button>

                        </div>
                        <div className="btn-add-item">
                            <button className="btn-add">
                                <text>Add to Cart</text>
                                <img src={`./img/icons/${themes.iconcart}`} alt="" />
                            </button>
                            <button className="btn-add">
                                <text>Interesting</text>
                                <img src={`./img/icons/${themes.iconheart}`} alt="" />
                            </button>
                            <button className="btn-add">
                                <text>Buy Now</text>
                                <img src={`./img/icons/${themes.iconbuyitem}`} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="item-detail">
                        <h3>Detail</h3>
                        <textarea className="text-box-detail" disabled>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati iure repudiandae id ullam nostrum iusto neque, dolorem eaque expedita excepturi velit cum totam itaque magnam soluta assumenda ipsam, similique, recusandae veniam? Consequuntur incidunt id eligendi cupiditate vero? Nemo nam quis quam recusandae ex excepturi, architecto, quos repudiandae voluptatibus obcaecati aperiam ut accusantium voluptate odit laborum dolores perferendis temporibus cupiditate inventore unde amet, maiores repellendus! Blanditiis ipsum adipisci non in esse necessitatibus, quasi omnis eius sunt voluptas aliquam maxime? Nulla ut, eveniet expedita quis hic maiores quisquam voluptatum dolores dolore. Pariatur laborum quam nisi consequuntur ipsa magni ipsam obcaecati delectus, non, ea in iusto suscipit iste corporis quis voluptate. Sed dolorem numquam illum magni non error accusamus, omnis consequatur esse recusandae a accusantium consequuntur iure aliquid, blanditiis, amet aut quisquam sequi qui earum unde temporibus incidunt nobis! Distinctio, illum quos! Architecto repellendus quia facilis, natus eius aperiam sapiente distinctio minus molestiae nulla culpa enim magnam. Quidem veniam accusantium, iure maxime sequi, tenetur similique, quis voluptatem aut cumque quod? Ipsa debitis quis sunt illo doloribus eum voluptate quas reiciendis et, non tenetur nostrum minima quod veritatis rem architecto earum sint commodi deleniti tempore facilis velit itaque. Ullam eum dolorem, molestiae animi facilis mollitia ea inventore voluptatem illum quia. Animi quo expedita deleniti quisquam maiores. Temporibus consequatur saepe ullam, commodi nostrum dolorum, molestiae provident recusandae unde quia officiis itaque sunt aperiam laborum eaque repudiandae sit adipisci omnis pariatur eos laudantium est! Rerum voluptate qui maxime odit amet modi consequatur quod? Illum consectetur obcaecati iure rem aperiam, qui architecto totam perferendis eaque harum iusto necessitatibus culpa neque molestias in veniam officia similique impedit repellendus autem voluptatibus exercitationem? Molestias quas eius nisi, sed facilis eaque debitis voluptate in culpa nihil voluptas? Dolor, voluptates officiis! Odio nam voluptate ipsam eveniet perferendis, impedit eaque ratione aperiam, quaerat natus laudantium in? Ex, numquam suscipit quasi iste sunt optio consectetur accusamus blanditiis sapiente quaerat voluptas nemo porro consequatur culpa nulla architecto debitis tenetur voluptates, impedit labore voluptatem exercitationem iure laudantium? Quam architecto tempora consectetur, eaque dolorem veniam tempore molestias! Eligendi fugiat minima ab dignissimos necessitatibus perferendis quis quidem. Inventore quibusdam nobis voluptas nisi natus deserunt at, fugiat, quisquam similique, omnis aliquid excepturi ducimus. Earum corrupti assumenda enim illo similique minus sed architecto iste iure maiores perferendis perspiciatis excepturi fuga rerum, blanditiis et rem laboriosam quo molestiae tempore at, aliquam reiciendis. Reprehenderit libero explicabo repudiandae deleniti architecto atque ex temporibus blanditiis sequi magni odit quaerat, veritatis tempora veniam, quo fugiat nam voluptas? Temporibus autem sint expedita ut, error praesentium dolore quia iste placeat, dolores quidem ipsa itaque at veniam excepturi nulla totam sit. Minima aspernatur optio libero dolor perferendis quidem magnam id accusantium cupiditate eaque, unde itaque natus eum voluptatibus quam suscipit autem neque obcaecati distinctio vel mollitia dignissimos repellendus, aliquid ducimus! Reiciendis eum quae pariatur reprehenderit, voluptates totam earum odio optio quia iusto sit fuga dolorum nostrum adipisci, deleniti amet ab corrupti harum fugit. Temporibus mollitia voluptate alias beatae eaque officia cum omnis dolores accusantium, esse aliquid atque cumque?
                        </textarea>
                    </div>
                </ItemInfo>
            </ItemShow>
            <Reviews theme={themes}>
                <h3>Reviews</h3>
                <Reviewer theme={themes} />
                <Reviewer theme={themes} />
                <Reviewer theme={themes} />
            </Reviews>
        </ItemPage>
    )
}

export default ViewItem
