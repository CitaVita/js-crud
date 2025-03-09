// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

class Product {
  
}
// ================================================================


// router.get Створює нам один ентпоїнт

// ↙️ тут вводимо шлях (PATH) до сторінки
router.get('/product-create', function (req, res) {
  // res.render генерує нам HTML сторінку

  // ↙️ cюди вводимо назву файлу з сontainer
  res.render('product-index', {
    // вказуємо назву папки контейнера, в якій знаходяться наші стилі
    style: 'product-index',

    data: {},
  })
  // ↑↑ сюди вводимо JSON дані
})

  // ================================================================
  

// router.get Створює нам один ентпоїнт

router.post('/product-create', function (req, res) {
  const { name, price, description } = req.body

  const user = new User(name, price, description)
   
User.add(user)
 console.log(User.getList())
    res.render('product-success-info', {  
      style: 'product-success-info',
      info: 'User is created',
    })
  
  })
  
// ================================================================



// router.get Створює нам один ентпоїнт

router.get('/product-delete', function (req, res) {
  const { id } = req.query

  User.deleteById(Number(id))
   
    res.render('product-success-info', {  
      style: 'product-success-info',
      info: 'User is created',
    })
  
  })
  
// ================================================================

// router.get Створює нам один ентпоїнт

router.post('/product-update', function (req, res) {
  const { email, password, id } = req.body

  let result = false

  const user = User.getById(Number(id))
   

    if (user.verifyPassword(password)) {
      User.update(user, { email })
       result = true;
}
 
    res.render('product-success-info', {  
      style: 'product-success-info',
      info: result 
      ? 'Email is updated'
      : 'Mistake has happened',
    })
  
  })
  

  // ================================================================
  // Підключаємо роутер до бек-енду
module.exports = router
