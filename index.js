const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/homepage'))
  .get('/recipetitAdd', (req, res) => res.render('pages/recipetitAdd'))
  .get('/recipetitCart', (req, res) => res.render('pages/recipetitCart'))
  .get('/recipetitCheckout', (req, res) => res.render('pages/recipetitCheckout'))
  .get('/recipetitConfirmation', (req, res) => res.render('pages/recipetitConfirmation'))
  .get('/recipetitEdit', (req, res) => res.render('pages/recipetitEdit'))
  .get('/recipetitReview', (req, res) => res.render('pages/recipetitReview'))
  .get('/recipetitReviewAdd', (req, res) => res.render('pages/recipetitReviewAdd'))
  .get('/recipetitView', (req, res) => res.render('pages/recipetitView'))
  .get('/recipetitViewRecipe', (req, res) => res.render('pages/recipetitViewRecipe'))
  .get('/recipetitEdit', (req, res) => res.render('pages/reviewEdit'))
  .get('/shoppingcart', (req, res) => res.render('pages/shoppingcart'))
  .get('/update_recipe', (req, res) => res.render('pages/update_recipe'))
  


  .get('/', function(req, res) {
    var recipes = [
        { name: 'Fake Cookies', cookTime: 3, temp: 350, ingredients: 'testing ingredients, sugar, water, oil', instructions: 'testing instructions, cook for, etc....' },
        { name: 'Fake Cookies2', cookTime: 3, temp: 350, ingredients: 'testing ingredients, sugar, water, oil', instructions: 'testing instructions, cook for, etc....' },
        { name: 'Fake Cookies3', cookTime: 3, temp: 350, ingredients: 'testing ingredients, sugar, water, oil', instructions: 'testing instructions, cook for, etc....' }
    ];

    res.render('pages/homepage', {
        recipes: recipes
       
    });
});

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))




// function calculateRate(req, res){
//  const weight = Number(request.query.weight);
//  const type = request.query.mail;

//  computeRate(weight, type);
// }

// function computeRate(weight, type){

// 	const price;
// 	if (weight <= 1 && type =="stamped"){
// 		price = .55;
// 	}
// 	else if (weight <= 2 && type =="stamped"){
// 		price = .70;
// 	}
// 	else if (weight <= 3 && type =="stamped"){
// 		price = .85;
// 	}
// 	else if (weight <3  && type =="stamped"){
// 		price = 1.00;
// 	}
// 	else if (weight <= 1 && type =="metered"){
// 		price = .50;
// 	}
// 	else if (weight <= 2 && type =="metered"){
// 		price = .65;
// 	}
// 	else if (weight <= 3 && type =="metered"){
// 		price = .80;
// 	}
// 	else if (weight >3 && type =="metered"){
// 		price = .95;
// 	}
// 	else if (weight <=1 && type =="flat"){
// 		price = 1.00;
// 	}
// 	else if (weight <=2 && type =="flat"){
// 		price = 1.15;
// 	}
// 	else if (weight <=3 && type =="flat"){
// 		price = 1.30;
// 	}
// 	else if (weight <=4 && type =="flat"){
// 		price = 1.45;
// 	}
// 	else if (weight <=5 && type =="flat"){
// 		price = 1.60;
// 	}
// 	else if (weight <=6 && type =="flat"){
// 		price = 1.75;
// 	}
// 	else if (weight <=7 && type =="flat"){
// 		price = 1.90;
// 	}
// 	else if (weight <=8 && type =="flat"){
// 		price = 2.05;
// 	}
// 	else if (weight <=9 && type =="flat"){
// 		price = 2.20;
// 	}
// 	else if (weight <=10 && type =="flat"){
// 		price = 2.35;
// 	}
// 	else if (weight <=11 && type =="flat"){
// 		price = 2.50;
// 	}
// 	else if (weight <=12 && type =="flat"){
// 		price = 12.65;
// 	}
// 	else if (weight <=13 && type =="flat"){
// 		price = 2.80;
// 	}
// 	else if (weight <=1 && type =="first_class"){
// 		price = 3.66;
// 	}
// 	else if (weight <=2 && type =="first_class"){
// 		price = 3.66;
// 	}
// 	else if (weight <=3 && type =="first_class"){
// 		price = 3.66;
// 	}
// 	else if (weight <=4 && type =="first_class"){
// 		price = 3.66;
// 	}
// 	else if (weight <=5 && type =="first_class"){
// 		price = 4.39;
// 	}
// 	else if (weight <=6 && type =="first_class"){
// 		price = 4.39;
// 	}
// 	else if (weight <=7 && type =="first_class"){
// 		price = 4.39;
// 	}
// 	else if (weight <=8 && type =="first_class"){
// 		price = 4.39;
// 	}
// 	else if (weight <=9 && type =="first_class"){
// 		price = 5.19;
// 	}
// 	else if (weight <=10 && type =="first_class"){
// 		price = 5.19;
// 	}
// 	else if (weight <=11 && type =="first_class"){
// 		price = 5.19;
// 	}
// 	else if (weight <=12 && type =="first_class"){
// 		price = 5.19;
// 	}
// 	else if (weight <=13 && type =="first_class"){
// 		price = 5.71;
// 	}


// }