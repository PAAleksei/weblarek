import './scss/styles.scss';
import { Products } from './components/models/products';
import { Basket } from "./components/models/basket";
import { Costumer } from "./components/models/costumer";
import { ApiData } from './components/models/apiData';
import { Api } from './components/base/Api';
import { API_URL } from './utils/constants';
import { apiProducts } from './utils/data';


const productsModel = new Products();
const basketModel = new Basket();
const costumerModel = new Costumer();
const api = new Api(API_URL)
const apiModel = new ApiData(api);

// Тестирование моделей данных

apiModel.getDataItems() // Использование класса из слоя коммуникации для получения данных с сервера.
.then((response) => {
    // Тестирование методов класса "Products":
    productsModel.setListOfProducts(response.items); // Сохранение массива товаров в поле объекта класса (через сервер).
    console.log('Метод получения массива товаров: ', productsModel.getListOfProducts());
})
.catch((err) => {
    console.log(err)
});

productsModel.setListOfProducts(apiProducts.items); // Сохранение массива товаров в поле объекта класса (через константу "apiProducts").
productsModel.setPickedProduct(apiProducts.items[1]); // Сохранение выбранного товара в поле объекта класса.
console.log('Метод получения выбранного товара: ', productsModel.getPickedProduct());

console.log('Метод получения товара по id: ', productsModel.getProductById(apiProducts.items[1].id));

// Тестирование методов класса "Basket":
basketModel.addProductInBasket(apiProducts.items[1]); // Сохранение выбранного товара в корзину.
basketModel.addProductInBasket(apiProducts.items[2]); // Сохранение выбранного товара в корзину.
basketModel.addProductInBasket(apiProducts.items[3]); // Сохранение выбранного товара в корзину.

console.log('Метод получения списка добавленных в корзину товаров: ', basketModel.getListOfPickedProducts());

basketModel.deleteProductFromBasket(apiProducts.items[1]); // Удаление выбранного товара из корзины.
console.log('Метод получения списка добавленных в корзину товаров (после удаления товара): ', basketModel.getListOfPickedProducts());

console.log('Метод получения суммы цен добавленных в корзину товаров: ', basketModel.getTotalCost());
console.log('Метод получения количества добавленных в корзину товаров: ', basketModel.getQuantityOfProducts());

console.log('Метод проверки наличия товара в корзине по его id: ', basketModel.checkProductById(basketModel.getListOfPickedProducts()[0].id));
console.log('Метод проверки наличия товара в корзине по его id: ', basketModel.checkProductById('123'));

basketModel.clearBasket(); // Метод очистки корзины от всех товаров.
console.log('Метод получения списка добавленных в корзину товаров (после очистки корзины): ', basketModel.getListOfPickedProducts());

// Тестирование методов класса "Costumer":
costumerModel.setPayment('card'); // Сохранение выбранного способа оплаты.
costumerModel.setEmail('yandex@com'); // Сохранение электронной почты.
costumerModel.setAddress('ул. Пушкина, дом Колотушкина'); // Сохранение адреса доставки.
costumerModel.setPhone('8 800 555 35 35'); // Сохранение контактного номера телефона.

console.log('Метод получения данных пользователя: ', costumerModel.getDataOfCostumer());
console.log('Метод проверки заполненности данных пользователя (проверка данных "адрес"): ', costumerModel.validateDataOfCostumer(costumerModel.getDataOfCostumer().address), );

costumerModel.clearDataOfCostumer() // Удаление всех данных пользователя.
console.log('Метод проверки заполненности данных пользователя (проверка данных "адрес" - адрес пустой): ', costumerModel.validateDataOfCostumer(costumerModel.getDataOfCostumer().address));